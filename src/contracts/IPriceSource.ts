import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IPriceSource extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IPriceSource` contract call for the `convertQuantity` function.
   *
   * @contract IPriceSource
   * @signature function convertQuantity(uint256,address,address) view returns (uint256)
   */
  convertQuantity: (
    fromAssetQuantity: ethers.BigNumberish,
    fromAsset: string,
    toAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `IPriceSource` contract call for the `existsPriceOnAssetPair` function.
   *
   * @contract IPriceSource
   * @signature function existsPriceOnAssetPair(address,address) view returns (bool)
   */
  existsPriceOnAssetPair: (sellAsset: string, buyAsset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IPriceSource` contract call for the `getInvertedPriceInfo` function.
   *
   * @contract IPriceSource
   * @signature function getInvertedPriceInfo(address) view returns (uint256, uint256)
   */
  getInvertedPriceInfo: (
    ofAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; decimals: ethers.BigNumber }>;

  /**
   * `IPriceSource` contract call for the `getLastUpdate` function.
   *
   * @contract IPriceSource
   * @signature function getLastUpdate() view returns (uint256)
   */
  getLastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IPriceSource` contract call for the `getOrderPriceInfo` function.
   *
   * @contract IPriceSource
   * @signature function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   */
  getOrderPriceInfo: (
    sellAsset: string,
    sellQuantity: ethers.BigNumberish,
    buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `IPriceSource` contract call for the `getPrice` function.
   *
   * @contract IPriceSource
   * @signature function getPrice(address) view returns (uint256, uint256)
   */
  getPrice: (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;

  /**
   * `IPriceSource` contract call for the `getPriceInfo` function.
   *
   * @contract IPriceSource
   * @signature function getPriceInfo(address) view returns (uint256, uint256)
   */
  getPriceInfo: (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; decimals: ethers.BigNumber }>;

  /**
   * `IPriceSource` contract call for the `getPrices` function.
   *
   * @contract IPriceSource
   * @signature function getPrices(address[]) view returns (uint256[], uint256[])
   */
  getPrices: (
    _assets: string[],
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ prices: ethers.BigNumber[]; timestamps: ethers.BigNumber[] }>;

  /**
   * `IPriceSource` contract call for the `getQuoteAsset` function.
   *
   * @contract IPriceSource
   * @signature function getQuoteAsset() view returns (address)
   */
  getQuoteAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IPriceSource` contract call for the `getReferencePriceInfo` function.
   *
   * @contract IPriceSource
   * @signature function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   */
  getReferencePriceInfo: (
    _base: string,
    _quote: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ referencePrice: ethers.BigNumber; decimal: ethers.BigNumber }>;

  /**
   * `IPriceSource` contract call for the `hasValidPrice` function.
   *
   * @contract IPriceSource
   * @signature function hasValidPrice(address) view returns (bool)
   */
  hasValidPrice: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IPriceSource` contract call for the `hasValidPrices` function.
   *
   * @contract IPriceSource
   * @signature function hasValidPrices(address[]) view returns (bool)
   */
  hasValidPrices: ($$0: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  static abi: string[] = [
    'function convertQuantity(uint256 fromAssetQuantity, address fromAsset, address toAsset) view returns (uint256)',
    'function existsPriceOnAssetPair(address sellAsset, address buyAsset) view returns (bool isExistent)',
    'function getInvertedPriceInfo(address ofAsset) view returns (uint256 price, uint256 decimals)',
    'function getLastUpdate() view returns (uint256)',
    'function getOrderPriceInfo(address sellAsset, uint256 sellQuantity, uint256 buyQuantity) view returns (uint256 orderPrice)',
    'function getPrice(address _asset) view returns (uint256 price, uint256 timestamp)',
    'function getPriceInfo(address _asset) view returns (uint256 price, uint256 decimals)',
    'function getPrices(address[] _assets) view returns (uint256[] prices, uint256[] timestamps)',
    'function getQuoteAsset() view returns (address)',
    'function getReferencePriceInfo(address _base, address _quote) view returns (uint256 referencePrice, uint256 decimal)',
    'function hasValidPrice(address) view returns (bool)',
    'function hasValidPrices(address[]) view returns (bool)',
  ];
}
