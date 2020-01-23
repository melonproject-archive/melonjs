import { Contract } from '../../../Contract';
import { applyMixins } from '../../../utils/applyMixins';
import { IPolicy } from './IPolicy';
import { AddressList } from './AddressList';
import { AssetBlacklistAbi } from '../../../abis/AssetBlacklist.abi';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';

export class AssetBlacklist extends Contract {
  public static readonly abi = AssetBlacklistAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, members: Address[]) {
    return super.createDeployment<AssetBlacklist>(environment, bytecode, from, [members]);
  }
}

export interface AssetBlacklist extends IPolicy, AddressList {}
applyMixins(AssetBlacklist, [IPolicy, AddressList]);
