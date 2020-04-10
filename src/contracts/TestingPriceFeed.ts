import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

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
   * Get quantity of _toAsset equal in value to given quantity of _fromAsset
   *
   * ```solidity
   * function convertQuantity(uint256,address,address) view returns (uint256)
   * ```
   */
  convertQuantity: (
    _fromAssetQuantity: ethers.BigNumberish,
    _fromAsset: string,
    _toAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for `getOrderPriceInfo` function.
   *
   * ```solidity
   * function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   * ```
   */
  getOrderPriceInfo: (
    _sellAsset: string,
    _sellQuantity: ethers.BigNumberish,
    _buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `TestingPriceFeed` contract call for `getPrice` function.
   *
   * ```solidity
   * function getPrice(address) view returns (uint256, uint256)
   * ```
   */
  getPrice: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `TestingPriceFeed` contract call for `getPriceInfo` function.
   *
   * ```solidity
   * function getPriceInfo(address) view returns (uint256, uint256)
   * ```
   */
  getPriceInfo: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `TestingPriceFeed` contract call for `getPrices` function.
   *
   * ```solidity
   * function getPrices(address[]) view returns (uint256[], uint256[])
   * ```
   */
  getPrices: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `TestingPriceFeed` contract call for `getReferencePriceInfo` function.
   *
   * ```solidity
   * function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   * ```
   */
  getReferencePriceInfo: (_base: string, _quote: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * Doesn't check validity as TestingPriceFeed has no validity variable
   *
   * ```solidity
   * function hasValidPrice(address) view returns (bool)
   * ```
   *
   * @param _asset Asset in registrar
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
   * `TestingPriceFeed` contract call for `update` function.
   *
   * ```solidity
   * function update(address[],uint256[])
   * ```
   */
  update: (_assets: string[], _prices: ethers.BigNumber[]) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _quoteAsset, uint256 _quoteDecimals)',
    'event PricesUpdated(address[] assets, uint256[] pricest)',
    'function QUOTE_ASSET() view returns (address)',
    'function assetsToDecimals(address) view returns (uint256)',
    'function assetsToPrices(address) view returns (uint256 price, uint256 timestamp)',
    'function batchSetDecimals(address[] _assets, uint256[] _decimals)',
    'function convertQuantity(uint256 _fromAssetQuantity, address _fromAsset, address _toAsset) view returns (uint256)',
    'function getOrderPriceInfo(address _sellAsset, uint256 _sellQuantity, uint256 _buyQuantity) view returns (uint256)',
    'function getPrice(address _asset) view returns (uint256, uint256)',
    'function getPriceInfo(address _asset) view returns (uint256, uint256)',
    'function getPrices(address[] _assets) view returns (uint256[], uint256[])',
    'function getReferencePriceInfo(address _base, address _quote) view returns (uint256, uint256)',
    'function hasValidPrice(address _asset) view returns (bool)',
    'function hasValidPrices(address[] _assets) view returns (bool)',
    'function lastUpdate() view returns (uint256)',
    'function setDecimals(address _asset, uint256 _decimal)',
    'function setIsRecent(bool _state)',
    'function setNeverValid(bool _state)',
    'function update(address[] _assets, uint256[] _prices)',
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
    _fromAssetQuantity: ethers.BigNumberish,
    _fromAsset: string,
    _toAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getOrderPriceInfo(address,uint256,uint256)': (
    _sellAsset: string,
    _sellQuantity: ethers.BigNumberish,
    _buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getPriceInfo(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getReferencePriceInfo(address,address)': (
    _base: string,
    _quote: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;
  'hasValidPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'hasValidPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'lastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
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
      _fromAssetQuantity: ethers.BigNumberish,
      _fromAsset: string,
      _toAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getOrderPriceInfo(address,uint256,uint256)': (
      _sellAsset: string,
      _sellQuantity: ethers.BigNumberish,
      _buyQuantity: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getPriceInfo(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getReferencePriceInfo(address,address)': (
      _base: string,
      _quote: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<any[]>;
    'hasValidPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'hasValidPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'lastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
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
      _fromAssetQuantity: ethers.BigNumberish,
      _fromAsset: string,
      _toAsset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getOrderPriceInfo(address,uint256,uint256)': (
      _sellAsset: string,
      _sellQuantity: ethers.BigNumberish,
      _buyQuantity: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getPriceInfo(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getReferencePriceInfo(address,address)': (
      _base: string,
      _quote: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<any[]>;
    'hasValidPrice(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'hasValidPrices(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'lastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
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
