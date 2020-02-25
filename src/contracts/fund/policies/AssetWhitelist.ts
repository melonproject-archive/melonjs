import { Contract } from '../../../Contract';
import { applyMixins } from '../../../utils/applyMixins';
import { IPolicy } from './IPolicy';
import { AddressList, IsNotMemberError } from './AddressList';
import { AssetWhitelistAbi } from '../../../abis/AssetWhitelist.abi';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';

export class AssetWhitelist extends Contract {
  public static readonly abi = AssetWhitelistAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, members: Address[]) {
    return super.createDeployment<AssetWhitelist>(environment, bytecode, from, [members]);
  }

  /**
   * Removes an asset from an AssetWhitelist.
   *
   * @param from The address of the sender
   * @param asset The asset address to be removed from the AssetWhitelist
   */
  public removeFromWhitelist(from: Address, asset: Address) {
    const validate = async () => {
      if (!this.isMember(asset)) {
        throw new IsNotMemberError(asset);
      }
    };

    return this.createTransaction({ from, method: 'removeFromWhitelist', args: [asset], validate });
  }

  /**
   * Gets the index of an asset.
   *
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public async getAssetIndex(asset: Address, block?: number) {
    const result = await this.makeCall<string>('getAssetIndex', [asset], block);
    return parseInt(result, 10);
  }
}

export interface AssetWhitelist extends IPolicy, AddressList {}
applyMixins(AssetWhitelist, [IPolicy, AddressList]);
