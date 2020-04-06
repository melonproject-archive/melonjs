import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV2Exchange extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV2Exchange` contract call for the `filled` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function filled(bytes32) view returns (uint256)
   */
  filled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV2Exchange` contract call for the `cancelled` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function cancelled(bytes32) view returns (bool)
   */
  cancelled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV2Exchange` contract call for the `assetProxies` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function assetProxies(bytes4) view returns (address)
   */
  assetProxies: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `getAssetProxy` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function getAssetProxy(bytes4) view returns (address)
   */
  getAssetProxy: (assetProxyId: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `transactions` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function transactions(bytes32) view returns (bool)
   */
  transactions: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV2Exchange` contract call for the `allowedValidators` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function allowedValidators(address,address) view returns (bool)
   */
  allowedValidators: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV2Exchange` contract call for the `getOrdersInfo` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function getOrdersInfo(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[]) view returns (tuple(uint8,bytes32,uint256)[])
   */
  getOrdersInfo: (
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
    }[],
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ orderStatus: number; orderHash: string; orderTakerAssetFilledAmount: ethers.BigNumber }[]>;

  /**
   * `ZeroExV2Exchange` contract call for the `preSigned` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function preSigned(bytes32,address) view returns (bool)
   */
  preSigned: (
    $$0: string | ethers.utils.BytesLike,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `ZeroExV2Exchange` contract call for the `owner` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `isValidSignature` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function isValidSignature(bytes32,address,bytes) view returns (bool)
   */
  isValidSignature: (
    hash: string | ethers.utils.BytesLike,
    signerAddress: string,
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `ZeroExV2Exchange` contract call for the `getOrderInfo` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function getOrderInfo(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)) view returns (tuple(uint8,bytes32,uint256))
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
    },
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ orderStatus: number; orderHash: string; orderTakerAssetFilledAmount: ethers.BigNumber }>;

  /**
   * `ZeroExV2Exchange` contract call for the `orderEpoch` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function orderEpoch(address,address) view returns (uint256)
   */
  orderEpoch: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV2Exchange` contract call for the `ZRX_ASSET_DATA` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function ZRX_ASSET_DATA() view returns (bytes)
   */
  ZRX_ASSET_DATA: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `EIP712_DOMAIN_HASH` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function EIP712_DOMAIN_HASH() view returns (bytes32)
   */
  EIP712_DOMAIN_HASH: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `currentContextAddress` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function currentContextAddress() view returns (address)
   */
  currentContextAddress: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `VERSION` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function VERSION() view returns (string)
   */
  VERSION: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract transaction for `batchFillOrders` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function batchFillOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
    }[],
    takerAssetFillAmounts: ethers.BigNumber[],
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `preSign` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function preSign(bytes32,address,bytes)
   */
  preSign: (
    hash: string | ethers.utils.BytesLike,
    signerAddress: string,
    signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `matchOrders` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function matchOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes) returns (tuple(tuple(uint256,uint256,uint256,uint256),tuple(uint256,uint256,uint256,uint256),uint256))
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
    },
    leftSignature: string | ethers.utils.BytesLike,
    rightSignature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `fillOrderNoThrow` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function fillOrderNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes) returns (tuple(uint256,uint256,uint256,uint256))
   */
  fillOrderNoThrow: (
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
    },
    takerAssetFillAmount: ethers.BigNumberish,
    signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `batchCancelOrders` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function batchCancelOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])
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
    }[],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `batchFillOrKillOrders` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function batchFillOrKillOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
    }[],
    takerAssetFillAmounts: ethers.BigNumber[],
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `cancelOrdersUpTo` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function cancelOrdersUpTo(uint256)
   */
  cancelOrdersUpTo: (targetOrderEpoch: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `batchFillOrdersNoThrow` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function batchFillOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
    }[],
    takerAssetFillAmounts: ethers.BigNumber[],
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `fillOrKillOrder` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function fillOrKillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes) returns (tuple(uint256,uint256,uint256,uint256))
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
    },
    takerAssetFillAmount: ethers.BigNumberish,
    signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `changeZRXAssetData` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function changeZRXAssetData(bytes)
   */
  changeZRXAssetData: (newData: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `setSignatureValidatorApproval` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function setSignatureValidatorApproval(address,bool)
   */
  setSignatureValidatorApproval: (validatorAddress: string, approval: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `marketSellOrders` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function marketSellOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
   */
  marketSellOrders: (
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
    }[],
    takerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `marketBuyOrdersNoThrow` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function marketBuyOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
    }[],
    makerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `fillOrder` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function fillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes) returns (tuple(uint256,uint256,uint256,uint256))
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
    },
    takerAssetFillAmount: ethers.BigNumberish,
    signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `executeTransaction` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function executeTransaction(uint256,address,bytes,bytes)
   */
  executeTransaction: (
    salt: ethers.BigNumberish,
    signerAddress: string,
    data: string | ethers.utils.BytesLike,
    signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `registerAssetProxy` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function registerAssetProxy(address)
   */
  registerAssetProxy: (assetProxy: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `cancelOrder` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function cancelOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))
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
  }) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `marketSellOrdersNoThrow` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function marketSellOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
    }[],
    takerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `marketBuyOrders` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function marketBuyOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
   */
  marketBuyOrders: (
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
    }[],
    makerAssetFillAmount: ethers.BigNumberish,
    signatures: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `transferOwnership` function.
   *
   * @contract ZeroExV2Exchange
   * @signature function transferOwnership(address)
   */
  transferOwnership: (newOwner: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function filled(bytes32) view returns (uint256)',
    'function batchFillOrders(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData)[] orders, uint256[] takerAssetFillAmounts, bytes[] signatures) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) totalFillResults)',
    'function cancelled(bytes32) view returns (bool)',
    'function preSign(bytes32 hash, address signerAddress, bytes signature)',
    'function matchOrders(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData) leftOrder, tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData) rightOrder, bytes leftSignature, bytes rightSignature) returns (tuple(tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) left, tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) right, uint256 leftMakerAssetSpreadAmount) matchedFillResults)',
    'function fillOrderNoThrow(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData) order, uint256 takerAssetFillAmount, bytes signature) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) fillResults)',
    'function assetProxies(bytes4) view returns (address)',
    'function batchCancelOrders(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData)[] orders)',
    'function batchFillOrKillOrders(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData)[] orders, uint256[] takerAssetFillAmounts, bytes[] signatures) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) totalFillResults)',
    'function cancelOrdersUpTo(uint256 targetOrderEpoch)',
    'function batchFillOrdersNoThrow(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData)[] orders, uint256[] takerAssetFillAmounts, bytes[] signatures) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) totalFillResults)',
    'function getAssetProxy(bytes4 assetProxyId) view returns (address)',
    'function transactions(bytes32) view returns (bool)',
    'function fillOrKillOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData) order, uint256 takerAssetFillAmount, bytes signature) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) fillResults)',
    'function changeZRXAssetData(bytes newData)',
    'function setSignatureValidatorApproval(address validatorAddress, bool approval)',
    'function allowedValidators(address, address) view returns (bool)',
    'function marketSellOrders(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData)[] orders, uint256 takerAssetFillAmount, bytes[] signatures) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) totalFillResults)',
    'function getOrdersInfo(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData)[] orders) view returns (tuple(uint8 orderStatus, bytes32 orderHash, uint256 orderTakerAssetFilledAmount)[])',
    'function preSigned(bytes32, address) view returns (bool)',
    'function owner() view returns (address)',
    'function isValidSignature(bytes32 hash, address signerAddress, bytes signature) view returns (bool isValid)',
    'function marketBuyOrdersNoThrow(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData)[] orders, uint256 makerAssetFillAmount, bytes[] signatures) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) totalFillResults)',
    'function fillOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData) order, uint256 takerAssetFillAmount, bytes signature) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) fillResults)',
    'function executeTransaction(uint256 salt, address signerAddress, bytes data, bytes signature)',
    'function registerAssetProxy(address assetProxy)',
    'function getOrderInfo(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData) order) view returns (tuple(uint8 orderStatus, bytes32 orderHash, uint256 orderTakerAssetFilledAmount) orderInfo)',
    'function cancelOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData) order)',
    'function orderEpoch(address, address) view returns (uint256)',
    'function ZRX_ASSET_DATA() view returns (bytes)',
    'function marketSellOrdersNoThrow(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData)[] orders, uint256 takerAssetFillAmount, bytes[] signatures) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) totalFillResults)',
    'function EIP712_DOMAIN_HASH() view returns (bytes32)',
    'function marketBuyOrders(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData)[] orders, uint256 makerAssetFillAmount, bytes[] signatures) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid) totalFillResults)',
    'function currentContextAddress() view returns (address)',
    'function transferOwnership(address newOwner)',
    'function VERSION() view returns (string)',
    'constructor()',
    'event SignatureValidatorApproval(address indexed signerAddress, address indexed validatorAddress, bool approved)',
    'event Fill(address indexed makerAddress, address indexed feeRecipientAddress, address takerAddress, address senderAddress, uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, bytes32 indexed orderHash, bytes makerAssetData, bytes takerAssetData)',
    'event Cancel(address indexed makerAddress, address indexed feeRecipientAddress, address senderAddress, bytes32 indexed orderHash, bytes makerAssetData, bytes takerAssetData)',
    'event CancelUpTo(address indexed makerAddress, address indexed senderAddress, uint256 orderEpoch)',
    'event AssetProxyRegistered(bytes4 id, address assetProxy)',
  ];
}
