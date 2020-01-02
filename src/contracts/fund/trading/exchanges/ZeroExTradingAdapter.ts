import BigNumber from 'bignumber.js';
import { SignedOrder } from '@0x/types';
import { orderHashUtils, assetDataUtils } from '@0x/order-utils';
import { numberToHex, padLeft } from 'web3-utils';
import { Address } from '../../../../Address';
import { functionSignature } from '../../../../utils/functionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { zeroBigNumber } from '../../../../utils/zeroBigNumber';
import { ValidationError } from '../../../../errors/ValidationError';
import { CallOnExchangeArgs } from '../Trading';
import { BaseTradingAdapter } from './BaseTradingAdapter';

export interface CancelOrderZeroExArgs {
  orderHashHex?: string;
  orderId?: BigNumber;
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
      exchangeIndex: this.exchangeIndex,
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
      // TODO: Add validation.

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
      exchangeIndex: this.exchangeIndex,
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
      // TODO: Add validation.
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }
}
