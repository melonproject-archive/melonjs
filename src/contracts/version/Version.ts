import { VersionAbi } from '../../abis/Version.abi';
import { Contract } from '../../Contract';
import { toBigNumber } from '../../utils/toBigNumber';

export class Version extends Contract {
  public static readonly abi = VersionAbi;

  public async getLastFundId(block?: number) {
    const result = await this.makeCall<string>('getLastFundId', undefined, block);
    return toBigNumber(result);
  }
}
