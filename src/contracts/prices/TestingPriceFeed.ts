import { ethers } from 'ethers';
import { Contract, TransactionWrapper, AddressLike, DeploymentTransactionWrapper } from './../..';

export class TestingPriceFeed extends Contract {
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
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(
    bytecode: string,
    signer: ethers.Signer,
    _quoteAsset: AddressLike,
    _quoteDecimals: ethers.BigNumber,
  ) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [_quoteAsset, _quoteDecimals]);
  }

  /**
   * ```solidity
   * function QUOTE_ASSET() view returns (address)
   * ```
   *
   */
  QUOTE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function assetsToDecimals(address) view returns (uint256)
   * ```
   *
   */
  assetsToDecimals: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function assetsToPrices(address) view returns (uint256, uint256)
   * ```
   *
   */
  assetsToPrices: (
    $$0: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;
  /**
   * ```solidity
   * function convertQuantity(uint256,address,address) view returns (uint256)
   * ```
   *
   */
  convertQuantity: (
    fromAssetQuantity: ethers.BigNumberish,
    fromAsset: AddressLike,
    toAsset: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function existsPriceOnAssetPair(address,address) view returns (bool)
   * ```
   *
   */
  existsPriceOnAssetPair: (
    sellAsset: AddressLike,
    buyAsset: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  /**
   * ```solidity
   * function getInvertedPriceInfo(address) view returns (uint256, uint256)
   * ```
   *
   */
  getInvertedPriceInfo: (
    ofAsset: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    invertedPrice: ethers.BigNumber;
    assetDecimals: ethers.BigNumber;
  }>;
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
    sellAsset: AddressLike,
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
    ofAsset: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;
  /**
   * ```solidity
   * function getPriceInfo(address) view returns (uint256, uint256)
   * ```
   *
   */
  getPriceInfo: (
    ofAsset: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;
  /**
   * ```solidity
   * function getPrices(address[]) view returns (uint256[], uint256[])
   * ```
   *
   */
  getPrices: (ofAssets: AddressLike[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getQuoteAsset() view returns (address)
   * ```
   *
   */
  getQuoteAsset: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   * ```
   *
   */
  getReferencePriceInfo: (
    ofBase: AddressLike,
    ofQuote: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ referencePrice: ethers.BigNumber; decimal: ethers.BigNumber }>;
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
  batchSetDecimals: (_assets: AddressLike[], _decimals: ethers.BigNumber[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setDecimals(address,uint256)
   * ```
   *
   */
  setDecimals: (_asset: AddressLike, _decimal: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
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
   * ```solidity
   * function update(address[],uint256[])
   * ```
   *
   */
  update: (_assets: AddressLike[], _prices: ethers.BigNumber[]) => TransactionWrapper<ethers.Overrides>;
}
