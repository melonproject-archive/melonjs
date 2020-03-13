import BigNumber from 'bignumber.js';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { ParticipationAbi } from '../../../abis/Participation.abi';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { toBigNumber } from '../../../utils/toBigNumber';
import { toDate } from '../../../utils/toDate';
import { AmguConsumer } from '../../engine/AmguConsumer';
import { Hub } from '../hub/Hub';
import { HubIsShutdownError } from '../../../errors/HubIsShutdownError';
import { SpokeNotInitializedError } from '../../../errors/SpokeNotInitializedError';
import { IPriceSource } from '../../prices/IPriceSource';
import { Accounting } from '../accounting/Accounting';
import { Shares } from '../shares/Shares';
import { Registry } from '../../version/Registry';
import { sameAddress } from '../../../utils/sameAddress';
import { keccak256, padLeft } from 'web3-utils';
import { functionSignature } from '../../../utils/functionSignature';
import { PolicyManager } from '../policies/PolicyManager';
import { PolicyArgs } from '../policies/IPolicy';
import { zeroAddress } from '../../../utils/zeroAddress';
import { zeroBigNumber } from '../../../utils/zeroBigNumber';
import { OutOfBalanceError } from '../../../errors/OutOfBalanceError';
import { InsufficientAllowanceError } from '../../../errors/InsufficientAllowanceError';
import { ERC20WithFields } from '../../dependencies/token/ERC20WithFields';
import {
  AssetIsNotRegisteredError,
  InvestmentPolicyValidationError,
  InvestmentAssetNotAllowedError,
  InvestmentRequestExistsError,
  NoInvestmentRequestError,
  PriceNotValidError,
  InvestmentAmountTooLowError,
  NoSharesToRedeemError,
  NotEnoughSharesToRedeemError,
  CancelConditionsNotMetError,
} from './Participation.errors';

export interface Request {
  investmentAsset: Address;
  investmentAmount: BigNumber;
  requestedShares: BigNumber;
  timestamp: Date;
}

export interface ParticipationDeployArguments {
  hub: Address;
  defaultAssets: Address[];
  registry: Address;
}

