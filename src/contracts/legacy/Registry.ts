import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../..';

export class RegistryContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
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

  /**
   * Constructs a new contract instance.
   *
   * @param contract The contract interface.
   * @param addressOrName The address or name of the contract.
   * @param signerOrProvider The ethers.js signer or provider instance to use.
   */
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * ```solidity
   * function MAX_FUND_NAME_BYTES() view returns (uint256)
   * ```
   *
   */
  MAX_FUND_NAME_BYTES: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function MAX_REGISTERED_ENTITIES() view returns (uint256)
   * ```
   *
   */
  MAX_REGISTERED_ENTITIES: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function MGM() view returns (address)
   * ```
   *
   */
  MGM: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function adapterMethodIsAllowed(address,bytes4) view returns (bool)
   * ```
   *
   */
  adapterMethodIsAllowed: (
    _adapter: string,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  /**
   * ```solidity
   * function assetInformation(address) view returns (bool, string, string, uint256, string, uint256)
   * ```
   *
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
   * ```solidity
   * function assetIsRegistered(address) view returns (bool)
   * ```
   *
   */
  assetIsRegistered: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function assetMethodIsAllowed(address,bytes4) view returns (bool)
   * ```
   *
   */
  assetMethodIsAllowed: (
    _asset: string,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * Whether _user can use _name for their fund
   *
   * ```solidity
   * function canUseFundName(address,string) view returns (bool)
   * ```
   *
   */
  canUseFundName: (_user: string, _name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function engine() view returns (address)
   * ```
   *
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function ethfinexWrapperRegistry() view returns (address)
   * ```
   *
   */
  ethfinexWrapperRegistry: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function exchangeAdapterIsRegistered(address) view returns (bool)
   * ```
   *
   */
  exchangeAdapterIsRegistered: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function exchangeForAdapter(address) view returns (address)
   * ```
   *
   */
  exchangeForAdapter: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function exchangeInformation(address) view returns (bool, address, bool)
   * ```
   *
   */
  exchangeInformation: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; exchangeAddress: string; takesCustody: boolean }>;
  /**
   * ```solidity
   * function fundNameHashToOwner(bytes32) view returns (address)
   * ```
   *
   */
  fundNameHashToOwner: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function fundsToVersions(address) view returns (address)
   * ```
   *
   */
  fundsToVersions: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getAdapterFunctionSignatures(address) view returns (bytes4[])
   * ```
   *
   */
  getAdapterFunctionSignatures: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getDecimals(address) view returns (uint256)
   * ```
   *
   */
  getDecimals: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getExchangeInformation(address) view returns (address, bool)
   * ```
   *
   */
  getExchangeInformation: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getName(address) view returns (string)
   * ```
   *
   */
  getName: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getRegisteredAssets() view returns (address[])
   * ```
   *
   */
  getRegisteredAssets: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  /**
   * ```solidity
   * function getRegisteredExchangeAdapters() view returns (address[])
   * ```
   *
   */
  getRegisteredExchangeAdapters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  /**
   * ```solidity
   * function getRegisteredVersions() view returns (address[])
   * ```
   *
   */
  getRegisteredVersions: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  /**
   * ```solidity
   * function getReserveMin(address) view returns (uint256)
   * ```
   *
   */
  getReserveMin: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getSymbol(address) view returns (string)
   * ```
   *
   */
  getSymbol: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function incentive() view returns (uint256)
   * ```
   *
   */
  incentive: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function isFeeRegistered(address) view returns (bool)
   * ```
   *
   */
  isFeeRegistered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isFund(address) view returns (bool)
   * ```
   *
   */
  isFund: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isFundFactory(address) view returns (bool)
   * ```
   *
   */
  isFundFactory: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * Whether _name has only valid characters
   *
   * ```solidity
   * function isValidFundName(string) pure returns (bool)
   * ```
   *
   */
  isValidFundName: (_name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   *
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function nativeAsset() view returns (address)
   * ```
   *
   */
  nativeAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function owner() view returns (address)
   * ```
   *
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   *
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function registeredAssets(uint256) view returns (address)
   * ```
   *
   */
  registeredAssets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function registeredExchangeAdapters(uint256) view returns (address)
   * ```
   *
   */
  registeredExchangeAdapters: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function registeredVersions(uint256) view returns (address)
   * ```
   *
   */
  registeredVersions: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function versionInformation(address) view returns (bool, bytes32)
   * ```
   *
   */
  versionInformation: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<{ exists: boolean; name: string }>;
  /**
   * ```solidity
   * function versionNameExists(bytes32) view returns (bool)
   * ```
   *
   */
  versionNameExists: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function deregisterFees(address[])
   * ```
   *
   */
  deregisterFees: (_fees: string[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * Registers an Asset information entry
   *
   * Pre: Only registrar owner should be able to registerPost: Address _asset is registered
   *
   * ```solidity
   * function registerAsset(address,string,string,string,uint256,uint256[],bytes4[])
   * ```
   * @param _asset Address of asset to be registered
   * @param _name Human-readable name of the Asset
   * @param _sigs Function signatures for whitelisted asset functions
   * @param _standards Integers of EIP standards this asset adheres to
   * @param _symbol Human-readable symbol of the Asset
   * @param _url Url for extended information of the asset
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
   * Register an exchange information entry (A mapping from exchange adapter -> Exchange information)
   *
   * Adapters are unique so are used as the mapping key. There may be different adapters for same exchange (0x / Ethfinex)Pre: Only registrar owner should be able to registerPost: Address _exchange is registered
   *
   * ```solidity
   * function registerExchangeAdapter(address,address,bool,bytes4[])
   * ```
   * @param _adapter Address of exchange adapter
   * @param _exchange Address of the exchange for the adapter
   * @param _sigs Function signatures for whitelisted exchange functions
   * @param _takesCustody Whether this exchange takes custody of tokens before trading
   */
  registerExchangeAdapter: (
    _exchange: string,
    _adapter: string,
    _takesCustody: boolean,
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function registerFees(address[])
   * ```
   *
   */
  registerFees: (_fees: string[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function registerFund(address,address,string)
   * ```
   *
   */
  registerFund: (_fund: string, _owner: string, _name: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * Versions cannot be removed from registry
   *
   * ```solidity
   * function registerVersion(address,bytes32)
   * ```
   * @param _name Name of the version
   * @param _version Address of the version contract
   */
  registerVersion: (_version: string, _name: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * Deletes an existing entry
   *
   * Owner can delete an existing entry
   *
   * ```solidity
   * function removeAsset(address,uint256)
   * ```
   * @param _asset address for which specific information is requested
   */
  removeAsset: (_asset: string, _assetIndex: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * Deletes an existing entry
   *
   * Owner can delete an existing entry
   *
   * ```solidity
   * function removeExchangeAdapter(address,uint256)
   * ```
   * @param _adapter address of the adapter of the exchange that is to be removed
   * @param _adapterIndex index of the exchange in array
   */
  removeExchangeAdapter: (_adapter: string, _adapterIndex: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function reserveFundName(address,string)
   * ```
   *
   */
  reserveFundName: (_owner: string, _name: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setAuthority(address)
   * ```
   *
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setEngine(address)
   * ```
   *
   */
  setEngine: (_engine: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setEthfinexWrapperRegistry(address)
   * ```
   *
   */
  setEthfinexWrapperRegistry: (_registry: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setIncentive(uint256)
   * ```
   *
   */
  setIncentive: (_weiAmount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setMGM(address)
   * ```
   *
   */
  setMGM: (_MGM: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setMlnToken(address)
   * ```
   *
   */
  setMlnToken: (_mlnToken: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setNativeAsset(address)
   * ```
   *
   */
  setNativeAsset: (_nativeAsset: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setOwner(address)
   * ```
   *
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setPriceSource(address)
   * ```
   *
   */
  setPriceSource: (_priceSource: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * Updates description information of a registered Asset
   *
   * Pre: Owner can change an existing entryPost: Changed Name, Symbol, URL and/or IPFSHash
   *
   * ```solidity
   * function updateAsset(address,string,string,string,uint256,uint256[],bytes4[])
   * ```
   * @param _asset Address of the asset to be updated
   * @param _name Human-readable name of the Asset
   * @param _symbol Human-readable symbol of the Asset
   * @param _url Url for extended information of the asset
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
   * ```solidity
   * function updateExchangeAdapter(address,address,bool,bytes4[])
   * ```
   *
   */
  updateExchangeAdapter: (
    _exchange: string,
    _adapter: string,
    _takesCustody: boolean,
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
}
