import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../../Contract';

/**
 * `TestingPriceFeed` contract
 *
 * Intended for testing purposes onlyUpdates and exposes price information
 */
export class TestingPriceFeed extends Contract {
  public readonly ethers: TestingPriceFeedEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `TestingPriceFeed` contract call for `QUOTE_ASSET` function.
   *
   * ```solidity
   * function QUOTE_ASSET() view returns (address)
   * ```
   */
  QUOTE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `TestingPriceFeed` contract call for `assetsToDecimals` function.
   *
   * ```solidity
   * function assetsToDecimals(address) view returns (uint256)
   * ```
   */
  assetsToDecimals: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for `assetsToPrices` function.
   *
   * ```solidity
   * function assetsToPrices(address) view returns (uint256, uint256)
   * ```
   */
  assetsToPrices: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;

  /**
   * Get quantity of toAsset equal in value to given quantity of fromAsset
   *
   * ```solidity
   * function convertQuantity(uint256,address,address) view returns (uint256)
   * ```
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
   *
   * @param buyAsset Asset for which check to be done if data exists
   * @param sellAsset Asset for which check to be done if data exists
   */
  existsPriceOnAssetPair: (sellAsset: string, buyAsset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `TestingPriceFeed` contract call for `getInvertedPriceInfo` function.
   *
   * ```solidity
   * function getInvertedPriceInfo(address) view returns (uint256, uint256)
   * ```
   */
  getInvertedPriceInfo: (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ invertedPrice: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;

  /**
   * `TestingPriceFeed` contract call for `getLastUpdate` function.
   *
   * ```solidity
   * function getLastUpdate() view returns (uint256)
   * ```
   */
  getLastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for `getLastUpdateId` function.
   *
   * ```solidity
   * function getLastUpdateId() view returns (uint256)
   * ```
   */
  getLastUpdateId: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for `getOrderPriceInfo` function.
   *
   * ```solidity
   * function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   * ```
   */
  getOrderPriceInfo: (
    sellAsset: string,
    sellQuantity: ethers.BigNumberish,
    buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for `getPrice` function.
   *
   * ```solidity
   * function getPrice(address) view returns (uint256, uint256)
   * ```
   */
  getPrice: (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;

  /**
   * `TestingPriceFeed` contract call for `getPriceInfo` function.
   *
   * ```solidity
   * function getPriceInfo(address) view returns (uint256, uint256)
   * ```
   */
  getPriceInfo: (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;

  /**
   * `TestingPriceFeed` contract call for `getPrices` function.
   *
   * ```solidity
   * function getPrices(address[]) view returns (uint256[], uint256[])
   * ```
   */
  getPrices: (ofAssets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `TestingPriceFeed` contract call for `getQuoteAsset` function.
   *
   * ```solidity
   * function getQuoteAsset() view returns (address)
   * ```
   */
  getQuoteAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `TestingPriceFeed` contract call for `getReferencePriceInfo` function.
   *
   * ```solidity
   * function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   * ```
   */
  getReferencePriceInfo: (
    ofBase: string,
    ofQuote: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ referencePrice: ethers.BigNumber; decimal: ethers.BigNumber }>;

  /**
   * Doesn't check validity as TestingPriceFeed has no validity variable
   *
   * ```solidity
   * function hasValidPrice(address) view returns (bool)
   * ```
   *
   * @param _asset Asset in registrar
   * @returns Price information ofAsset is recent
   */
  hasValidPrice: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `TestingPriceFeed` contract call for `hasValidPrices` function.
   *
   * ```solidity
   * function hasValidPrices(address[]) view returns (bool)
   * ```
   */
  hasValidPrices: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `TestingPriceFeed` contract call for `lastUpdate` function.
   *
   * ```solidity
   * function lastUpdate() view returns (uint256)
   * ```
   */
  lastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for `updateId` function.
   *
   * ```solidity
   * function updateId() view returns (uint256)
   * ```
   */
  updateId: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for `batchSetDecimals` function.
   *
   * ```solidity
   * function batchSetDecimals(address[],uint256[])
   * ```
   */
  batchSetDecimals: (_assets: string[], _decimals: ethers.BigNumber[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `TestingPriceFeed` contract call for `setDecimals` function.
   *
   * ```solidity
   * function setDecimals(address,uint256)
   * ```
   */
  setDecimals: (_asset: string, _decimal: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `TestingPriceFeed` contract call for `setIsRecent` function.
   *
   * ```solidity
   * function setIsRecent(bool)
   * ```
   */
  setIsRecent: (_state: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `TestingPriceFeed` contract call for `setNeverValid` function.
   *
   * ```solidity
   * function setNeverValid(bool)
   * ```
   */
  setNeverValid: (_state: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * Input price is how much quote asset you would get for one unit of _asset (10**assetDecimals)
   *
   * ```solidity
   * function update(address[],uint256[])
   * ```
   */
  update: (_assets: string[], _prices: ethers.BigNumber[]) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _quoteAsset, uint256 _quoteDecimals)',
    'event PriceUpdate(address[] token, uint256[] price)',
    'function QUOTE_ASSET() view returns (address)',
    'function assetsToDecimals(address) view returns (uint256)',
    'function assetsToPrices(address) view returns (uint256 price, uint256 timestamp)',
    'function batchSetDecimals(address[] _assets, uint256[] _decimals)',
    'function convertQuantity(uint256 fromAssetQuantity, address fromAsset, address toAsset) view returns (uint256)',
    'function existsPriceOnAssetPair(address sellAsset, address buyAsset) view returns (bool isExistent)',
    'function getInvertedPriceInfo(address ofAsset) view returns (uint256 invertedPrice, uint256 assetDecimals)',
    'function getLastUpdate() view returns (uint256)',
    'function getLastUpdateId() view returns (uint256)',
    'function getOrderPriceInfo(address sellAsset, uint256 sellQuantity, uint256 buyQuantity) view returns (uint256 orderPrice)',
    'function getPrice(address ofAsset) view returns (uint256 price, uint256 timestamp)',
    'function getPriceInfo(address ofAsset) view returns (uint256 price, uint256 assetDecimals)',
    'function getPrices(address[] ofAssets) view returns (uint256[], uint256[])',
    'function getQuoteAsset() view returns (address)',
    'function getReferencePriceInfo(address ofBase, address ofQuote) view returns (uint256 referencePrice, uint256 decimal)',
    'function hasValidPrice(address _asset) view returns (bool isValid)',
    'function hasValidPrices(address[] _assets) view returns (bool)',
    'function lastUpdate() view returns (uint256)',
    'function setDecimals(address _asset, uint256 _decimal)',
    'function setIsRecent(bool _state)',
    'function setNeverValid(bool _state)',
    'function update(address[] _assets, uint256[] _prices)',
    'function updateId() view returns (uint256)',
  ];
}

export interface TestingPriceFeedEthersContract extends ethers.Contract {
  'QUOTE_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'assetsToDecimals(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'assetsToPrices(address)': (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;
  'convertQuantity(uint256,address,address)': (
    fromAssetQuantity: ethers.BigNumberish,
    fromAsset: string,
    toAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'existsPriceOnAssetPair(address,address)': (
    sellAsset: string,
    buyAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'getInvertedPriceInfo(address)': (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ invertedPrice: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;
  'getLastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getLastUpdateId()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getOrderPriceInfo(address,uint256,uint256)': (
    sellAsset: string,
    sellQuantity: ethers.BigNumberish,
    buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getPrice(address)': (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;
  'getPriceInfo(address)': (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;
  'getPrices(address[])': (ofAssets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getQuoteAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getReferencePriceInfo(address,address)': (
    ofBase: string,
    ofQuote: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ referencePrice: ethers.BigNumber; decimal: ethers.BigNumber }>;
  'hasValidPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'hasValidPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'lastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'updateId()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'batchSetDecimals(address[],uint256[])': (
    _assets: string[],
    _decimals: ethers.BigNumber[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setDecimals(address,uint256)': (
    _asset: string,
    _decimal: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setIsRecent(bool)': (
    _state: boolean,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setNeverValid(bool)': (
    _state: boolean,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'update(address[],uint256[])': (
    _assets: string[],
    _prices: ethers.BigNumber[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'QUOTE_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'assetsToDecimals(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'assetsToPrices(address)': (
      $$0: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;
    'convertQuantity(uint256,address,address)': (
      fromAssetQuantity: ethers.BigNumberish,
      fromAsset: string,
      toAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'existsPriceOnAssetPair(address,address)': (
      sellAsset: string,
      buyAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'getInvertedPriceInfo(address)': (
      ofAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ invertedPrice: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;
    'getLastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getLastUpdateId()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getOrderPriceInfo(address,uint256,uint256)': (
      sellAsset: string,
      sellQuantity: ethers.BigNumberish,
      buyQuantity: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getPrice(address)': (
      ofAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;
    'getPriceInfo(address)': (
      ofAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ price: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;
    'getPrices(address[])': (ofAssets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getQuoteAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getReferencePriceInfo(address,address)': (
      ofBase: string,
      ofQuote: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ referencePrice: ethers.BigNumber; decimal: ethers.BigNumber }>;
    'hasValidPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'hasValidPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'lastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'updateId()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'batchSetDecimals(address[],uint256[])': (
      _assets: string[],
      _decimals: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setDecimals(address,uint256)': (
      _asset: string,
      _decimal: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setIsRecent(bool)': (
      _state: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setNeverValid(bool)': (
      _state: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'update(address[],uint256[])': (
      _assets: string[],
      _prices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'QUOTE_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'assetsToDecimals(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'assetsToPrices(address)': (
      $$0: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;
    'convertQuantity(uint256,address,address)': (
      fromAssetQuantity: ethers.BigNumberish,
      fromAsset: string,
      toAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'existsPriceOnAssetPair(address,address)': (
      sellAsset: string,
      buyAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'getInvertedPriceInfo(address)': (
      ofAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ invertedPrice: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;
    'getLastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getLastUpdateId()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getOrderPriceInfo(address,uint256,uint256)': (
      sellAsset: string,
      sellQuantity: ethers.BigNumberish,
      buyQuantity: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getPrice(address)': (
      ofAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;
    'getPriceInfo(address)': (
      ofAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ price: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;
    'getPrices(address[])': (ofAssets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getQuoteAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getReferencePriceInfo(address,address)': (
      ofBase: string,
      ofQuote: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ referencePrice: ethers.BigNumber; decimal: ethers.BigNumber }>;
    'hasValidPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'hasValidPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'lastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'updateId()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'batchSetDecimals(address[],uint256[])': (
      _assets: string[],
      _decimals: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setDecimals(address,uint256)': (
      _asset: string,
      _decimal: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setIsRecent(bool)': (_state: boolean, $$overrides?: ethers.Overrides) => Promise<void>;
    'setNeverValid(bool)': (_state: boolean, $$overrides?: ethers.Overrides) => Promise<void>;
    'update(address[],uint256[])': (
      _assets: string[],
      _prices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'batchSetDecimals(address[],uint256[])': (
      _assets: string[],
      _decimals: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setDecimals(address,uint256)': (
      _asset: string,
      _decimal: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setIsRecent(bool)': (_state: boolean, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setNeverValid(bool)': (_state: boolean, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'update(address[],uint256[])': (
      _assets: string[],
      _prices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'batchSetDecimals(address[],uint256[])': (
      _assets: string[],
      _decimals: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setDecimals(address,uint256)': (
      _asset: string,
      _decimal: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setIsRecent(bool)': (_state: boolean, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setNeverValid(bool)': (_state: boolean, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'update(address[],uint256[])': (
      _assets: string[],
      _prices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
