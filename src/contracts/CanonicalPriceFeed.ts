import { Contract as EthContract } from 'web3-eth-contract';
import BigNumber from 'bignumber.js';
import { CanonicalPriceFeedAbi } from '../abis/CanonicalPriceFeed.abi';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';

export class CanonicalPriceFeed extends Contract {
  /**
   * Constructs a [CanonicalPriceFeed] instance.
   *
   * @param environment The environment to construct the [CanonicalPriceFeed] in.
   * @param address The address of the deployed [CanonicalPriceFeed] contract.
   */
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(
      environment,
      typeof address === 'string' ? new environment.client.Contract(CanonicalPriceFeedAbi, address) : address,
    );
  }

  /**
   * Gets the last update of the price feed.
   *
   * @param block The block number to execute the call on.
   */
  public async getLastUpdate(block?: number) {
    const result = await this.makeCall<string>('getLastUpdate', undefined, block);
    const timestamp = new BigNumber(result.toString()).multipliedBy(1000).toNumber();
    return new Date(timestamp);
  }
}
