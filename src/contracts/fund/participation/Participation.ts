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
import { ValidationError } from '../../../errors/ValidationError';
import { Hub } from '../hub/Hub';
import { HubIsShutdownError } from '../../../errors/HubIsShutdownError';
import { SpokeNotInitializedError } from '../../../errors/SpokeNotInitializedError';
import { PriceSourceInterface } from '../../prices/PriceSourceInterface';
import { Accounting } from '../accounting/Accounting';
import { Shares } from '../shares/Shares';
import { Registry } from '../../version/Registry';
import { sameAddress } from '../../../utils/sameAddress';
import { keccak256, padLeft } from 'web3-utils';
import { functionSignature } from '../../../utils/functionSignature';
import { PolicyManager } from '../policies/PolicyManager';
import { Policy } from '../policies/Policy';
import { zeroAddress } from '../../../utils/zeroAddress';
import { zeroBigNumber } from '../../../utils/zeroBigNumber';

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

export class InvestmentAssetNotAllowedError extends ValidationError {
  public readonly name = 'InvestmentAssetNotAllowedError';

  constructor(public readonly asset: Address, message: string = 'Investment not allowed in this asset.') {
    super(message);
  }
}

export class AssetIsNotRegisteredError extends ValidationError {
  public readonly name = 'AssetIsNotRegisteredError';

  constructor(public readonly asset: Address, message: string = 'This asset is not registered with the registry.') {
    super(message);
  }
}

export class InvestmentRequestExistsError extends ValidationError {
  public readonly name = 'InvestmentRequestExistsError';

  constructor(public readonly request: Request, message: string = 'Only one request can exist at a time.') {
    super(message);
  }
}

export class NoInvestmentRequestError extends ValidationError {
  public readonly name = 'NoInvestmentRequestError';

  constructor(public readonly from: Address, message: string = 'No investment request found.') {
    super(message);
  }
}

export class CancelConditionsNotMetError extends ValidationError {
  public readonly name = 'CancelConditionsNotMetError';

  constructor(public readonly from: Address, message: string = 'No cancellation condition was met.') {
    super(message);
  }
}

export class PriceNotValidError extends ValidationError {
  public readonly name = 'PriceNotValidError';

  constructor(public readonly asset: Address, message: string = 'Price not valid.') {
    super(message);
  }
}

export class InvestmentAmountTooLowError extends ValidationError {
  public readonly name = 'InvestmentAmountTooLowError';

  constructor(
    public readonly amount: BigNumber,
    message: string = 'Investment amount too low for the requested number of shares.',
  ) {
    super(message);
  }
}

export class NoSharesToRedeemError extends ValidationError {
  public readonly name = 'NoSharesToRedeemError';

  constructor(message: string = 'No shares to redeem.') {
    super(message);
  }
}

export class NotEnoughSharesToRedeemError extends ValidationError {
  public readonly name = 'NotEnoughSharesToRedeemError';

  constructor(
    public readonly availableShares: BigNumber,
    message: string = 'Not enough shares to redeem requested amount.',
  ) {
    super(message);
  }
}

export class PreInvestmentPolicyValidationError extends ValidationError {
  public readonly name = 'PreInvestmentPolicyValidationError';

  constructor(
    public readonly signature: string,
    message: string = 'Investment cannot be executed because risk management policies or compliance policies would be violated.',
  ) {
    super(message);
  }
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
    const validate = async () => {};

    return this.createTransaction({ from, method: 'disableInvestment', args: [assets], validate });
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

      if (!(await this.canInvestWithAsset(investmentAsset))) {
        throw new InvestmentAssetNotAllowedError(investmentAsset);
      }

      const request = await this.getRequest(from);
      if (typeof request !== 'undefined') {
        throw new InvestmentRequestExistsError(request);
      }

      const encodedSignature = keccak256(functionSignature(ParticipationAbi, 'requestInvestment')).substr(0, 10);
      const policyManagerAddress = (await this.getRoutes()).policyManager;
      const policyManager = new PolicyManager(this.environment, policyManagerAddress);
      const policies = await policyManager.getPoliciesBySignature(encodedSignature);
      const prePolicies = policies.pre;

      const rulesRespected = await Promise.all(
        prePolicies.map(policyAddress => {
          const policy = new Policy(this.environment, policyAddress);
          return policy.rule({
            signature: encodedSignature,
            addresses: [from, zeroAddress, zeroAddress, investmentAsset, zeroAddress],
            values: [zeroBigNumber, zeroBigNumber, zeroBigNumber],
            identifier: padLeft('0x0', 64),
          });
        }),
      );
      if (rulesRespected.some(respected => respected === false)) {
        throw new PreInvestmentPolicyValidationError(encodedSignature);
      }
    };

    const args = [sharesAmount.toFixed(0), investmentAmount.toFixed(0), investmentAsset];
    return this.createTransaction({ from, method: 'requestInvestment', args, validate, amgu, incentive });
  }

  /**
   * Execute investment request for
   *
   * @param from The address of the sender.
   * @param forWhom The address of the investor
   */
  public executeRequestFor(from: Address, forWhom: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      if (!(await this.hasRequest(from))) {
        throw new NoInvestmentRequestError(from);
      }

      const request = await this.getRequest(from);
      const priceSource = new PriceSourceInterface(this.environment, await this.getPriceSource());
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
      args: [forWhom],
      validate,
      amgu,
    });
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
   * Cancel investment request
   *
   * @param from The address of the sender.
   */
  public cancelRequest(from: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = () => this.validateCancelRequest(from);

    return this.createTransaction({
      from,
      method: 'cancelRequest',
      args: undefined,
      validate,
      amgu,
    });
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
   * @param from The address of the sender.
   */
  private validateCancelRequest = async (from: Address, block?: number) => {
    if (!(await this.hasRequest(from, block))) {
      throw new NoInvestmentRequestError(from);
    }

    const request = await this.getRequest(from, block);
    const hub = new Hub(this.environment, await this.getHub(block));
    const priceSource = new PriceSourceInterface(this.environment, await this.getPriceSource(block));
    if (
      !(
        !(await priceSource.hasValidPrice(request.investmentAsset, block)) ||
        (await this.hasExpiredRequest(from, block)) ||
        (await hub.isShutDown(block))
      )
    ) {
      throw new CancelConditionsNotMetError(from);
    }
  };
}

export interface Participation extends Spoke, AmguConsumer {}
applyMixins(Participation, [Spoke, AmguConsumer]);
