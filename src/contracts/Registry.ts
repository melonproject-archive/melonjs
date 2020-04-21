import { ethers } from 'ethers';
import { Contract, TransactionWrapper, AddressLike, DeploymentTransactionWrapper } from './..';

export class Registry extends Contract {
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
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(bytecode: string, signer: ethers.Signer, _postDeployOwner: AddressLike) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [_postDeployOwner]);
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
  MGM: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function adapterMethodIsAllowed(address,bytes4) view returns (bool)
   * ```
   *
   */
  adapterMethodIsAllowed: (
    _adapter: AddressLike,
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
    $$0: AddressLike,
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
  assetIsRegistered: (_asset: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function assetMethodIsAllowed(address,bytes4) view returns (bool)
   * ```
   *
   */
  assetMethodIsAllowed: (
    _asset: AddressLike,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function canUseFundName(address,string) view returns (bool)
   * ```
   *
   */
  canUseFundName: (_user: AddressLike, _name: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function engine() view returns (address)
   * ```
   *
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function ethfinexWrapperRegistry() view returns (address)
   * ```
   *
   */
  ethfinexWrapperRegistry: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function exchangeAdapterIsRegistered(address) view returns (bool)
   * ```
   *
   */
  exchangeAdapterIsRegistered: (_adapter: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function exchangeForAdapter(address) view returns (address)
   * ```
   *
   */
  exchangeForAdapter: (_adapter: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function exchangeInformation(address) view returns (bool, address, bool)
   * ```
   *
   */
  exchangeInformation: (
    $$0: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    exists: boolean;
    exchangeAddress: AddressLike;
    takesCustody: boolean;
  }>;
  /**
   * ```solidity
   * function fundNameHashToOwner(bytes32) view returns (address)
   * ```
   *
   */
  fundNameHashToOwner: (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<AddressLike>;
  /**
   * ```solidity
   * function fundsToVersions(address) view returns (address)
   * ```
   *
   */
  fundsToVersions: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function getAdapterFunctionSignatures(address) view returns (bytes4[])
   * ```
   *
   */
  getAdapterFunctionSignatures: (_adapter: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getDecimals(address) view returns (uint256)
   * ```
   *
   */
  getDecimals: (_asset: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getExchangeInformation(address) view returns (address, bool)
   * ```
   *
   */
  getExchangeInformation: (_adapter: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getName(address) view returns (string)
   * ```
   *
   */
  getName: (_asset: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getRegisteredAssets() view returns (address[])
   * ```
   *
   */
  getRegisteredAssets: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike[]>;
  /**
   * ```solidity
   * function getRegisteredExchangeAdapters() view returns (address[])
   * ```
   *
   */
  getRegisteredExchangeAdapters: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike[]>;
  /**
   * ```solidity
   * function getRegisteredVersions() view returns (address[])
   * ```
   *
   */
  getRegisteredVersions: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike[]>;
  /**
   * ```solidity
   * function getReserveMin(address) view returns (uint256)
   * ```
   *
   */
  getReserveMin: (_asset: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getSymbol(address) view returns (string)
   * ```
   *
   */
  getSymbol: (_asset: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<string>;
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
  isFeeRegistered: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isFund(address) view returns (bool)
   * ```
   *
   */
  isFund: (_who: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isFundFactory(address) view returns (bool)
   * ```
   *
   */
  isFundFactory: (_who: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
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
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function nativeAsset() view returns (address)
   * ```
   *
   */
  nativeAsset: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function owner() view returns (address)
   * ```
   *
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   *
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function registeredAssets(uint256) view returns (address)
   * ```
   *
   */
  registeredAssets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function registeredExchangeAdapters(uint256) view returns (address)
   * ```
   *
   */
  registeredExchangeAdapters: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function registeredVersions(uint256) view returns (address)
   * ```
   *
   */
  registeredVersions: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function versionInformation(address) view returns (bool, bytes32)
   * ```
   *
   */
  versionInformation: (
    $$0: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exists: boolean; name: string }>;
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
  deregisterFees: (_fees: AddressLike[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function registerAsset(address,string,string,string,uint256,uint256[],bytes4[])
   * ```
   *
   */
  registerAsset: (
    _asset: AddressLike,
    _name: string,
    _symbol: string,
    _url: string,
    _reserveMin: ethers.BigNumberish,
    _standards: ethers.BigNumber[],
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function registerExchangeAdapter(address,address,bool,bytes4[])
   * ```
   *
   */
  registerExchangeAdapter: (
    _exchange: AddressLike,
    _adapter: AddressLike,
    _takesCustody: boolean,
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function registerFees(address[])
   * ```
   *
   */
  registerFees: (_fees: AddressLike[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function registerFund(address,address,string)
   * ```
   *
   */
  registerFund: (_fund: AddressLike, _owner: AddressLike, _name: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function registerVersion(address,bytes32)
   * ```
   *
   */
  registerVersion: (
    _version: AddressLike,
    _name: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function removeAsset(address,uint256)
   * ```
   *
   */
  removeAsset: (_asset: AddressLike, _assetIndex: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function removeExchangeAdapter(address,uint256)
   * ```
   *
   */
  removeExchangeAdapter: (
    _adapter: AddressLike,
    _adapterIndex: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function reserveFundName(address,string)
   * ```
   *
   */
  reserveFundName: (_owner: AddressLike, _name: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setAuthority(address)
   * ```
   *
   */
  setAuthority: (authority_: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setEngine(address)
   * ```
   *
   */
  setEngine: (_engine: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setEthfinexWrapperRegistry(address)
   * ```
   *
   */
  setEthfinexWrapperRegistry: (_registry: AddressLike) => TransactionWrapper<ethers.Overrides>;
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
  setMGM: (_MGM: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setMlnToken(address)
   * ```
   *
   */
  setMlnToken: (_mlnToken: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setNativeAsset(address)
   * ```
   *
   */
  setNativeAsset: (_nativeAsset: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setOwner(address)
   * ```
   *
   */
  setOwner: (owner_: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setPriceSource(address)
   * ```
   *
   */
  setPriceSource: (_priceSource: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function updateAsset(address,string,string,string,uint256,uint256[],bytes4[])
   * ```
   *
   */
  updateAsset: (
    _asset: AddressLike,
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
    _exchange: AddressLike,
    _adapter: AddressLike,
    _takesCustody: boolean,
    _sigs: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
}
