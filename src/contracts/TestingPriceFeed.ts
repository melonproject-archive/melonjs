import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class TestingPriceFeed extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `TestingPriceFeed` contract call for the `QUOTE_ASSET` function.
   *
   * @contract TestingPriceFeed
   * @signature function QUOTE_ASSET() view returns (address)
   */
  QUOTE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `TestingPriceFeed` contract call for the `assetsToDecimals` function.
   *
   * @contract TestingPriceFeed
   * @signature function assetsToDecimals(address) view returns (uint256)
   */
  assetsToDecimals: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for the `assetsToPrices` function.
   *
   * @contract TestingPriceFeed
   * @signature function assetsToPrices(address) view returns (uint256, uint256)
   */
  assetsToPrices: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;

  /**
   * `TestingPriceFeed` contract call for the `convertQuantity` function.
   *
   * @contract TestingPriceFeed
   * @signature function convertQuantity(uint256,address,address) view returns (uint256)
   */
  convertQuantity: (
    fromAssetQuantity: ethers.BigNumberish,
    fromAsset: string,
    toAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for the `existsPriceOnAssetPair` function.
   *
   * @contract TestingPriceFeed
   * @signature function existsPriceOnAssetPair(address,address) view returns (bool)
   */
  existsPriceOnAssetPair: (sellAsset: string, buyAsset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `TestingPriceFeed` contract call for the `getInvertedPriceInfo` function.
   *
   * @contract TestingPriceFeed
   * @signature function getInvertedPriceInfo(address) view returns (uint256, uint256)
   */
  getInvertedPriceInfo: (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ invertedPrice: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;

  /**
   * `TestingPriceFeed` contract call for the `getLastUpdate` function.
   *
   * @contract TestingPriceFeed
   * @signature function getLastUpdate() view returns (uint256)
   */
  getLastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for the `getLastUpdateId` function.
   *
   * @contract TestingPriceFeed
   * @signature function getLastUpdateId() view returns (uint256)
   */
  getLastUpdateId: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for the `getOrderPriceInfo` function.
   *
   * @contract TestingPriceFeed
   * @signature function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   */
  getOrderPriceInfo: (
    sellAsset: string,
    sellQuantity: ethers.BigNumberish,
    buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for the `getPrice` function.
   *
   * @contract TestingPriceFeed
   * @signature function getPrice(address) view returns (uint256, uint256)
   */
  getPrice: (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;

  /**
   * `TestingPriceFeed` contract call for the `getPriceInfo` function.
   *
   * @contract TestingPriceFeed
   * @signature function getPriceInfo(address) view returns (uint256, uint256)
   */
  getPriceInfo: (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;

  /**
   * `TestingPriceFeed` contract call for the `getPrices` function.
   *
   * @contract TestingPriceFeed
   * @signature function getPrices(address[]) view returns (uint256[], uint256[])
   */
  getPrices: (ofAssets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `TestingPriceFeed` contract call for the `getQuoteAsset` function.
   *
   * @contract TestingPriceFeed
   * @signature function getQuoteAsset() view returns (address)
   */
  getQuoteAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `TestingPriceFeed` contract call for the `getReferencePriceInfo` function.
   *
   * @contract TestingPriceFeed
   * @signature function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   */
  getReferencePriceInfo: (
    ofBase: string,
    ofQuote: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ referencePrice: ethers.BigNumber; decimal: ethers.BigNumber }>;

  /**
   * `TestingPriceFeed` contract call for the `hasValidPrice` function.
   *
   * @contract TestingPriceFeed
   * @signature function hasValidPrice(address) view returns (bool)
   */
  hasValidPrice: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `TestingPriceFeed` contract call for the `hasValidPrices` function.
   *
   * @contract TestingPriceFeed
   * @signature function hasValidPrices(address[]) view returns (bool)
   */
  hasValidPrices: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `TestingPriceFeed` contract call for the `lastUpdate` function.
   *
   * @contract TestingPriceFeed
   * @signature function lastUpdate() view returns (uint256)
   */
  lastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for the `updateId` function.
   *
   * @contract TestingPriceFeed
   * @signature function updateId() view returns (uint256)
   */
  updateId: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract transaction for `batchSetDecimals` function.
   *
   * @contract TestingPriceFeed
   * @signature function batchSetDecimals(address[],uint256[])
   */
  batchSetDecimals: (_assets: string[], _decimals: ethers.BigNumber[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `TestingPriceFeed` contract transaction for `setDecimals` function.
   *
   * @contract TestingPriceFeed
   * @signature function setDecimals(address,uint256)
   */
  setDecimals: (_asset: string, _decimal: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `TestingPriceFeed` contract transaction for `setIsRecent` function.
   *
   * @contract TestingPriceFeed
   * @signature function setIsRecent(bool)
   */
  setIsRecent: (_state: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `TestingPriceFeed` contract transaction for `setNeverValid` function.
   *
   * @contract TestingPriceFeed
   * @signature function setNeverValid(bool)
   */
  setNeverValid: (_state: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `TestingPriceFeed` contract transaction for `update` function.
   *
   * @contract TestingPriceFeed
   * @signature function update(address[],uint256[])
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
