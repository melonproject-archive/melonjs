import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { TradingAbi } from '../abis/Trading.abi';
import { Spoke } from './Spoke';
import { applyMixins } from '../utils/applyMixins';

export interface ExchangeInfo {
  exchange: Address;
  adapter: Address;
  takesCustody: boolean;
}

export type ExchangeInfoMap = {
  [key: string]: ExchangeInfo;
};

export class Trading extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(TradingAbi, address));
  }

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
}

export interface Trading extends Spoke {}
applyMixins(Trading, [Spoke]);
