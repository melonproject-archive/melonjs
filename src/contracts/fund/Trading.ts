import { ethers } from 'ethers';
import { Contract, TransactionWrapper, AddressLike, DeploymentTransactionWrapper } from './../..';

export class Trading extends Contract {
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
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(
    bytecode: string,
    signer: ethers.Signer,
    _hub: AddressLike,
    _exchanges: AddressLike[],
    _adapters: AddressLike[],
    _registry: AddressLike,
  ) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [_hub, _exchanges, _adapters, _registry]);
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
  adapterIsAdded: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function engine() view returns (address)
   * ```
   *
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function exchanges(uint256) view returns (address, address, bool)
   * ```
   *
   */
  exchanges: (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    exchange: AddressLike;
    adapter: AddressLike;
    takesCustody: boolean;
  }>;
  /**
   * ```solidity
   * function exchangesToOpenMakeOrders(address,address) view returns (uint256, uint256, uint256, address, address)
   * ```
   *
   */
  exchangesToOpenMakeOrders: (
    $$0: AddressLike,
    $$1: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    id: ethers.BigNumber;
    expiresAt: ethers.BigNumber;
    orderIndex: ethers.BigNumber;
    buyAsset: AddressLike;
    feeAsset: AddressLike;
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
  getOpenMakeOrdersAgainstAsset: (_asset: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getOpenOrderInfo(address,address) view returns (uint256, uint256, uint256)
   * ```
   *
   */
  getOpenOrderInfo: (
    ofExchange: AddressLike,
    ofAsset: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;
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
    makerAddress: AddressLike;
    takerAddress: AddressLike;
    feeRecipientAddress: AddressLike;
    senderAddress: AddressLike;
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
    makerAddress: AddressLike;
    takerAddress: AddressLike;
    feeRecipientAddress: AddressLike;
    senderAddress: AddressLike;
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
  hub: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
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
  isInOpenMakeOrder: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isOrderExpired(address,address) view returns (bool)
   * ```
   *
   */
  isOrderExpired: (exchange: AddressLike, asset: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function makerAssetCooldown(address) view returns (uint256)
   * ```
   *
   */
  makerAssetCooldown: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   *
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function openMakeOrdersAgainstAsset(address) view returns (uint256)
   * ```
   *
   */
  openMakeOrdersAgainstAsset: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function openMakeOrdersUsingAssetAsFee(address) view returns (uint256)
   * ```
   *
   */
  openMakeOrdersUsingAssetAsFee: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
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
    exchangeAddress: AddressLike;
    orderId: string;
    updateType: number;
    makerAsset: AddressLike;
    takerAsset: AddressLike;
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
  owner: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   *
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function registry() view returns (address)
   * ```
   *
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
   * ```
   *
   */
  routes: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: AddressLike;
    feeManager: AddressLike;
    participation: AddressLike;
    policyManager: AddressLike;
    shares: AddressLike;
    trading: AddressLike;
    vault: AddressLike;
    registry: AddressLike;
    version: AddressLike;
    engine: AddressLike;
    mlnToken: AddressLike;
  }>;
  /**
   * ```solidity
   * function version() view returns (address)
   * ```
   *
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function addExchange(address,address)
   * ```
   *
   */
  addExchange: (_exchange: AddressLike, _adapter: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function addOpenMakeOrder(address,address,address,address,uint256,uint256)
   * ```
   *
   */
  addOpenMakeOrder: (
    ofExchange: AddressLike,
    sellAsset: AddressLike,
    buyAsset: AddressLike,
    feeAsset: AddressLike,
    orderId: ethers.BigNumberish,
    expirationTime: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function addZeroExV2OrderData(bytes32,tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))
   * ```
   *
   */
  addZeroExV2OrderData: (
    orderId: string | ethers.utils.BytesLike,
    zeroExOrderData: {
      makerAddress: AddressLike;
      takerAddress: AddressLike;
      feeRecipientAddress: AddressLike;
      senderAddress: AddressLike;
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
      makerAddress: AddressLike;
      takerAddress: AddressLike;
      feeRecipientAddress: AddressLike;
      senderAddress: AddressLike;
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
   * ```solidity
   * function callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   *
   */
  callOnExchange: (
    exchangeIndex: ethers.BigNumberish,
    methodSignature: string,
    orderAddresses: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
    ],
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
    _spokes: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
    ],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function orderUpdateHook(address,bytes32,uint8,address[2],uint256[3])
   * ```
   *
   */
  orderUpdateHook: (
    ofExchange: AddressLike,
    orderId: string | ethers.utils.BytesLike,
    updateType: ethers.BigNumberish,
    orderAddresses: [AddressLike, AddressLike],
    orderValues: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function removeOpenMakeOrder(address,address)
   * ```
   *
   */
  removeOpenMakeOrder: (exchange: AddressLike, sellAsset: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function returnAssetToVault(address)
   * ```
   *
   */
  returnAssetToVault: (_token: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function returnBatchToVault(address[])
   * ```
   *
   */
  returnBatchToVault: (_tokens: AddressLike[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setAuthority(address)
   * ```
   *
   */
  setAuthority: (authority_: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setOwner(address)
   * ```
   *
   */
  setOwner: (owner_: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function updateAndGetQuantityBeingTraded(address) returns (uint256)
   * ```
   *
   */
  updateAndGetQuantityBeingTraded: (_asset: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function updateAndGetQuantityHeldInExchange(address) returns (uint256)
   * ```
   *
   */
  updateAndGetQuantityHeldInExchange: (ofAsset: AddressLike) => TransactionWrapper<ethers.Overrides>;
}
