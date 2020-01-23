import BigNumber from 'bignumber.js';
import {
  orderHashUtils,
  generatePseudoRandomSalt,
  signatureUtils,
  assetDataUtils,
  JSONRPCRequestPayload,
  JSONRPCErrorCallback,
  SignatureType,
  SignedOrder,
} from '@0x/order-utils-v2';
import { numberToHex, padLeft, randomHex } from 'web3-utils';
import { Address } from '../../../../Address';
import { functionSignature } from '../../../../utils/functionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { zeroBigNumber } from '../../../../utils/zeroBigNumber';
import { ValidationError } from '../../../../errors/ValidationError';
import { CallOnExchangeArgs } from '../Trading';
import { BaseTradingAdapter } from './BaseTradingAdapter';
import { ZeroExV2Order } from '../../../exchanges/third-party/zeroex/ZeroExV2Exchange';
import { checkSenderIsFundManager } from '../utils/checkSenderIsFundManager';
import { checkSufficientBalance } from '../utils/checkSufficientBalance';
import { checkExistingOpenMakeOrder } from '../utils/checkExistingOpenMakeOrder';
import { checkCooldownReached } from '../utils/checkCooldownReached';
import { sameAddress } from '../../../../utils/sameAddress';
import { checkFundIsNotShutdown } from '../utils/checkFundIsNotShutdown';

export interface CancelOrderZeroExV2Args {
  orderHashHex?: string;
  orderId?: BigNumber;
}

export interface CreateUnsignedOrderZeroExV2Args {
  makerTokenAddress: Address;
  takerTokenAddress: Address;
  makerAssetAmount: BigNumber;
  takerAssetAmount: BigNumber;
  takerFee?: BigNumber;
  feeRecipientAddress?: Address;
  duration?: number;
}

export class MissingZeroExOrderHashHex extends ValidationError {
  public readonly name = 'MissingZeroExOrderHashHex';

  constructor(message: string = 'Missing order hash hex.') {
    super(message);
  }
}

export class InvalidOrderSignatureError extends ValidationError {
  public readonly name = 'InvalidOrderSignatureError';

  constructor(message: string = 'Invalid order signature.') {
    super(message);
  }
}

export class ZeroExV2TradingAdapter extends BaseTradingAdapter {
  public getOrderHash(order: SignedOrder) {
    return orderHashUtils.getOrderHashHex(order);
  }

  /**
   * Cancel a make order on 0x.
   *
   * @param from The address of the sender.
   * @param args The arguments.
   */
  public cancelOrder(from: Address, args: CancelOrderZeroExV2Args) {
    const orderHashHex = args.orderHashHex || (args.orderId && padLeft(numberToHex(args.orderId.toFixed(0)), 64));
    const paddedZeros = padLeft('0x0', 64);
    const methodArgs: CallOnExchangeArgs = {
      exchangeIndex: this.index,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'cancelOrder'),
      orderAddresses: [
        zeroAddress,
        zeroAddress,
        zeroAddress,
        zeroAddress,
        zeroAddress,
        zeroAddress,
        zeroAddress,
        zeroAddress,
      ],
      orderValues: [
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
      ],
      orderData: [paddedZeros, paddedZeros, paddedZeros, paddedZeros],
      identifier: orderHashHex,
      signature: paddedZeros,
    };

    const validate = async () => {
      const hubAddress = await this.trading.getHub();
      await checkSenderIsFundManager(this.trading.environment, from, hubAddress);

      if (!orderHashHex) {
        throw new MissingZeroExOrderHashHex();
      }
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }

  /**
   * Take an order on 0x.
   *
   * @param from The address of the sender.
   * @param order The arguments.
   * @param takerAmount: The amount (overriding the takeAssetAmount of the order)
   */
  public takeOrder(from: Address, order: SignedOrder, takerAmount?: BigNumber) {
    const makerTokenAddress = assetDataUtils.decodeERC20AssetData(order.makerAssetData).tokenAddress;
    const takerTokenAddress = assetDataUtils.decodeERC20AssetData(order.takerAssetData).tokenAddress;
    const amount = takerAmount || order.takerAssetAmount;

    const paddedZeros = padLeft('0x0', 64);
    const methodArgs: CallOnExchangeArgs = {
      exchangeIndex: this.index,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'takeOrder'),
      orderAddresses: [
        order.makerAddress,
        zeroAddress,
        makerTokenAddress,
        takerTokenAddress,
        order.feeRecipientAddress,
        zeroAddress,
        zeroAddress,
        zeroAddress,
      ],
      orderValues: [
        order.makerAssetAmount,
        order.takerAssetAmount,
        order.makerFee,
        order.takerFee,
        order.expirationTimeSeconds,
        order.salt,
        amount,
        zeroBigNumber,
      ],
      orderData: [order.makerAssetData, order.takerAssetData, paddedZeros, paddedZeros],
      identifier: paddedZeros,
      signature: order.signature,
    };

