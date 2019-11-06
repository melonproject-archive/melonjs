import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { RegistryAbi } from '../../abis/Registry.abi';
import { Environment } from '../../Environment';
import BigNumber from 'bignumber.js';
import { utf8ToHex, hexToBytes } from 'web3-utils';
import { ValidationError } from '../../errors/ValidationError';
import { toBigNumber } from '../../utils/toBigNumber';

export class RegisteredEntityError extends ValidationError {
  constructor(public readonly exists: boolean, message?: string) {
    super(message);
  }
}

export class OutOfBoundEntities extends ValidationError {
  constructor(public readonly numberOfEntities: number, public readonly maxNumberOfEntities: number, message?: string) {
    super(message);
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
      let message;

      const exchangeInfo = await this.getExchangeInformation(args.adapter);
      if (exchangeInfo.exists) {
        message = `Adapter already exists. Adapter exists: ${exchangeInfo.exists}`;
        throw new RegisteredEntityError(exchangeInfo.exists, message);
      }

      const adapters = await this.getRegisteredExchangeAdapters();
      const maxRegisteredEntities = await this.getMaxRegisteredEntities();
      if (maxRegisteredEntities.isLessThanOrEqualTo(adapters.length)) {
        message = `Exchange limit reached. Adapters: ${adapters.length}, Limit: ${maxRegisteredEntities.toNumber()}`;
        throw new OutOfBoundEntities(adapters.length, maxRegisteredEntities.toNumber(), message);
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
      let message;

      const assets = await this.getRegisteredAssets();
      const maxRegisteredEntities = await this.getMaxRegisteredEntities();
      if (maxRegisteredEntities.isLessThanOrEqualTo(assets.length)) {
        message = `Number of registered assets reached limit. Number of assets: ${assets.length}, Litmit: ${maxRegisteredEntities}`;
        throw new OutOfBoundEntities(assets.length, maxRegisteredEntities.toNumber(), message);
      }

      const assetInfo = await this.getAssetInformation(args.address);
      if (assetInfo.exists) {
        message = `The asset is already registered. Asset exists: ${assetInfo.exists}`;
        throw new RegisteredEntityError(assetInfo.exists, message);
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
