import BigNumber from 'bignumber.js';
import { VersionAbi } from '../abis/Version';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';

export class Version extends Contract {
  public static forDeployment(environment: Environment) {
    const address = environment.getAddress('melonContracts.version');
    if (!address) {
      throw new Error('Missing deployment for version contract.');
    }

    return new this(environment, address);
  }

  constructor(environment: Environment, address?: Address) {
    super(environment, new environment.client.Contract(VersionAbi, address));
  }

  public async getLastFundId(block?: number) {
    const result = await this.makeCall('getLastFundId', undefined, block);
    return new BigNumber(`${result}`);
  }
}
