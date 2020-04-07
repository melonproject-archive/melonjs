import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV3Exchange extends Contract {
  public readonly ethers: ZeroExV3ExchangeEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV3Exchange` contract call for the `EIP1271_MAGIC_VALUE` function.
   *
   * @contract ZeroExV3Exchange
   * @signature EIP1271_MAGIC_VALUE()
   * @method function EIP1271_MAGIC_VALUE() view returns (bytes4)
   */
  EIP1271_MAGIC_VALUE: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `EIP712_EXCHANGE_DOMAIN_HASH` function.
   *
   * @contract ZeroExV3Exchange
   * @signature EIP712_EXCHANGE_DOMAIN_HASH()
   * @method function EIP712_EXCHANGE_DOMAIN_HASH() view returns (bytes32)
   */
  EIP712_EXCHANGE_DOMAIN_HASH: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `allowedValidators` function.
   *
   * @contract ZeroExV3Exchange
   * @signature allowedValidators(address,address)
   * @method function allowedValidators(address,address) view returns (bool)
   */
  allowedValidators: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3Exchange` contract call for the `cancelled` function.
   *
   * @contract ZeroExV3Exchange
   * @signature cancelled(bytes32)
   * @method function cancelled(bytes32) view returns (bool)
   */
  cancelled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3Exchange` contract call for the `currentContextAddress` function.
   *
   * @contract ZeroExV3Exchange
   * @signature currentContextAddress()
   * @method function currentContextAddress() view returns (address)
   */
  currentContextAddress: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `filled` function.
   *
   * @contract ZeroExV3Exchange
   * @signature filled(bytes32)
   * @method function filled(bytes32) view returns (uint256)
   */
  filled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Exchange` contract call for the `getAssetProxy` function.
   *
   * @contract ZeroExV3Exchange
   * @signature getAssetProxy(bytes4)
   * @method function getAssetProxy(bytes4) view returns (address)
   */
  getAssetProxy: (assetProxyId: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `getOrderInfo` function.
   *
   * @contract ZeroExV3Exchange
   * @signature getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))
   * @method function getOrderInfo(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)) view returns (tuple(uint8,bytes32,uint256))
   */
  getOrderInfo: (
    order: {
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
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ orderStatus: number; orderHash: string; orderTakerAssetFilledAmount: ethers.BigNumber }>;

  /**
   * `ZeroExV3Exchange` contract call for the `isValidHashSignature` function.
   *
   * @contract ZeroExV3Exchange
   * @signature isValidHashSignature(bytes32,address,bytes)
   * @method function isValidHashSignature(bytes32,address,bytes) view returns (bool)
   */
  isValidHashSignature: (
    hash: string | ethers.utils.BytesLike,
    signerAddress: string,
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `ZeroExV3Exchange` contract call for the `isValidOrderSignature` function.
   *
   * @contract ZeroExV3Exchange
   * @signature isValidOrderSignature((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes)
   * @method function isValidOrderSignature(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes) view returns (bool)
   */
  isValidOrderSignature: (
    order: {
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
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `ZeroExV3Exchange` contract call for the `isValidTransactionSignature` function.
   *
   * @contract ZeroExV3Exchange
   * @signature isValidTransactionSignature((uint256,uint256,uint256,address,bytes),bytes)
   * @method function isValidTransactionSignature(tuple(uint256,uint256,uint256,address,bytes),bytes) view returns (bool)
   */
  isValidTransactionSignature: (
    transaction: {
      salt: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      gasPrice: ethers.BigNumberish;
      signerAddress: string;
      data: string | ethers.utils.BytesLike;
    },
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `ZeroExV3Exchange` contract call for the `orderEpoch` function.
   *
   * @contract ZeroExV3Exchange
   * @signature orderEpoch(address,address)
   * @method function orderEpoch(address,address) view returns (uint256)
   */
  orderEpoch: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Exchange` contract call for the `owner` function.
   *
   * @contract ZeroExV3Exchange
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `preSigned` function.
   *
   * @contract ZeroExV3Exchange
   * @signature preSigned(bytes32,address)
   * @method function preSigned(bytes32,address) view returns (bool)
   */
  preSigned: (
    $$0: string | ethers.utils.BytesLike,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `ZeroExV3Exchange` contract call for the `protocolFeeCollector` function.
   *
   * @contract ZeroExV3Exchange
   * @signature protocolFeeCollector()
   * @method function protocolFeeCollector() view returns (address)
   */
  protocolFeeCollector: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `protocolFeeMultiplier` function.
   *
   * @contract ZeroExV3Exchange
   * @signature protocolFeeMultiplier()
   * @method function protocolFeeMultiplier() view returns (uint256)
   */
  protocolFeeMultiplier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Exchange` contract call for the `transactionsExecuted` function.
   *
   * @contract ZeroExV3Exchange
   * @signature transactionsExecuted(bytes32)
   * @method function transactionsExecuted(bytes32) view returns (bool)
   */
  transactionsExecuted: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3Exchange` contract transaction for `batchCancelOrders` function.
   *
   * @contract ZeroExV3Exchange
   * @signature batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[])
   * @method function batchCancelOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[]) payable
   */
  batchCancelOrders: (
    orders: {
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
    }[],
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `batchExecuteTransactions` function.
   *
   * @contract ZeroExV3Exchange
   * @signature batchExecuteTransactions((uint256,uint256,uint256,address,bytes)[],bytes[])
   * @method function batchExecuteTransactions(tuple(uint256,uint256,uint256,address,bytes)[],bytes[]) payable returns (bytes[])
   */
  batchExecuteTransactions: (
    transactions: {
      salt: ethers.BigNumber;
      expirationTimeSeconds: ethers.BigNumber;
      gasPrice: ethers.BigNumber;
      signerAddress: string;
      data: string;
    }[],
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `batchFillOrKillOrders` function.
   *
   * @contract ZeroExV3Exchange
   * @signature batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])
   * @method function batchFillOrKillOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256)[])
   */
  batchFillOrKillOrders: (
    orders: {
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
    }[],
    takerAssetFillAmounts: ethers.BigNumber[],
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `batchFillOrders` function.
   *
   * @contract ZeroExV3Exchange
   * @signature batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])
   * @method function batchFillOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256)[])
   */
  batchFillOrders: (
    orders: {
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
    }[],
    takerAssetFillAmounts: ethers.BigNumber[],
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `batchFillOrdersNoThrow` function.
   *
   * @contract ZeroExV3Exchange
   * @signature batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])
   * @method function batchFillOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256)[])
   */
  batchFillOrdersNoThrow: (
    orders: {
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
    }[],
    takerAssetFillAmounts: ethers.BigNumber[],
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `batchMatchOrders` function.
   *
   * @contract ZeroExV3Exchange
   * @signature batchMatchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])
   * @method function batchMatchOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[]) payable returns (tuple(tuple(uint256,uint256,uint256,uint256,uint256)[],tuple(uint256,uint256,uint256,uint256,uint256)[],uint256,uint256))
   */
  batchMatchOrders: (
    leftOrders: {
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
    }[],
    rightOrders: {
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
    }[],
    leftSignatures: string | ethers.utils.BytesLike,
    rightSignatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `batchMatchOrdersWithMaximalFill` function.
   *
   * @contract ZeroExV3Exchange
   * @signature batchMatchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])
   * @method function batchMatchOrdersWithMaximalFill(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[]) payable returns (tuple(tuple(uint256,uint256,uint256,uint256,uint256)[],tuple(uint256,uint256,uint256,uint256,uint256)[],uint256,uint256))
   */
  batchMatchOrdersWithMaximalFill: (
    leftOrders: {
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
    }[],
    rightOrders: {
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
    }[],
    leftSignatures: string | ethers.utils.BytesLike,
    rightSignatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `cancelOrder` function.
   *
   * @contract ZeroExV3Exchange
   * @signature cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))
   * @method function cancelOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)) payable
   */
  cancelOrder: (order: {
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
  }) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `cancelOrdersUpTo` function.
   *
   * @contract ZeroExV3Exchange
   * @signature cancelOrdersUpTo(uint256)
   * @method function cancelOrdersUpTo(uint256) payable
   */
  cancelOrdersUpTo: (targetOrderEpoch: ethers.BigNumberish) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `executeTransaction` function.
   *
   * @contract ZeroExV3Exchange
   * @signature executeTransaction((uint256,uint256,uint256,address,bytes),bytes)
   * @method function executeTransaction(tuple(uint256,uint256,uint256,address,bytes),bytes) payable returns (bytes)
   */
  executeTransaction: (
    transaction: {
      salt: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      gasPrice: ethers.BigNumberish;
      signerAddress: string;
      data: string | ethers.utils.BytesLike;
    },
    signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `fillOrKillOrder` function.
   *
   * @contract ZeroExV3Exchange
   * @signature fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)
   * @method function fillOrKillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
   */
  fillOrKillOrder: (
    order: {
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
    takerAssetFillAmount: ethers.BigNumberish,
    signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `fillOrder` function.
   *
   * @contract ZeroExV3Exchange
   * @signature fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)
   * @method function fillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
   */
  fillOrder: (
    order: {
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
    takerAssetFillAmount: ethers.BigNumberish,
    signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `marketBuyOrdersFillOrKill` function.
   *
   * @contract ZeroExV3Exchange
   * @signature marketBuyOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])
   * @method function marketBuyOrdersFillOrKill(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
   */
  marketBuyOrdersFillOrKill: (
    orders: {
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
    }[],
    makerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `marketBuyOrdersNoThrow` function.
   *
   * @contract ZeroExV3Exchange
   * @signature marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])
   * @method function marketBuyOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
   */
  marketBuyOrdersNoThrow: (
    orders: {
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
    }[],
    makerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `marketSellOrdersFillOrKill` function.
   *
   * @contract ZeroExV3Exchange
   * @signature marketSellOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])
   * @method function marketSellOrdersFillOrKill(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
   */
  marketSellOrdersFillOrKill: (
    orders: {
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
    }[],
    takerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `marketSellOrdersNoThrow` function.
   *
   * @contract ZeroExV3Exchange
   * @signature marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])
   * @method function marketSellOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
   */
  marketSellOrdersNoThrow: (
    orders: {
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
    }[],
    takerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `matchOrders` function.
   *
   * @contract ZeroExV3Exchange
   * @signature matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)
   * @method function matchOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes) payable returns (tuple(tuple(uint256,uint256,uint256,uint256,uint256),tuple(uint256,uint256,uint256,uint256,uint256),uint256,uint256))
   */
  matchOrders: (
    leftOrder: {
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
    rightOrder: {
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
    leftSignature: string | ethers.utils.BytesLike,
    rightSignature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `matchOrdersWithMaximalFill` function.
   *
   * @contract ZeroExV3Exchange
   * @signature matchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)
   * @method function matchOrdersWithMaximalFill(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes) payable returns (tuple(tuple(uint256,uint256,uint256,uint256,uint256),tuple(uint256,uint256,uint256,uint256,uint256),uint256,uint256))
   */
  matchOrdersWithMaximalFill: (
    leftOrder: {
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
    rightOrder: {
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
    leftSignature: string | ethers.utils.BytesLike,
    rightSignature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `preSign` function.
   *
   * @contract ZeroExV3Exchange
   * @signature preSign(bytes32)
   * @method function preSign(bytes32) payable
   */
  preSign: (hash: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `registerAssetProxy` function.
   *
   * @contract ZeroExV3Exchange
   * @signature registerAssetProxy(address)
   * @method function registerAssetProxy(address)
   */
  registerAssetProxy: (assetProxy: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `setProtocolFeeCollectorAddress` function.
   *
   * @contract ZeroExV3Exchange
   * @signature setProtocolFeeCollectorAddress(address)
   * @method function setProtocolFeeCollectorAddress(address)
   */
  setProtocolFeeCollectorAddress: (updatedProtocolFeeCollector: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `setProtocolFeeMultiplier` function.
   *
   * @contract ZeroExV3Exchange
   * @signature setProtocolFeeMultiplier(uint256)
   * @method function setProtocolFeeMultiplier(uint256)
   */
  setProtocolFeeMultiplier: (updatedProtocolFeeMultiplier: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `setSignatureValidatorApproval` function.
   *
   * @contract ZeroExV3Exchange
   * @signature setSignatureValidatorApproval(address,bool)
   * @method function setSignatureValidatorApproval(address,bool) payable
   */
  setSignatureValidatorApproval: (
    validatorAddress: string,
    approval: boolean,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `simulateDispatchTransferFromCalls` function.
   *
   * @contract ZeroExV3Exchange
   * @signature simulateDispatchTransferFromCalls(bytes[],address[],address[],uint256[])
   * @method function simulateDispatchTransferFromCalls(bytes[],address[],address[],uint256[])
   */
  simulateDispatchTransferFromCalls: (
    assetData: string | ethers.utils.BytesLike,
    fromAddresses: string[],
    toAddresses: string[],
    amounts: ethers.BigNumber[],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `transferOwnership` function.
   *
   * @contract ZeroExV3Exchange
   * @signature transferOwnership(address)
   * @method function transferOwnership(address)
   */
  transferOwnership: (newOwner: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(uint256 chainId)',
    'event AssetProxyRegistered(bytes4 id, address assetProxy)',
    'event Cancel(address indexed makerAddress, address indexed feeRecipientAddress, bytes makerAssetData, bytes takerAssetData, address senderAddress, bytes32 indexed orderHash)',
    'event CancelUpTo(address indexed makerAddress, address indexed orderSenderAddress, uint256 orderEpoch)',
    'event Fill(address indexed makerAddress, address indexed feeRecipientAddress, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData, bytes32 indexed orderHash, address takerAddress, address senderAddress, uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid)',
    'event ProtocolFeeCollectorAddress(address oldProtocolFeeCollector, address updatedProtocolFeeCollector)',
    'event ProtocolFeeMultiplier(uint256 oldProtocolFeeMultiplier, uint256 updatedProtocolFeeMultiplier)',
    'event SignatureValidatorApproval(address indexed signerAddress, address indexed validatorAddress, bool isApproved)',
    'event TransactionExecution(bytes32 indexed transactionHash)',
    'function EIP1271_MAGIC_VALUE() view returns (bytes4)',
    'function EIP712_EXCHANGE_DOMAIN_HASH() view returns (bytes32)',
    'function allowedValidators(address, address) view returns (bool)',
    'function batchCancelOrders(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] orders) payable',
    'function batchExecuteTransactions(tuple(uint256 salt, uint256 expirationTimeSeconds, uint256 gasPrice, address signerAddress, bytes data)[] transactions, bytes[] signatures) payable returns (bytes[])',
    'function batchFillOrKillOrders(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] orders, uint256[] takerAssetFillAmounts, bytes[] signatures) payable returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid)[] fillResults)',
    'function batchFillOrders(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] orders, uint256[] takerAssetFillAmounts, bytes[] signatures) payable returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid)[] fillResults)',
    'function batchFillOrdersNoThrow(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] orders, uint256[] takerAssetFillAmounts, bytes[] signatures) payable returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid)[] fillResults)',
    'function batchMatchOrders(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] leftOrders, tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] rightOrders, bytes[] leftSignatures, bytes[] rightSignatures) payable returns (tuple(tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid)[] left, tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid)[] right, uint256 profitInLeftMakerAsset, uint256 profitInRightMakerAsset) batchMatchedFillResults)',
    'function batchMatchOrdersWithMaximalFill(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] leftOrders, tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] rightOrders, bytes[] leftSignatures, bytes[] rightSignatures) payable returns (tuple(tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid)[] left, tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid)[] right, uint256 profitInLeftMakerAsset, uint256 profitInRightMakerAsset) batchMatchedFillResults)',
    'function cancelOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData) order) payable',
    'function cancelOrdersUpTo(uint256 targetOrderEpoch) payable',
    'function cancelled(bytes32) view returns (bool)',
    'function currentContextAddress() view returns (address)',
    'function executeTransaction(tuple(uint256 salt, uint256 expirationTimeSeconds, uint256 gasPrice, address signerAddress, bytes data) transaction, bytes signature) payable returns (bytes)',
    'function fillOrKillOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData) order, uint256 takerAssetFillAmount, bytes signature) payable returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid) fillResults)',
    'function fillOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData) order, uint256 takerAssetFillAmount, bytes signature) payable returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid) fillResults)',
    'function filled(bytes32) view returns (uint256)',
    'function getAssetProxy(bytes4 assetProxyId) view returns (address)',
    'function getOrderInfo(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData) order) view returns (tuple(uint8 orderStatus, bytes32 orderHash, uint256 orderTakerAssetFilledAmount) orderInfo)',
    'function isValidHashSignature(bytes32 hash, address signerAddress, bytes signature) view returns (bool isValid)',
    'function isValidOrderSignature(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData) order, bytes signature) view returns (bool isValid)',
    'function isValidTransactionSignature(tuple(uint256 salt, uint256 expirationTimeSeconds, uint256 gasPrice, address signerAddress, bytes data) transaction, bytes signature) view returns (bool isValid)',
    'function marketBuyOrdersFillOrKill(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] orders, uint256 makerAssetFillAmount, bytes[] signatures) payable returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid) fillResults)',
    'function marketBuyOrdersNoThrow(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] orders, uint256 makerAssetFillAmount, bytes[] signatures) payable returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid) fillResults)',
    'function marketSellOrdersFillOrKill(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] orders, uint256 takerAssetFillAmount, bytes[] signatures) payable returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid) fillResults)',
    'function marketSellOrdersNoThrow(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)[] orders, uint256 takerAssetFillAmount, bytes[] signatures) payable returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid) fillResults)',
    'function matchOrders(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData) leftOrder, tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData) rightOrder, bytes leftSignature, bytes rightSignature) payable returns (tuple(tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid) left, tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid) right, uint256 profitInLeftMakerAsset, uint256 profitInRightMakerAsset) matchedFillResults)',
    'function matchOrdersWithMaximalFill(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData) leftOrder, tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData) rightOrder, bytes leftSignature, bytes rightSignature) payable returns (tuple(tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid) left, tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid) right, uint256 profitInLeftMakerAsset, uint256 profitInRightMakerAsset) matchedFillResults)',
    'function orderEpoch(address, address) view returns (uint256)',
    'function owner() view returns (address)',
    'function preSign(bytes32 hash) payable',
    'function preSigned(bytes32, address) view returns (bool)',
    'function protocolFeeCollector() view returns (address)',
    'function protocolFeeMultiplier() view returns (uint256)',
    'function registerAssetProxy(address assetProxy)',
    'function setProtocolFeeCollectorAddress(address updatedProtocolFeeCollector)',
    'function setProtocolFeeMultiplier(uint256 updatedProtocolFeeMultiplier)',
    'function setSignatureValidatorApproval(address validatorAddress, bool approval) payable',
    'function simulateDispatchTransferFromCalls(bytes[] assetData, address[] fromAddresses, address[] toAddresses, uint256[] amounts)',
    'function transactionsExecuted(bytes32) view returns (bool)',
    'function transferOwnership(address newOwner)',
  ];
}

export interface ZeroExV3ExchangeEthersContract extends ethers.Contract {
  'EIP1271_MAGIC_VALUE()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'EIP712_EXCHANGE_DOMAIN_HASH()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'allowedValidators(address,address)': (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'cancelled(bytes32)': ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'currentContextAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'filled(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getAssetProxy(bytes4)': (
    assetProxyId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<string>;
  'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
    order: {
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
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ orderStatus: number; orderHash: string; orderTakerAssetFilledAmount: ethers.BigNumber }>;
  'isValidHashSignature(bytes32,address,bytes)': (
    hash: string | ethers.utils.BytesLike,
    signerAddress: string,
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'isValidOrderSignature((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes)': (
    order: {
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
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'isValidTransactionSignature((uint256,uint256,uint256,address,bytes),bytes)': (
    transaction: {
      salt: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      gasPrice: ethers.BigNumberish;
      signerAddress: string;
      data: string | ethers.utils.BytesLike;
    },
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'orderEpoch(address,address)': (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'preSigned(bytes32,address)': (
    $$0: string | ethers.utils.BytesLike,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'protocolFeeCollector()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'protocolFeeMultiplier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'transactionsExecuted(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[])': (
    orders: {
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
    }[],
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'batchExecuteTransactions((uint256,uint256,uint256,address,bytes)[],bytes[])': (
    transactions: {
      salt: ethers.BigNumber;
      expirationTimeSeconds: ethers.BigNumber;
      gasPrice: ethers.BigNumber;
      signerAddress: string;
      data: string;
    }[],
    signatures: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
    orders: {
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
    }[],
    takerAssetFillAmounts: ethers.BigNumber[],
    signatures: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
    orders: {
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
    }[],
    takerAssetFillAmounts: ethers.BigNumber[],
    signatures: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
    orders: {
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
    }[],
    takerAssetFillAmounts: ethers.BigNumber[],
    signatures: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'batchMatchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])': (
    leftOrders: {
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
    }[],
    rightOrders: {
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
    }[],
    leftSignatures: string | ethers.utils.BytesLike,
    rightSignatures: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'batchMatchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])': (
    leftOrders: {
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
    }[],
    rightOrders: {
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
    }[],
    leftSignatures: string | ethers.utils.BytesLike,
    rightSignatures: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
    order: {
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
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'cancelOrdersUpTo(uint256)': (
    targetOrderEpoch: ethers.BigNumberish,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'executeTransaction((uint256,uint256,uint256,address,bytes),bytes)': (
    transaction: {
      salt: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      gasPrice: ethers.BigNumberish;
      signerAddress: string;
      data: string | ethers.utils.BytesLike;
    },
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
    order: {
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
    takerAssetFillAmount: ethers.BigNumberish,
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
    order: {
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
    takerAssetFillAmount: ethers.BigNumberish,
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'marketBuyOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
    orders: {
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
    }[],
    makerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
    orders: {
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
    }[],
    makerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'marketSellOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
    orders: {
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
    }[],
    takerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
    orders: {
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
    }[],
    takerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)': (
    leftOrder: {
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
    rightOrder: {
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
    leftSignature: string | ethers.utils.BytesLike,
    rightSignature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'matchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)': (
    leftOrder: {
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
    rightOrder: {
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
    leftSignature: string | ethers.utils.BytesLike,
    rightSignature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'preSign(bytes32)': (
    hash: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'registerAssetProxy(address)': (
    assetProxy: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setProtocolFeeCollectorAddress(address)': (
    updatedProtocolFeeCollector: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setProtocolFeeMultiplier(uint256)': (
    updatedProtocolFeeMultiplier: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setSignatureValidatorApproval(address,bool)': (
    validatorAddress: string,
    approval: boolean,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'simulateDispatchTransferFromCalls(bytes[],address[],address[],uint256[])': (
    assetData: string | ethers.utils.BytesLike,
    fromAddresses: string[],
    toAddresses: string[],
    amounts: ethers.BigNumber[],
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferOwnership(address)': (
    newOwner: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  callStatic: {
    'EIP1271_MAGIC_VALUE()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'EIP712_EXCHANGE_DOMAIN_HASH()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'allowedValidators(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'cancelled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'currentContextAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'filled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getAssetProxy(bytes4)': (
      assetProxyId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
      order: {
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
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ orderStatus: number; orderHash: string; orderTakerAssetFilledAmount: ethers.BigNumber }>;
    'isValidHashSignature(bytes32,address,bytes)': (
      hash: string | ethers.utils.BytesLike,
      signerAddress: string,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'isValidOrderSignature((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes)': (
      order: {
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
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'isValidTransactionSignature((uint256,uint256,uint256,address,bytes),bytes)': (
      transaction: {
        salt: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        gasPrice: ethers.BigNumberish;
        signerAddress: string;
        data: string | ethers.utils.BytesLike;
      },
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'orderEpoch(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'preSigned(bytes32,address)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'protocolFeeCollector()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'protocolFeeMultiplier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'transactionsExecuted(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[])': (
      orders: {
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
      }[],
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<void>;
    'batchExecuteTransactions((uint256,uint256,uint256,address,bytes)[],bytes[])': (
      transactions: {
        salt: ethers.BigNumber;
        expirationTimeSeconds: ethers.BigNumber;
        gasPrice: ethers.BigNumber;
        signerAddress: string;
        data: string;
      }[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<string>;
    'batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmounts: ethers.BigNumber[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<
      {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
        protocolFeePaid: ethers.BigNumber;
      }[]
    >;
    'batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmounts: ethers.BigNumber[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<
      {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
        protocolFeePaid: ethers.BigNumber;
      }[]
    >;
    'batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmounts: ethers.BigNumber[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<
      {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
        protocolFeePaid: ethers.BigNumber;
      }[]
    >;
    'batchMatchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])': (
      leftOrders: {
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
      }[],
      rightOrders: {
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
      }[],
      leftSignatures: string | ethers.utils.BytesLike,
      rightSignatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<{
      left: {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
        protocolFeePaid: ethers.BigNumber;
      }[];
      right: {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
        protocolFeePaid: ethers.BigNumber;
      }[];
      profitInLeftMakerAsset: ethers.BigNumber;
      profitInRightMakerAsset: ethers.BigNumber;
    }>;
    'batchMatchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])': (
      leftOrders: {
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
      }[],
      rightOrders: {
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
      }[],
      leftSignatures: string | ethers.utils.BytesLike,
      rightSignatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<{
      left: {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
        protocolFeePaid: ethers.BigNumber;
      }[];
      right: {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
        protocolFeePaid: ethers.BigNumber;
      }[];
      profitInLeftMakerAsset: ethers.BigNumber;
      profitInRightMakerAsset: ethers.BigNumber;
    }>;
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
      order: {
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
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<void>;
    'cancelOrdersUpTo(uint256)': (
      targetOrderEpoch: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<void>;
    'executeTransaction((uint256,uint256,uint256,address,bytes),bytes)': (
      transaction: {
        salt: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        gasPrice: ethers.BigNumberish;
        signerAddress: string;
        data: string | ethers.utils.BytesLike;
      },
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<string>;
    'fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
      order: {
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
      takerAssetFillAmount: ethers.BigNumberish,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
      protocolFeePaid: ethers.BigNumber;
    }>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
      order: {
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
      takerAssetFillAmount: ethers.BigNumberish,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
      protocolFeePaid: ethers.BigNumber;
    }>;
    'marketBuyOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      makerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
      protocolFeePaid: ethers.BigNumber;
    }>;
    'marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      makerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
      protocolFeePaid: ethers.BigNumber;
    }>;
    'marketSellOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
      protocolFeePaid: ethers.BigNumber;
    }>;
    'marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
      protocolFeePaid: ethers.BigNumber;
    }>;
    'matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)': (
      leftOrder: {
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
      rightOrder: {
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
      leftSignature: string | ethers.utils.BytesLike,
      rightSignature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<{
      left: {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
        protocolFeePaid: ethers.BigNumber;
      };
      right: {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
        protocolFeePaid: ethers.BigNumber;
      };
      profitInLeftMakerAsset: ethers.BigNumber;
      profitInRightMakerAsset: ethers.BigNumber;
    }>;
    'matchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)': (
      leftOrder: {
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
      rightOrder: {
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
      leftSignature: string | ethers.utils.BytesLike,
      rightSignature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<{
      left: {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
        protocolFeePaid: ethers.BigNumber;
      };
      right: {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
        protocolFeePaid: ethers.BigNumber;
      };
      profitInLeftMakerAsset: ethers.BigNumber;
      profitInRightMakerAsset: ethers.BigNumber;
    }>;
    'preSign(bytes32)': (hash: string | ethers.utils.BytesLike, $$overrides?: ethers.PayableOverrides) => Promise<void>;
    'registerAssetProxy(address)': (assetProxy: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setProtocolFeeCollectorAddress(address)': (
      updatedProtocolFeeCollector: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setProtocolFeeMultiplier(uint256)': (
      updatedProtocolFeeMultiplier: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setSignatureValidatorApproval(address,bool)': (
      validatorAddress: string,
      approval: boolean,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<void>;
    'simulateDispatchTransferFromCalls(bytes[],address[],address[],uint256[])': (
      assetData: string | ethers.utils.BytesLike,
      fromAddresses: string[],
      toAddresses: string[],
      amounts: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[])': (
      orders: {
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
      }[],
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'batchExecuteTransactions((uint256,uint256,uint256,address,bytes)[],bytes[])': (
      transactions: {
        salt: ethers.BigNumber;
        expirationTimeSeconds: ethers.BigNumber;
        gasPrice: ethers.BigNumber;
        signerAddress: string;
        data: string;
      }[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmounts: ethers.BigNumber[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmounts: ethers.BigNumber[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmounts: ethers.BigNumber[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'batchMatchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])': (
      leftOrders: {
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
      }[],
      rightOrders: {
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
      }[],
      leftSignatures: string | ethers.utils.BytesLike,
      rightSignatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'batchMatchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])': (
      leftOrders: {
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
      }[],
      rightOrders: {
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
      }[],
      leftSignatures: string | ethers.utils.BytesLike,
      rightSignatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
      order: {
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
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'cancelOrdersUpTo(uint256)': (
      targetOrderEpoch: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'executeTransaction((uint256,uint256,uint256,address,bytes),bytes)': (
      transaction: {
        salt: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        gasPrice: ethers.BigNumberish;
        signerAddress: string;
        data: string | ethers.utils.BytesLike;
      },
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
      order: {
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
      takerAssetFillAmount: ethers.BigNumberish,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
      order: {
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
      takerAssetFillAmount: ethers.BigNumberish,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'marketBuyOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      makerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      makerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'marketSellOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)': (
      leftOrder: {
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
      rightOrder: {
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
      leftSignature: string | ethers.utils.BytesLike,
      rightSignature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'matchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)': (
      leftOrder: {
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
      rightOrder: {
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
      leftSignature: string | ethers.utils.BytesLike,
      rightSignature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'preSign(bytes32)': (
      hash: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'registerAssetProxy(address)': (assetProxy: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setProtocolFeeCollectorAddress(address)': (
      updatedProtocolFeeCollector: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setProtocolFeeMultiplier(uint256)': (
      updatedProtocolFeeMultiplier: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setSignatureValidatorApproval(address,bool)': (
      validatorAddress: string,
      approval: boolean,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'simulateDispatchTransferFromCalls(bytes[],address[],address[],uint256[])': (
      assetData: string | ethers.utils.BytesLike,
      fromAddresses: string[],
      toAddresses: string[],
      amounts: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[])': (
      orders: {
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
      }[],
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'batchExecuteTransactions((uint256,uint256,uint256,address,bytes)[],bytes[])': (
      transactions: {
        salt: ethers.BigNumber;
        expirationTimeSeconds: ethers.BigNumber;
        gasPrice: ethers.BigNumber;
        signerAddress: string;
        data: string;
      }[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmounts: ethers.BigNumber[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmounts: ethers.BigNumber[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmounts: ethers.BigNumber[],
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'batchMatchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])': (
      leftOrders: {
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
      }[],
      rightOrders: {
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
      }[],
      leftSignatures: string | ethers.utils.BytesLike,
      rightSignatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'batchMatchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[])': (
      leftOrders: {
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
      }[],
      rightOrders: {
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
      }[],
      leftSignatures: string | ethers.utils.BytesLike,
      rightSignatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
      order: {
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
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'cancelOrdersUpTo(uint256)': (
      targetOrderEpoch: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'executeTransaction((uint256,uint256,uint256,address,bytes),bytes)': (
      transaction: {
        salt: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        gasPrice: ethers.BigNumberish;
        signerAddress: string;
        data: string | ethers.utils.BytesLike;
      },
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
      order: {
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
      takerAssetFillAmount: ethers.BigNumberish,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
      order: {
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
      takerAssetFillAmount: ethers.BigNumberish,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'marketBuyOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      makerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      makerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'marketSellOrdersFillOrKill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[])': (
      orders: {
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
      }[],
      takerAssetFillAmount: ethers.BigNumberish,
      signatures: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)': (
      leftOrder: {
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
      rightOrder: {
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
      leftSignature: string | ethers.utils.BytesLike,
      rightSignature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'matchOrdersWithMaximalFill((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes)': (
      leftOrder: {
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
      rightOrder: {
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
      leftSignature: string | ethers.utils.BytesLike,
      rightSignature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'preSign(bytes32)': (
      hash: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'registerAssetProxy(address)': (
      assetProxy: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setProtocolFeeCollectorAddress(address)': (
      updatedProtocolFeeCollector: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setProtocolFeeMultiplier(uint256)': (
      updatedProtocolFeeMultiplier: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setSignatureValidatorApproval(address,bool)': (
      validatorAddress: string,
      approval: boolean,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'simulateDispatchTransferFromCalls(bytes[],address[],address[],uint256[])': (
      assetData: string | ethers.utils.BytesLike,
      fromAddresses: string[],
      toAddresses: string[],
      amounts: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferOwnership(address)': (
      newOwner: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
