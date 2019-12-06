import BigNumber from 'bignumber.js';
import { Address } from '../../../../Address';
import { encodeFunctionSignature } from '../../../../utils/encodeFunctionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { checkSufficientBalance } from '../utils/checkSufficientBalance';
import { checkFundIsNotShutdown } from '../utils/checkFundIsNotShutdown';
import { BaseExchange } from './BaseExchange';

export interface TakeOrderKyber {
  makerAsset: Address;
  takerAsset: Address;
  makerQuantity: BigNumber;
  takerQuantity: BigNumber;
}

export class Kyber extends BaseExchange {
  /**
   * Take order on Kyber
   *
   * @param from The address of the sender
   * @param args The arguments as [[TakeOrderKyber]]
   */
  public takeOrder(from: Address, args: TakeOrderKyber) {
    const methodArgs = {
      exchangeIndex: this.exchangeIndex,
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

    const validate = async () => {
      const vaultAddress = (await this.trading.getRoutes()).vault;
      const hubAddress = await this.trading.getHub();

      await checkSufficientBalance(this.trading.environment, args.takerAsset, args.takerQuantity, vaultAddress);
      await checkFundIsNotShutdown(this.trading.environment, hubAddress);
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }
}
