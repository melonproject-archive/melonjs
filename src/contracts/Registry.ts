import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Registry extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Registry` contract call for the `MAX_FUND_NAME_BYTES` function.
   *
   * @contract Registry
   * @signature function MAX_FUND_NAME_BYTES() view returns (uint256)
   */
  MAX_FUND_NAME_BYTES: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Registry` contract call for the `MAX_REGISTERED_ENTITIES` function.
   *
   * @contract Registry
   * @signature function MAX_REGISTERED_ENTITIES() view returns (uint256)
   */
  MAX_REGISTERED_ENTITIES: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Registry` contract call for the `MGM` function.
   *
   * @contract Registry
   * @signature function MGM() view returns (address)
   */
  MGM: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `adapterMethodIsAllowed` function.
   *
   * @contract Registry
   * @signature function adapterMethodIsAllowed(address,bytes4) view returns (bool)
   */
  adapterMethodIsAllowed: (
    _adapter: string,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `Registry` contract call for the `assetInformation` function.
   *
   * @contract Registry
   * @signature function assetInformation(address) view returns (bool, string, string, uint256, string, uint256)
   */
  assetInformation: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    exists: boolean;
    name: string;
    symbol: string;
    decimals: ethers.BigNumber;
    url: string;
    reserveMin: ethers.BigNumber;
  }>;

  /**
   * `Registry` contract call for the `assetIsRegistered` function.
   *
   * @contract Registry
   * @signature function assetIsRegistered(address) view returns (bool)
   */
  assetIsRegistered: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `assetMethodIsAllowed` function.
   *
   * @contract Registry
   * @signature function assetMethodIsAllowed(address,bytes4) view returns (bool)
   */
  assetMethodIsAllowed: (
    _asset: string,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `Registry` contract call for the `authority` function.
   *
   * @contract Registry
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `canUseFundName` function.
   *
   * @contract Registry
   * @signature function canUseFundName(address,string) view returns (bool)
   */
  canUseFundName: (_user: string, _name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `engine` function.
   *
   * @contract Registry
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `ethfinexWrapperRegistry` function.
   *
   * @contract Registry
   * @signature function ethfinexWrapperRegistry() view returns (address)
   */
  ethfinexWrapperRegistry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `exchangeAdapterIsRegistered` function.
   *
   * @contract Registry
   * @signature function exchangeAdapterIsRegistered(address) view returns (bool)
   */
  exchangeAdapterIsRegistered: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `exchangeForAdapter` function.
   *
   * @contract Registry
   * @signature function exchangeForAdapter(address) view returns (address)
   */
  exchangeForAdapter: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `exchangeInformation` function.
   *
   * @contract Registry
   * @signature function exchangeInformation(address) view returns (bool, address, bool)
   */
  exchangeInformation: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; exchangeAddress: string; takesCustody: boolean }>;

  /**
   * `Registry` contract call for the `fundNameHashToOwner` function.
   *
   * @contract Registry
   * @signature function fundNameHashToOwner(bytes32) view returns (address)
   */
  fundNameHashToOwner: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `fundsToVersions` function.
   *
   * @contract Registry
   * @signature function fundsToVersions(address) view returns (address)
   */
  fundsToVersions: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `getAdapterFunctionSignatures` function.
   *
   * @contract Registry
   * @signature function getAdapterFunctionSignatures(address) view returns (bytes4[])
   */
  getAdapterFunctionSignatures: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `getDecimals` function.
   *
   * @contract Registry
   * @signature function getDecimals(address) view returns (uint256)
   */
  getDecimals: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Registry` contract call for the `getExchangeInformation` function.
   *
   * @contract Registry
   * @signature function getExchangeInformation(address) view returns (address, bool)
   */
  getExchangeInformation: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `Registry` contract call for the `getName` function.
   *
   * @contract Registry
   * @signature function getName(address) view returns (string)
   */
  getName: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `getRegisteredAssets` function.
   *
   * @contract Registry
   * @signature function getRegisteredAssets() view returns (address[])
   */
  getRegisteredAssets: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Registry` contract call for the `getRegisteredExchangeAdapters` function.
   *
   * @contract Registry
   * @signature function getRegisteredExchangeAdapters() view returns (address[])
   */
  getRegisteredExchangeAdapters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Registry` contract call for the `getRegisteredVersions` function.
   *
   * @contract Registry
   * @signature function getRegisteredVersions() view returns (address[])
   */
  getRegisteredVersions: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Registry` contract call for the `getReserveMin` function.
   *
   * @contract Registry
   * @signature function getReserveMin(address) view returns (uint256)
   */
  getReserveMin: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Registry` contract call for the `getSymbol` function.
   *
   * @contract Registry
   * @signature function getSymbol(address) view returns (string)
   */
  getSymbol: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `incentive` function.
   *
   * @contract Registry
   * @signature function incentive() view returns (uint256)
   */
  incentive: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Registry` contract call for the `isFeeRegistered` function.
   *
   * @contract Registry
   * @signature function isFeeRegistered(address) view returns (bool)
   */
  isFeeRegistered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `isFund` function.
   *
   * @contract Registry
   * @signature function isFund(address) view returns (bool)
   */
  isFund: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `isFundFactory` function.
   *
   * @contract Registry
   * @signature function isFundFactory(address) view returns (bool)
   */
  isFundFactory: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `isValidFundName` function.
   *
   * @contract Registry
   * @signature function isValidFundName(string) pure returns (bool)
   */
  isValidFundName: (_name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `mlnToken` function.
   *
   * @contract Registry
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `nativeAsset` function.
   *
   * @contract Registry
   * @signature function nativeAsset() view returns (address)
   */
  nativeAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `owner` function.
   *
   * @contract Registry
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `priceSource` function.
   *
   * @contract Registry
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `registeredAssets` function.
   *
   * @contract Registry
   * @signature function registeredAssets(uint256) view returns (address)
   */
  registeredAssets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `registeredExchangeAdapters` function.
   *
   * @contract Registry
   * @signature function registeredExchangeAdapters(uint256) view returns (address)
   */
  registeredExchangeAdapters: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `registeredVersions` function.
   *
   * @contract Registry
   * @signature function registeredVersions(uint256) view returns (address)
   */
  registeredVersions: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `versionInformation` function.
   *
   * @contract Registry
   * @signature function versionInformation(address) view returns (bool, bytes32)
   */
  versionInformation: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<{ exists: boolean; name: string }>;

  /**
   * `Registry` contract call for the `versionNameExists` function.
   *
   * @contract Registry
   * @signature function versionNameExists(bytes32) view returns (bool)
   */
  versionNameExists: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract transaction for `deregisterFees` function.
   *
   * @contract Registry
   * @signature function deregisterFees(address[])
   */
  deregisterFees: (_fees: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `registerAsset` function.
   *
   * @contract Registry
   * @signature function registerAsset(address,string,string,string,uint256,uint256[],bytes4[])
   */
  registerAsset: (
    _asset: string,
    _name: string,
    _symbol: string,
    _url: string,
    _reserveMin: ethers.BigNumberish,
    _standards: ethers.BigNumber[],
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `registerExchangeAdapter` function.
   *
   * @contract Registry
   * @signature function registerExchangeAdapter(address,address,bool,bytes4[])
   */
  registerExchangeAdapter: (
    _exchange: string,
    _adapter: string,
    _takesCustody: boolean,
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `registerFees` function.
   *
   * @contract Registry
   * @signature function registerFees(address[])
   */
  registerFees: (_fees: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `registerFund` function.
   *
   * @contract Registry
   * @signature function registerFund(address,address,string)
   */
  registerFund: (_fund: string, _owner: string, _name: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `registerVersion` function.
   *
   * @contract Registry
   * @signature function registerVersion(address,bytes32)
   */
  registerVersion: (_version: string, _name: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `removeAsset` function.
   *
   * @contract Registry
   * @signature function removeAsset(address,uint256)
   */
  removeAsset: (_asset: string, _assetIndex: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `removeExchangeAdapter` function.
   *
   * @contract Registry
   * @signature function removeExchangeAdapter(address,uint256)
   */
  removeExchangeAdapter: (_adapter: string, _adapterIndex: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `reserveFundName` function.
   *
   * @contract Registry
   * @signature function reserveFundName(address,string)
   */
  reserveFundName: (_owner: string, _name: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setAuthority` function.
   *
   * @contract Registry
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setEngine` function.
   *
   * @contract Registry
   * @signature function setEngine(address)
   */
  setEngine: (_engine: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setEthfinexWrapperRegistry` function.
   *
   * @contract Registry
   * @signature function setEthfinexWrapperRegistry(address)
   */
  setEthfinexWrapperRegistry: (_registry: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setIncentive` function.
   *
   * @contract Registry
   * @signature function setIncentive(uint256)
   */
  setIncentive: (_weiAmount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setMGM` function.
   *
   * @contract Registry
   * @signature function setMGM(address)
   */
  setMGM: (_MGM: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setMlnToken` function.
   *
   * @contract Registry
   * @signature function setMlnToken(address)
   */
  setMlnToken: (_mlnToken: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setNativeAsset` function.
   *
   * @contract Registry
   * @signature function setNativeAsset(address)
   */
  setNativeAsset: (_nativeAsset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setOwner` function.
   *
   * @contract Registry
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setPriceSource` function.
   *
   * @contract Registry
   * @signature function setPriceSource(address)
   */
  setPriceSource: (_priceSource: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `updateAsset` function.
   *
   * @contract Registry
   * @signature function updateAsset(address,string,string,string,uint256,uint256[],bytes4[])
   */
  updateAsset: (
    _asset: string,
    _name: string,
    _symbol: string,
    _url: string,
    _reserveMin: ethers.BigNumberish,
    _standards: ethers.BigNumber[],
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `updateExchangeAdapter` function.
   *
   * @contract Registry
   * @signature function updateExchangeAdapter(address,address,bool,bytes4[])
   */
  updateExchangeAdapter: (
    _exchange: string,
    _adapter: string,
    _takesCustody: boolean,
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _postDeployOwner)',
    'event AssetRemoval(address indexed asset)',
    'event AssetUpsert(address indexed asset, string name, string symbol, uint256 decimals, string url, uint256 reserveMin, uint256[] standards, bytes4[] sigs)',
    'event EfxWrapperRegistryChange(address indexed registry)',
    'event EngineChange(address indexed engine)',
    'event ExchangeAdapterRemoval(address indexed exchange)',
    'event ExchangeAdapterUpsert(address indexed exchange, address indexed adapter, bool takesCustody, bytes4[] sigs)',
    'event IncentiveChange(uint256 incentiveAmount)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event MGMChange(address indexed MGM)',
    'event MlnTokenChange(address indexed mlnToken)',
    'event NativeAssetChange(address indexed nativeAsset)',
    'event PriceSourceChange(address indexed priceSource)',
    'event VersionRegistration(address indexed version)',
    'function MAX_FUND_NAME_BYTES() view returns (uint256)',
    'function MAX_REGISTERED_ENTITIES() view returns (uint256)',
    'function MGM() view returns (address)',
    'function adapterMethodIsAllowed(address _adapter, bytes4 _sig) view returns (bool)',
    'function assetInformation(address) view returns (bool exists, string name, string symbol, uint256 decimals, string url, uint256 reserveMin)',
    'function assetIsRegistered(address _asset) view returns (bool)',
    'function assetMethodIsAllowed(address _asset, bytes4 _sig) view returns (bool)',
    'function authority() view returns (address)',
    'function canUseFundName(address _user, string _name) view returns (bool)',
    'function deregisterFees(address[] _fees)',
    'function engine() view returns (address)',
    'function ethfinexWrapperRegistry() view returns (address)',
    'function exchangeAdapterIsRegistered(address _adapter) view returns (bool)',
    'function exchangeForAdapter(address _adapter) view returns (address)',
    'function exchangeInformation(address) view returns (bool exists, address exchangeAddress, bool takesCustody)',
    'function fundNameHashToOwner(bytes32) view returns (address)',
    'function fundsToVersions(address) view returns (address)',
    'function getAdapterFunctionSignatures(address _adapter) view returns (bytes4[])',
    'function getDecimals(address _asset) view returns (uint256)',
    'function getExchangeInformation(address _adapter) view returns (address, bool)',
    'function getName(address _asset) view returns (string)',
    'function getRegisteredAssets() view returns (address[])',
    'function getRegisteredExchangeAdapters() view returns (address[])',
    'function getRegisteredVersions() view returns (address[])',
    'function getReserveMin(address _asset) view returns (uint256)',
    'function getSymbol(address _asset) view returns (string)',
    'function incentive() view returns (uint256)',
    'function isFeeRegistered(address) view returns (bool)',
    'function isFund(address _who) view returns (bool)',
    'function isFundFactory(address _who) view returns (bool)',
    'function isValidFundName(string _name) pure returns (bool)',
    'function mlnToken() view returns (address)',
    'function nativeAsset() view returns (address)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function registerAsset(address _asset, string _name, string _symbol, string _url, uint256 _reserveMin, uint256[] _standards, bytes4[] _sigs)',
    'function registerExchangeAdapter(address _exchange, address _adapter, bool _takesCustody, bytes4[] _sigs)',
    'function registerFees(address[] _fees)',
    'function registerFund(address _fund, address _owner, string _name)',
    'function registerVersion(address _version, bytes32 _name)',
    'function registeredAssets(uint256) view returns (address)',
    'function registeredExchangeAdapters(uint256) view returns (address)',
    'function registeredVersions(uint256) view returns (address)',
    'function removeAsset(address _asset, uint256 _assetIndex)',
    'function removeExchangeAdapter(address _adapter, uint256 _adapterIndex)',
    'function reserveFundName(address _owner, string _name)',
    'function setAuthority(address authority_)',
    'function setEngine(address _engine)',
    'function setEthfinexWrapperRegistry(address _registry)',
    'function setIncentive(uint256 _weiAmount)',
    'function setMGM(address _MGM)',
    'function setMlnToken(address _mlnToken)',
    'function setNativeAsset(address _nativeAsset)',
    'function setOwner(address owner_)',
    'function setPriceSource(address _priceSource)',
    'function updateAsset(address _asset, string _name, string _symbol, string _url, uint256 _reserveMin, uint256[] _standards, bytes4[] _sigs)',
    'function updateExchangeAdapter(address _exchange, address _adapter, bool _takesCustody, bytes4[] _sigs)',
    'function versionInformation(address) view returns (bool exists, bytes32 name)',
    'function versionNameExists(bytes32) view returns (bool)',
  ];
}
