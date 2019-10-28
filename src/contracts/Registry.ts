import * as R from 'ramda';
import { Contract } from '../Contract';
import { Address } from '../Address';
import { Environment } from '../Environment';
import { RegistryAbi } from '../abis/Registry.abi';
import { Token } from './Token';
import { TokenInfo } from './AbstractToken';

interface AssetInfo extends TokenInfo {
  url?: string;
  standards: number[];
  sigs: string[];
}

interface ExchangeInfo {
  address: Address;
  adapter: Address;
  takesCustody: boolean;
  sigs: string[];
}

interface VersionInfo {
  address: Address;
  name: string;
}

export type RegistryInfo = {
  engine?: Address;
  priceSource?: Address;
  mlnToken?: TokenInfo;
  nativeAsset?: TokenInfo;
  ethfinextWrapperRegistry: Address;
  registeredAssets: {
    [address: string]: AssetInfo;
  };
  registeredExchanges: {
    [address: string]: ExchangeInfo;
  };
  registeredVersions: {
    [address: string]: VersionInfo;
  };
};

export class Registry extends Contract {
  public static forDeployment(environment: Environment) {
    const address = environment.getAddress('melonContracts.registry');
    if (!address) {
      throw new Error('Missing deployment for registry contract.');
    }

    return new this(environment, address);
  }

  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(RegistryAbi, address));
  }

  public async getEngine(block?: number) {
    return await this.makeCall<Address>('engine', undefined, block);
  }

  public async getMlnToken(block?: number) {
    const result = await this.makeCall<Address>('mlnToken', undefined, block);
    const token = Token.findDefinition(this.environment, result);
    return token;
  }

  public async getNativeAsset(block?: number) {
    const result = await this.makeCall<Address>('nativeAsset', undefined, block);
    const token = Token.findDefinition(this.environment, result);
    return token;
  }

  public async getEthfinexWrapperRegistry(block?: number) {
    return await this.makeCall<Address>('ethfinexWrapperRegistry', undefined, block);
  }

  public async getPriceSource(block?: number) {
    return await this.makeCall<Address>('priceSource', undefined, block);
  }

  public async getRegisteredAssets(block?: number) {
    return await this.makeCall<Address[]>('getRegisteredAssets', undefined, block);
  }

  public async getRegisteredExchangeAdapters(block?: number) {
    return await this.makeCall<Address[]>('getRegisteredExchangeAdapters', undefined, block);
  }

  public async getRegisteredVersions(block?: number) {
    return await this.makeCall<Address[]>('getRegisteredVersions', undefined, block);
  }

  public async getAssetInformation(assetAddress: Address, block?: number) {
    return await this.makeCall<{
      exists: boolean;
      name: string;
      symbol: string;
      decimals: number;
      url: string;
      standards: number[];
      sigs: string[];
    }>('assetInformation', [assetAddress], block);
  }

  public async getExchangeInformation(exAdapterAddress: Address, block?: number) {
    return await this.makeCall<{
      exists: boolean;
      exchangeAddress: Address;
      takesCustody: boolean;
      sigs: string[];
    }>('exchangeInformation', [exAdapterAddress], block);
  }

  public async getVersionInformation(versionAddress: Address, block?: number) {
    const result = await this.makeCall<{
      exists: boolean;
      name: string;
    }>('versionInformation', [versionAddress], block);
    const picked = R.pick(['exists', 'name'], result);
    return picked.exists && picked;
  }

  public async getRegistryInfomation(block?: number) {
    const mlnToken = await this.getMlnToken();
    const nativeAsset = await this.getNativeAsset();
    const engine = await this.getEngine();
    const ethfinextWrapperRegistry = await this.getEthfinexWrapperRegistry();
    const priceSource = await this.getPriceSource();

    const registryInformation: RegistryInfo = {
      engine,
      ethfinextWrapperRegistry,
      mlnToken,
      nativeAsset,
      priceSource,
      registeredAssets: {},
      registeredExchanges: {},
      registeredVersions: {},
    };

    const registeredAssets = await this.getRegisteredAssets();
    const registeredExAdapters = await this.getRegisteredExchangeAdapters();
    const registeredVersions = await this.getRegisteredVersions();

    for (const asset of registeredAssets) {
      const assetInfo = await this.getAssetInformation(asset);

      registryInformation.registeredAssets[asset.toLowerCase()] = {
        address: asset,
        decimals: assetInfo.decimals,
        name: assetInfo.name,
        sigs: assetInfo.sigs,
        standards: assetInfo.standards,
        symbol: assetInfo.symbol,
        url: assetInfo.url,
      };
    }

    for (const adapter of registeredExAdapters) {
      const exchangeInfo = await this.getExchangeInformation(adapter);

      registryInformation.registeredExchanges[adapter.toLowerCase()] = {
        adapter: adapter.toLowerCase(),
        address: exchangeInfo.exchangeAddress,
        sigs: exchangeInfo.sigs,
        takesCustody: exchangeInfo.takesCustody,
      };
    }

    for (const version of registeredVersions) {
      const versionInfo = await this.getVersionInformation(version);

      registryInformation.registeredVersions[version.toLowerCase()] = {
        address: version,
        name: versionInfo.name,
      };
    }

    return registryInformation as RegistryInfo;
  }

  public async isFeeRegistered(feeAddress: Address, block?: number) {
    return await this.makeCall<boolean>('isFeeRegistered', [feeAddress], block);
  }
}
