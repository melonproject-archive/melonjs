import { BaseTradingAdapter } from './BaseTradingAdapter';
import { Address } from '../../../../Address';
import { encodeFunctionSignature } from '../../../../utils/encodeFunctionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { padLeft } from 'web3-utils';
import { zeroBigNumber } from '../../../../utils/zeroBigNumber';

export interface CancelOrderOasisDex {
  id: string;
  maker: Address;
  makerAsset: Address;
  takerAsset: Address;
}

export class OasisDexTradingAdapter extends BaseTradingAdapter {
  /**
   * Cancel make order on Oasisdex
   *
   * @param from The address of the sender
   * @param args The arguments as [[CancelOrderOasisDex]]
   */
  public cancelOrder(from: Address, args: CancelOrderOasisDex) {
    const methodArgs = {
      exchangeIndex: this.exchangeIndex,
      methodSignature: encodeFunctionSignature(ExchangeAdapterAbi, 'cancelOrder'),
      orderAddresses: [args.maker, zeroAddress, args.makerAsset, args.takerAsset, zeroAddress, zeroAddress],
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
      identifier: `0x${Number(args.id)
        .toString(16)
        .padStart(64, '0')}`,
      makerAssetData: padLeft('0x0', 64),
      takerAssetData: padLeft('0x0', 64),
      signature: padLeft('0x0', 64),
    };

    const validate = async () => {};

    return this.trading.callOnExchange(from, methodArgs, validate);
  }
}
