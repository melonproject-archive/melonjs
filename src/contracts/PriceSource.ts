import BigNumber from 'bignumber.js';
import { PriceSourceInterfaceAbi } from '../abis/PriceSourceInterface';
import { Contract } from './Contract';
import { Environment } from './Environment';

export class PriceSource extends Contract {
  public static forDeployment(environment: Environment) {
    const address = environment.getAddress('melonContracts.priceSource');
    if (!address) {
      throw new Error('Missing deployment for price source contract.');
    }

    return new PriceSource(environment, address);
  }

  constructor(environment: Environment, address?: string) {
    super(environment, new environment.client.Contract(PriceSourceInterfaceAbi as any, address));
  }

  /**
   * Gets the last update of the price feed.
   *
   * @param {number} block The block number to execute the call on.
   * @returns {Promise<Date>} A promise resolving to the date of the last price feed update.
   */
  public async getLastUpdate(block?: number) {
    const result = await this.makeCall('getLastUpdate', undefined, block);
    const timestamp = new BigNumber(result.toString()).multipliedBy(1000).toNumber();
    return new Date(timestamp);
  }
}
