import { VersionAbi } from '../../abis/Version.abi';
import { Contract } from '../../Contract';
import { toBigNumber } from '../../utils/toBigNumber';
import { FundFactory } from '../factory/FundFactory';
import { applyMixins } from '../../utils/applyMixins';

export class Version extends Contract {
  public static readonly abi = VersionAbi;

  public async getLastFundId(block?: number) {
    const result = await this.makeCall<string>('getLastFundId', undefined, block);
    return toBigNumber(result);
  }
}

export interface Version extends FundFactory {}
applyMixins(Version, [FundFactory]);
