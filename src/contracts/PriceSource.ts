import BigNumber from 'bignumber.js';
import { PriceSourceInterfaceAbi } from '../abis/PriceSourceInterface';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';

export class PriceSource extends Contract {
  /**
   * Creates a [PriceSource] instance for the address specified in the given environment's deployment.
   *
   * Automatically resolves the address by looking it up in the address book of the deployment.
   *
   * @param environment The environment for which to create the [PriceSource].
   */
  public static forDeployment(environment: Environment) {
    const address = environment.getAddress('melonContracts.priceSource');
    if (!address) {
      throw new Error('Missing deployment for price source contract.');
    }

    return new this(environment, address);
  }

  /**
   * Constructs a [PriceSource] instance.
   *
   * @param environment The environment to construct the [PriceSource] in.
   * @param address The address of the deployed [PriceSource] contract.
   */
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(PriceSourceInterfaceAbi, address));
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
