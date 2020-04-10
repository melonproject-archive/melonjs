import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

/**
 * `Registry` contract
 */
export class Registry extends Contract {
  public readonly ethers: RegistryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Registry` contract call for `MAX_FUND_NAME_BYTES` function.
   *
   * ```solidity
   * function MAX_FUND_NAME_BYTES() view returns (uint8)
   * ```
   */
  MAX_FUND_NAME_BYTES: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `Registry` contract call for `MAX_REGISTERED_ENTITIES` function.
   *
   * ```solidity
   * function MAX_REGISTERED_ENTITIES() view returns (uint8)
   * ```
   */
  MAX_REGISTERED_ENTITIES: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `Registry` contract call for `MGM` function.
   *
   * ```solidity
   * function MGM() view returns (address)
   * ```
   */
  MGM: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `adapterMethodIsAllowed` function.
   *
   * ```solidity
   * function adapterMethodIsAllowed(address,bytes4) view returns (bool)
   * ```
   */
  adapterMethodIsAllowed: (
    _adapter: string,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `Registry` contract call for `assetInformation` function.
   *
   * ```solidity
   * function assetInformation(address) view returns (bool, string, string, uint256, string, uint256)
   * ```
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
   * `Registry` contract call for `assetIsRegistered` function.
   *
   * ```solidity
   * function assetIsRegistered(address) view returns (bool)
   * ```
   */
  assetIsRegistered: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for `assetMethodIsAllowed` function.
   *
   * ```solidity
   * function assetMethodIsAllowed(address,bytes4) view returns (bool)
   * ```
   */
  assetMethodIsAllowed: (
    _asset: string,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `Registry` contract call for `authority` function.
   *
   * ```solidity
   * function authority() view returns (address)
   * ```
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * Whether _user can use _name for their fund
   *
   * ```solidity
   * function canUseFundName(address,string) view returns (bool)
   * ```
   */
  canUseFundName: (_user: string, _name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for `engine` function.
   *
   * ```solidity
   * function engine() view returns (address)
   * ```
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `exchangeAdapterIsRegistered` function.
   *
   * ```solidity
   * function exchangeAdapterIsRegistered(address) view returns (bool)
   * ```
   */
  exchangeAdapterIsRegistered: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for `exchangeForAdapter` function.
   *
   * ```solidity
   * function exchangeForAdapter(address) view returns (address)
   * ```
   */
  exchangeForAdapter: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `exchangeInformation` function.
   *
   * ```solidity
   * function exchangeInformation(address) view returns (bool, address)
   * ```
   */
  exchangeInformation: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; exchangeAddress: string }>;

  /**
   * `Registry` contract call for `fundFactoryInformation` function.
   *
   * ```solidity
   * function fundFactoryInformation(address) view returns (bool, bytes32)
   * ```
   */
  fundFactoryInformation: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; name: string }>;

  /**
   * `Registry` contract call for `fundFactoryNameExists` function.
   *
   * ```solidity
   * function fundFactoryNameExists(bytes32) view returns (bool)
   * ```
   */
  fundFactoryNameExists: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for `fundNameHashToOwner` function.
   *
   * ```solidity
   * function fundNameHashToOwner(bytes32) view returns (address)
   * ```
   */
  fundNameHashToOwner: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `fundsToFundFactories` function.
   *
   * ```solidity
   * function fundsToFundFactories(address) view returns (address)
   * ```
   */
  fundsToFundFactories: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `getAdapterFunctionSignatures` function.
   *
   * ```solidity
   * function getAdapterFunctionSignatures(address) view returns (bytes4[])
   * ```
   */
  getAdapterFunctionSignatures: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `getAssetInformation` function.
   *
   * ```solidity
   * function getAssetInformation(address) view returns (tuple(bool,string,string,uint256,string,uint256,uint256[],bytes4[]))
   * ```
   */
  getAssetInformation: (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    exists: boolean;
    name: string;
    symbol: string;
    decimals: ethers.BigNumber;
    url: string;
    reserveMin: ethers.BigNumber;
    standards: ethers.BigNumber[];
    sigs: string;
  }>;

  /**
   * `Registry` contract call for `getDecimals` function.
   *
   * ```solidity
   * function getDecimals(address) view returns (uint256)
   * ```
   */
  getDecimals: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Registry` contract call for `getExchangeInformation` function.
   *
   * ```solidity
   * function getExchangeInformation(address) view returns (tuple(bool,address,bytes4[]))
   * ```
   */
  getExchangeInformation: (
    _exchange: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; exchangeAddress: string; sigs: string }>;

