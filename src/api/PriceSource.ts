import BigNumber from 'bignumber.js';
import { Contract } from './Contract';
import { Environment } from './Environment';

export class PriceSource extends Contract {
  constructor(environment: Environment, address?: string) {
    super(environment, '!PriceSource', address);
  }

  public async getLastUpdate(block?: BigNumber) {
    const result = await this.makeCall('getLastUpdate', undefined, block);
    const timestamp = new BigNumber(result.toString()).multipliedBy(1000).toNumber();
    return new Date(timestamp);
  }
}
