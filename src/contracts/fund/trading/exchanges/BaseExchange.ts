import { Address } from '../../../../Address';
import { sameAddress } from '../../../../utils/sameAddress';
import { Trading } from '../Trading';
import { ExchangeNotRegisteredWithFundError } from '../Trading.errors';

export class BaseExchange {
  constructor(public readonly trading: Trading, public readonly exchangeIndex: number) {}

  public static async create<T extends typeof BaseExchange>(this: T, trading: Trading, address: Address) {
    const exchangeIndex = await this.index(trading, address);
    if (exchangeIndex === null) {
      throw new ExchangeNotRegisteredWithFundError(address);
    }

    return new this(trading, exchangeIndex) as InstanceType<T>;
  }

  public static async index(trading: Trading, address: Address) {
    const exchangeInfo = await trading.getExchangeInfo();
    const exchangeIndex = exchangeInfo.findIndex(exchange => sameAddress(exchange.exchange, address));

    return exchangeIndex === -1 ? null : exchangeIndex;
  }
}
