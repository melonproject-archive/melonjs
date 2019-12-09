import { BaseExchange } from './BaseExchange';
import { Address } from '../../../../Address';
import { encodeFunctionSignature } from '../../../../utils/encodeFunctionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import BigNumber from 'bignumber.js';
import { padLeft } from 'web3-utils';

export interface CancelOrderOasisDex {
  id: string;
  maker: Address;
  makerAsset: Address;
  takerAsset: Address;
}

export class OasisDex extends BaseExchange {
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
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
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
