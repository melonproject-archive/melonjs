import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class KyberPriceFeed extends Contract {
  public readonly ethers: KyberPriceFeedEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `KyberPriceFeed` contract call for the `KYBER_NETWORK_PROXY` function.
   *
   * @contract KyberPriceFeed
   * @signature KYBER_NETWORK_PROXY()
   * @method function KYBER_NETWORK_PROXY() view returns (address)
   */
  KYBER_NETWORK_PROXY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `KYBER_PRECISION` function.
   *
   * @contract KyberPriceFeed
   * @signature KYBER_PRECISION()
   * @method function KYBER_PRECISION() view returns (uint8)
   */
  KYBER_PRECISION: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `KyberPriceFeed` contract call for the `QUOTE_ASSET` function.
   *
   * @contract KyberPriceFeed
   * @signature QUOTE_ASSET()
   * @method function QUOTE_ASSET() view returns (address)
   */
  QUOTE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `VALIDITY_INTERVAL` function.
   *
   * @contract KyberPriceFeed
   * @signature VALIDITY_INTERVAL()
   * @method function VALIDITY_INTERVAL() view returns (uint32)
   */
  VALIDITY_INTERVAL: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `KyberPriceFeed` contract call for the `convertQuantity` function.
   *
   * @contract KyberPriceFeed
   * @signature convertQuantity(uint256,address,address)
   * @method function convertQuantity(uint256,address,address) view returns (uint256)
   */
  convertQuantity: (
    _fromAssetQuantity: ethers.BigNumberish,
    _fromAsset: string,
    _toAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `getKyberPrice` function.
   *
   * @contract KyberPriceFeed
   * @signature getKyberPrice(address,address)
   * @method function getKyberPrice(address,address) view returns (bool, uint256)
   */
  getKyberPrice: (
    _baseAsset: string,
    _quoteAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ validity_: boolean; kyberPrice_: ethers.BigNumber }>;

  /**
   * `KyberPriceFeed` contract call for the `getOrderPriceInfo` function.
   *
   * @contract KyberPriceFeed
   * @signature getOrderPriceInfo(address,uint256,uint256)
   * @method function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   */
  getOrderPriceInfo: (
    _sellAsset: string,
    _sellQuantity: ethers.BigNumberish,
    _buyQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `getPrice` function.
   *
   * @contract KyberPriceFeed
   * @signature getPrice(address)
   * @method function getPrice(address) view returns (uint256, uint256)
   */
  getPrice: (
    _asset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ price_: ethers.BigNumber; timestamp_: ethers.BigNumber }>;

  /**
   * `KyberPriceFeed` contract call for the `getPrices` function.
   *
   * @contract KyberPriceFeed
   * @signature getPrices(address[])
   * @method function getPrices(address[]) view returns (uint256[], uint256[])
   */
  getPrices: (
    _assets: string[],
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ prices_: ethers.BigNumber[]; timestamps_: ethers.BigNumber[] }>;

  /**
   * `KyberPriceFeed` contract call for the `getReferencePriceInfo` function.
   *
   * @contract KyberPriceFeed
   * @signature getReferencePriceInfo(address,address)
   * @method function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   */
  getReferencePriceInfo: (
    _baseAsset: string,
    _quoteAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ referencePrice_: ethers.BigNumber; decimals_: ethers.BigNumber }>;

  /**
   * `KyberPriceFeed` contract call for the `hasValidPrice` function.
   *
   * @contract KyberPriceFeed
   * @signature hasValidPrice(address)
   * @method function hasValidPrice(address) view returns (bool)
   */
  hasValidPrice: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberPriceFeed` contract call for the `hasValidPrices` function.
   *
   * @contract KyberPriceFeed
   * @signature hasValidPrices(address[])
   * @method function hasValidPrices(address[]) view returns (bool)
   */
  hasValidPrices: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberPriceFeed` contract call for the `lastUpdate` function.
   *
   * @contract KyberPriceFeed
   * @signature lastUpdate()
   * @method function lastUpdate() view returns (uint256)
   */
  lastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `maxPriceDeviation` function.
   *
   * @contract KyberPriceFeed
   * @signature maxPriceDeviation()
   * @method function maxPriceDeviation() view returns (uint256)
   */
  maxPriceDeviation: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `maxSpread` function.
   *
   * @contract KyberPriceFeed
   * @signature maxSpread()
   * @method function maxSpread() view returns (uint256)
   */
  maxSpread: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `prices` function.
   *
   * @contract KyberPriceFeed
   * @signature prices(address)
   * @method function prices(address) view returns (uint256)
   */
  prices: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberPriceFeed` contract call for the `registry` function.
   *
   * @contract KyberPriceFeed
   * @signature registry()
   * @method function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract call for the `updater` function.
   *
   * @contract KyberPriceFeed
   * @signature updater()
   * @method function updater() view returns (address)
   */
  updater: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberPriceFeed` contract transaction for `setMaxPriceDeviation` function.
   *
   * @contract KyberPriceFeed
   * @signature setMaxPriceDeviation(uint256)
   * @method function setMaxPriceDeviation(uint256)
   */
  setMaxPriceDeviation: (_newMaxPriceDeviation: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberPriceFeed` contract transaction for `setMaxSpread` function.
   *
   * @contract KyberPriceFeed
   * @signature setMaxSpread(uint256)
   * @method function setMaxSpread(uint256)
   */
  setMaxSpread: (_newMaxSpread: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberPriceFeed` contract transaction for `setRegistry` function.
   *
   * @contract KyberPriceFeed
   * @signature setRegistry(address)
   * @method function setRegistry(address)
   */
  setRegistry: (_newRegistry: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberPriceFeed` contract transaction for `setUpdater` function.
   *
   * @contract KyberPriceFeed
   * @signature setUpdater(address)
   * @method function setUpdater(address)
   */
  setUpdater: (_newUpdater: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberPriceFeed` contract transaction for `update` function.
   *
   * @contract KyberPriceFeed
   * @signature update(address[],uint256[])
   * @method function update(address[],uint256[])
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
  ) => ethers.providers.TransactionResponse;
  'setMaxSpread(uint256)': (
    _newMaxSpread: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setRegistry(address)': (
    _newRegistry: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setUpdater(address)': (_newUpdater: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'update(address[],uint256[])': (
    _saneAssets: string[],
    _sanePrices: ethers.BigNumber[],
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

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
    ) => ethers.providers.TransactionResponse;
    'setMaxSpread(uint256)': (
      _newMaxSpread: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setRegistry(address)': (
      _newRegistry: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setUpdater(address)': (
      _newUpdater: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'update(address[],uint256[])': (
      _saneAssets: string[],
      _sanePrices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
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
