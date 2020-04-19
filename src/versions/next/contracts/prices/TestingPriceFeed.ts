import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

/** Intended for testing purposes onlyUpdates and exposes price information */
export class TestingPriceFeedContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
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

  /**
   * Constructs a new contract instance.
   *
   * @param addressOrName The address or name of the contract.
   * @param signerOrProvider The ethers.js signer or provider instance to use.
   */
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * ```solidity
   * function QUOTE_ASSET() view returns (address)
   * ```
   *
   */
  QUOTE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function assetsToDecimals(address) view returns (uint256)
   * ```
   *
   */
  assetsToDecimals: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function assetsToPrices(address) view returns (uint256, uint256)
   * ```
   *
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
   * ```solidity
   * function getInvertedPriceInfo(address) view returns (uint256, uint256)
   * ```
   *
   */
  getInvertedPriceInfo: (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ invertedPrice: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;
  /**
   * ```solidity
   * function getLastUpdate() view returns (uint256)
   * ```
   *
   */
  getLastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getLastUpdateId() view returns (uint256)
   * ```
   *
   */
  getLastUpdateId: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   * ```
   *
   */
  getOrderPriceInfo: (
    sellAsset: string,
    sellQuantity: ethers.BigNumberish,
    buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getPrice(address) view returns (uint256, uint256)
   * ```
   *
   */
  getPrice: (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;
  /**
   * ```solidity
   * function getPriceInfo(address) view returns (uint256, uint256)
   * ```
   *
   */
  getPriceInfo: (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;
  /**
   * ```solidity
   * function getPrices(address[]) view returns (uint256[], uint256[])
   * ```
   *
   */
  getPrices: (ofAssets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getQuoteAsset() view returns (address)
   * ```
   *
   */
  getQuoteAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   * ```
   *
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
   * @param _asset Asset in registrar
   * @returns Price information ofAsset is recent
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
   * function updateId() view returns (uint256)
   * ```
   *
   */
  updateId: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function batchSetDecimals(address[],uint256[])
   * ```
   *
   */
  batchSetDecimals: (_assets: string[], _decimals: ethers.BigNumber[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setDecimals(address,uint256)
   * ```
   *
   */
  setDecimals: (_asset: string, _decimal: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setIsRecent(bool)
   * ```
   *
   */
  setIsRecent: (_state: boolean) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setNeverValid(bool)
   * ```
   *
   */
  setNeverValid: (_state: boolean) => TransactionWrapper<ethers.Overrides>;
  /**
   * Input price is how much quote asset you would get for one unit of _asset (10**assetDecimals)
   *
   * ```solidity
   * function update(address[],uint256[])
   * ```
   *
   */
  update: (_assets: string[], _prices: ethers.BigNumber[]) => TransactionWrapper<ethers.Overrides>;
}
