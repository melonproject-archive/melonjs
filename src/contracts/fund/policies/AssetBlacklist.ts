import { Contract } from '../../../Contract';
import { applyMixins } from '../../../utils/applyMixins';
import { Policy } from './Policy';
import { AddressList } from './AddressList';
import { AssetBlacklistAbi } from '../../../abis/AssetBlacklist.abi';

export class AssetBlacklist extends Contract {
  public static readonly abi = AssetBlacklistAbi;
}

export interface AssetBlacklist extends Policy, AddressList {}
applyMixins(AssetBlacklist, [Policy, AddressList]);
