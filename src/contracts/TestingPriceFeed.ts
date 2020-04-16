import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '..';

/** Intended for testing purposes onlyUpdates and exposes price information */
export class TestingPriceFeedContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
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
   * Get quantity of _toAsset equal in value to given quantity of _fromAsset
   *
   * ```solidity
   * function convertQuantity(uint256,address,address) view returns (uint256)
   * ```
   *
   */
  convertQuantity: (
    _fromAssetQuantity: ethers.BigNumberish,
    _fromAsset: string,
    _toAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   * ```
   *
   */
  getOrderPriceInfo: (
    _sellAsset: string,
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
  getPrice: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getPriceInfo(address) view returns (uint256, uint256)
   * ```
   *
   */
  getPriceInfo: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getPrices(address[]) view returns (uint256[], uint256[])
   * ```
   *
   */
  getPrices: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   * ```
   *
   */
  getReferencePriceInfo: (_base: string, _quote: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * Doesn't check validity as TestingPriceFeed has no validity variable
   *
   * ```solidity
   * function hasValidPrice(address) view returns (bool)
   * ```
   * @param _asset Asset in registrar
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
   * ```solidity
   * function update(address[],uint256[])
   * ```
   *
   */
  update: (_assets: string[], _prices: ethers.BigNumber[]) => TransactionWrapper<ethers.Overrides>;
}