    const validate = async () => {
      const hubAddress = await this.trading.getHub();
      const vaultAddress = (await this.trading.getRoutes()).vault;

      await Promise.all([
        checkSenderIsFundManager(this.trading.environment, from, hubAddress),
        checkSufficientBalance(this.trading.environment, takerTokenAddress, amount, vaultAddress),
      ]);
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }

  /**
   * Create a make order on 0x.
   *
   * @param from The address of the sender.
   * @param args The arguments.
   */
  public makeOrder(from: Address, order: SignedOrder) {
    const makerTokenAddress = assetDataUtils.decodeERC20AssetData(order.makerAssetData).tokenAddress;
    const takerTokenAddress = assetDataUtils.decodeERC20AssetData(order.takerAssetData).tokenAddress;

    const paddedZeros = padLeft('0x0', 64);
    const methodArgs: CallOnExchangeArgs = {
      exchangeIndex: this.index,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'makeOrder'),
      orderAddresses: [
        order.makerAddress,
        zeroAddress,
        makerTokenAddress,
        takerTokenAddress,
        order.feeRecipientAddress,
        zeroAddress,
        zeroAddress,
        zeroAddress,
      ],
      orderValues: [
        order.makerAssetAmount,
        order.takerAssetAmount,
        order.makerFee,
        order.takerFee,
        order.expirationTimeSeconds,
        order.salt,
        zeroBigNumber,
        zeroBigNumber,
      ],
      orderData: [order.makerAssetData, order.takerAssetData, paddedZeros, paddedZeros],
      identifier: randomHex(32),
      signature: order.signature,
    };

    const validate = async () => {
      const vaultAddress = (await this.trading.getRoutes()).vault;
      const hubAddress = await this.trading.getHub();

      await Promise.all([
        checkSufficientBalance(this.trading.environment, makerTokenAddress, order.makerAssetAmount, vaultAddress),
        checkFundIsNotShutdown(this.trading.environment, hubAddress),
        checkSenderIsFundManager(this.trading.environment, from, hubAddress),
        checkExistingOpenMakeOrder(this.trading, makerTokenAddress),
        checkCooldownReached(this.trading, makerTokenAddress),
      ]);
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }

  public async createUnsignedOrder(values: CreateUnsignedOrderZeroExV2Args) {
    const duration = values.duration == null ? 24 * 60 * 60 : values.duration;
    const block = await this.trading.environment.client.getBlock('latest');

    const order: ZeroExV2Order = {
      exchangeAddress: this.info.exchange,
      makerAddress: this.trading.contract.address,
      takerAddress: zeroAddress,
      senderAddress: zeroAddress,
      feeRecipientAddress: values.feeRecipientAddress || zeroAddress,
      expirationTimeSeconds: new BigNumber(block.timestamp).plus(duration),
      salt: generatePseudoRandomSalt(),
      makerAssetAmount: values.makerAssetAmount,
      takerAssetAmount: values.takerAssetAmount,
      makerAssetData: assetDataUtils.encodeERC20AssetData(values.makerTokenAddress),
      takerAssetData: assetDataUtils.encodeERC20AssetData(values.takerTokenAddress),
      makerFee: zeroBigNumber,
      takerFee: values.takerFee || zeroBigNumber,
    };

    return order;
  }

  public async signOrder(order: ZeroExV2Order, signer: Address) {
    const provider = this.getSubprovier();
    const signed = await signatureUtils.ecSignOrderAsync(provider, order, signer);
    if (sameAddress(signed.makerAddress, signer)) {
      return signed;
    }

    return {
      ...signed,
      signature: `${signed.signature.slice(0, -1)}${SignatureType.PreSigned}`,
    };
  }

  protected getSubprovier() {
    const eth = this.trading.environment.client;
    const provider = {
      sendAsync: async (payload: JSONRPCRequestPayload, callback: JSONRPCErrorCallback) => {
        const method = payload.method;
        const params = payload.params;

        try {
          callback(null, {
            result: await eth.currentProvider.send(method, params),
            id: payload.id,
            jsonrpc: payload.jsonrpc,
          });
        } catch (error) {
          callback(error);
        }
      },
    };

    return provider;
  }
}
