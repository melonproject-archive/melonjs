import { BaseTrading } from './BaseTrading';
import { SignedOrder } from '@0x/types';
import { orderHashUtils } from '@0x/order-utils';
import { Address } from '../../../../Address';
import { encodeFunctionSignature } from '../../../../utils/encodeFunctionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { zeroBigNumber } from '../../../../utils/zeroBigNumber';

interface CancelOrderZeroEx {
  signedOrder?: SignedOrder;
  orderHashHex?: string;
}

export class ZeroExTrading extends BaseTrading {
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
      makerAssetData: '0x0',
      takerAssetData: '0x0',
      signature: '0x0',
    };

    const validate = async () => {};

    return this.trading.callOnExchange(from, methodArgs, validate);
  }
}
