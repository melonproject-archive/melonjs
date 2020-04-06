import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class KyberPriceFeed extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `KyberPriceFeed` contract call for the `KYBER_ETH_TOKEN` function.
   *
   * @contract KyberPriceFeed
   * @signature function KYBER_ETH_TOKEN() view returns (address)
   */
  KYBER_ETH_TOKEN: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `KYBER_NETWORK_PROXY` function.
   *
   * @contract KyberPriceFeed
   * @signature function KYBER_NETWORK_PROXY() view returns (address)
   */
  KYBER_NETWORK_PROXY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `KYBER_PRECISION` function.
   *
   * @contract KyberPriceFeed
   * @signature function KYBER_PRECISION() view returns (uint256)
   */
  KYBER_PRECISION: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `MAX_SPREAD` function.
   *
   * @contract KyberPriceFeed
   * @signature function MAX_SPREAD() view returns (uint256)
   */
  MAX_SPREAD: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `QUOTE_ASSET` function.
   *
   * @contract KyberPriceFeed
   * @signature function QUOTE_ASSET() view returns (address)
   */
  QUOTE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `REGISTRY` function.
   *
   * @contract KyberPriceFeed
   * @signature function REGISTRY() view returns (address)
   */
  REGISTRY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `UPDATER` function.
   *
   * @contract KyberPriceFeed
   * @signature function UPDATER() view returns (address)
   */
  UPDATER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `VALIDITY_INTERVAL` function.
   *
   * @contract KyberPriceFeed
   * @signature function VALIDITY_INTERVAL() view returns (uint256)
   */
  VALIDITY_INTERVAL: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `authority` function.
   *
   * @contract KyberPriceFeed
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `convertQuantity` function.
   *
   * @contract KyberPriceFeed
   * @signature function convertQuantity(uint256,address,address) view returns (uint256)
   */
  convertQuantity: (
    fromAssetQuantity: ethers.BigNumberish,
    fromAsset: string,
    toAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `existsPriceOnAssetPair` function.
   *
   * @contract KyberPriceFeed
   * @signature function existsPriceOnAssetPair(address,address) view returns (bool)
   */
  existsPriceOnAssetPair: (sellAsset: string, buyAsset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberPriceFeed` contract call for the `getInvertedPriceInfo` function.
   *
   * @contract KyberPriceFeed
   * @signature function getInvertedPriceInfo(address) view returns (uint256, uint256)
   */
  getInvertedPriceInfo: (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ invertedPrice: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;

  /**
   * `KyberPriceFeed` contract call for the `getKyberMaskAsset` function.
   *
   * @contract KyberPriceFeed
   * @signature function getKyberMaskAsset(address) view returns (address)
   */
  getKyberMaskAsset: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `getKyberPrice` function.
   *
   * @contract KyberPriceFeed
   * @signature function getKyberPrice(address,address) view returns (bool, uint256)
   */
  getKyberPrice: (_baseAsset: string, _quoteAsset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `KyberPriceFeed` contract call for the `getLastUpdate` function.
   *
   * @contract KyberPriceFeed
   * @signature function getLastUpdate() view returns (uint256)
   */
  getLastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `getOrderPriceInfo` function.
   *
   * @contract KyberPriceFeed
   * @signature function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   */
  getOrderPriceInfo: (
    sellAsset: string,
    sellQuantity: ethers.BigNumberish,
    buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `getPrice` function.
   *
   * @contract KyberPriceFeed
   * @signature function getPrice(address) view returns (uint256, uint256)
   */
  getPrice: (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; timestamp: ethers.BigNumber }>;

  /**
   * `KyberPriceFeed` contract call for the `getPriceInfo` function.
   *
   * @contract KyberPriceFeed
   * @signature function getPriceInfo(address) view returns (uint256, uint256)
   */
  getPriceInfo: (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price: ethers.BigNumber; assetDecimals: ethers.BigNumber }>;

  /**
   * `KyberPriceFeed` contract call for the `getPrices` function.
   *
   * @contract KyberPriceFeed
   * @signature function getPrices(address[]) view returns (uint256[], uint256[])
   */
  getPrices: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `KyberPriceFeed` contract call for the `getQuoteAsset` function.
   *
   * @contract KyberPriceFeed
   * @signature function getQuoteAsset() view returns (address)
   */
  getQuoteAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `getRawReferencePriceInfo` function.
   *
   * @contract KyberPriceFeed
   * @signature function getRawReferencePriceInfo(address,address) view returns (bool, uint256, uint256)
   */
  getRawReferencePriceInfo: (
    _baseAsset: string,
    _quoteAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ isValid: boolean; referencePrice: ethers.BigNumber; decimals: ethers.BigNumber }>;

  /**
   * `KyberPriceFeed` contract call for the `getReferencePriceInfo` function.
   *
   * @contract KyberPriceFeed
   * @signature function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   */
  getReferencePriceInfo: (
    _baseAsset: string,
    _quoteAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ referencePrice: ethers.BigNumber; decimals: ethers.BigNumber }>;

  /**
   * `KyberPriceFeed` contract call for the `hasValidPrice` function.
   *
   * @contract KyberPriceFeed
   * @signature function hasValidPrice(address) view returns (bool)
   */
  hasValidPrice: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberPriceFeed` contract call for the `hasValidPrices` function.
   *
   * @contract KyberPriceFeed
   * @signature function hasValidPrices(address[]) view returns (bool)
   */
  hasValidPrices: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberPriceFeed` contract call for the `lastUpdate` function.
   *
   * @contract KyberPriceFeed
   * @signature function lastUpdate() view returns (uint256)
   */
  lastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `owner` function.
   *
   * @contract KyberPriceFeed
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `prices` function.
   *
   * @contract KyberPriceFeed
   * @signature function prices(address) view returns (uint256)
   */
  prices: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract transaction for `setAuthority` function.
   *
   * @contract KyberPriceFeed
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberPriceFeed` contract transaction for `setMaxSpread` function.
   *
   * @contract KyberPriceFeed
   * @signature function setMaxSpread(uint256)
   */
  setMaxSpread: (_maxSpread: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberPriceFeed` contract transaction for `setOwner` function.
   *
   * @contract KyberPriceFeed
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberPriceFeed` contract transaction for `setUpdater` function.
   *
   * @contract KyberPriceFeed
   * @signature function setUpdater(address)
   */
  setUpdater: (_updater: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberPriceFeed` contract transaction for `setUpdaterToRegistryOwner` function.
   *
   * @contract KyberPriceFeed
   * @signature function setUpdaterToRegistryOwner()
   */
  setUpdaterToRegistryOwner: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberPriceFeed` contract transaction for `update` function.
   *
   * @contract KyberPriceFeed
   * @signature function update()
   */
  update: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
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
    'function setUpdater(address _updater)',
    'function setUpdaterToRegistryOwner()',
    'function update()',
  ];
}
