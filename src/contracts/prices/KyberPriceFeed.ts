import { ethers } from 'ethers';
import { Contract, TransactionWrapper, AddressLike, DeploymentTransactionWrapper } from './../..';

export class KyberPriceFeed extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(address _registry, address _kyberNetworkProxy, uint256 _maxSpread, address _quoteAsset, uint256 _maxPriceDeviation)',
    'event MaxPriceDeviationSet(uint256 maxPriceDeviation)',
    'event MaxSpreadSet(uint256 maxSpread)',
    'event PricesUpdated(address[] assets, uint256[] prices)',
    'event RegistrySet(address newRegistry)',
    'event UpdaterSet(address updater)',
    'function KYBER_NETWORK_PROXY() view returns (address)',
    'function KYBER_PRECISION() view returns (uint8)',
    'function QUOTE_ASSET() view returns (address)',
    'function VALIDITY_INTERVAL() view returns (uint32)',
    'function convertQuantity(uint256 _fromAssetQuantity, address _fromAsset, address _toAsset) view returns (uint256 toAssetQuantity_)',
    'function getKyberPrice(address _baseAsset, address _quoteAsset) view returns (bool validity_, uint256 kyberPrice_)',
    'function getOrderPriceInfo(address _sellAsset, uint256 _sellQuantity, uint256 _buyQuantity) view returns (uint256 orderPrice_)',
    'function getPrice(address _asset) view returns (uint256 price_, uint256 timestamp_)',
    'function getPrices(address[] _assets) view returns (uint256[] prices_, uint256[] timestamps_)',
    'function getReferencePriceInfo(address _baseAsset, address _quoteAsset) view returns (uint256 referencePrice_, uint256 decimals_)',
    'function hasValidPrice(address _asset) view returns (bool isValid_)',
    'function hasValidPrices(address[] _assets) view returns (bool allValid_)',
    'function lastUpdate() view returns (uint256)',
    'function maxPriceDeviation() view returns (uint256)',
    'function maxSpread() view returns (uint256)',
    'function prices(address) view returns (uint256)',
    'function registry() view returns (address)',
    'function setMaxPriceDeviation(uint256 _newMaxPriceDeviation)',
    'function setMaxSpread(uint256 _newMaxSpread)',
    'function setRegistry(address _newRegistry)',
    'function setUpdater(address _newUpdater)',
    'function update(address[] _saneAssets, uint256[] _sanePrices, bool _failIfInvalid)',
    'function updater() view returns (address)',
  ];

  /**
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(
    bytecode: string,
    signer: ethers.Signer,
    _registry: AddressLike,
    _kyberNetworkProxy: AddressLike,
    _maxSpread: ethers.BigNumber,
    _quoteAsset: AddressLike,
    _maxPriceDeviation: ethers.BigNumber,
  ) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [
      _registry,
      _kyberNetworkProxy,
      _maxSpread,
      _quoteAsset,
      _maxPriceDeviation,
    ]);
  }

  /**
   * ```solidity
   * function KYBER_NETWORK_PROXY() view returns (address)
   * ```
   *
   */
  KYBER_NETWORK_PROXY: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function KYBER_PRECISION() view returns (uint8)
   * ```
   *
   */
  KYBER_PRECISION: ($$overrides?: ethers.CallOverrides) => Promise<number>;
  /**
   * ```solidity
   * function QUOTE_ASSET() view returns (address)
   * ```
   *
   */
  QUOTE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function VALIDITY_INTERVAL() view returns (uint32)
   * ```
   *
   */
  VALIDITY_INTERVAL: ($$overrides?: ethers.CallOverrides) => Promise<number>;
  /**
   * ```solidity
   * function convertQuantity(uint256,address,address) view returns (uint256)
   * ```
   *
   */
  convertQuantity: (
    _fromAssetQuantity: ethers.BigNumberish,
    _fromAsset: AddressLike,
    _toAsset: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getKyberPrice(address,address) view returns (bool, uint256)
   * ```
   *
   */
  getKyberPrice: (
    _baseAsset: AddressLike,
    _quoteAsset: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ validity_: boolean; kyberPrice_: ethers.BigNumber }>;
  /**
   * ```solidity
   * function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   * ```
   *
   */
  getOrderPriceInfo: (
    _sellAsset: AddressLike,
    _sellQuantity: ethers.BigNumberish,
    _buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getPrice(address) view returns (uint256, uint256)
   * ```
   *
   */
  getPrice: (
    _asset: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price_: ethers.BigNumber; timestamp_: ethers.BigNumber }>;
  /**
   * ```solidity
   * function getPrices(address[]) view returns (uint256[], uint256[])
   * ```
   *
   */
  getPrices: (
    _assets: AddressLike[],
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    prices_: ethers.BigNumber[];
    timestamps_: ethers.BigNumber[];
  }>;
  /**
   * ```solidity
   * function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   * ```
   *
   */
  getReferencePriceInfo: (
    _baseAsset: AddressLike,
    _quoteAsset: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    referencePrice_: ethers.BigNumber;
    decimals_: ethers.BigNumber;
  }>;
  /**
   * ```solidity
   * function hasValidPrice(address) view returns (bool)
   * ```
   *
   */
  hasValidPrice: (_asset: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function hasValidPrices(address[]) view returns (bool)
   * ```
   *
   */
  hasValidPrices: (_assets: AddressLike[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function lastUpdate() view returns (uint256)
   * ```
   *
   */
  lastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function maxPriceDeviation() view returns (uint256)
   * ```
   *
   */
  maxPriceDeviation: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function maxSpread() view returns (uint256)
   * ```
   *
   */
  maxSpread: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function prices(address) view returns (uint256)
   * ```
   *
   */
  prices: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function registry() view returns (address)
   * ```
   *
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function updater() view returns (address)
   * ```
   *
   */
  updater: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function setMaxPriceDeviation(uint256)
   * ```
   *
   */
  setMaxPriceDeviation: (_newMaxPriceDeviation: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setMaxSpread(uint256)
   * ```
   *
   */
  setMaxSpread: (_newMaxSpread: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setRegistry(address)
   * ```
   *
   */
  setRegistry: (_newRegistry: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setUpdater(address)
   * ```
   *
   */
  setUpdater: (_newUpdater: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function update(address[],uint256[],bool)
   * ```
   *
   */
  update: (
    _saneAssets: AddressLike[],
    _sanePrices: ethers.BigNumber[],
    _failIfInvalid: boolean,
  ) => TransactionWrapper<ethers.Overrides>;
}
