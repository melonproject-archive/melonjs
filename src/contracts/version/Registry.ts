import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { Environment } from '../../Environment';
import { RegistryAbi } from '../../abis/Registry.abi';

export interface VersionInformation {
  exists: boolean;
  name: string;
}

export class Registry extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(RegistryAbi, address));
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

  public getAssetInformation(assetAddress: Address, block?: number) {
    return this.makeCall<{
      exists: boolean;
      name: string;
      symbol: string;
      decimals: number;
      url: string;
      standards: number[];
      sigs: string[];
    }>('assetInformation', [assetAddress], block);
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

  public isFeeRegistered(feeAddress: Address, block?: number) {
    return this.makeCall<boolean>('isFeeRegistered', [feeAddress], block);
  }
}
