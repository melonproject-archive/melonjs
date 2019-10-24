import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { ParticipationAbi } from '../abis/Participation';
import BigNumber from 'bignumber.js';

export interface Request {
  investmentAsset: Address;
  investmentAmount: BigNumber;
  requestedShares: BigNumber;
  timestamp: Date;
}

export class Participation extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(ParticipationAbi, address));
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
      investmentAmount: new BigNumber(`${result.investmentAmount}`),
      requestedShares: new BigNumber(`${result.requestedShares}`),
      timestamp: new Date(parseInt(`${result.timestamp}`, 10) * 1000),
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
