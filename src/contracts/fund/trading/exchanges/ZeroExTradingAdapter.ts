import BigNumber from 'bignumber.js';
import { SignedOrder } from '@0x/types';
import { orderHashUtils, generatePseudoRandomSalt, signatureUtils, assetDataUtils } from '@0x/order-utils';
import { numberToHex, padLeft } from 'web3-utils';
import { Address } from '../../../../Address';
import { functionSignature } from '../../../../utils/functionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { zeroBigNumber } from '../../../../utils/zeroBigNumber';
import { ValidationError } from '../../../../errors/ValidationError';
import { CallOnExchangeArgs } from '../Trading';
import { BaseTradingAdapter } from './BaseTradingAdapter';
import { ZeroExOrder } from '../../../exchanges/third-party/zeroex/ZeroEx';
import { JSONRPCRequestPayload, JSONRPCErrorCallback } from '@0x/subproviders';
import { checkSenderIsFundManager } from '../utils/checkSenderIsFundManager';
import { checkSufficientBalance } from '../utils/checkSufficientBalance';
import { checkExistingOpenMakeOrder } from '../utils/checkExistingOpenMakeOrder';
import { checkCooldownReached } from '../utils/checkCooldownReached';

export interface CancelOrderZeroExArgs {
  orderHashHex?: string;
  orderId?: BigNumber;
}

export interface CreateUnsignedOrderZeroExArgs {
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

export class ZeroExTradingAdapter extends BaseTradingAdapter {
  public getOrderHash(order: SignedOrder) {
    return orderHashUtils.getOrderHashHex(order);
  }

  /**
   * Cancel a make order on 0x.
   *
   * @param from The address of the sender.
   * @param args The arguments.
   */
  public cancelOrder(from: Address, args: CancelOrderZeroExArgs) {
    const orderHashHex = args.orderHashHex || (args.orderId && padLeft(numberToHex(args.orderId.toString()), 64));
    const methodArgs: CallOnExchangeArgs = {
      exchangeIndex: this.index,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'cancelOrder'),
      orderAddresses: [zeroAddress, zeroAddress, zeroAddress, zeroAddress, zeroAddress, zeroAddress],
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
      identifier: orderHashHex,
      makerAssetData: padLeft('0x0', 64),
      takerAssetData: padLeft('0x0', 64),
      signature: padLeft('0x0', 64),
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
   * Create a make order on 0x.
   *
   * @param from The address of the sender.
   * @param args The arguments.
   */
  public makeOrder(from: Address, order: SignedOrder) {
    const makerTokenAddress = assetDataUtils.decodeERC20AssetData(order.makerAssetData).tokenAddress;
    const takerTokenAddress = assetDataUtils.decodeERC20AssetData(order.takerAssetData).tokenAddress;

    const methodArgs: CallOnExchangeArgs = {
      exchangeIndex: this.index,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'makeOrder'),
      orderAddresses: [
        this.trading.contract.address,
        zeroAddress,
        makerTokenAddress,
        takerTokenAddress,
        order.feeRecipientAddress,
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
      identifier: padLeft('0x0', 64),
      makerAssetData: order.makerAssetData,
      takerAssetData: order.takerAssetData,
      signature: order.signature,
    };

    const validate = async () => {
      const hubAddress = await this.trading.getHub();
      await Promise.all([
        checkSenderIsFundManager(this.trading.environment, from, hubAddress),
        checkExistingOpenMakeOrder(this.trading, makerTokenAddress),
        checkCooldownReached(this.trading, makerTokenAddress),
      ]);
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
      identifier: padLeft('0x0', 64),
      makerAssetData: order.makerAssetData,
      takerAssetData: order.takerAssetData,
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

  public async createUnsignedOrder(values: CreateUnsignedOrderZeroExArgs) {
    const duration = values.duration == null ? 24 * 60 * 60 : values.duration;
    const block = await this.trading.environment.client.getBlock('latest');

    const order: ZeroExOrder = {
      exchangeAddress: this.info.exchange.toLowerCase(),
      makerAddress: this.trading.contract.address.toLowerCase(),
      takerAddress: zeroAddress,
      senderAddress: zeroAddress,
      feeRecipientAddress: (values.feeRecipientAddress && values.feeRecipientAddress.toLowerCase()) || zeroAddress,
      expirationTimeSeconds: new BigNumber(block.timestamp).plus(duration),
      salt: generatePseudoRandomSalt(),
      makerAssetAmount: values.makerAssetAmount,
      takerAssetAmount: values.takerAssetAmount,
      makerAssetData: assetDataUtils.encodeERC20AssetData(values.makerTokenAddress),
      takerAssetData: assetDataUtils.encodeERC20AssetData(values.takerTokenAddress),
      makerFee: new BigNumber(0),
      takerFee: values.takerFee || new BigNumber(0),
    };

    return order;
  }

  public async signOrder(order: ZeroExOrder, signer: Address) {
    const eth = this.trading.environment.client;
    const provider = {
      // TODO: Apparently web3 v2 is not compatible with the @0x packages so this shit is necesary.
      sendAsync: async (payload: JSONRPCRequestPayload, callback: JSONRPCErrorCallback) => {
        const method = payload.method;
        const params = payload.params;
        const output = (result: any) => ({
          result,
          id: payload.id,
          jsonrpc: payload.jsonrpc,
        });

        try {
          if (method === 'eth_accounts') {
            callback(null, output(await eth.getAccounts()));
          } else if (method === 'eth_signTypedData') {
            callback(null, output(await eth.sign(payload.params[1], payload.params[0])));
          } else {
            callback(null, await eth.currentProvider.send(method, params));
          }
        } catch (error) {
          callback(error);
        }
      },
    };

    return signatureUtils.ecSignOrderAsync(provider, order, signer.toLowerCase());
  }
}
