import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockRegistry extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockRegistry` contract call for the `adapterMethodIsAllowed` function.
   *
   * @contract MockRegistry
   * @signature function adapterMethodIsAllowed(address,bytes4) view returns (bool)
   */
  adapterMethodIsAllowed: (
    _adapter: string,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `alwaysRegistered` function.
   *
   * @contract MockRegistry
   * @signature function alwaysRegistered() view returns (bool)
   */
  alwaysRegistered: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `assetIsRegistered` function.
   *
   * @contract MockRegistry
   * @signature function assetIsRegistered(address) view returns (bool)
   */
  assetIsRegistered: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `assets` function.
   *
   * @contract MockRegistry
   * @signature function assets(uint256) view returns (address)
   */
  assets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `authority` function.
   *
   * @contract MockRegistry
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `engine` function.
   *
   * @contract MockRegistry
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `exchangeAdapterIsRegistered` function.
   *
   * @contract MockRegistry
   * @signature function exchangeAdapterIsRegistered(address) view returns (bool)
   */
  exchangeAdapterIsRegistered: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `exchangeForAdapter` function.
   *
   * @contract MockRegistry
   * @signature function exchangeForAdapter(address) view returns (address)
   */
  exchangeForAdapter: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `fundExists` function.
   *
   * @contract MockRegistry
   * @signature function fundExists(address) view returns (bool)
   */
  fundExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `fundFactory` function.
   *
   * @contract MockRegistry
   * @signature function fundFactory() view returns (address)
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `getExchangeInformation` function.
   *
   * @contract MockRegistry
   * @signature function getExchangeInformation(address) view returns (address, bool)
   */
  getExchangeInformation: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `MockRegistry` contract call for the `getRegisteredAssets` function.
   *
   * @contract MockRegistry
   * @signature function getRegisteredAssets() view returns (address[])
   */
  getRegisteredAssets: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `MockRegistry` contract call for the `getReserveMin` function.
   *
   * @contract MockRegistry
   * @signature function getReserveMin(address) view returns (uint256)
   */
  getReserveMin: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockRegistry` contract call for the `incentive` function.
   *
   * @contract MockRegistry
   * @signature function incentive() view returns (uint256)
   */
  incentive: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockRegistry` contract call for the `isFeeRegistered` function.
   *
   * @contract MockRegistry
   * @signature function isFeeRegistered(address) view returns (bool)
   */
  isFeeRegistered: (_fee: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `isFund` function.
   *
   * @contract MockRegistry
   * @signature function isFund(address) view returns (bool)
   */
  isFund: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `isFundFactory` function.
   *
   * @contract MockRegistry
   * @signature function isFundFactory(address) view returns (bool)
   */
  isFundFactory: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `methodAllowed` function.
   *
   * @contract MockRegistry
   * @signature function methodAllowed() view returns (bool)
   */
  methodAllowed: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `mlnToken` function.
   *
   * @contract MockRegistry
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `nativeAsset` function.
   *
   * @contract MockRegistry
   * @signature function nativeAsset() view returns (address)
   */
  nativeAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `owner` function.
   *
   * @contract MockRegistry
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `priceSource` function.
   *
   * @contract MockRegistry
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `registered` function.
   *
   * @contract MockRegistry
   * @signature function registered(address) view returns (bool)
   */
  registered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `takesCustodyForAdapter` function.
   *
   * @contract MockRegistry
   * @signature function takesCustodyForAdapter(address) view returns (bool)
   */
  takesCustodyForAdapter: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract transaction for `register` function.
   *
   * @contract MockRegistry
   * @signature function register(address)
   */
  register: (_addr: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `registerExchangeAdapter` function.
   *
   * @contract MockRegistry
   * @signature function registerExchangeAdapter(address,address)
   */
  registerExchangeAdapter: (_exchange: string, _adapter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `remove` function.
   *
   * @contract MockRegistry
   * @signature function remove(address)
   */
  remove: (_addr: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setAuthority` function.
   *
   * @contract MockRegistry
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setEngine` function.
   *
   * @contract MockRegistry
   * @signature function setEngine(address)
   */
  setEngine: (_a: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setFundFactory` function.
   *
   * @contract MockRegistry
   * @signature function setFundFactory(address)
   */
  setFundFactory: (_a: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setIsFund` function.
   *
   * @contract MockRegistry
   * @signature function setIsFund(address)
   */
  setIsFund: (_who: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setMlnToken` function.
   *
   * @contract MockRegistry
   * @signature function setMlnToken(address)
   */
  setMlnToken: (_a: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setNativeAsset` function.
   *
   * @contract MockRegistry
   * @signature function setNativeAsset(address)
   */
  setNativeAsset: (_a: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setOwner` function.
   *
   * @contract MockRegistry
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setPriceSource` function.
   *
   * @contract MockRegistry
   * @signature function setPriceSource(address)
   */
  setPriceSource: (_a: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function adapterMethodIsAllowed(address _adapter, bytes4 _sig) view returns (bool)',
    'function alwaysRegistered() view returns (bool)',
    'function assetIsRegistered(address _asset) view returns (bool)',
    'function assets(uint256) view returns (address)',
    'function authority() view returns (address)',
    'function engine() view returns (address)',
    'function exchangeAdapterIsRegistered(address _adapter) view returns (bool)',
    'function exchangeForAdapter(address) view returns (address)',
    'function fundExists(address) view returns (bool)',
    'function fundFactory() view returns (address)',
    'function getExchangeInformation(address _adapter) view returns (address, bool)',
    'function getRegisteredAssets() view returns (address[])',
    'function getReserveMin(address _asset) view returns (uint256)',
    'function incentive() view returns (uint256)',
    'function isFeeRegistered(address _fee) view returns (bool)',
    'function isFund(address _who) view returns (bool)',
    'function isFundFactory(address _who) view returns (bool)',
    'function methodAllowed() view returns (bool)',
    'function mlnToken() view returns (address)',
    'function nativeAsset() view returns (address)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function register(address _addr)',
    'function registerExchangeAdapter(address _exchange, address _adapter)',
    'function registered(address) view returns (bool)',
    'function remove(address _addr)',
    'function setAuthority(address authority_)',
    'function setEngine(address _a)',
    'function setFundFactory(address _a)',
    'function setIsFund(address _who)',
    'function setMlnToken(address _a)',
    'function setNativeAsset(address _a)',
    'function setOwner(address owner_)',
    'function setPriceSource(address _a)',
    'function takesCustodyForAdapter(address) view returns (bool)',
  ];
}
