import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { TradingAbi } from '../abis/Trading';

export interface ExchangeInfo {
  exchange: Address;
  adapter: Address;
  takesCustody: boolean;
}

export type ExchangeInfoMap = {
  [key: string]: ExchangeInfo;
};

export interface OpenMakeOrder {
  id: number;
  expiresAt: Date;
  orderIndex: number;
  buyAsset: Address;
}

export class Trading extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(TradingAbi, address));
  }

  /**
   * Gets information on all exchanges.
   *
   * @param block The block number to execute the call on.
   */
  public async getExchangeInfo(block?: number) {
    const { '0': ofExchanges, '1': ofAdapters, '2': takesCustody } = await this.makeCall<{
      '0': string[];
      '1': string[];
      '2': string[];
    }>('getExchangeInfo', undefined, block);

    const output = ofExchanges.reduce((carry, ofExchange, index) => {
      const item = {
        exchange: ofExchange,
        adapter: ofAdapters[index],
        takesCustody: takesCustody[index],
      };

      return { ...carry, [ofExchange]: item };
    }, {}) as ExchangeInfoMap;

    return output;
  }

  /**
   * Checks if an order is expired.
   *
   * @param exchange The address of the exchange
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public async getOpenMakeOrder(exchange: Address, asset: Address, block?: number) {
    const result = await this.makeCall<OpenMakeOrder>('exchangesToOpenMakeOrders', [exchange, asset], block);

    return {
      id: parseInt(`${result.id}`, 10),
      expiresAt: new Date(parseInt(`${result.expiresAt}`, 10) * 1000),
      orderIndex: parseInt(`${result.orderIndex}`, 10),
      buyAsset: result.buyAsset,
    };
  }

  /**
   * Checks if an order is expired.
   *
   * @param exchange The address of the exchange
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public async isOrderExpired(exchange: Address, asset: Address, block?: number) {
    return await this.makeCall<boolean>('isOrderExpired', [exchange, asset], block);
  }
}
