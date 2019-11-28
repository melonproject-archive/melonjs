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
    };

    const args = [sharesAmount.toFixed(), investmentAmount.toFixed(), investmentAsset];
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
   * Cancel investment request
   *
   * @param from The address of the sender.
   */
  public cancelRequest(from: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      if (!(await this.hasRequest(from))) {
        throw new NoInvestmentRequestError(from);
      }

      const request = await this.getRequest(from);
      const hub = new Hub(this.environment, await this.getHub());
      const priceSource = new PriceSourceInterface(this.environment, await this.getPriceSource());
      if (
        !(
          !(await priceSource.hasValidPrice(request.investmentAsset)) ||
          (await this.hasExpiredRequest(from)) ||
          (await hub.isShutDown())
        )
      ) {
        throw new CancelConditionsNotMetError(from);
      }
    };

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
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {};

    return this.createTransaction({
      from,
      method: 'redeem',
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
  public redeemQuantity(from: Address, shareQuantity: BigNumber) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {};

    return this.createTransaction({
      from,
      method: 'redeemQuantity',
      args: [shareQuantity.toString()],
      validate,
      amgu,
    });
  }
}

export interface Participation extends Spoke, AmguConsumer {}
applyMixins(Participation, [Spoke, AmguConsumer]);
