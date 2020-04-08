import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Registry extends Contract {
  public readonly ethers: RegistryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Registry` contract call for the `MAX_FUND_NAME_BYTES` function.
   *
   * @contract Registry
   * @signature MAX_FUND_NAME_BYTES()
   * @method function MAX_FUND_NAME_BYTES() view returns (uint8)
   */
  MAX_FUND_NAME_BYTES: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `Registry` contract call for the `MAX_REGISTERED_ENTITIES` function.
   *
   * @contract Registry
   * @signature MAX_REGISTERED_ENTITIES()
   * @method function MAX_REGISTERED_ENTITIES() view returns (uint8)
   */
  MAX_REGISTERED_ENTITIES: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `Registry` contract call for the `MGM` function.
   *
   * @contract Registry
   * @signature MGM()
   * @method function MGM() view returns (address)
   */
  MGM: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `adapterMethodIsAllowed` function.
   *
   * @contract Registry
   * @signature adapterMethodIsAllowed(address,bytes4)
   * @method function adapterMethodIsAllowed(address,bytes4) view returns (bool)
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
   * @signature assetInformation(address)
   * @method function assetInformation(address) view returns (bool, string, string, uint256, string, uint256)
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
   * @signature assetIsRegistered(address)
   * @method function assetIsRegistered(address) view returns (bool)
   */
  assetIsRegistered: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `assetMethodIsAllowed` function.
   *
   * @contract Registry
   * @signature assetMethodIsAllowed(address,bytes4)
   * @method function assetMethodIsAllowed(address,bytes4) view returns (bool)
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
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `canUseFundName` function.
   *
   * @contract Registry
   * @signature canUseFundName(address,string)
   * @method function canUseFundName(address,string) view returns (bool)
   */
  canUseFundName: (_user: string, _name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `engine` function.
   *
   * @contract Registry
   * @signature engine()
   * @method function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `exchangeAdapterIsRegistered` function.
   *
   * @contract Registry
   * @signature exchangeAdapterIsRegistered(address)
   * @method function exchangeAdapterIsRegistered(address) view returns (bool)
   */
  exchangeAdapterIsRegistered: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `exchangeForAdapter` function.
   *
   * @contract Registry
   * @signature exchangeForAdapter(address)
   * @method function exchangeForAdapter(address) view returns (address)
   */
  exchangeForAdapter: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `exchangeInformation` function.
   *
   * @contract Registry
   * @signature exchangeInformation(address)
   * @method function exchangeInformation(address) view returns (bool, address)
   */
  exchangeInformation: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; exchangeAddress: string }>;

  /**
   * `Registry` contract call for the `fundFactoryInformation` function.
   *
   * @contract Registry
   * @signature fundFactoryInformation(address)
   * @method function fundFactoryInformation(address) view returns (bool, bytes32)
   */
  fundFactoryInformation: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; name: string }>;

  /**
   * `Registry` contract call for the `fundFactoryNameExists` function.
   *
   * @contract Registry
   * @signature fundFactoryNameExists(bytes32)
   * @method function fundFactoryNameExists(bytes32) view returns (bool)
   */
  fundFactoryNameExists: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `fundNameHashToOwner` function.
   *
   * @contract Registry
   * @signature fundNameHashToOwner(bytes32)
   * @method function fundNameHashToOwner(bytes32) view returns (address)
   */
  fundNameHashToOwner: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `fundsToFundFactories` function.
   *
   * @contract Registry
   * @signature fundsToFundFactories(address)
   * @method function fundsToFundFactories(address) view returns (address)
   */
  fundsToFundFactories: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `getAdapterFunctionSignatures` function.
   *
   * @contract Registry
   * @signature getAdapterFunctionSignatures(address)
   * @method function getAdapterFunctionSignatures(address) view returns (bytes4[])
   */
  getAdapterFunctionSignatures: (_adapter: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `getAssetInformation` function.
   *
   * @contract Registry
   * @signature getAssetInformation(address)
   * @method function getAssetInformation(address) view returns (tuple(bool,string,string,uint256,string,uint256,uint256[],bytes4[]))
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
   * `Registry` contract call for the `getDecimals` function.
   *
   * @contract Registry
   * @signature getDecimals(address)
   * @method function getDecimals(address) view returns (uint256)
   */
  getDecimals: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Registry` contract call for the `getExchangeInformation` function.
   *
   * @contract Registry
   * @signature getExchangeInformation(address)
   * @method function getExchangeInformation(address) view returns (tuple(bool,address,bytes4[]))
   */
  getExchangeInformation: (
    _exchange: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; exchangeAddress: string; sigs: string }>;

  /**
   * `Registry` contract call for the `getFundFactoryInformation` function.
   *
   * @contract Registry
   * @signature getFundFactoryInformation(address)
   * @method function getFundFactoryInformation(address) view returns (tuple(bool,bytes32))
   */
  getFundFactoryInformation: (
    _fundFactory: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; name: string }>;

  /**
   * `Registry` contract call for the `getName` function.
   *
   * @contract Registry
   * @signature getName(address)
   * @method function getName(address) view returns (string)
   */
  getName: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `getRegisteredAssets` function.
   *
   * @contract Registry
   * @signature getRegisteredAssets()
   * @method function getRegisteredAssets() view returns (address[])
   */
  getRegisteredAssets: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Registry` contract call for the `getRegisteredExchangeAdapters` function.
   *
   * @contract Registry
   * @signature getRegisteredExchangeAdapters()
   * @method function getRegisteredExchangeAdapters() view returns (address[])
   */
  getRegisteredExchangeAdapters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Registry` contract call for the `getRegisteredFundFactories` function.
   *
   * @contract Registry
   * @signature getRegisteredFundFactories()
   * @method function getRegisteredFundFactories() view returns (address[])
   */
  getRegisteredFundFactories: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Registry` contract call for the `getReserveMin` function.
   *
   * @contract Registry
   * @signature getReserveMin(address)
   * @method function getReserveMin(address) view returns (uint256)
   */
  getReserveMin: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Registry` contract call for the `getSymbol` function.
   *
   * @contract Registry
   * @signature getSymbol(address)
   * @method function getSymbol(address) view returns (string)
   */
  getSymbol: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `incentive` function.
   *
   * @contract Registry
   * @signature incentive()
   * @method function incentive() view returns (uint256)
   */
  incentive: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Registry` contract call for the `isFeeRegistered` function.
   *
   * @contract Registry
   * @signature isFeeRegistered(address)
   * @method function isFeeRegistered(address) view returns (bool)
   */
  isFeeRegistered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `isFund` function.
   *
   * @contract Registry
   * @signature isFund(address)
   * @method function isFund(address) view returns (bool)
   */
  isFund: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `isFundFactory` function.
   *
   * @contract Registry
   * @signature isFundFactory(address)
   * @method function isFundFactory(address) view returns (bool)
   */
  isFundFactory: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `isHub` function.
   *
   * @contract Registry
   * @signature isHub(address)
   * @method function isHub(address) view returns (bool)
   */
  isHub: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `isValidFundName` function.
   *
   * @contract Registry
   * @signature isValidFundName(string)
   * @method function isValidFundName(string) pure returns (bool)
   */
  isValidFundName: (_name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Registry` contract call for the `mlnToken` function.
   *
   * @contract Registry
   * @signature mlnToken()
   * @method function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `nativeAsset` function.
   *
   * @contract Registry
   * @signature nativeAsset()
   * @method function nativeAsset() view returns (address)
   */
  nativeAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `owner` function.
   *
   * @contract Registry
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `priceSource` function.
   *
   * @contract Registry
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `registeredAssets` function.
   *
   * @contract Registry
   * @signature registeredAssets(uint256)
   * @method function registeredAssets(uint256) view returns (address)
   */
  registeredAssets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `registeredExchangeAdapters` function.
   *
   * @contract Registry
   * @signature registeredExchangeAdapters(uint256)
   * @method function registeredExchangeAdapters(uint256) view returns (address)
   */
  registeredExchangeAdapters: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `registeredFundFactories` function.
   *
   * @contract Registry
   * @signature registeredFundFactories(uint256)
   * @method function registeredFundFactories(uint256) view returns (address)
   */
  registeredFundFactories: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract call for the `sharesRequestor` function.
   *
   * @contract Registry
   * @signature sharesRequestor()
   * @method function sharesRequestor() view returns (address)
   */
  sharesRequestor: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Registry` contract transaction for `deregisterFees` function.
   *
   * @contract Registry
   * @signature deregisterFees(address[])
   * @method function deregisterFees(address[])
   */
  deregisterFees: (_fees: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `registerAsset` function.
   *
   * @contract Registry
   * @signature registerAsset(address,string,string,string,uint256,uint256[],bytes4[])
   * @method function registerAsset(address,string,string,string,uint256,uint256[],bytes4[])
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
   * @signature registerExchangeAdapter(address,address,bytes4[])
   * @method function registerExchangeAdapter(address,address,bytes4[])
   */
  registerExchangeAdapter: (
    _exchange: string,
    _adapter: string,
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `registerFees` function.
   *
   * @contract Registry
   * @signature registerFees(address[])
   * @method function registerFees(address[])
   */
  registerFees: (_fees: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `registerFund` function.
   *
   * @contract Registry
   * @signature registerFund(address,address,string)
   * @method function registerFund(address,address,string)
   */
  registerFund: (_fund: string, _owner: string, _name: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `registerFundFactory` function.
   *
   * @contract Registry
   * @signature registerFundFactory(address,bytes32)
   * @method function registerFundFactory(address,bytes32)
   */
  registerFundFactory: (
    _fundFactory: string,
    _name: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `removeAsset` function.
   *
   * @contract Registry
   * @signature removeAsset(address,uint256)
   * @method function removeAsset(address,uint256)
   */
  removeAsset: (_asset: string, _assetIndex: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `removeExchangeAdapter` function.
   *
   * @contract Registry
   * @signature removeExchangeAdapter(address,uint256)
   * @method function removeExchangeAdapter(address,uint256)
   */
  removeExchangeAdapter: (_adapter: string, _adapterIndex: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `reserveFundName` function.
   *
   * @contract Registry
   * @signature reserveFundName(address,string)
   * @method function reserveFundName(address,string)
   */
  reserveFundName: (_owner: string, _name: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setAuthority` function.
   *
   * @contract Registry
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setEngine` function.
   *
   * @contract Registry
   * @signature setEngine(address)
   * @method function setEngine(address)
   */
  setEngine: (_engine: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setIncentive` function.
   *
   * @contract Registry
   * @signature setIncentive(uint256)
   * @method function setIncentive(uint256)
   */
  setIncentive: (_weiAmount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setMGM` function.
   *
   * @contract Registry
   * @signature setMGM(address)
   * @method function setMGM(address)
   */
  setMGM: (_MGM: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setMlnToken` function.
   *
   * @contract Registry
   * @signature setMlnToken(address)
   * @method function setMlnToken(address)
   */
  setMlnToken: (_mlnToken: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setNativeAsset` function.
   *
   * @contract Registry
   * @signature setNativeAsset(address)
   * @method function setNativeAsset(address)
   */
  setNativeAsset: (_nativeAsset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setOwner` function.
   *
   * @contract Registry
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setPriceSource` function.
   *
   * @contract Registry
   * @signature setPriceSource(address)
   * @method function setPriceSource(address)
   */
  setPriceSource: (_priceSource: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `setSharesRequestor` function.
   *
   * @contract Registry
   * @signature setSharesRequestor(address)
   * @method function setSharesRequestor(address)
   */
  setSharesRequestor: (_sharesRequestor: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Registry` contract transaction for `updateAsset` function.
   *
   * @contract Registry
   * @signature updateAsset(address,string,string,string,uint256,uint256[],bytes4[])
   * @method function updateAsset(address,string,string,string,uint256,uint256[],bytes4[])
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
   * @signature updateExchangeAdapter(address,address,bytes4[])
   * @method function updateExchangeAdapter(address,address,bytes4[])
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
