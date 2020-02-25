import { Contract } from '../../../Contract';
import { applyMixins } from '../../../utils/applyMixins';
import { IPolicy } from './IPolicy';
import { AddressList, IsAlreadyMemberError } from './AddressList';
import { AssetBlacklistAbi } from '../../../abis/AssetBlacklist.abi';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';

export class AssetBlacklist extends Contract {
  public static readonly abi = AssetBlacklistAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, members: Address[]) {
    return super.createDeployment<AssetBlacklist>(environment, bytecode, from, [members]);
  }

  /**
   * Adds a list of assets to an AssetBlacklist.
   *
   * @param from The address of the sender
   * @param asset The address of the asset to be added to the AssetBlacklist
   */
  public addToBlacklist(from: Address, asset: Address) {
    const validate = async () => {
      if (await this.isMember(asset)) {
        throw new IsAlreadyMemberError(asset);
      }
    };

    return this.createTransaction({ from, method: 'addToBlacklist', args: [asset], validate });
  }
}

export interface AssetBlacklist extends IPolicy, AddressList {}
applyMixins(AssetBlacklist, [IPolicy, AddressList]);
