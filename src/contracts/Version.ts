import { VersionAbi } from '../abis/Version.abi';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { toBigNumber } from '../utils/toBigNumber';

export class Version extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(VersionAbi, address));
  }

  public async getLastFundId(block?: number) {
    const result = await this.makeCall<string>('getLastFundId', undefined, block);
    return toBigNumber(result);
  }
}
