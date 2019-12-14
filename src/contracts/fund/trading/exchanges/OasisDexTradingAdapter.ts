import { padLeft, numberToHex } from 'web3-utils';
import { BaseTradingAdapter } from './BaseTradingAdapter';
import { Address } from '../../../../Address';
import { functionSignature } from '../../../../utils/functionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { zeroBigNumber } from '../../../../utils/zeroBigNumber';
import BigNumber from 'bignumber.js';

export interface OasisDexCancelOrderArgs {
  id: BigNumber;
  makerAsset: Address;
  takerAsset: Address;
}

export class OasisDexTradingAdapter extends BaseTradingAdapter {
  /**
   * Cancel make order on Oasisdex
   *
   * @param from The address of the sender
   * @param args The arguments as [[OasisDexCancelOrderArgs]]
   */
  public cancelOrder(from: Address, args: OasisDexCancelOrderArgs) {
    const methodArgs = {
      exchangeIndex: this.exchangeIndex,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'cancelOrder'),
      orderAddresses: [
        this.trading.contract.address,
        zeroAddress,
        args.makerAsset,
        args.takerAsset,
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
      identifier: padLeft(numberToHex(args.id.toString()), 64),
      makerAssetData: padLeft('0x0', 64),
      takerAssetData: padLeft('0x0', 64),
      signature: padLeft('0x0', 64),
    };

    const validate = async () => {};

    return this.trading.callOnExchange(from, methodArgs, validate);
  }
}
