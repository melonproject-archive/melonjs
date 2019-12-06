import BigNumber from 'bignumber.js';
import { Address } from '../../../../Address';
import { sameAddress } from '../../../../utils/sameAddress';
import { Trading } from '../Trading';
import { encodeFunctionSignature } from '../../../../utils/encodeFunctionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { MelonEngineNotRegisteredWithFundError } from '../Trading.errors';
import { checkSufficientBalance } from '../utils/checkSufficientBalance';
import { checkFundIsNotShutdown } from '../utils/checkFundIsNotShutdown';

export interface TakeOrderMelonEngine {
  makerAsset: Address;
  takerAsset: Address;
  makerQuantity: BigNumber;
  takerQuantity: BigNumber;
}

export class MelonEngine {
  constructor(public readonly trading: Trading, public readonly exchangeIndex: number) {}

  public static async create(trading: Trading, address: Address) {
    const exchangeIndex = await this.index(trading, address);
    if (exchangeIndex === null) {
      throw new MelonEngineNotRegisteredWithFundError(address);
    }

    return new this(trading, exchangeIndex);
  }

  public static async index(trading: Trading, address: Address) {
    const exchangeInfo = await trading.getExchangeInfo();
    const exchangeIndex = exchangeInfo.findIndex(exchange => sameAddress(exchange.exchange, address));

    return exchangeIndex === -1 ? null : exchangeIndex;
  }

  /**
   * Take order on the Melon Engine
   *
   * @param from The address of the sender
   * @param args The arguments as [[TakeOrderMelonEngine]]
   */
  public takeOrder(from: Address, args: TakeOrderMelonEngine) {
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
