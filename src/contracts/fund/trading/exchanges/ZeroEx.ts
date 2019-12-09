import { BaseExchange } from './BaseExchange';
import { SignedOrder } from '@0x/types';
import { orderHashUtils } from '@0x/order-utils';
import { Address } from '../../../../Address';
import { encodeFunctionSignature } from '../../../../utils/encodeFunctionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import BigNumber from 'bignumber.js';
import { zeroAddress } from '../../../../utils/zeroAddress';

interface CancelOrderZeroEx {
  signedOrder?: SignedOrder;
  orderHashHex?: string;
}

export class ZeroEx extends BaseExchange {
  /**
   * Cancel make order on 0x
   *
   * @param from The address of the sender
   * @param args The arguments as [[CancelOrderZeroEx]]
   */
  public async cancelOrder(from: Address, args: CancelOrderZeroEx) {
    const orderHashHex = args.orderHashHex || (await orderHashUtils.getOrderHashAsync(args.signedOrder));

    const methodArgs = {
      exchangeIndex: this.exchangeIndex,
      methodSignature: encodeFunctionSignature(ExchangeAdapterAbi, 'cancelOrder'),
      orderAddresses: [zeroAddress, zeroAddress, zeroAddress, zeroAddress, zeroAddress, zeroAddress],
      orderValues: [
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
      ],
      identifier: orderHashHex,
      makerAssetData: '0x0',
      takerAssetData: '0x0',
      signature: '0x0',
    };

    const validate = async () => {};

    return this.trading.callOnExchange(from, methodArgs, validate);
  }
}
