import BigNumber from 'bignumber.js';
import abi from '../contracts/Version.abi.json';
import { Contract } from './Contract';
import { Environment } from './Environment';

export class Version extends Contract {
  public static forDeployment(environment: Environment) {
    const address = environment.getAddress('melonContracts.version');
    if (!address) {
      throw new Error('Missing deployment for version contract.');
    }

    return new this(environment, address);
  }

  constructor(environment: Environment, address?: string) {
    super(environment, new environment.client.Contract(abi as any, address));
  }

  public async getLastFundId(block?: number) {
    const result = await this.makeCall('getLastFundId', undefined, block);
    return new BigNumber(`${result}`);
  }
}
