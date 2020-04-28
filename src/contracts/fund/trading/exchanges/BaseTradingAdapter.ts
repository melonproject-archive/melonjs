import { Address } from '../../../../Address';
import { sameAddress } from '../../../../utils/sameAddress';
import { Trading, ExchangeInfo } from '../Trading';
import { ExchangeNotRegisteredWithFundError } from '../Trading.errors';
import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';

export class BaseTradingAdapter extends Contract {
  constructor(
    public readonly environment: Environment,
    public readonly adapterAddress: Address,
    public readonly trading: Trading,
    public readonly info: ExchangeInfo,
    public readonly index: number,
  ) {
    super(environment, adapterAddress);
  }

  public static async create<T extends typeof BaseTradingAdapter>(
    this: T,
    environment: Environment,
    adapterAddress: Address,
    trading: Trading,
  ) {
    const info = await trading.getExchangeInfo();
    const index = info.findIndex(exchange => sameAddress(exchange.adapter, adapterAddress));
    if (index === -1) {
      throw new ExchangeNotRegisteredWithFundError(adapterAddress);
    }

    return new this(environment, adapterAddress, trading, info[index], index) as InstanceType<T>;
  }
}
