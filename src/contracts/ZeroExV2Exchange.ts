import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV2Exchange extends Contract {
  public readonly ethers: ZeroExV2ExchangeEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV2Exchange` contract call for the `filled` function.
   *
   * @contract ZeroExV2Exchange
   * @signature filled(bytes32)
   * @method function filled(bytes32) view returns (uint256)
   */
  filled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV2Exchange` contract call for the `cancelled` function.
   *
   * @contract ZeroExV2Exchange
   * @signature cancelled(bytes32)
   * @method function cancelled(bytes32) view returns (bool)
   */
  cancelled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV2Exchange` contract call for the `assetProxies` function.
   *
   * @contract ZeroExV2Exchange
   * @signature assetProxies(bytes4)
   * @method function assetProxies(bytes4) view returns (address)
   */
  assetProxies: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `getAssetProxy` function.
   *
   * @contract ZeroExV2Exchange
   * @signature getAssetProxy(bytes4)
   * @method function getAssetProxy(bytes4) view returns (address)
   */
  getAssetProxy: (assetProxyId: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `transactions` function.
   *
   * @contract ZeroExV2Exchange
   * @signature transactions(bytes32)
   * @method function transactions(bytes32) view returns (bool)
   */
  transactions: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV2Exchange` contract call for the `allowedValidators` function.
   *
   * @contract ZeroExV2Exchange
   * @signature allowedValidators(address,address)
   * @method function allowedValidators(address,address) view returns (bool)
   */
  allowedValidators: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV2Exchange` contract call for the `getOrdersInfo` function.
   *
   * @contract ZeroExV2Exchange
   * @signature getOrdersInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])
   * @method function getOrdersInfo(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[]) view returns (tuple(uint8,bytes32,uint256)[])
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
   * @signature preSigned(bytes32,address)
   * @method function preSigned(bytes32,address) view returns (bool)
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
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `isValidSignature` function.
   *
   * @contract ZeroExV2Exchange
   * @signature isValidSignature(bytes32,address,bytes)
   * @method function isValidSignature(bytes32,address,bytes) view returns (bool)
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
   * @signature getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))
   * @method function getOrderInfo(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)) view returns (tuple(uint8,bytes32,uint256))
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
   * @signature orderEpoch(address,address)
   * @method function orderEpoch(address,address) view returns (uint256)
   */
  orderEpoch: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV2Exchange` contract call for the `ZRX_ASSET_DATA` function.
   *
   * @contract ZeroExV2Exchange
   * @signature ZRX_ASSET_DATA()
   * @method function ZRX_ASSET_DATA() view returns (bytes)
   */
  ZRX_ASSET_DATA: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `EIP712_DOMAIN_HASH` function.
   *
   * @contract ZeroExV2Exchange
   * @signature EIP712_DOMAIN_HASH()
   * @method function EIP712_DOMAIN_HASH() view returns (bytes32)
   */
  EIP712_DOMAIN_HASH: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `currentContextAddress` function.
   *
   * @contract ZeroExV2Exchange
   * @signature currentContextAddress()
   * @method function currentContextAddress() view returns (address)
   */
  currentContextAddress: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract call for the `VERSION` function.
   *
   * @contract ZeroExV2Exchange
   * @signature VERSION()
   * @method function VERSION() view returns (string)
   */
  VERSION: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV2Exchange` contract transaction for `batchFillOrders` function.
   *
   * @contract ZeroExV2Exchange
   * @signature batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])
   * @method function batchFillOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
   * @signature preSign(bytes32,address,bytes)
   * @method function preSign(bytes32,address,bytes)
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
   * @signature matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)
   * @method function matchOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes) returns (tuple(tuple(uint256,uint256,uint256,uint256),tuple(uint256,uint256,uint256,uint256),uint256))
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
   * @signature fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)
   * @method function fillOrderNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes) returns (tuple(uint256,uint256,uint256,uint256))
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
   * @signature batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])
   * @method function batchCancelOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])
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
   * @signature batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])
   * @method function batchFillOrKillOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
   * @signature cancelOrdersUpTo(uint256)
   * @method function cancelOrdersUpTo(uint256)
   */
  cancelOrdersUpTo: (targetOrderEpoch: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `batchFillOrdersNoThrow` function.
   *
   * @contract ZeroExV2Exchange
   * @signature batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])
   * @method function batchFillOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
   * @signature fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)
   * @method function fillOrKillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes) returns (tuple(uint256,uint256,uint256,uint256))
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
   * @signature changeZRXAssetData(bytes)
   * @method function changeZRXAssetData(bytes)
   */
  changeZRXAssetData: (newData: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `setSignatureValidatorApproval` function.
   *
   * @contract ZeroExV2Exchange
   * @signature setSignatureValidatorApproval(address,bool)
   * @method function setSignatureValidatorApproval(address,bool)
   */
  setSignatureValidatorApproval: (validatorAddress: string, approval: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `marketSellOrders` function.
   *
   * @contract ZeroExV2Exchange
   * @signature marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])
   * @method function marketSellOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
   * @signature marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])
   * @method function marketBuyOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
   * @signature fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)
   * @method function fillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes) returns (tuple(uint256,uint256,uint256,uint256))
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
   * @signature executeTransaction(uint256,address,bytes,bytes)
   * @method function executeTransaction(uint256,address,bytes,bytes)
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
   * @signature registerAssetProxy(address)
   * @method function registerAssetProxy(address)
   */
  registerAssetProxy: (assetProxy: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV2Exchange` contract transaction for `cancelOrder` function.
   *
   * @contract ZeroExV2Exchange
   * @signature cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))
   * @method function cancelOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))
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
   * @signature marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])
   * @method function marketSellOrdersNoThrow(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
   * @signature marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])
   * @method function marketBuyOrders(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[]) returns (tuple(uint256,uint256,uint256,uint256))
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
   * @signature transferOwnership(address)
   * @method function transferOwnership(address)
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