  /**
   * `Registry` contract call for `getFundFactoryInformation` function.
   *
   * ```solidity
   * function getFundFactoryInformation(address) view returns (tuple(bool,bytes32))
   * ```
   */
  getFundFactoryInformation: (
    _fundFactory: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; name: string }>;

  /**
   * `Registry` contract call for `getName` function.
   *
   * ```solidity
   * function getName(address) view returns (string)
   * ```
   */
  getName: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `getRegisteredAssets` function.
   *
   * ```solidity
   * function getRegisteredAssets() view returns (address[])
   * ```
   */
  getRegisteredAssets: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Registry` contract call for `getRegisteredExchangeAdapters` function.
   *
   * ```solidity
   * function getRegisteredExchangeAdapters() view returns (address[])
   * ```
   */
  getRegisteredExchangeAdapters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * get FundFactory and fund information
   *
   * ```solidity
   * function getRegisteredFundFactories() view returns (address[])
   * ```
   */
  getRegisteredFundFactories: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Registry` contract call for `getReserveMin` function.
   *
   * ```solidity
   * function getReserveMin(address) view returns (uint256)
   * ```
   */
  getReserveMin: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Registry` contract call for `getSymbol` function.
   *
   * ```solidity
   * function getSymbol(address) view returns (string)
   * ```
   */
  getSymbol: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `incentive` function.
   *
   * ```solidity
   * function incentive() view returns (uint256)
   * ```
   */
  incentive: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Registry` contract call for `isFeeRegistered` function.
   *
   * ```solidity
   * function isFeeRegistered(address) view returns (bool)
   * ```
   */
  isFeeRegistered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for `isFund` function.
   *
   * ```solidity
   * function isFund(address) view returns (bool)
   * ```
   */
  isFund: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for `isFundFactory` function.
   *
   * ```solidity
   * function isFundFactory(address) view returns (bool)
   * ```
   */
  isFundFactory: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for `isHub` function.
   *
   * ```solidity
   * function isHub(address) view returns (bool)
   * ```
   */
  isHub: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * Whether _name has only valid characters
   *
   * ```solidity
   * function isValidFundName(string) pure returns (bool)
   * ```
   */
  isValidFundName: (_name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for `mlnToken` function.
   *
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `nativeAsset` function.
   *
   * ```solidity
   * function nativeAsset() view returns (address)
   * ```
   */
  nativeAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `owner` function.
   *
   * ```solidity
   * function owner() view returns (address)
   * ```
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `priceSource` function.
   *
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `registeredAssets` function.
   *
   * ```solidity
   * function registeredAssets(uint256) view returns (address)
   * ```
   */
  registeredAssets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `registeredExchangeAdapters` function.
   *
   * ```solidity
   * function registeredExchangeAdapters(uint256) view returns (address)
   * ```
   */
  registeredExchangeAdapters: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `registeredFundFactories` function.
   *
   * ```solidity
   * function registeredFundFactories(uint256) view returns (address)
   * ```
   */
  registeredFundFactories: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `sharesRequestor` function.
   *
   * ```solidity
   * function sharesRequestor() view returns (address)
   * ```
   */
  sharesRequestor: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for `deregisterFees` function.
   *
   * ```solidity
   * function deregisterFees(address[])
   * ```
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
   *
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
   * function registerExchangeAdapter(address,address,bytes4[])
   * ```
   *
   * @param _adapter Address of exchange adapter
   * @param _exchange Address of the exchange for the adapter
   * @param _sigs Function signatures for whitelisted exchange functions
   */
  registerExchangeAdapter: (
    _exchange: string,
    _adapter: string,
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `registerFees` function.
   *
   * ```solidity
   * function registerFees(address[])
   * ```
   */
  registerFees: (_fees: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `registerFund` function.
   *
   * ```solidity
   * function registerFund(address,address,string)
   * ```
   */
  registerFund: (_fund: string, _owner: string, _name: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * FundFactories cannot be removed from registry
   *
   * ```solidity
   * function registerFundFactory(address,bytes32)
   * ```
   *
   * @param _fundFactory Address of the FundFactory contract
   * @param _name Name of the fundFactory version
   */
  registerFundFactory: (
    _fundFactory: string,
    _name: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * Deletes an existing entry
   *
   * Owner can delete an existing entry
   *
   * ```solidity
   * function removeAsset(address,uint256)
   * ```
   *
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
   *
   * @param _adapter address of the adapter of the exchange that is to be removed
   * @param _adapterIndex index of the exchange in array
   */
  removeExchangeAdapter: (_adapter: string, _adapterIndex: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `reserveFundName` function.
   *
   * ```solidity
   * function reserveFundName(address,string)
   * ```
   */
  reserveFundName: (_owner: string, _name: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `setAuthority` function.
   *
   * ```solidity
   * function setAuthority(address)
   * ```
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `setEngine` function.
   *
   * ```solidity
   * function setEngine(address)
   * ```
   */
  setEngine: (_engine: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `setIncentive` function.
   *
   * ```solidity
   * function setIncentive(uint256)
   * ```
   */
  setIncentive: (_weiAmount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `setMGM` function.
   *
   * ```solidity
   * function setMGM(address)
   * ```
   */
  setMGM: (_MGM: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `setMlnToken` function.
   *
   * ```solidity
   * function setMlnToken(address)
   * ```
   */
  setMlnToken: (_mlnToken: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `setNativeAsset` function.
   *
   * ```solidity
   * function setNativeAsset(address)
   * ```
   */
  setNativeAsset: (_nativeAsset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `setOwner` function.
   *
   * ```solidity
   * function setOwner(address)
   * ```
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `setPriceSource` function.
   *
   * ```solidity
   * function setPriceSource(address)
   * ```
   */
  setPriceSource: (_priceSource: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract call for `setSharesRequestor` function.
   *
   * ```solidity
   * function setSharesRequestor(address)
   * ```
   */
  setSharesRequestor: (_sharesRequestor: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * Updates description information of a registered Asset
   *
   * Pre: Owner can change an existing entryPost: Changed Name, Symbol, URL and/or IPFSHash
   *
   * ```solidity
   * function updateAsset(address,string,string,string,uint256,uint256[],bytes4[])
   * ```
   *
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
   * `Registry` contract call for `updateExchangeAdapter` function.
   *
   * ```solidity
   * function updateExchangeAdapter(address,address,bytes4[])
   * ```
   */
  updateExchangeAdapter: (
    _exchange: string,
    _adapter: string,
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _postDeployOwner)',
    'event AssetRemoval(address indexed asset)',
    'event AssetUpsert(address indexed asset, string name, string symbol, uint256 decimals, string url, uint256 reserveMin, uint256[] standards, bytes4[] sigs)',
    'event EngineChange(address indexed engine)',
    'event ExchangeAdapterRemoval(address indexed exchange)',
    'event ExchangeAdapterUpsert(address indexed exchange, address indexed adapter, bytes4[] sigs)',
    'event FundFactoryRegistered(address indexed fundFactory)',
    'event IncentiveChange(uint256 incentiveAmount)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event MGMChange(address indexed MGM)',
    'event MlnTokenChange(address indexed mlnToken)',
    'event NativeAssetChange(address indexed nativeAsset)',
    'event PriceSourceChange(address indexed priceSource)',
    'event SharesRequestorChanged(address sharesRequestor)',
    'function MAX_FUND_NAME_BYTES() view returns (uint8)',
    'function MAX_REGISTERED_ENTITIES() view returns (uint8)',
    'function MGM() view returns (address)',
    'function adapterMethodIsAllowed(address _adapter, bytes4 _sig) view returns (bool)',
    'function assetInformation(address) view returns (bool exists, string name, string symbol, uint256 decimals, string url, uint256 reserveMin)',
    'function assetIsRegistered(address _asset) view returns (bool)',
    'function assetMethodIsAllowed(address _asset, bytes4 _sig) view returns (bool)',
    'function authority() view returns (address)',
    'function canUseFundName(address _user, string _name) view returns (bool)',
    'function deregisterFees(address[] _fees)',
    'function engine() view returns (address)',
    'function exchangeAdapterIsRegistered(address _adapter) view returns (bool)',
    'function exchangeForAdapter(address _adapter) view returns (address)',
    'function exchangeInformation(address) view returns (bool exists, address exchangeAddress)',
    'function fundFactoryInformation(address) view returns (bool exists, bytes32 name)',
    'function fundFactoryNameExists(bytes32) view returns (bool)',
    'function fundNameHashToOwner(bytes32) view returns (address)',
    'function fundsToFundFactories(address) view returns (address)',
    'function getAdapterFunctionSignatures(address _adapter) view returns (bytes4[])',
    'function getAssetInformation(address _asset) view returns (tuple(bool exists, string name, string symbol, uint256 decimals, string url, uint256 reserveMin, uint256[] standards, bytes4[] sigs))',
    'function getDecimals(address _asset) view returns (uint256)',
    'function getExchangeInformation(address _exchange) view returns (tuple(bool exists, address exchangeAddress, bytes4[] sigs))',
    'function getFundFactoryInformation(address _fundFactory) view returns (tuple(bool exists, bytes32 name))',
    'function getName(address _asset) view returns (string)',
    'function getRegisteredAssets() view returns (address[])',
    'function getRegisteredExchangeAdapters() view returns (address[])',
    'function getRegisteredFundFactories() view returns (address[])',
    'function getReserveMin(address _asset) view returns (uint256)',
    'function getSymbol(address _asset) view returns (string)',
    'function incentive() view returns (uint256)',
    'function isFeeRegistered(address) view returns (bool)',
    'function isFund(address _who) view returns (bool)',
    'function isFundFactory(address _who) view returns (bool)',
    'function isHub(address _who) view returns (bool)',
    'function isValidFundName(string _name) pure returns (bool)',
    'function mlnToken() view returns (address)',
    'function nativeAsset() view returns (address)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function registerAsset(address _asset, string _name, string _symbol, string _url, uint256 _reserveMin, uint256[] _standards, bytes4[] _sigs)',
    'function registerExchangeAdapter(address _exchange, address _adapter, bytes4[] _sigs)',
    'function registerFees(address[] _fees)',
    'function registerFund(address _fund, address _owner, string _name)',
    'function registerFundFactory(address _fundFactory, bytes32 _name)',
    'function registeredAssets(uint256) view returns (address)',
    'function registeredExchangeAdapters(uint256) view returns (address)',
    'function registeredFundFactories(uint256) view returns (address)',
    'function removeAsset(address _asset, uint256 _assetIndex)',
    'function removeExchangeAdapter(address _adapter, uint256 _adapterIndex)',
    'function reserveFundName(address _owner, string _name)',
    'function setAuthority(address authority_)',
    'function setEngine(address _engine)',
    'function setIncentive(uint256 _weiAmount)',
    'function setMGM(address _MGM)',
    'function setMlnToken(address _mlnToken)',
    'function setNativeAsset(address _nativeAsset)',
    'function setOwner(address owner_)',
    'function setPriceSource(address _priceSource)',
    'function setSharesRequestor(address _sharesRequestor)',
    'function sharesRequestor() view returns (address)',
    'function updateAsset(address _asset, string _name, string _symbol, string _url, uint256 _reserveMin, uint256[] _standards, bytes4[] _sigs)',
    'function updateExchangeAdapter(address _exchange, address _adapter, bytes4[] _sigs)',
  ];
}

export interface RegistryEthersContract extends ethers.Contract {
  'MAX_FUND_NAME_BYTES()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'MAX_REGISTERED_ENTITIES()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'MGM()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'adapterMethodIsAllowed(address,bytes4)': (
    _adapter: string,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'assetInformation(address)': (
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
  'assetIsRegistered(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'assetMethodIsAllowed(address,bytes4)': (
    _asset: string,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'canUseFundName(address,string)': (
    _user: string,
    _name: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'exchangeAdapterIsRegistered(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'exchangeForAdapter(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'exchangeInformation(address)': (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; exchangeAddress: string }>;
  'fundFactoryInformation(address)': (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; name: string }>;
  'fundFactoryNameExists(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'fundNameHashToOwner(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<string>;
  'fundsToFundFactories(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'getAdapterFunctionSignatures(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'getAssetInformation(address)': (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    exists: boolean;
    name: string;
    symbol: string;
    decimals: ethers.BigNumber;
    url: string;
    reserveMin: ethers.BigNumber;
    standards: ethers.BigNumber[];
    sigs: string;
  }>;
  'getDecimals(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getExchangeInformation(address)': (
    _exchange: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; exchangeAddress: string; sigs: string }>;
  'getFundFactoryInformation(address)': (
    _fundFactory: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; name: string }>;
  'getName(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'getRegisteredAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getRegisteredExchangeAdapters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getRegisteredFundFactories()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getReserveMin(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getSymbol(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'incentive()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'isFeeRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isFund(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isFundFactory(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isHub(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isValidFundName(string)': (_name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'nativeAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'registeredAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'registeredExchangeAdapters(uint256)': (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<string>;
  'registeredFundFactories(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'sharesRequestor()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'deregisterFees(address[])': (
    _fees: string[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'registerAsset(address,string,string,string,uint256,uint256[],bytes4[])': (
    _asset: string,
    _name: string,
    _symbol: string,
    _url: string,
    _reserveMin: ethers.BigNumberish,
    _standards: ethers.BigNumber[],
    _sigs: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'registerExchangeAdapter(address,address,bytes4[])': (
    _exchange: string,
    _adapter: string,
    _sigs: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'registerFees(address[])': (
    _fees: string[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'registerFund(address,address,string)': (
    _fund: string,
    _owner: string,
    _name: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'registerFundFactory(address,bytes32)': (
    _fundFactory: string,
    _name: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'removeAsset(address,uint256)': (
    _asset: string,
    _assetIndex: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'removeExchangeAdapter(address,uint256)': (
    _adapter: string,
    _adapterIndex: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'reserveFundName(address,string)': (
    _owner: string,
    _name: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setAuthority(address)': (
    authority_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setEngine(address)': (
    _engine: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setIncentive(uint256)': (
    _weiAmount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setMGM(address)': (_MGM: string, $$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'setMlnToken(address)': (
    _mlnToken: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setNativeAsset(address)': (
    _nativeAsset: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setOwner(address)': (
    owner_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setPriceSource(address)': (
    _priceSource: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setSharesRequestor(address)': (
    _sharesRequestor: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'updateAsset(address,string,string,string,uint256,uint256[],bytes4[])': (
    _asset: string,
    _name: string,
    _symbol: string,
    _url: string,
    _reserveMin: ethers.BigNumberish,
    _standards: ethers.BigNumber[],
    _sigs: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'updateExchangeAdapter(address,address,bytes4[])': (
    _exchange: string,
    _adapter: string,
    _sigs: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'MAX_FUND_NAME_BYTES()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'MAX_REGISTERED_ENTITIES()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'MGM()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'adapterMethodIsAllowed(address,bytes4)': (
      _adapter: string,
      _sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'assetInformation(address)': (
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
    'assetIsRegistered(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'assetMethodIsAllowed(address,bytes4)': (
      _asset: string,
      _sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'canUseFundName(address,string)': (
      _user: string,
      _name: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchangeAdapterIsRegistered(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'exchangeForAdapter(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchangeInformation(address)': (
      $$0: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exists: boolean; exchangeAddress: string }>;
    'fundFactoryInformation(address)': (
      $$0: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exists: boolean; name: string }>;
    'fundFactoryNameExists(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'fundNameHashToOwner(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'fundsToFundFactories(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAdapterFunctionSignatures(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAssetInformation(address)': (
      _asset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      exists: boolean;
      name: string;
      symbol: string;
      decimals: ethers.BigNumber;
      url: string;
      reserveMin: ethers.BigNumber;
      standards: ethers.BigNumber[];
      sigs: string;
    }>;
    'getDecimals(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getExchangeInformation(address)': (
      _exchange: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exists: boolean; exchangeAddress: string; sigs: string }>;
    'getFundFactoryInformation(address)': (
      _fundFactory: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exists: boolean; name: string }>;
    'getName(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getRegisteredAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getRegisteredExchangeAdapters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getRegisteredFundFactories()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getReserveMin(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getSymbol(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'incentive()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'isFeeRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFund(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFundFactory(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isHub(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isValidFundName(string)': (_name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'nativeAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registeredAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'registeredExchangeAdapters(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'registeredFundFactories(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'sharesRequestor()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'deregisterFees(address[])': (
      _fees: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'registerAsset(address,string,string,string,uint256,uint256[],bytes4[])': (
      _asset: string,
      _name: string,
      _symbol: string,
      _url: string,
      _reserveMin: ethers.BigNumberish,
      _standards: ethers.BigNumber[],
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'registerExchangeAdapter(address,address,bytes4[])': (
      _exchange: string,
      _adapter: string,
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'registerFees(address[])': (
      _fees: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'registerFund(address,address,string)': (
      _fund: string,
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'registerFundFactory(address,bytes32)': (
      _fundFactory: string,
      _name: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'removeAsset(address,uint256)': (
      _asset: string,
      _assetIndex: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'removeExchangeAdapter(address,uint256)': (
      _adapter: string,
      _adapterIndex: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'reserveFundName(address,string)': (
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setEngine(address)': (
      _engine: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setIncentive(uint256)': (
      _weiAmount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setMGM(address)': (_MGM: string, $$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'setMlnToken(address)': (
      _mlnToken: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setNativeAsset(address)': (
      _nativeAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setOwner(address)': (
      owner_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setPriceSource(address)': (
      _priceSource: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setSharesRequestor(address)': (
      _sharesRequestor: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'updateAsset(address,string,string,string,uint256,uint256[],bytes4[])': (
      _asset: string,
      _name: string,
      _symbol: string,
      _url: string,
      _reserveMin: ethers.BigNumberish,
      _standards: ethers.BigNumber[],
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'updateExchangeAdapter(address,address,bytes4[])': (
      _exchange: string,
      _adapter: string,
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'MAX_FUND_NAME_BYTES()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'MAX_REGISTERED_ENTITIES()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'MGM()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'adapterMethodIsAllowed(address,bytes4)': (
      _adapter: string,
      _sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'assetInformation(address)': (
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
    'assetIsRegistered(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'assetMethodIsAllowed(address,bytes4)': (
      _asset: string,
      _sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'canUseFundName(address,string)': (
      _user: string,
      _name: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchangeAdapterIsRegistered(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'exchangeForAdapter(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchangeInformation(address)': (
      $$0: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exists: boolean; exchangeAddress: string }>;
    'fundFactoryInformation(address)': (
      $$0: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exists: boolean; name: string }>;
    'fundFactoryNameExists(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'fundNameHashToOwner(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'fundsToFundFactories(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAdapterFunctionSignatures(address)': (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAssetInformation(address)': (
      _asset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      exists: boolean;
      name: string;
      symbol: string;
      decimals: ethers.BigNumber;
      url: string;
      reserveMin: ethers.BigNumber;
      standards: ethers.BigNumber[];
      sigs: string;
    }>;
    'getDecimals(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getExchangeInformation(address)': (
      _exchange: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exists: boolean; exchangeAddress: string; sigs: string }>;
    'getFundFactoryInformation(address)': (
      _fundFactory: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exists: boolean; name: string }>;
    'getName(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getRegisteredAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getRegisteredExchangeAdapters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getRegisteredFundFactories()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getReserveMin(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getSymbol(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'incentive()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'isFeeRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFund(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFundFactory(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isHub(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isValidFundName(string)': (_name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'nativeAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registeredAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'registeredExchangeAdapters(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'registeredFundFactories(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'sharesRequestor()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'deregisterFees(address[])': (_fees: string[], $$overrides?: ethers.Overrides) => Promise<void>;
    'registerAsset(address,string,string,string,uint256,uint256[],bytes4[])': (
      _asset: string,
      _name: string,
      _symbol: string,
      _url: string,
      _reserveMin: ethers.BigNumberish,
      _standards: ethers.BigNumber[],
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'registerExchangeAdapter(address,address,bytes4[])': (
      _exchange: string,
      _adapter: string,
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'registerFees(address[])': (_fees: string[], $$overrides?: ethers.Overrides) => Promise<void>;
    'registerFund(address,address,string)': (
      _fund: string,
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'registerFundFactory(address,bytes32)': (
      _fundFactory: string,
      _name: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'removeAsset(address,uint256)': (
      _asset: string,
      _assetIndex: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'removeExchangeAdapter(address,uint256)': (
      _adapter: string,
      _adapterIndex: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'reserveFundName(address,string)': (_owner: string, _name: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setEngine(address)': (_engine: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setIncentive(uint256)': (_weiAmount: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'setMGM(address)': (_MGM: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setMlnToken(address)': (_mlnToken: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setNativeAsset(address)': (_nativeAsset: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setPriceSource(address)': (_priceSource: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setSharesRequestor(address)': (_sharesRequestor: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'updateAsset(address,string,string,string,uint256,uint256[],bytes4[])': (
      _asset: string,
      _name: string,
      _symbol: string,
      _url: string,
      _reserveMin: ethers.BigNumberish,
      _standards: ethers.BigNumber[],
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'updateExchangeAdapter(address,address,bytes4[])': (
      _exchange: string,
      _adapter: string,
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'deregisterFees(address[])': (_fees: string[], $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'registerAsset(address,string,string,string,uint256,uint256[],bytes4[])': (
      _asset: string,
      _name: string,
      _symbol: string,
      _url: string,
      _reserveMin: ethers.BigNumberish,
      _standards: ethers.BigNumber[],
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'registerExchangeAdapter(address,address,bytes4[])': (
      _exchange: string,
      _adapter: string,
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'registerFees(address[])': (_fees: string[], $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'registerFund(address,address,string)': (
      _fund: string,
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'registerFundFactory(address,bytes32)': (
      _fundFactory: string,
      _name: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'removeAsset(address,uint256)': (
      _asset: string,
      _assetIndex: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'removeExchangeAdapter(address,uint256)': (
      _adapter: string,
      _adapterIndex: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'reserveFundName(address,string)': (
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setEngine(address)': (_engine: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setIncentive(uint256)': (
      _weiAmount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setMGM(address)': (_MGM: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setMlnToken(address)': (_mlnToken: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setNativeAsset(address)': (_nativeAsset: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setPriceSource(address)': (_priceSource: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setSharesRequestor(address)': (
      _sharesRequestor: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'updateAsset(address,string,string,string,uint256,uint256[],bytes4[])': (
      _asset: string,
      _name: string,
      _symbol: string,
      _url: string,
      _reserveMin: ethers.BigNumberish,
      _standards: ethers.BigNumber[],
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'updateExchangeAdapter(address,address,bytes4[])': (
      _exchange: string,
      _adapter: string,
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'deregisterFees(address[])': (
      _fees: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'registerAsset(address,string,string,string,uint256,uint256[],bytes4[])': (
      _asset: string,
      _name: string,
      _symbol: string,
      _url: string,
      _reserveMin: ethers.BigNumberish,
      _standards: ethers.BigNumber[],
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'registerExchangeAdapter(address,address,bytes4[])': (
      _exchange: string,
      _adapter: string,
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'registerFees(address[])': (_fees: string[], $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'registerFund(address,address,string)': (
      _fund: string,
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'registerFundFactory(address,bytes32)': (
      _fundFactory: string,
      _name: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeAsset(address,uint256)': (
      _asset: string,
      _assetIndex: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeExchangeAdapter(address,uint256)': (
      _adapter: string,
      _adapterIndex: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'reserveFundName(address,string)': (
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setEngine(address)': (_engine: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setIncentive(uint256)': (
      _weiAmount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setMGM(address)': (_MGM: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setMlnToken(address)': (_mlnToken: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setNativeAsset(address)': (
      _nativeAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setPriceSource(address)': (
      _priceSource: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setSharesRequestor(address)': (
      _sharesRequestor: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'updateAsset(address,string,string,string,uint256,uint256[],bytes4[])': (
      _asset: string,
      _name: string,
      _symbol: string,
      _url: string,
      _reserveMin: ethers.BigNumberish,
      _standards: ethers.BigNumber[],
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'updateExchangeAdapter(address,address,bytes4[])': (
      _exchange: string,
      _adapter: string,
      _sigs: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
