import BigNumber from 'bignumber.js';
import { CanonicalPriceFeedAbi } from '../abis/CanonicalPriceFeed.abi';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';

export class CanonicalPriceFeed extends Contract {
  /**
   * Creates a [CanonicalPriceFeed] instance for the address specified in the given environment's deployment.
   *
   * Automatically resolves the address by looking it up in the address book of the deployment.
   *
   * @param environment The environment for which to create the [CanonicalPriceFeed].
   */
  public static forDeployment(environment: Environment) {
    const address = environment.getAddress('melonContracts.priceSource');
    if (!address) {
      throw new Error('Missing deployment for price source contract.');
    }

    return new this(environment, address);
  }

  /**
   * Constructs a [CanonicalPriceFeed] instance.
   *
   * @param environment The environment to construct the [CanonicalPriceFeed] in.
   * @param address The address of the deployed [CanonicalPriceFeed] contract.
   */
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(CanonicalPriceFeedAbi, address));
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
