import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV3Exchange extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV3Exchange` contract call for the `EIP1271_MAGIC_VALUE` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function EIP1271_MAGIC_VALUE() view returns (bytes4)
   */
  EIP1271_MAGIC_VALUE: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `EIP712_EXCHANGE_DOMAIN_HASH` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function EIP712_EXCHANGE_DOMAIN_HASH() view returns (bytes32)
   */
  EIP712_EXCHANGE_DOMAIN_HASH: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `allowedValidators` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function allowedValidators(address,address) view returns (bool)
   */
  allowedValidators: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3Exchange` contract call for the `cancelled` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function cancelled(bytes32) view returns (bool)
   */
  cancelled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3Exchange` contract call for the `currentContextAddress` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function currentContextAddress() view returns (address)
   */
  currentContextAddress: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `filled` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function filled(bytes32) view returns (uint256)
   */
  filled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Exchange` contract call for the `getAssetProxy` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function getAssetProxy(bytes4) view returns (address)
   */
  getAssetProxy: (assetProxyId: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `getOrderInfo` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function getOrderInfo(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)) view returns (tuple(uint8,bytes32,uint256))
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
   * @signature function isValidHashSignature(bytes32,address,bytes) view returns (bool)
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
   * @signature function isValidOrderSignature(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes) view returns (bool)
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
   * @signature function isValidTransactionSignature(tuple(uint256,uint256,uint256,address,bytes),bytes) view returns (bool)
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
   * @signature function orderEpoch(address,address) view returns (uint256)
   */
  orderEpoch: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Exchange` contract call for the `owner` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `preSigned` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function preSigned(bytes32,address) view returns (bool)
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
   * @signature function protocolFeeCollector() view returns (address)
   */
  protocolFeeCollector: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Exchange` contract call for the `protocolFeeMultiplier` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function protocolFeeMultiplier() view returns (uint256)
   */
  protocolFeeMultiplier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Exchange` contract call for the `transactionsExecuted` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function transactionsExecuted(bytes32) view returns (bool)
   */
  transactionsExecuted: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3Exchange` contract transaction for `batchCancelOrders` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function batchCancelOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[]) payable
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
   * @signature function batchExecuteTransactions(tuple(uint256,uint256,uint256,address,bytes)[],bytes[]) payable returns (bytes[])
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
   * @signature function batchFillOrKillOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256)[])
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
   * @signature function batchFillOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256)[])
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
   * @signature function batchFillOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256[],bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256)[])
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
   * @signature function batchMatchOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[]) payable returns (tuple(tuple(uint256,uint256,uint256,uint256,uint256)[],tuple(uint256,uint256,uint256,uint256,uint256)[],uint256,uint256))
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
   * @signature function batchMatchOrdersWithMaximalFill(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],bytes[],bytes[]) payable returns (tuple(tuple(uint256,uint256,uint256,uint256,uint256)[],tuple(uint256,uint256,uint256,uint256,uint256)[],uint256,uint256))
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
   * @signature function cancelOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)) payable
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
   * @signature function cancelOrdersUpTo(uint256) payable
   */
  cancelOrdersUpTo: (targetOrderEpoch: ethers.BigNumberish) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `executeTransaction` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function executeTransaction(tuple(uint256,uint256,uint256,address,bytes),bytes) payable returns (bytes)
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
   * @signature function fillOrKillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
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
   * @signature function fillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
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
   * @signature function marketBuyOrdersFillOrKill(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
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
   * @signature function marketBuyOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
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
   * @signature function marketSellOrdersFillOrKill(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
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
   * @signature function marketSellOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)[],uint256,bytes[]) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
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
   * @signature function matchOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes) payable returns (tuple(tuple(uint256,uint256,uint256,uint256,uint256),tuple(uint256,uint256,uint256,uint256,uint256),uint256,uint256))
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
   * @signature function matchOrdersWithMaximalFill(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes,bytes) payable returns (tuple(tuple(uint256,uint256,uint256,uint256,uint256),tuple(uint256,uint256,uint256,uint256,uint256),uint256,uint256))
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
   * @signature function preSign(bytes32) payable
   */
  preSign: (hash: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `registerAssetProxy` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function registerAssetProxy(address)
   */
  registerAssetProxy: (assetProxy: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `setProtocolFeeCollectorAddress` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function setProtocolFeeCollectorAddress(address)
   */
  setProtocolFeeCollectorAddress: (updatedProtocolFeeCollector: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `setProtocolFeeMultiplier` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function setProtocolFeeMultiplier(uint256)
   */
  setProtocolFeeMultiplier: (updatedProtocolFeeMultiplier: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `setSignatureValidatorApproval` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function setSignatureValidatorApproval(address,bool) payable
   */
  setSignatureValidatorApproval: (
    validatorAddress: string,
    approval: boolean,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Exchange` contract transaction for `simulateDispatchTransferFromCalls` function.
   *
   * @contract ZeroExV3Exchange
   * @signature function simulateDispatchTransferFromCalls(bytes[],address[],address[],uint256[])
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
   * @signature function transferOwnership(address)
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
