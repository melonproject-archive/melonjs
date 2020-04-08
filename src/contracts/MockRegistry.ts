import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockRegistry extends Contract {
  public readonly ethers: MockRegistryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockRegistry` contract call for the `adapterMethodIsAllowed` function.
   *
   * @contract MockRegistry
   * @signature adapterMethodIsAllowed(address,bytes4)
   * @method function adapterMethodIsAllowed(address,bytes4) view returns (bool)
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
   * @signature alwaysRegistered()
   * @method function alwaysRegistered() view returns (bool)
   */
  alwaysRegistered: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `assetIsRegistered` function.
   *
   * @contract MockRegistry
   * @signature assetIsRegistered(address)
   * @method function assetIsRegistered(address) view returns (bool)
   */
  assetIsRegistered: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `assets` function.
   *
   * @contract MockRegistry
   * @signature assets(uint256)
   * @method function assets(uint256) view returns (address)
   */
  assets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `authority` function.
   *
   * @contract MockRegistry
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `engine` function.
   *
   * @contract MockRegistry
   * @signature engine()
   * @method function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `exchangeAdapterIsRegistered` function.
   *
   * @contract MockRegistry
   * @signature exchangeAdapterIsRegistered(address)
   * @method function exchangeAdapterIsRegistered(address) view returns (bool)
   */
  exchangeAdapterIsRegistered: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `exchangeForAdapter` function.
   *
   * @contract MockRegistry
   * @signature exchangeForAdapter(address)
   * @method function exchangeForAdapter(address) view returns (address)
   */
  exchangeForAdapter: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `fundExists` function.
   *
   * @contract MockRegistry
   * @signature fundExists(address)
   * @method function fundExists(address) view returns (bool)
   */
  fundExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `fundFactory` function.
   *
   * @contract MockRegistry
   * @signature fundFactory()
   * @method function fundFactory() view returns (address)
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `getRegisteredAssets` function.
   *
   * @contract MockRegistry
   * @signature getRegisteredAssets()
   * @method function getRegisteredAssets() view returns (address[])
   */
  getRegisteredAssets: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `MockRegistry` contract call for the `getReserveMin` function.
   *
   * @contract MockRegistry
   * @signature getReserveMin(address)
   * @method function getReserveMin(address) view returns (uint256)
   */
  getReserveMin: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockRegistry` contract call for the `incentive` function.
   *
   * @contract MockRegistry
   * @signature incentive()
   * @method function incentive() view returns (uint256)
   */
  incentive: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockRegistry` contract call for the `isFeeRegistered` function.
   *
   * @contract MockRegistry
   * @signature isFeeRegistered(address)
   * @method function isFeeRegistered(address) view returns (bool)
   */
  isFeeRegistered: (_fee: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `isFund` function.
   *
   * @contract MockRegistry
   * @signature isFund(address)
   * @method function isFund(address) view returns (bool)
   */
  isFund: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `isFundFactory` function.
   *
   * @contract MockRegistry
   * @signature isFundFactory(address)
   * @method function isFundFactory(address) view returns (bool)
   */
  isFundFactory: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `methodAllowed` function.
   *
   * @contract MockRegistry
   * @signature methodAllowed()
   * @method function methodAllowed() view returns (bool)
   */
  methodAllowed: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract call for the `mlnToken` function.
   *
   * @contract MockRegistry
   * @signature mlnToken()
   * @method function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `nativeAsset` function.
   *
   * @contract MockRegistry
   * @signature nativeAsset()
   * @method function nativeAsset() view returns (address)
   */
  nativeAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `owner` function.
   *
   * @contract MockRegistry
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `priceSource` function.
   *
   * @contract MockRegistry
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockRegistry` contract call for the `registered` function.
   *
   * @contract MockRegistry
   * @signature registered(address)
   * @method function registered(address) view returns (bool)
   */
  registered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockRegistry` contract transaction for `register` function.
   *
   * @contract MockRegistry
   * @signature register(address)
   * @method function register(address)
   */
  register: (_addr: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `registerExchangeAdapter` function.
   *
   * @contract MockRegistry
   * @signature registerExchangeAdapter(address,address)
   * @method function registerExchangeAdapter(address,address)
   */
  registerExchangeAdapter: (_exchange: string, _adapter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `remove` function.
   *
   * @contract MockRegistry
   * @signature remove(address)
   * @method function remove(address)
   */
  remove: (_addr: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setAuthority` function.
   *
   * @contract MockRegistry
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setEngine` function.
   *
   * @contract MockRegistry
   * @signature setEngine(address)
   * @method function setEngine(address)
   */
  setEngine: (_a: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setFundFactory` function.
   *
   * @contract MockRegistry
   * @signature setFundFactory(address)
   * @method function setFundFactory(address)
   */
  setFundFactory: (_a: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setIsFund` function.
   *
   * @contract MockRegistry
   * @signature setIsFund(address)
   * @method function setIsFund(address)
   */
  setIsFund: (_who: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setMlnToken` function.
   *
   * @contract MockRegistry
   * @signature setMlnToken(address)
   * @method function setMlnToken(address)
   */
  setMlnToken: (_a: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setNativeAsset` function.
   *
   * @contract MockRegistry
   * @signature setNativeAsset(address)
   * @method function setNativeAsset(address)
   */
  setNativeAsset: (_a: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setOwner` function.
   *
   * @contract MockRegistry
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockRegistry` contract transaction for `setPriceSource` function.
   *
   * @contract MockRegistry
   * @signature setPriceSource(address)
   * @method function setPriceSource(address)
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
  ];
}

export interface MockRegistryEthersContract extends ethers.Contract {
  'adapterMethodIsAllowed(address,bytes4)': (
    _adapter: string,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'alwaysRegistered()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'assetIsRegistered(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'assets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'exchangeAdapterIsRegistered(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'exchangeForAdapter(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'fundExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getRegisteredAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getReserveMin(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'incentive()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'isFeeRegistered(address)': (_fee: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isFund(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isFundFactory(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'methodAllowed()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'nativeAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'registered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'register(address)': (_addr: string, $$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'registerExchangeAdapter(address,address)': (
    _exchange: string,
    _adapter: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'remove(address)': (_addr: string, $$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'setAuthority(address)': (
    authority_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setEngine(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'setFundFactory(address)': (
    _a: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setIsFund(address)': (_who: string, $$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'setMlnToken(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'setNativeAsset(address)': (
    _a: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setOwner(address)': (
    owner_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setPriceSource(address)': (
    _a: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'adapterMethodIsAllowed(address,bytes4)': (
      _adapter: string,
      _sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'alwaysRegistered()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'assetIsRegistered(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'assets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchangeAdapterIsRegistered(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'exchangeForAdapter(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getRegisteredAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getReserveMin(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'incentive()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'isFeeRegistered(address)': (_fee: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFund(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFundFactory(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'methodAllowed()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'nativeAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'register(address)': (
      _addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'registerExchangeAdapter(address,address)': (
      _exchange: string,
      _adapter: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'remove(address)': (_addr: string, $$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setEngine(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'setFundFactory(address)': (
      _a: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setIsFund(address)': (
      _who: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setMlnToken(address)': (
      _a: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setNativeAsset(address)': (
      _a: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setOwner(address)': (
      owner_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setPriceSource(address)': (
      _a: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'adapterMethodIsAllowed(address,bytes4)': (
      _adapter: string,
      _sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'alwaysRegistered()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'assetIsRegistered(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'assets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchangeAdapterIsRegistered(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'exchangeForAdapter(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getRegisteredAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getReserveMin(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'incentive()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'isFeeRegistered(address)': (_fee: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFund(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFundFactory(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'methodAllowed()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'nativeAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'register(address)': (_addr: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'registerExchangeAdapter(address,address)': (
      _exchange: string,
      _adapter: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'remove(address)': (_addr: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setEngine(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setFundFactory(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setIsFund(address)': (_who: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setMlnToken(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setNativeAsset(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setPriceSource(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'register(address)': (_addr: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'registerExchangeAdapter(address,address)': (
      _exchange: string,
      _adapter: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'remove(address)': (_addr: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setEngine(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setFundFactory(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setIsFund(address)': (_who: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setMlnToken(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setNativeAsset(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setPriceSource(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'register(address)': (_addr: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'registerExchangeAdapter(address,address)': (
      _exchange: string,
      _adapter: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'remove(address)': (_addr: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setEngine(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setFundFactory(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setIsFund(address)': (_who: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setMlnToken(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setNativeAsset(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setPriceSource(address)': (_a: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
