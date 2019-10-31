import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { RegistryAbi } from '../../abis/Registry.abi';
import { Environment } from '../../Environment';
import BigNumber from 'bignumber.js';
import { utf8ToHex, hexToBytes } from 'web3-utils';

export interface VersionInformation {
  exists: boolean;
  name: string;
}

interface AssetBaseInformation {
  name: string;
  symbol: string;
  url: string;
  standards: number[];
  sigs: string[];
}

export interface AssetCreation extends AssetBaseInformation {
  address: string;
  reserveMin: BigNumber;
}

export interface AssetInformation extends AssetBaseInformation {
  decimals: number;
  exists: boolean;
}

export class Registry extends Contract {
  public static readonly abi = RegistryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, owner: Address) {
    return super.createDeployment<Registry>(environment, bytecode, from, [owner]);
  }

  public getEngine(block?: number) {
    return this.makeCall<Address>('engine', undefined, block);
  }

  public getMlnToken(block?: number) {
    return this.makeCall<Address>('mlnToken', undefined, block);
  }

  public getNativeAsset(block?: number) {
    return this.makeCall<Address>('nativeAsset', undefined, block);
  }

  public getEthfinexWrapperRegistry(block?: number) {
    return this.makeCall<Address>('ethfinexWrapperRegistry', undefined, block);
  }

  public getPriceSource(block?: number) {
    return this.makeCall<Address>('priceSource', undefined, block);
  }

  public getRegisteredAssets(block?: number) {
    return this.makeCall<Address[]>('getRegisteredAssets', undefined, block);
  }

  public getRegisteredExchangeAdapters(block?: number) {
    return this.makeCall<Address[]>('getRegisteredExchangeAdapters', undefined, block);
  }

  public getRegisteredVersions(block?: number) {
    return this.makeCall<Address[]>('getRegisteredVersions', undefined, block);
  }

  public registerAsset(from: Address, args: AssetCreation) {
    return this.createTransaction('registerAsset', from, [
      args.address,
      args.name,
      args.symbol,
      args.url,
      args.reserveMin.toString(),
      args.standards,
      args.sigs.map(sig => hexToBytes(utf8ToHex(sig))),
    ]);
  }

  public getAssetInformation(assetAddress: Address, block?: number) {
    return this.makeCall<AssetInformation>('assetInformation', [assetAddress], block);
  }

  public getExchangeInformation(exAdapterAddress: Address, block?: number) {
    return this.makeCall<{
      exists: boolean;
      exchangeAddress: Address;
      takesCustody: boolean;
      sigs: string[];
    }>('exchangeInformation', [exAdapterAddress], block);
  }

  public getVersionInformation(versionAddress: Address, block?: number) {
    return this.makeCall<VersionInformation>('versionInformation', [versionAddress], block);
  }

  public registerFees(from: Address, feeAddresses: Address[]) {
    return this.createTransaction('registerFees', from, [feeAddresses]);
  }

  public isFeeRegistered(feeAddress: Address, block?: number) {
    return this.makeCall<boolean>('isFeeRegistered', [feeAddress], block);
  }
}
