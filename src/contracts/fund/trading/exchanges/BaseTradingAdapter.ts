import { Address } from '../../../../Address';
import { sameAddress } from '../../../../utils/sameAddress';
import { Trading, ExchangeInfo } from '../Trading';
import { ExchangeNotRegisteredWithFundError } from '../Trading.errors';

export class BaseTradingAdapter {
  constructor(public readonly trading: Trading, public readonly info: ExchangeInfo, public readonly index: number) {}

  public static async create<T extends typeof BaseTradingAdapter>(this: T, trading: Trading, address: Address) {
    const info = await trading.getExchangeInfo();
    const index = info.findIndex(exchange => sameAddress(exchange.exchange, address));
    if (index === -1) {
      throw new ExchangeNotRegisteredWithFundError(address);
    }

    return new this(trading, info[index], index) as InstanceType<T>;
  }
}
