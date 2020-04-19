import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

export class TradingContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(address _hub, address[] _exchanges, address[] _adapters, address _registry)',
    'event ExchangeMethodCall(address indexed exchangeAddress, string indexed methodSignature, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function MAKE_ORDER() view returns (bytes4)',
    'function MAKE_ORDER_COOLDOWN() view returns (uint256)',
    'function ORDER_LIFESPAN() view returns (uint256)',
    'function TAKE_ORDER() view returns (bytes4)',
    'function adapterIsAdded(address) view returns (bool)',
    'function addExchange(address _exchange, address _adapter)',
    'function addOpenMakeOrder(address ofExchange, address sellAsset, address buyAsset, address feeAsset, uint256 orderId, uint256 expirationTime)',
    'function addZeroExV2OrderData(bytes32 orderId, tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData) zeroExOrderData)',
    'function addZeroExV3OrderData(bytes32 orderId, tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData) zeroExOrderData)',
    'function authority() view returns (address)',
    'function callOnExchange(uint256 exchangeIndex, string methodSignature, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
    'function engine() view returns (address)',
    'function exchanges(uint256) view returns (address exchange, address adapter, bool takesCustody)',
    'function exchangesToOpenMakeOrders(address, address) view returns (uint256 id, uint256 expiresAt, uint256 orderIndex, address buyAsset, address feeAsset)',
    'function getExchangeInfo() view returns (address[], address[], bool[])',
    'function getOpenMakeOrdersAgainstAsset(address _asset) view returns (uint256)',
    'function getOpenOrderInfo(address ofExchange, address ofAsset) view returns (uint256, uint256, uint256)',
    'function getOrderDetails(uint256 orderIndex) view returns (address, address, uint256, uint256)',
    'function getZeroExV2OrderDetails(bytes32 orderId) view returns (tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData))',
    'function getZeroExV3OrderDetails(bytes32 orderId) view returns (tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData))',
    'function hub() view returns (address)',
    'function initialize(address[11] _spokes)',
    'function initialized() view returns (bool)',
    'function isInOpenMakeOrder(address) view returns (bool)',
    'function isOrderExpired(address exchange, address asset) view returns (bool)',
    'function makerAssetCooldown(address) view returns (uint256)',
    'function mlnToken() view returns (address)',
    'function openMakeOrdersAgainstAsset(address) view returns (uint256)',
    'function openMakeOrdersUsingAssetAsFee(address) view returns (uint256)',
    'function orderUpdateHook(address ofExchange, bytes32 orderId, uint8 updateType, address[2] orderAddresses, uint256[3] orderValues)',
    'function orders(uint256) view returns (address exchangeAddress, bytes32 orderId, uint8 updateType, address makerAsset, address takerAsset, uint256 makerQuantity, uint256 takerQuantity, uint256 timestamp, uint256 fillTakerQuantity)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function removeOpenMakeOrder(address exchange, address sellAsset)',
    'function returnAssetToVault(address _token)',
    'function returnBatchToVault(address[] _tokens)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function updateAndGetQuantityBeingTraded(address _asset) returns (uint256)',
    'function updateAndGetQuantityHeldInExchange(address ofAsset) returns (uint256)',
    'function version() view returns (address)',
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
   * function MAKE_ORDER() view returns (bytes4)
   * ```
   *
   */
  MAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function MAKE_ORDER_COOLDOWN() view returns (uint256)
   * ```
   *
   */
  MAKE_ORDER_COOLDOWN: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function ORDER_LIFESPAN() view returns (uint256)
   * ```
   *
   */
  ORDER_LIFESPAN: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function TAKE_ORDER() view returns (bytes4)
   * ```
   *
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function adapterIsAdded(address) view returns (bool)
   * ```
   *
   */
  adapterIsAdded: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function engine() view returns (address)
   * ```
   *
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function exchanges(uint256) view returns (address, address, bool)
   * ```
   *
   */
  exchanges: (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exchange: string; adapter: string; takesCustody: boolean }>;
  /**
   * ```solidity
   * function exchangesToOpenMakeOrders(address,address) view returns (uint256, uint256, uint256, address, address)
   * ```
   *
   */
  exchangesToOpenMakeOrders: (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    id: ethers.BigNumber;
    expiresAt: ethers.BigNumber;
    orderIndex: ethers.BigNumber;
    buyAsset: string;
    feeAsset: string;
  }>;
  /**
   * ```solidity
   * function getExchangeInfo() view returns (address[], address[], bool[])
   * ```
   *
   */
  getExchangeInfo: ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getOpenMakeOrdersAgainstAsset(address) view returns (uint256)
   * ```
   *
   */
  getOpenMakeOrdersAgainstAsset: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getOpenOrderInfo(address,address) view returns (uint256, uint256, uint256)
   * ```
   *
   */
  getOpenOrderInfo: (ofExchange: string, ofAsset: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getOrderDetails(uint256) view returns (address, address, uint256, uint256)
   * ```
   *
   */
  getOrderDetails: (orderIndex: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getZeroExV2OrderDetails(bytes32) view returns (tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))
   * ```
   *
   */
  getZeroExV2OrderDetails: (
    orderId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    makerAddress: string;
    takerAddress: string;
    feeRecipientAddress: string;
    senderAddress: string;
    makerAssetAmount: ethers.BigNumber;
    takerAssetAmount: ethers.BigNumber;
    makerFee: ethers.BigNumber;
    takerFee: ethers.BigNumber;
    expirationTimeSeconds: ethers.BigNumber;
    salt: ethers.BigNumber;
    makerAssetData: string;
    takerAssetData: string;
  }>;
  /**
   * ```solidity
   * function getZeroExV3OrderDetails(bytes32) view returns (tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))
   * ```
   *
   */
  getZeroExV3OrderDetails: (
    orderId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    makerAddress: string;
    takerAddress: string;
    feeRecipientAddress: string;
    senderAddress: string;
    makerAssetAmount: ethers.BigNumber;
    takerAssetAmount: ethers.BigNumber;
    makerFee: ethers.BigNumber;
    takerFee: ethers.BigNumber;
    expirationTimeSeconds: ethers.BigNumber;
    salt: ethers.BigNumber;
    makerAssetData: string;
    takerAssetData: string;
    makerFeeAssetData: string;
    takerFeeAssetData: string;
  }>;
  /**
   * ```solidity
   * function hub() view returns (address)
   * ```
   *
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function initialized() view returns (bool)
   * ```
   *
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isInOpenMakeOrder(address) view returns (bool)
   * ```
   *
   */
  isInOpenMakeOrder: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isOrderExpired(address,address) view returns (bool)
   * ```
   *
   */
  isOrderExpired: (exchange: string, asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function makerAssetCooldown(address) view returns (uint256)
   * ```
   *
   */
  makerAssetCooldown: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   *
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function openMakeOrdersAgainstAsset(address) view returns (uint256)
   * ```
   *
   */
  openMakeOrdersAgainstAsset: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function openMakeOrdersUsingAssetAsFee(address) view returns (uint256)
   * ```
   *
   */
  openMakeOrdersUsingAssetAsFee: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function orders(uint256) view returns (address, bytes32, uint8, address, address, uint256, uint256, uint256, uint256)
   * ```
   *
   */
  orders: (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    exchangeAddress: string;
    orderId: string;
    updateType: number;
    makerAsset: string;
    takerAsset: string;
    makerQuantity: ethers.BigNumber;
    takerQuantity: ethers.BigNumber;
    timestamp: ethers.BigNumber;
    fillTakerQuantity: ethers.BigNumber;
  }>;
  /**
   * ```solidity
   * function owner() view returns (address)
   * ```
   *
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   *
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function registry() view returns (address)
   * ```
   *
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
   * ```
   *
   */
  routes: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    participation: string;
    policyManager: string;
    shares: string;
    trading: string;
    vault: string;
    registry: string;
    version: string;
    engine: string;
    mlnToken: string;
  }>;
  /**
   * ```solidity
   * function version() view returns (address)
   * ```
   *
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function addExchange(address,address)
   * ```
   *
   */
  addExchange: (_exchange: string, _adapter: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * Make sure this is called after orderUpdateHook in adapters
   *
   * ```solidity
   * function addOpenMakeOrder(address,address,address,address,uint256,uint256)
   * ```
   *
   */
  addOpenMakeOrder: (
    ofExchange: string,
    sellAsset: string,
    buyAsset: string,
    feeAsset: string,
    orderId: ethers.BigNumberish,
    expirationTime: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * Bit of Redundancy for now
   *
   * ```solidity
   * function addZeroExV2OrderData(bytes32,tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))
   * ```
   *
   */
  addZeroExV2OrderData: (
    orderId: string | ethers.utils.BytesLike,
    zeroExOrderData: {
      makerAddress: string;
      takerAddress: string;
      feeRecipientAddress: string;
      senderAddress: string;
      makerAssetAmount: ethers.BigNumberish;
      takerAssetAmount: ethers.BigNumberish;
      makerFee: ethers.BigNumberish;
      takerFee: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      salt: ethers.BigNumberish;
      makerAssetData: string | ethers.utils.BytesLike;
      takerAssetData: string | ethers.utils.BytesLike;
    },
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function addZeroExV3OrderData(bytes32,tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))
   * ```
   *
   */
  addZeroExV3OrderData: (
    orderId: string | ethers.utils.BytesLike,
    zeroExOrderData: {
      makerAddress: string;
      takerAddress: string;
      feeRecipientAddress: string;
      senderAddress: string;
      makerAssetAmount: ethers.BigNumberish;
      takerAssetAmount: ethers.BigNumberish;
      makerFee: ethers.BigNumberish;
      takerFee: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      salt: ethers.BigNumberish;
      makerAssetData: string | ethers.utils.BytesLike;
      takerAssetData: string | ethers.utils.BytesLike;
      makerFeeAssetData: string | ethers.utils.BytesLike;
      takerFeeAssetData: string | ethers.utils.BytesLike;
    },
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * Universal method for calling exchange functions through adaptersSee adapter contracts for parameters needed for each exchange
   *
   * ```solidity
   * function callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   * @param exchangeIndex Index of the exchange in the "exchanges" array
   * @param identifier Order identifier
   * @param orderAddresses [7] taker fee asset
   * @param orderData [3] Encoded data specific to taker asset fee
   * @param orderValues [7] Dexy signature mode
   * @param signature Signature of order maker
   */
  callOnExchange: (
    exchangeIndex: ethers.BigNumberish,
    methodSignature: string,
    orderAddresses: [string, string, string, string, string, string, string, string],
    orderValues: [
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
    ],
    orderData: string | ethers.utils.BytesLike,
    identifier: string | ethers.utils.BytesLike,
    signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function initialize(address[11])
   * ```
   *
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function orderUpdateHook(address,bytes32,uint8,address[2],uint256[3])
   * ```
   *
   */
  orderUpdateHook: (
    ofExchange: string,
    orderId: string | ethers.utils.BytesLike,
    updateType: ethers.BigNumberish,
    orderAddresses: [string, string],
    orderValues: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function removeOpenMakeOrder(address,address)
   * ```
   *
   */
  removeOpenMakeOrder: (exchange: string, sellAsset: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function returnAssetToVault(address)
   * ```
   *
   */
  returnAssetToVault: (_token: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function returnBatchToVault(address[])
   * ```
   *
   */
  returnBatchToVault: (_tokens: string[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setAuthority(address)
   * ```
   *
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setOwner(address)
   * ```
   *
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function updateAndGetQuantityBeingTraded(address) returns (uint256)
   * ```
   *
   */
  updateAndGetQuantityBeingTraded: (_asset: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function updateAndGetQuantityHeldInExchange(address) returns (uint256)
   * ```
   *
   */
  updateAndGetQuantityHeldInExchange: (ofAsset: string) => TransactionWrapper<ethers.Overrides>;
}
