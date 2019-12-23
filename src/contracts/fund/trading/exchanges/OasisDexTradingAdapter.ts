import BigNumber from 'bignumber.js';
import { padLeft, numberToHex } from 'web3-utils';
import { Address } from '../../../../Address';
import { functionSignature } from '../../../../utils/functionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { zeroBigNumber } from '../../../../utils/zeroBigNumber';
import { CallOnExchangeArgs } from '../Trading';
import { BaseTradingAdapter } from './BaseTradingAdapter';

export interface OasisDexCancelOrderArgs {
  id: BigNumber;
  makerAsset: Address;
  takerAsset: Address;
}

export interface OasisDexMakeOrderArgs {
  makerAsset: Address;
  takerAsset: Address;
  makerQuantity: BigNumber;
  takerQuantity: BigNumber;
}

export class OasisDexTradingAdapter extends BaseTradingAdapter {
  /**
   * Cancel a make order on OasisDex
   *
   * @param from The address of the sender
   * @param args The arguments as [[OasisDexCancelOrderArgs]]
   */
  public cancelOrder(from: Address, args: OasisDexCancelOrderArgs) {
    const methodArgs: CallOnExchangeArgs = {
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

    const validate = async () => {
      // TODO: Add validation.
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }

  /**
   * Create a make order on 0x.
   *
   * @param from The address of the sender.
   * @param args The arguments.
   */
  public makeOrder(from: Address, args: OasisDexMakeOrderArgs) {
    const methodArgs: CallOnExchangeArgs = {
      exchangeIndex: this.exchangeIndex,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'makeOrder'),
      orderAddresses: [
        this.trading.contract.address,
        zeroAddress,
        args.makerAsset,
        args.takerAsset,
        zeroAddress,
        zeroAddress,
      ],
      orderValues: [
        args.makerQuantity,
        args.takerQuantity,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
      ],
      identifier: padLeft('0x0', 64),
      makerAssetData: padLeft('0x0', 64),
      takerAssetData: padLeft('0x0', 64),
      signature: padLeft('0x0', 64),
    };

    const validate = async () => {
      // TODO: Ensure fund not shut down.
      // TODO: Ensure exchange method is allowed.
      // TODO: Ensure not buying/selling of own fund token.
      // TODO: Ensure price provided on this asset pair.
      // TODO: Ensure price feed data is not outdated.
      // TODO: Ensure there are no other open orders for the asset.
      // IF MATCHINGMARKET:
      // TODO: Ensure selling quantity is not too low.
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }
}
