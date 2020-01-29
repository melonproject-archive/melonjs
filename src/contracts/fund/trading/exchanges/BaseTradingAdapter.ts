import { Address } from '../../../../Address';
import { sameAddress } from '../../../../utils/sameAddress';
import { Trading, ExchangeInfo } from '../Trading';
import { ExchangeNotRegisteredWithFundError } from '../Trading.errors';
import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';

export class BaseTradingAdapter extends Contract {
  constructor(
    public readonly environment: Environment,
    public readonly address: Address,
    public readonly trading: Trading,
    public readonly info: ExchangeInfo,
    public readonly index: number,
  ) {
    super(environment, address);
  }

  public static async create<T extends typeof BaseTradingAdapter>(
    this: T,
    environment: Environment,
    address: Address,
    trading: Trading,
  ) {
    const info = await trading.getExchangeInfo();
    const index = info.findIndex(exchange => sameAddress(exchange.exchange, address));
    if (index === -1) {
      throw new ExchangeNotRegisteredWithFundError(address);
    }

    return new this(environment, address, trading, info[index], index) as InstanceType<T>;
  }
}
