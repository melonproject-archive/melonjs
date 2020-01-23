import BigNumber from 'bignumber.js';
import { Address } from '../../../../Address';
import { functionSignature } from '../../../../utils/functionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { checkSufficientBalance } from '../utils/checkSufficientBalance';
import { checkFundIsNotShutdown } from '../utils/checkFundIsNotShutdown';
import { zeroBigNumber } from '../../../../utils/zeroBigNumber';
import { BaseTradingAdapter } from './BaseTradingAdapter';
import { CallOnExchangeArgs } from '../Trading';
import { padLeft } from 'web3-utils';
import { checkSenderIsFundManager } from '../utils/checkSenderIsFundManager';

export interface TakeOrderMelonEngine {
  makerAsset: Address;
  takerAsset: Address;
  makerQuantity: BigNumber;
  takerQuantity: BigNumber;
}

export class MelonEngineTradingAdapter extends BaseTradingAdapter {
  /**
   * Take order on the Melon Engine
   *
   * @param from The address of the sender
   * @param args The arguments as [[TakeOrderMelonEngine]]
   */
  public takeOrder(from: Address, args: TakeOrderMelonEngine) {
    const paddedZeros = padLeft('0x0', 64);
    const methodArgs: CallOnExchangeArgs = {
      exchangeIndex: this.index,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'takeOrder'),
      orderAddresses: [
        zeroAddress,
        zeroAddress,
        args.makerAsset,
        args.takerAsset,
        zeroAddress,
        zeroAddress,
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
        args.takerQuantity,
        zeroBigNumber,
      ],
      orderData: [paddedZeros, paddedZeros, paddedZeros, paddedZeros],
      identifier: paddedZeros,
      signature: paddedZeros,
    };

    const validate = async () => {
      const vaultAddress = (await this.trading.getRoutes()).vault;
      const hubAddress = await this.trading.getHub();

      await Promise.all([
        checkSufficientBalance(this.trading.environment, args.takerAsset, args.takerQuantity, vaultAddress),
        checkFundIsNotShutdown(this.trading.environment, hubAddress),
        checkSenderIsFundManager(this.trading.environment, from, hubAddress),
      ]);
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }
}
