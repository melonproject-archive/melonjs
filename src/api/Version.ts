import BigNumber from 'bignumber.js';
import { Contract } from './Contract';
import { Environment } from './Environment';

export class Version extends Contract {
  constructor(environment: Environment, address?: string) {
    super(environment, '!Version', address);
  }

  public async getLastFundId(block?: BigNumber) {
    const result = await this.makeCall('getLastFundId', undefined, block);
    return new BigNumber(`${result}`);
  }
}
