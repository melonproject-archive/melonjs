import { Contract as EthContract } from 'web3-eth-contract';
import { Environment } from './Environment';
import { Transaction } from './Transaction';
import { Address } from './Address';

export abstract class Contract {
  constructor(public readonly environment: Environment, public readonly contract: EthContract) {
    // Nothing to do here.
  }

  protected async makeCall<TReturn = any, TArgs extends any[] = any[]>(
    method: string,
    args?: TArgs,
    block?: number,
  ): Promise<TReturn> {
    const address = this.contract.address;
    const cache = this.environment.cache;

    try {
      const key = cache && `${address}:${block}:${method}${args ? `:${JSON.stringify(args)}` : ''}`;
      if (cache && cache.has(key)) {
        return cache.get(key)!;
      }

      const fn = this.contract.methods[method];
      const promise = fn(...(args || [])).call(undefined, block);
      cache && cache.set(key, promise);

      return await promise;
    } catch (e) {
      throw new Error(`Failed to call ${name} at ${address}: ${e}`);
    }
  }

  protected createTransaction<TArgs extends any[] = any[], TValue extends string | number = string>(
    method: string,
    from: Address,
    args?: TArgs,
    value?: TValue,
  ) {
    const fn = this.contract.methods[method];
    return new Transaction(this.environment, from, fn(...(args || []), value));
  }
}
