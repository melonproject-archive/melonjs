import { VersionAbi } from '../../abis/Version.abi';
import { Contract } from '../../Contract';
import { FundFactory } from '../factory/FundFactory';
import { applyMixins } from '../../utils/applyMixins';

export class Version extends Contract {
  public static readonly abi = VersionAbi;
}

export interface Version extends FundFactory {}
applyMixins(Version, [FundFactory]);
