import BigNumber from 'bignumber.js';
import { Address } from '../../../../Address';
import { sameAddress } from '../../../../utils/sameAddress';
import { Trading } from '../Trading';
import { encodeFunctionSignature } from '../../../../utils/encodeFunctionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { MelonEngineNotRegisteredWithFundError } from '../Trading.errors';

export interface TakeOrderMelonEngine {
  exchangeAddress: Address;
  makerAsset: Address;
  takerAsset: Address;
  makerQuantity: BigNumber;
  takerQuantity: BigNumber;
}

export class MelonEngine {
  constructor(public readonly trading: Trading) {}

  /**
   * Take order on the Melon Engine
   *
   * @param from The address of the sender
   * @param args The arguments as [[TakeOrderMelonEngine]]
   */
  public async takeOrder(from: Address, args: TakeOrderMelonEngine) {
    const exchangeInfo = await this.trading.getExchangeInfo();
    const exchangeIndex = exchangeInfo.findIndex(exchange => sameAddress(exchange.exchange, args.exchangeAddress));

    if (exchangeIndex === -1) {
      throw new MelonEngineNotRegisteredWithFundError(args.exchangeAddress);
    }

    const methodArgs = {
      exchangeIndex,
      methodSignature: encodeFunctionSignature(ExchangeAdapterAbi, 'takeOrder'),
      orderAddresses: [zeroAddress, zeroAddress, args.makerAsset, args.takerAsset, zeroAddress, zeroAddress],
      orderValues: [
        args.makerQuantity,
        args.takerQuantity,
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        args.takerQuantity,
        new BigNumber(0),
      ],
      identifier: '0x0',
      makerAssetData: '0x0',
      takerAssetData: '0x0',
      signature: '0x0',
    };

    return this.trading.callOnExchange(from, methodArgs);
  }
}
