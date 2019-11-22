import BigNumber from 'bignumber.js';
import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { RegistryAbi } from '../../abis/Registry.abi';
import { Environment } from '../../Environment';
import { utf8ToHex, hexToBytes } from 'web3-utils';
import { ValidationError } from '../../errors/ValidationError';
import { toBigNumber } from '../../utils/toBigNumber';
import { stringToBytes } from '../../utils/tests/stringToBytes';

export class ExchangeAdapterAlreadyRegisteredError extends ValidationError {
  public name = 'ExchangeAdapterAlreadyRegisteredError';

  constructor(message: string = 'Exchange adapter is already registered.') {
    super(message);
  }
}

export class ExchangeAdaptersRegisteredOutOfBoundsError extends ValidationError {
  public name = 'ExchangeAdaptersRegisteredOutOfBoundsError';

  constructor(
    public readonly numberOfAdapters: number,
    public readonly maxRegisteredAdapters: number,
    message: string = 'Number of registered exchange adapters exceeds the maxium.',
  ) {
    super(message);
  }
}

export class VersionAlreadyRegisteredError extends ValidationError {
  public name = 'VersionAlreadyRegisteredError';

  constructor(message: string = 'Version is already registered.') {
    super(message);
  }
}

export class VersionNameAlreadyExistsError extends ValidationError {
  public name = 'VersionNameAlreadyExistsError';

  constructor(message: string = 'Version name already exists.') {
    super(message);
  }
}

export class AssetAlreadyRegisteredError extends ValidationError {
  public name = 'AssetAlreadyRegisteredError';

  constructor(message: string = 'Asset is already registered.') {
    super(message);
  }
}

export class AssetsRegisteredOutOfBoundsError extends ValidationError {
  public name = 'AssetsRegisteredOutOfBoundsError';

  constructor(
    public readonly numberOfAsset: number,
    public readonly maxRegisteredAssets: number,
    message: string = 'Number of registered assets exceeds the maximum.',
  ) {
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

export interface ExchangeInformation {
  exists: boolean;
  exchangeAddress: Address;
  takesCustody: boolean;
  sigs: string[];
}

export interface RegisterExchangeAdapterArgs extends Omit<ExchangeInformation, 'exists'> {
  adapterAddress: Address;
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

  /**
   * Sets the MLN token
   *
   * @param from The address of the sender
   * @param asset The address of the MLN token
   */
  public setMlnToken(from: Address, token: Address) {
    return this.createTransaction({ from, method: 'setMlnToken', args: [token] });
  }

  public getMlnToken(block?: number) {
    return this.makeCall<Address>('mlnToken', undefined, block);
  }

  /**
   * Sets the native asset
   *
   * @param from The address of the sender
   * @param asset The address of the native asset
   */
  public setNativeAsset(from: Address, asset: Address) {
    return this.createTransaction({ from, method: 'setNativeAsset', args: [asset] });
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

  public registerExchangeAdapter(from: Address, registerArgs: RegisterExchangeAdapterArgs) {
    const method = 'registerExchangeAdapter';
    const args = [
      registerArgs.exchangeAddress,
      registerArgs.adapterAddress,
      registerArgs.takesCustody,
      registerArgs.sigs.map(sig => hexToBytes(utf8ToHex(sig))),
    ];

    const validate = async () => {
      const info = await this.getExchangeInformation(registerArgs.adapterAddress);
      if (info.exists) {
        throw new ExchangeAdapterAlreadyRegisteredError();
      }

      const [adapters, max] = await Promise.all([
        this.getRegisteredExchangeAdapters(),
        this.getMaxRegisteredEntities(),
      ]);

      if (max.isLessThanOrEqualTo(adapters.length)) {
        throw new ExchangeAdaptersRegisteredOutOfBoundsError(adapters.length, max.toNumber());
      }
    };

    return this.createTransaction({ from, method, args, validate });
  }

  public getRegisteredExchangeAdapters(block?: number) {
    return this.makeCall<Address[]>('getRegisteredExchangeAdapters', undefined, block);
  }

  public isExchangeAdapterRegistered(adapter: Address, block?: number) {
    return this.makeCall<boolean>('exchangeAdapterIsRegistered', [adapter], block);
  }

  /**
   * Register a version
   *
   * @param from The address of the sender
   * @param versionAddress The address of the version
   * @param name The name of the version
   */
  public registerVersion(from: Address, versionAddress: Address, name: string) {
    const method = 'registerVersion';
    const args = [versionAddress, stringToBytes(name, 32)];

    const validate = async () => {
      const versionInformation = await this.getVersionInformation(versionAddress);

      if (versionInformation.exists) {
        throw new VersionAlreadyRegisteredError();
      }

      const versionNameExists = await this.versionNameExists(name);
      if (versionNameExists) {
        throw new VersionNameAlreadyExistsError();
      }
    };

    return this.createTransaction({ from, method, args, validate });
  }

  public getRegisteredVersions(block?: number) {
    return this.makeCall<Address[]>('getRegisteredVersions', undefined, block);
  }

  public registerAsset(from: Address, registerArgs: AssetCreation) {
    const method = 'registerAsset';
    const args = [
      registerArgs.address,
      registerArgs.name,
      registerArgs.symbol,
      registerArgs.url,
      registerArgs.reserveMin.toFixed(),
      registerArgs.standards,
      registerArgs.sigs.map(sig => hexToBytes(utf8ToHex(sig))),
    ];

    const validate = async () => {
      const [assets, max] = await Promise.all([this.getRegisteredAssets(), this.getMaxRegisteredEntities()]);

      if (max.isLessThanOrEqualTo(assets.length)) {
        throw new AssetsRegisteredOutOfBoundsError(assets.length, max.toNumber());
      }

      const info = await this.getAssetInformation(registerArgs.address);
      if (info.exists) {
        throw new AssetAlreadyRegisteredError();
      }
    };

    return this.createTransaction({ from, method, args, validate });
  }

  public getAssetInformation(assetAddress: Address, block?: number) {
    return this.makeCall<AssetInformation>('assetInformation', [assetAddress], block);
  }

  public getExchangeInformation(adapterAddress: Address, block?: number) {
    return this.makeCall<ExchangeInformation>('exchangeInformation', [adapterAddress], block);
  }

  public getVersionInformation(versionAddress: Address, block?: number) {
    return this.makeCall<VersionInformation>('versionInformation', [versionAddress], block);
  }

  /**
   * Checks if a version name already exists
   *
   * @param name The name of the version
   * @param block The block number to execute the call on.
   */
  public versionNameExists(name: string, block?: number) {
    return this.makeCall<boolean>('versionNameExists', [stringToBytes(name, 32)], block);
  }

  public registerFees(from: Address, feeAddresses: Address[]) {
    const method = 'registerFees';
    const args = [feeAddresses];
    return this.createTransaction({ from, method, args });
  }

  public isFeeRegistered(feeAddress: Address, block?: number) {
    return this.makeCall<boolean>('isFeeRegistered', [feeAddress], block);
  }

  public isAssetRegistered(asset: Address, block?: number) {
    return this.makeCall<boolean>('assetIsRegistered', [asset], block);
  }
}
