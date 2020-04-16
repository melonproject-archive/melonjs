import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../..';

/**
 * Routes external data to smart contractsWhere external data includes sharePrice of Melon fundsPriceFeed operator could be staked and sharePrice input validated on chain
 * @title Price Feed Template
 * @author Melonport AG <team@melonport.com>
 */
export class KyberPriceFeedContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(address ofRegistry, address ofKyberNetworkProxy, uint256 ofMaxSpread, address ofQuoteAsset, address initialUpdater)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event PriceUpdate(address[] token, uint256[] price)',
    'function KYBER_ETH_TOKEN() view returns (address)',
    'function KYBER_NETWORK_PROXY() view returns (address)',
    'function KYBER_PRECISION() view returns (uint256)',
    'function MAX_SPREAD() view returns (uint256)',
    'function QUOTE_ASSET() view returns (address)',
    'function REGISTRY() view returns (address)',
    'function UPDATER() view returns (address)',
    'function VALIDITY_INTERVAL() view returns (uint256)',
    'function authority() view returns (address)',
    'function convertQuantity(uint256 fromAssetQuantity, address fromAsset, address toAsset) view returns (uint256)',
    'function existsPriceOnAssetPair(address sellAsset, address buyAsset) view returns (bool)',
    'function getInvertedPriceInfo(address _asset) view returns (uint256 invertedPrice, uint256 assetDecimals)',
    'function getKyberMaskAsset(address _asset) view returns (address)',
    'function getKyberPrice(address _baseAsset, address _quoteAsset) view returns (bool, uint256)',
    'function getLastUpdate() view returns (uint256)',
    'function getOrderPriceInfo(address sellAsset, uint256 sellQuantity, uint256 buyQuantity) view returns (uint256 orderPrice)',
    'function getPrice(address _asset) view returns (uint256 price, uint256 timestamp)',
    'function getPriceInfo(address _asset) view returns (uint256 price, uint256 assetDecimals)',
    'function getPrices(address[] _assets) view returns (uint256[], uint256[])',
    'function getQuoteAsset() view returns (address)',
    'function getRawReferencePriceInfo(address _baseAsset, address _quoteAsset) view returns (bool isValid, uint256 referencePrice, uint256 decimals)',
    'function getReferencePriceInfo(address _baseAsset, address _quoteAsset) view returns (uint256 referencePrice, uint256 decimals)',
    'function hasValidPrice(address _asset) view returns (bool)',
    'function hasValidPrices(address[] _assets) view returns (bool)',
    'function lastUpdate() view returns (uint256)',
    'function owner() view returns (address)',
    'function prices(address) view returns (uint256)',
    'function setAuthority(address authority_)',
    'function setMaxSpread(uint256 _maxSpread)',
    'function setOwner(address owner_)',
    'function setRegistry(address _newRegistry)',
    'function setUpdater(address _updater)',
    'function setUpdaterToRegistryOwner()',
    'function update()',
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
   * function KYBER_ETH_TOKEN() view returns (address)
   * ```
   *
   */
  KYBER_ETH_TOKEN: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function KYBER_NETWORK_PROXY() view returns (address)
   * ```
   *
   */
  KYBER_NETWORK_PROXY: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function KYBER_PRECISION() view returns (uint256)
   * ```
   *
   */
  KYBER_PRECISION: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function MAX_SPREAD() view returns (uint256)
   * ```
   *
   */
  MAX_SPREAD: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function QUOTE_ASSET() view returns (address)
   * ```
   *
   */
  QUOTE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function REGISTRY() view returns (address)
   * ```
   *
   */
  REGISTRY: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function UPDATER() view returns (address)
   * ```
   *
   */
  UPDATER: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function VALIDITY_INTERVAL() view returns (uint256)
   * ```
   *
   */
  VALIDITY_INTERVAL: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * Get quantity of toAsset equal in value to given quantity of fromAsset
   *
   * ```solidity
   * function convertQuantity(uint256,address,address) view returns (uint256)
   * ```
   *
   */
  convertQuantity: (
    fromAssetQuantity: ethers.BigNumberish,
    fromAsset: string,
    toAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  /**
   * Checks whether data exists for a given asset pair
   *
   * Prices are only upated against QUOTE_ASSET
   *
   * ```solidity
   * function existsPriceOnAssetPair(address,address) view returns (bool)
   * ```
   * @param buyAsset Asset for which check to be done if data exists
   * @param sellAsset Asset for which check to be done if data exists
   */
  existsPriceOnAssetPair: (sellAsset: string, buyAsset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * Gets inverted price of an asset
   *
   * Asset has been initialised and its price is non-zero
   *
   * ```solidity
   * function getInvertedPriceInfo(address) view returns (uint256, uint256)
   * ```
   * @param _asset Asset for which inverted price should be return
   * @returns - `assetDecimals` — Decimal places for this asset }
   * - `invertedPrice` — Price based (instead of quoted) against QUOTE_ASSET
   *
   */
  getInvertedPriceInfo: (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ invertedPrice: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;
  /**
   * Get Kyber representation of ETH if necessary
   *
   * ```solidity
   * function getKyberMaskAsset(address) view returns (address)
   * ```
   *
   */
  getKyberMaskAsset: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * Returns validity and price from Kyber
   *
   * ```solidity
   * function getKyberPrice(address,address) view returns (bool, uint256)
   * ```
   *
   */
  getKyberPrice: (_baseAsset: string, _quoteAsset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getLastUpdate() view returns (uint256)
   * ```
   *
   */
  getLastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * Gets price of Order
   *
   * ```solidity
   * function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   * ```
   * @param buyQuantity Quantity in base units being bought of buyAsset
   * @param sellAsset Address of the asset to be sold
   * @param sellQuantity Quantity in base units being sold of sellAsset
   * @returns Price as determined by an order
   *
   */
  getOrderPriceInfo: (
    sellAsset: string,
    sellQuantity: ethers.BigNumberish,
    buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  /**
   * Gets price of an asset multiplied by ten to the power of assetDecimals
   *
   * Asset has been registered
   *
   * ```solidity
   * function getPrice(address) view returns (uint256, uint256)
   * ```
   * @param _asset Asset for which price should be returned
   * @returns - `price` — Price formatting: mul(exchangePrice, 10 ** decimal), to avoid floating numbers
   * - `timestamp` — When the asset's price was updated }
   *
   */
  getPrice: (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;
  /**
   * ```solidity
   * function getPriceInfo(address) view returns (uint256, uint256)
   * ```
   *
   */
  getPriceInfo: (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;
  /**
   * ```solidity
   * function getPrices(address[]) view returns (uint256[], uint256[])
   * ```
   *
   */
  getPrices: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getQuoteAsset() view returns (address)
   * ```
   *
   */
  getQuoteAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getRawReferencePriceInfo(address,address) view returns (bool, uint256, uint256)
   * ```
   *
   */
  getRawReferencePriceInfo: (
    _baseAsset: string,
    _quoteAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ isValid: boolean; referencePrice: ethers.BigNumber; decimals: ethers.BigNumber }>;
  /**
   * ```solidity
   * function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   * ```
   * @param _baseAsset Address of base asset
   * @param _quoteAsset Address of quote asset
   * @returns - `decimals` — Decimal places for quoteAsset }
   * - `referencePrice` — Quantity of quoteAsset per whole baseAsset
   *
   */
  getReferencePriceInfo: (
    _baseAsset: string,
    _quoteAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ referencePrice: ethers.BigNumber; decimals: ethers.BigNumber }>;
  /**
   * ```solidity
   * function hasValidPrice(address) view returns (bool)
   * ```
   *
   */
  hasValidPrice: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function hasValidPrices(address[]) view returns (bool)
   * ```
   *
   */
  hasValidPrices: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function lastUpdate() view returns (uint256)
   * ```
   *
   */
  lastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function owner() view returns (address)
   * ```
   *
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function prices(address) view returns (uint256)
   * ```
   *
   */
  prices: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function setAuthority(address)
   * ```
   *
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * _maxSpread becomes a percentage when divided by 10^18(e.g. 10^17 becomes 10%)
   *
   * ```solidity
   * function setMaxSpread(uint256)
   * ```
   *
   */
  setMaxSpread: (_maxSpread: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setOwner(address)
   * ```
   *
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setRegistry(address)
   * ```
   *
   */
  setRegistry: (_newRegistry: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setUpdater(address)
   * ```
   *
   */
  setUpdater: (_updater: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setUpdaterToRegistryOwner()
   * ```
   *
   */
  setUpdaterToRegistryOwner: () => TransactionWrapper<ethers.Overrides>;
  /**
   * Stores zero as a convention for invalid price
   *
   * ```solidity
   * function update()
   * ```
   *
   */
  update: () => TransactionWrapper<ethers.Overrides>;
}
