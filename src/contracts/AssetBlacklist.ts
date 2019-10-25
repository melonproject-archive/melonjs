import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { applyMixins } from '../utils/applyMixins';
import { Policy } from './Policy';
import { AddressList } from './AddressList';
import { AssetBlacklistAbi } from '../abis/AssetBlacklist.abi';

export class AssetBlacklist extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(AssetBlacklistAbi, address));
  }
}

export interface AssetBlacklist extends Policy, AddressList {}
applyMixins(AssetBlacklist, [Policy, AddressList]);
