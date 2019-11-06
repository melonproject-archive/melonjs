import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { RegistryAbi } from '../../abis/Registry.abi';
import { Environment } from '../../Environment';
import BigNumber from 'bignumber.js';
import { utf8ToHex, hexToBytes } from 'web3-utils';
import { ValidationError } from '../../errors/ValidationError';
import { toBigNumber } from '../../utils/toBigNumber';

export class ExchangeAdapterAlreadyRegistered extends ValidationError {
  constructor(message?: string) {
    super(message || 'Exchange adapter is already registered.');
  }
}

export class ExchangeAdaptersRegisteredOutOfBound extends ValidationError {
  constructor(
    public readonly numberOfAdapters: number,
    public readonly maxRegisteredAdapters: number,
    message?: string,
  ) {
    super(message || 'Number of registered exchange adapters exceeds the maxium.');
  }
}

export class AssetAlreadyRegistered extends ValidationError {
  constructor(message?: string) {
    super(message || 'Asset is already registered.');
  }
}

export class AssetsRegisteredOutOfBound extends ValidationError {
  constructor(public readonly numberOfAsset: number, public readonly maxRegisteredAssets: number, message?: string) {
    super(message || 'Number of registered assets exceeds the maximum.');
  }
}

export interface VersionInformation {
  exists: boolean;
  name: string;
}

export interface AssetBaseInformation {
  name: string;
  symbol: string;
  url: string;
  standards: number[];
  sigs: string[];
}

export interface AssetCreation extends AssetBaseInformation {
  address: Address;
  reserveMin: BigNumber;
}

export interface AssetInformation extends AssetBaseInformation {
  decimals: number;
  exists: boolean;
}

export interface ExchangeAdapterInformation {
  exchange: Address;
  adapter: Address;
  takesCustody: boolean;
  sigs: string[];
}

export class Registry extends Contract {
  public static readonly abi = RegistryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, owner: Address) {
    return super.createDeployment<Registry>(environment, bytecode, from, [owner]);
  }

  public async getMaxRegisteredEntities(block?: number) {
    const result = await this.makeCall<string>('MAX_REGISTERED_ENTITIES', undefined, block);
    return toBigNumber(result);
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

  public registerExchangeAdapter(from: Address, args: ExchangeAdapterInformation) {
    const method = 'registerExchangeAdapter';
    const methodArgs = [
      args.exchange,
      args.adapter,
      args.takesCustody,
      args.sigs.map(sig => hexToBytes(utf8ToHex(sig))),
    ];

    const validate = async () => {
      const exchangeInfo = await this.getExchangeInformation(args.adapter);
      if (exchangeInfo.exists) {
        throw new ExchangeAdapterAlreadyRegistered();
      }

      const adapters = await this.getRegisteredExchangeAdapters();
      const maxRegisteredEntities = await this.getMaxRegisteredEntities();
      if (maxRegisteredEntities.isLessThanOrEqualTo(adapters.length)) {
        throw new ExchangeAdaptersRegisteredOutOfBound(adapters.length, maxRegisteredEntities.toNumber());
      }
    };

    return this.createTransaction({ from, method, methodArgs, validate });
  }

  public getRegisteredExchangeAdapters(block?: number) {
    return this.makeCall<Address[]>('getRegisteredExchangeAdapters', undefined, block);
  }

  public isExchangeAdapterRegistered(adapter: Address, block?: number) {
    return this.makeCall<boolean>('exchangeAdapterIsRegistered', [adapter], block);
  }

  public getRegisteredVersions(block?: number) {
    return this.makeCall<Address[]>('getRegisteredVersions', undefined, block);
  }

  public registerAsset(from: Address, args: AssetCreation) {
    const method = 'registerAsset';
    const methodArgs = [
      args.address,
      args.name,
      args.symbol,
      args.url,
      args.reserveMin.toString(),
      args.standards,
      args.sigs.map(sig => hexToBytes(utf8ToHex(sig))),
    ];

    const validate = async () => {
      const assets = await this.getRegisteredAssets();
      const maxRegisteredEntities = await this.getMaxRegisteredEntities();
      if (maxRegisteredEntities.isLessThanOrEqualTo(assets.length)) {
        throw new AssetsRegisteredOutOfBound(assets.length, maxRegisteredEntities.toNumber());
      }

      const assetInfo = await this.getAssetInformation(args.address);
      if (assetInfo.exists) {
        throw new AssetAlreadyRegistered();
      }
    };

    return this.createTransaction({ from, method, methodArgs, validate });
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
    const method = 'registerFees';
    const methodArgs = [feeAddresses];
    return this.createTransaction({ from, method, methodArgs });
  }

  public isFeeRegistered(feeAddress: Address, block?: number) {
    return this.makeCall<boolean>('isFeeRegistered', [feeAddress], block);
  }
}
