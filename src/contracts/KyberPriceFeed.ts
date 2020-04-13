import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

/**
 * Price Feed Template
 *
 * Routes external prices to smart contracts from Kyber
 *
 * @author Melonport AG <team@melonport.com>
 */
export class KyberPriceFeedContract extends Contract {
  public readonly ethers: KyberPriceFeedEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `KyberPriceFeed` contract call for `KYBER_NETWORK_PROXY` function.
   *
   * ```solidity
   * function KYBER_NETWORK_PROXY() view returns (address)
   * ```
   */
  KYBER_NETWORK_PROXY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for `KYBER_PRECISION` function.
   *
   * ```solidity
   * function KYBER_PRECISION() view returns (uint8)
   * ```
   */
  KYBER_PRECISION: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `KyberPriceFeed` contract call for `QUOTE_ASSET` function.
   *
   * ```solidity
   * function QUOTE_ASSET() view returns (address)
   * ```
   */
  QUOTE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for `VALIDITY_INTERVAL` function.
   *
   * ```solidity
   * function VALIDITY_INTERVAL() view returns (uint32)
   * ```
   */
  VALIDITY_INTERVAL: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * Get quantity of _toAsset equal in value to some quantity of _fromAsset
   *
   * ```solidity
   * function convertQuantity(uint256,address,address) view returns (uint256)
   * ```
   *
   * @param _fromAsset Address of _fromAsset
   * @param _fromAssetQuantity Amount of _fromAsset
   * @param _toAsset Address of _toAsset
   * @returns Amount of _toAsset equal in value to _fromAssetQuantity
   */
  convertQuantity: (
    _fromAssetQuantity: ethers.BigNumberish,
    _fromAsset: string,
    _toAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * Returns validity and price for some pair of assets from Kyber
   *
   * ```solidity
   * function getKyberPrice(address,address) view returns (bool, uint256)
   * ```
   *
   * @param _baseAsset Address of base asset from the pair
   * @param _quoteAsset Address of quote asset from the pair
   * @returns
   *   - `kyberPrice_` — The price of _baseAsset in terms of _quoteAsset
   *   - `validity_` — Whether the price for this pair is valid
   */
  getKyberPrice: (
    _baseAsset: string,
    _quoteAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ validity_: boolean; kyberPrice_: ethers.BigNumber }>;

  /**
   * Returns price as determined by an order
   *
   * ```solidity
   * function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   * ```
   *
   * @param _buyQuantity Quantity (in base units) of _buyAsset being bought
   * @param _sellAsset Address of the asset to be sold
   * @param _sellQuantity Quantity (in base units) of _sellAsset being sold
   * @returns Price determined by buy/sell quantities
   */
  getOrderPriceInfo: (
    _sellAsset: string,
    _sellQuantity: ethers.BigNumberish,
    _buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * Gets price of an asset times 10^assetDecimals
   *
   * Asset must be registered
   *
   * ```solidity
   * function getPrice(address) view returns (uint256, uint256)
   * ```
   *
   * @param _asset Asset for which price should be returned
   * @returns
   *   - `price_` — Formatting: exchangePrice * 10^decimals (to avoid floating point)
   *   - `timestamp_` — When the asset's price was last updated
   */
  getPrice: (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price_: ethers.BigNumber; timestamp_: ethers.BigNumber }>;

  /**
   * Return getPrice for each of _assets
   *
   * ```solidity
   * function getPrices(address[]) view returns (uint256[], uint256[])
   * ```
   *
   * @param _assets Assets for which prices should be returned
   * @returns
   *   - `prices_` — Prices for each of the assets_
   *   - `timestamps_` — Update times for each of the assets_
   */
  getPrices: (
    _assets: string[],
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ prices_: ethers.BigNumber[]; timestamps_: ethers.BigNumber[] }>;

  /**
   * Get price of an asset in terms of some quote asset, plus the quote asset's decimalsThis function reverts if either the base or quote have invalid prices
   *
   * ```solidity
   * function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   * ```
   *
   * @param _baseAsset Address of base asset
   * @param _quoteAsset Address of quote asset
   * @returns
   *   - `decimals_` — Decimal places for _quoteAsset
   *   - `referencePrice_` — Quantity of _quoteAsset per whole _baseAsset
   */
  getReferencePriceInfo: (
    _baseAsset: string,
    _quoteAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ referencePrice_: ethers.BigNumber; decimals_: ethers.BigNumber }>;

  /**
   * Whether an asset is registered and has a fresh price
   *
   * ```solidity
   * function hasValidPrice(address) view returns (bool)
   * ```
   *
   * @param _asset Asset to check for a valid price
   * @returns whether price of _asset is valid
   */
  hasValidPrice: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * Whether each of the _assets is registered and has a fresh price
   *
   * ```solidity
   * function hasValidPrices(address[]) view returns (bool)
   * ```
   *
   * @param _assets Assets for which validity information should be returned
   * @returns Validity of prices for each of _assets (true/false)
   */
  hasValidPrices: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberPriceFeed` contract call for `lastUpdate` function.
   *
   * ```solidity
   * function lastUpdate() view returns (uint256)
   * ```
   */
  lastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for `maxPriceDeviation` function.
   *
   * ```solidity
   * function maxPriceDeviation() view returns (uint256)
   * ```
   */
  maxPriceDeviation: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for `maxSpread` function.
   *
   * ```solidity
   * function maxSpread() view returns (uint256)
   * ```
   */
  maxSpread: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for `prices` function.
   *
   * ```solidity
   * function prices(address) view returns (uint256)
   * ```
   */
  prices: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for `registry` function.
   *
   * ```solidity
   * function registry() view returns (address)
   * ```
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for `updater` function.
   *
   * ```solidity
   * function updater() view returns (address)
   * ```
   */
  updater: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * Update maximum price deviation between price hints and Kyber pricePrice deviation becomes a % when divided by 10^18 (e.g. 10^17 becomes 10%)
   *
   * ```solidity
   * function setMaxPriceDeviation(uint256)
   * ```
   *
   * @param _newMaxPriceDeviation New maximum price deviation
   */
  setMaxPriceDeviation: (_newMaxPriceDeviation: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * Update maximum spread for prices derived from KyberMax spread becomes a % when divided by 10^18 (e.g. 10^17 becomes 10%)
   *
   * ```solidity
   * function setMaxSpread(uint256)
   * ```
   *
   * @param _newMaxSpread New maximum spread
   */
  setMaxSpread: (_newMaxSpread: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * Update this feed's Registry reference
   *
   * ```solidity
   * function setRegistry(address)
   * ```
   *
   * @param _newRegistry New Registry this feed should point to
   */
  setRegistry: (_newRegistry: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * Update this feed's designated updater
   *
   * ```solidity
   * function setUpdater(address)
   * ```
   *
   * @param _newUpdater New designated updater for this feed
   */
  setUpdater: (_newUpdater: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * Update prices for registered assets
   *
   * Stores zero as a convention for invalid price
   *
   * ```solidity
   * function update(address[],uint256[])
   * ```
   *
   * @param _saneAssets Asset addresses (must match assets array from getRegisteredAssets)
   * @param _sanePrices Asset price hints (checked against prices from Kyber)
   */
  update: (_saneAssets: string[], _sanePrices: ethers.BigNumber[]) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
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
    'function update(address[] _saneAssets, uint256[] _sanePrices)',
    'function updater() view returns (address)',
  ];
}

export interface KyberPriceFeedEthersContract extends ethers.Contract {
  'KYBER_NETWORK_PROXY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'KYBER_PRECISION()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'QUOTE_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'VALIDITY_INTERVAL()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'convertQuantity(uint256,address,address)': (
    _fromAssetQuantity: ethers.BigNumberish,
    _fromAsset: string,
    _toAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getKyberPrice(address,address)': (
    _baseAsset: string,
    _quoteAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ validity_: boolean; kyberPrice_: ethers.BigNumber }>;
  'getOrderPriceInfo(address,uint256,uint256)': (
    _sellAsset: string,
    _sellQuantity: ethers.BigNumberish,
    _buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getPrice(address)': (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price_: ethers.BigNumber; timestamp_: ethers.BigNumber }>;
  'getPrices(address[])': (
    _assets: string[],
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ prices_: ethers.BigNumber[]; timestamps_: ethers.BigNumber[] }>;
  'getReferencePriceInfo(address,address)': (
    _baseAsset: string,
    _quoteAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ referencePrice_: ethers.BigNumber; decimals_: ethers.BigNumber }>;
  'hasValidPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'hasValidPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'lastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'maxPriceDeviation()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'maxSpread()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'prices(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'updater()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'setMaxPriceDeviation(uint256)': (
    _newMaxPriceDeviation: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setMaxSpread(uint256)': (
    _newMaxSpread: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setRegistry(address)': (
    _newRegistry: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setUpdater(address)': (
    _newUpdater: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'update(address[],uint256[])': (
    _saneAssets: string[],
    _sanePrices: ethers.BigNumber[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'KYBER_NETWORK_PROXY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'KYBER_PRECISION()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'QUOTE_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'VALIDITY_INTERVAL()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'convertQuantity(uint256,address,address)': (
      _fromAssetQuantity: ethers.BigNumberish,
      _fromAsset: string,
      _toAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getKyberPrice(address,address)': (
      _baseAsset: string,
      _quoteAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ validity_: boolean; kyberPrice_: ethers.BigNumber }>;
    'getOrderPriceInfo(address,uint256,uint256)': (
      _sellAsset: string,
      _sellQuantity: ethers.BigNumberish,
      _buyQuantity: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getPrice(address)': (
      _asset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ price_: ethers.BigNumber; timestamp_: ethers.BigNumber }>;
    'getPrices(address[])': (
      _assets: string[],
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ prices_: ethers.BigNumber[]; timestamps_: ethers.BigNumber[] }>;
    'getReferencePriceInfo(address,address)': (
      _baseAsset: string,
      _quoteAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ referencePrice_: ethers.BigNumber; decimals_: ethers.BigNumber }>;
    'hasValidPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'hasValidPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'lastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'maxPriceDeviation()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'maxSpread()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'prices(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'updater()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'setMaxPriceDeviation(uint256)': (
      _newMaxPriceDeviation: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setMaxSpread(uint256)': (
      _newMaxSpread: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setRegistry(address)': (
      _newRegistry: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setUpdater(address)': (
      _newUpdater: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'update(address[],uint256[])': (
      _saneAssets: string[],
      _sanePrices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'KYBER_NETWORK_PROXY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'KYBER_PRECISION()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'QUOTE_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'VALIDITY_INTERVAL()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'convertQuantity(uint256,address,address)': (
      _fromAssetQuantity: ethers.BigNumberish,
      _fromAsset: string,
      _toAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getKyberPrice(address,address)': (
      _baseAsset: string,
      _quoteAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ validity_: boolean; kyberPrice_: ethers.BigNumber }>;
    'getOrderPriceInfo(address,uint256,uint256)': (
      _sellAsset: string,
      _sellQuantity: ethers.BigNumberish,
      _buyQuantity: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getPrice(address)': (
      _asset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ price_: ethers.BigNumber; timestamp_: ethers.BigNumber }>;
    'getPrices(address[])': (
      _assets: string[],
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ prices_: ethers.BigNumber[]; timestamps_: ethers.BigNumber[] }>;
    'getReferencePriceInfo(address,address)': (
      _baseAsset: string,
      _quoteAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ referencePrice_: ethers.BigNumber; decimals_: ethers.BigNumber }>;
    'hasValidPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'hasValidPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'lastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'maxPriceDeviation()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'maxSpread()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'prices(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'updater()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'setMaxPriceDeviation(uint256)': (
      _newMaxPriceDeviation: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setMaxSpread(uint256)': (_newMaxSpread: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'setRegistry(address)': (_newRegistry: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setUpdater(address)': (_newUpdater: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'update(address[],uint256[])': (
      _saneAssets: string[],
      _sanePrices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'setMaxPriceDeviation(uint256)': (
      _newMaxPriceDeviation: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setMaxSpread(uint256)': (
      _newMaxSpread: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setRegistry(address)': (_newRegistry: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setUpdater(address)': (_newUpdater: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'update(address[],uint256[])': (
      _saneAssets: string[],
      _sanePrices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'setMaxPriceDeviation(uint256)': (
      _newMaxPriceDeviation: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setMaxSpread(uint256)': (
      _newMaxSpread: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setRegistry(address)': (
      _newRegistry: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setUpdater(address)': (_newUpdater: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'update(address[],uint256[])': (
      _saneAssets: string[],
      _sanePrices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
