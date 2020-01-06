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
    const methodArgs = {
      exchangeIndex: this.index,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'takeOrder'),
      orderAddresses: [zeroAddress, zeroAddress, args.makerAsset, args.takerAsset, zeroAddress, zeroAddress],
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
      identifier: padLeft('0x0', 64),
      makerAssetData: padLeft('0x0', 64),
      takerAssetData: padLeft('0x0', 64),
      signature: padLeft('0x0', 64),
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

    return this.trading.callOnExchange(from, methodArgs as CallOnExchangeArgs, validate);
  }
}
