import { Contract as EthContract } from 'web3-eth-contract';
import { Environment } from './Environment';

export abstract class Contract {
  constructor(public readonly environment: Environment, public readonly contract: EthContract) {
    // Nothing to do here.
  }

  protected async makeCall<TReturn = any, TArgs extends any[] = any[]>(
    name: string,
    args?: TArgs,
    block?: number,
  ): Promise<TReturn> {
    const address = this.contract.address;
    const cache = this.environment.cache;

    try {
      const key = cache && `${address}:${block}:${name}${args ? `:${JSON.stringify(args)}` : ''}`;
      if (cache && cache.has(key)) {
        return cache.get(key)!;
      }

      const promise = this.doMakeCall(name, args, block);
      cache && cache.set(key, promise);

      return await promise;
    } catch (e) {
      throw new Error(`Failed to call ${name} at ${address}: ${e.toString()}`);
    }
  }

  protected doMakeCall<TReturn = any, TArgs extends any[] = any[]>(
    name: string,
    args?: TArgs,
    block?: number,
  ): Promise<TReturn> {
    const fn = this.contract.methods[name];
    return fn(...(args || [])).call(undefined, block);
  }

  // protected sendTransaction() {
  //   const env = config.environment;
  //   const instance =
  //     typeof config.contract === 'string' ? getContract(env, config.contract, config.address) : config.contract;
  //   const transaction = instance.methods[config.method](...(args || [])) as ContractSendMethod;
  //   const opts = options || (await transactionOptions(env, transaction, config.account));
  //   const receipt = await new Promise<TransactionReceipt>((resolve, reject) => {
  //     const send = transaction.send(opts);
  //     send.once('receipt', receipt => resolve(receipt)).catch(error => reject(error));
  //   });
  // }
}
