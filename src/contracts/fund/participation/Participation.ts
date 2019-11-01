import BigNumber from 'bignumber.js';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { ParticipationAbi } from '../../../abis/Participation.abi';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { toBigNumber } from '../../../utils/toBigNumber';
import { toDate } from '../../../utils/toDate';

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
   * Gets a list of all historical investors.
   *
   * @param block The block number to execute the call on.
   */
  public async getRequest(investor: Address, block?: number) {
    const result = await this.makeCall<Request>('requests', [investor], block);

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
}

export interface Participation extends Spoke {}
applyMixins(Participation, [Spoke]);
