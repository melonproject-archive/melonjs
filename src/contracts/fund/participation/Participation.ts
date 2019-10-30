import BigNumber from 'bignumber.js';
import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { ParticipationAbi } from '../../../abis/Participation.abi';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { toBigNumber } from '../../../utils/toBigNumber';
import { Deployment } from '../../../Transaction';
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
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(
      environment,
      typeof address === 'string' ? new environment.client.Contract(ParticipationAbi, address) : address,
    );
  }

  public static deploy(environment: Environment, bytecode: string, from: Address, args: ParticipationDeployArguments) {
    const contract = new environment.client.Contract(ParticipationAbi);
    const transaction = contract.deploy({
      data: bytecode,
      arguments: [args.hub, args.defaultAssets, args.registry],
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
  }

  /**
   * Gets a list of all historical investors.
   *
   * @param block The block number to execute the call on.
   */
  public async getHistoricalInvestors(block?: number) {
    const result = await this.makeCall<Address[]>('getHistoricalInvestors', undefined, block);
    return result;
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
  public async hasRequest(investor: Address, block?: number) {
    const result = await this.makeCall<boolean>('hasRequest', [investor], block);
    return result;
  }

  /**
   * Checks if an investor has a valid request.
   *
   * @param investor The address of the investor
   * @param block The block number to execute the call on.
   */
  public async hasValidRequest(investor: Address, block?: number) {
    const result = await this.makeCall<boolean>('hasValidRequest', [investor], block);
    return result;
  }

  /**
   * Checks if an investor has an expired request.
   *
   * @param investor The address of the investor
   * @param block The block number to execute the call on.
   */
  public async hasExpiredRequest(investor: Address, block?: number) {
    const result = await this.makeCall<boolean>('hasExpiredRequest', [investor], block);
    return result;
  }

  /**
   * Checks if an investor already has invested.
   *
   * @param investor The address of the investor
   * @param block The block number to execute the call on.
   */
  public async hasInvested(investor: Address, block?: number) {
    const result = await this.makeCall<boolean>('hasInvested', [investor], block);
    return result;
  }

  /**
   * Checks if an investement into the fund with a certain asset is allowed
   *
   * @param investor The address of the investor
   * @param block The block number to execute the call on.
   */
  public async canInvestWithAsset(asset: Address, block?: number) {
    const result = await this.makeCall<boolean>('investAllowed', [asset], block);
    return result;
  }
}

export interface Participation extends Spoke {}
applyMixins(Participation, [Spoke]);