export class Participation extends Contract {
  public static readonly abi = ParticipationAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: ParticipationDeployArguments) {
    return super.createDeployment<Participation>(environment, bytecode, from, [
      args.hub,
      args.defaultAssets,
      args.registry,
    ]);
  }

  /**
   * Gets a list of all historical investors.
   *
   * @param block The block number to execute the call on.
   */
  public getHistoricalInvestors(block?: number) {
    return this.makeCall<Address[]>('getHistoricalInvestors', undefined, block);
  }

  /**
   * Enable investment for a list of assets
   *
   * @param from The address of the sender.
   * @param assets The addresses of the assets
   */
  public enableInvestment(from: Address, assets: Address[]) {
    const validate = async () => {
      const registry = new Registry(this.environment, await this.getRegistry());
      const registeredAssets = await registry.getRegisteredAssets();

      assets.map(asset => {
        const assetIsRegistered = registeredAssets.some(registered => sameAddress(registered, asset));
        if (!assetIsRegistered) {
          throw new AssetIsNotRegisteredError(asset);
        }
      });
    };

    return this.createTransaction({ from, method: 'enableInvestment', args: [assets], validate });
  }

  /**
   * Disable investment for a list of assets
   *
   * @param from The address of the sender.
   * @param assets The addresses of the assets
   */
  public disableInvestment(from: Address, assets: Address[]) {
    return this.createTransaction({ from, method: 'disableInvestment', args: [assets] });
  }

  /**
   * Gets the details of a request.
   *
   * @param investor The address of the investor
   * @param block The block number to execute the call on.
   */
  public async getRequest(investor: Address, block?: number) {
    const result = await this.makeCall<Request>('requests', [investor], block);
    if (!result || `${result.timestamp}` === '0') {
      return undefined;
    }

    return {
      investmentAsset: result.investmentAsset,
      investmentAmount: toBigNumber(result.investmentAmount),
      requestedShares: toBigNumber(result.requestedShares),
      timestamp: toDate(result.timestamp),
    } as Request;
  }

  /**
   * Checks if an investor has a request.
   *
   * @param investor The address of the investor
   * @param block The block number to execute the call on.
   */
  public hasRequest(investor: Address, block?: number) {
    return this.makeCall<boolean>('hasRequest', [investor], block);
  }

  /**
   * Checks if an investor has a valid request.
   *
   * @param investor The address of the investor
   * @param block The block number to execute the call on.
   */
  public hasValidRequest(investor: Address, block?: number) {
    return this.makeCall<boolean>('hasValidRequest', [investor], block);
  }

  /**
   * Checks if an investor has an expired request.
   *
   * @param investor The address of the investor
   * @param block The block number to execute the call on.
   */
  public hasExpiredRequest(investor: Address, block?: number) {
    return this.makeCall<boolean>('hasExpiredRequest', [investor], block);
  }

  /**
   * Checks if an investor already has invested.
   *
   * @param investor The address of the investor
   * @param block The block number to execute the call on.
   */
  public hasInvested(investor: Address, block?: number) {
    return this.makeCall<boolean>('hasInvested', [investor], block);
  }

  /**
   * Checks if an investement into the fund with a certain asset is allowed
   *
   * @param investor The address of the investor
   * @param block The block number to execute the call on.
   */
  public canInvestWithAsset(asset: Address, block?: number) {
    return this.makeCall<boolean>('investAllowed', [asset], block);
  }

  /**
   * Request investment.
   *
   * @param from The address of the sender.
   * @param sharesAmount The number of shares requested
   * @param investmentAmount The amount to be invested
   * @param investmentAsset The address of the investment asset
   */
  public requestInvestment(
    from: Address,
    sharesAmount: BigNumber,
    investmentAmount: BigNumber,
    investmentAsset: Address,
  ) {
    const amgu = this.calculateAmgu.bind(this);
    const incentive = () => Promise.resolve(new BigNumber(10).exponentiatedBy(16));

    const validate = async () => {
      const initialized = await this.isInitialized();
      if (!initialized) {
        throw new SpokeNotInitializedError(this.contract.address);
      }

      const hub = new Hub(this.environment, await this.getHub());
      if (await hub.isShutDown()) {
        throw new HubIsShutdownError(hub.contract.address);
      }

      const encodedSignature = keccak256(functionSignature(ParticipationAbi, 'requestInvestment')).substr(0, 10);
      const policyManagerAddress = (await this.getRoutes()).policyManager;
      const policyManager = new PolicyManager(this.environment, policyManagerAddress);

      const validationArgs: PolicyArgs = {
        signature: encodedSignature,
        addresses: [from, zeroAddress, zeroAddress, investmentAsset, zeroAddress],
        values: [zeroBigNumber, zeroBigNumber, zeroBigNumber],
        identifier: padLeft('0x0', 64),
      };

      try {
        await Promise.all([policyManager.preValidate(validationArgs), policyManager.postValidate(validationArgs)]);
      } catch (e) {
        throw new InvestmentPolicyValidationError(encodedSignature);
      }

      if (!(await this.canInvestWithAsset(investmentAsset))) {
        throw new InvestmentAssetNotAllowedError(investmentAsset);
      }

      const request = await this.getRequest(from);
      if (typeof request !== 'undefined') {
        throw new InvestmentRequestExistsError(request);
      }

      const token = new ERC20WithFields(this.environment, investmentAsset);
      const balance = await token.getBalanceOf(from);
      if (balance.isLessThan(investmentAmount)) {
        throw new OutOfBalanceError(investmentAmount, balance);
      }

      const allowance = await token.getAllowance(from, this.contract.address);
      if (allowance.isLessThan(investmentAmount)) {
        throw new InsufficientAllowanceError(investmentAmount, allowance);
      }
    };

    const args = [sharesAmount.toFixed(0), investmentAmount.toFixed(0), investmentAsset];
    return this.createTransaction({ from, method: 'requestInvestment', args, validate, amgu, incentive });
  }

  /**
   * Execute investment request for an investor
   *
   * @param from The address of the sender.
   * @param investor The address of the investor
   */
  public executeRequestFor(from: Address, investor: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      if (!(await this.hasRequest(investor))) {
        throw new NoInvestmentRequestError(investor);
      }

      const request = await this.getRequest(investor);
      const priceSource = new IPriceSource(this.environment, await this.getPriceSource());
      if (!(await priceSource.hasValidPrice(request.investmentAsset))) {
        throw new PriceNotValidError(request.investmentAsset);
      }

      const accounting = new Accounting(this.environment, (await this.getRoutes()).accounting);
      const totalShareCostInInvestmentAsset = await accounting.getShareCostInAsset(
        request.requestedShares,
        request.investmentAsset,
      );
      if (totalShareCostInInvestmentAsset.isGreaterThan(request.investmentAmount)) {
        throw new InvestmentAmountTooLowError(request.investmentAmount);
      }
    };

    return this.createTransaction({
      from,
      method: 'executeRequestFor',
      args: [investor],
      validate,
      amgu,
    });
  }

  /**
   * Execute investment request
   *
   * @param from The address of the sender.
   */
  public executeRequest(from: Address) {
    return this.executeRequestFor(from, from);
  }

  /**
   * Check if a request can be cancelled
   *
   * @param from The address of the sender.
   */
  public async canCancelRequest(from: Address, block?: number) {
    try {
      await this.validateCancelRequest(from, block);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Cancel investment request for investor
   *
   * @param from The address of the sender.
   * @param investor The address of the investor
   *
   */
  public cancelRequestFor(from: Address, investor: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = () => this.validateCancelRequest(investor);

    return this.createTransaction({
      from,
      method: 'cancelRequestFor',
      args: [investor],
      validate,
      amgu,
    });
  }

  /**
   * Cancel investment request
   *
   * @param from The address of the sender.
   *
   */
  public cancelRequest(from: Address) {
    return this.cancelRequestFor(from, from);
  }

  /**
   * Redeem all shares
   *
   * @param from The address of the sender.
   */
  public redeem(from: Address) {
    const validate = async () => {
      const shares = new Shares(this.environment, (await this.getRoutes()).shares);
      const ownedShares = await shares.getBalanceOf(from);
      if (ownedShares.isZero()) {
        throw new NoSharesToRedeemError();
      }
    };

    return this.createTransaction({
      from,
      method: 'redeem',
      args: undefined,
      validate,
    });
  }

  /**
   * Redeem a quantity of shares
   *
   * @param from The address of the sender.
   * @param shareQuantity The quantity of shares to redeem
   */
  public redeemQuantity(from: Address, shareQuantity: BigNumber) {
    const validate = async () => {
      const shares = new Shares(this.environment, (await this.getRoutes()).shares);
      const ownedShares = await shares.getBalanceOf(from);
      if (ownedShares.isZero()) {
        throw new NoSharesToRedeemError(from);
      }

      if (ownedShares.isLessThan(shareQuantity)) {
        throw new NotEnoughSharesToRedeemError(ownedShares);
      }
    };

    return this.createTransaction({
      from,
      method: 'redeemQuantity',
      args: [shareQuantity.toFixed(0)],
      validate,
    });
  }

  /**
   * Validate if a request can be cancelled
   *
   * @param investor The address of the investor.
   */
  private validateCancelRequest = async (investor: Address, block?: number) => {
    if (!(await this.hasRequest(investor, block))) {
      throw new NoInvestmentRequestError(investor);
    }

    const request = await this.getRequest(investor, block);
    const hub = new Hub(this.environment, await this.getHub(block));
    const priceSource = new IPriceSource(this.environment, await this.getPriceSource(block));
    if (
      !(
        !(await priceSource.hasValidPrice(request.investmentAsset, block)) ||
        (await this.hasExpiredRequest(investor, block)) ||
        (await hub.isShutDown(block))
      )
    ) {
      throw new CancelConditionsNotMetError(investor);
    }
  };
}

export interface Participation extends Spoke, AmguConsumer {}
applyMixins(Participation, [Spoke, AmguConsumer]);
