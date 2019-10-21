import BigNumber from 'bignumber.js';
import abi from '../contracts/PriceSourceInterface.abi.json';
import { Contract } from './Contract';
import { Environment } from './Environment';

export class PriceSource extends Contract {
  public static forDeployment(environment: Environment) {
    const address = environment.getAddress('melonContracts.priceSource');
    if (!address) {
      throw new Error('Missing deployment for price source contract.');
    }

    return new this(environment, address);
  }

  constructor(environment: Environment, address?: string) {
    super(environment, new environment.client.Contract(abi as any, address));
  }

  public async getLastUpdate(block?: number) {
    const result = await this.makeCall('getLastUpdate', undefined, block);
    const timestamp = new BigNumber(result.toString()).multipliedBy(1000).toNumber();
    return new Date(timestamp);
  }
}