export interface ZeroExV2ExchangeEthersContract extends ethers.Contract {
  'filled(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'cancelled(bytes32)': ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'assetProxies(bytes4)': ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'getAssetProxy(bytes4)': (
    assetProxyId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<string>;
  'transactions(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'allowedValidators(address,address)': (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'getOrdersInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])': (
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
  'preSigned(bytes32,address)': (
    $$0: string | ethers.utils.BytesLike,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'isValidSignature(bytes32,address,bytes)': (
    hash: string | ethers.utils.BytesLike,
    signerAddress: string,
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
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
  'orderEpoch(address,address)': (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'ZRX_ASSET_DATA()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'EIP712_DOMAIN_HASH()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'currentContextAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'VERSION()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'preSign(bytes32,address,bytes)': (
    hash: string | ethers.utils.BytesLike,
    signerAddress: string,
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'cancelOrdersUpTo(uint256)': (
    targetOrderEpoch: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'changeZRXAssetData(bytes)': (
    newData: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setSignatureValidatorApproval(address,bool)': (
    validatorAddress: string,
    approval: boolean,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'executeTransaction(uint256,address,bytes,bytes)': (
    salt: ethers.BigNumberish,
    signerAddress: string,
    data: string | ethers.utils.BytesLike,
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'registerAssetProxy(address)': (
    assetProxy: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'transferOwnership(address)': (
    newOwner: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'filled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'cancelled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'assetProxies(bytes4)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'getAssetProxy(bytes4)': (
      assetProxyId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'transactions(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'allowedValidators(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'getOrdersInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])': (
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
    'preSigned(bytes32,address)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isValidSignature(bytes32,address,bytes)': (
      hash: string | ethers.utils.BytesLike,
      signerAddress: string,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
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
    'orderEpoch(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'ZRX_ASSET_DATA()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'EIP712_DOMAIN_HASH()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'currentContextAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'VERSION()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'preSign(bytes32,address,bytes)': (
      hash: string | ethers.utils.BytesLike,
      signerAddress: string,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'cancelOrdersUpTo(uint256)': (
      targetOrderEpoch: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'changeZRXAssetData(bytes)': (
      newData: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setSignatureValidatorApproval(address,bool)': (
      validatorAddress: string,
      approval: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'executeTransaction(uint256,address,bytes,bytes)': (
      salt: ethers.BigNumberish,
      signerAddress: string,
      data: string | ethers.utils.BytesLike,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'registerAssetProxy(address)': (
      assetProxy: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'transferOwnership(address)': (
      newOwner: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'filled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'cancelled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'assetProxies(bytes4)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'getAssetProxy(bytes4)': (
      assetProxyId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'transactions(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'allowedValidators(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'getOrdersInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])': (
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
    'preSigned(bytes32,address)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isValidSignature(bytes32,address,bytes)': (
      hash: string | ethers.utils.BytesLike,
      signerAddress: string,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
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
    'orderEpoch(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'ZRX_ASSET_DATA()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'EIP712_DOMAIN_HASH()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'currentContextAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'VERSION()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
    }>;
    'preSign(bytes32,address,bytes)': (
      hash: string | ethers.utils.BytesLike,
      signerAddress: string,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      left: {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
      };
      right: {
        makerAssetFilledAmount: ethers.BigNumber;
        takerAssetFilledAmount: ethers.BigNumber;
        makerFeePaid: ethers.BigNumber;
        takerFeePaid: ethers.BigNumber;
      };
      leftMakerAssetSpreadAmount: ethers.BigNumber;
    }>;
    'fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
    }>;
    'batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
    }>;
    'cancelOrdersUpTo(uint256)': (
      targetOrderEpoch: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
    }>;
    'fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
    }>;
    'changeZRXAssetData(bytes)': (
      newData: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setSignatureValidatorApproval(address,bool)': (
      validatorAddress: string,
      approval: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
    }>;
    'marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
    }>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
    }>;
    'executeTransaction(uint256,address,bytes,bytes)': (
      salt: ethers.BigNumberish,
      signerAddress: string,
      data: string | ethers.utils.BytesLike,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'registerAssetProxy(address)': (assetProxy: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
    }>;
    'marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
    }>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'preSign(bytes32,address,bytes)': (
      hash: string | ethers.utils.BytesLike,
      signerAddress: string,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'cancelOrdersUpTo(uint256)': (
      targetOrderEpoch: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'changeZRXAssetData(bytes)': (
      newData: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setSignatureValidatorApproval(address,bool)': (
      validatorAddress: string,
      approval: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'executeTransaction(uint256,address,bytes,bytes)': (
      salt: ethers.BigNumberish,
      signerAddress: string,
      data: string | ethers.utils.BytesLike,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'registerAssetProxy(address)': (assetProxy: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'preSign(bytes32,address,bytes)': (
      hash: string | ethers.utils.BytesLike,
      signerAddress: string,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'cancelOrdersUpTo(uint256)': (
      targetOrderEpoch: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'changeZRXAssetData(bytes)': (
      newData: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setSignatureValidatorApproval(address,bool)': (
      validatorAddress: string,
      approval: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'executeTransaction(uint256,address,bytes,bytes)': (
      salt: ethers.BigNumberish,
      signerAddress: string,
      data: string | ethers.utils.BytesLike,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'registerAssetProxy(address)': (
      assetProxy: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferOwnership(address)': (
      newOwner: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
