import { SendOptions, EstimateGasOptions, Contract as EthContract } from 'web3-eth-contract';
import { PromiEvent, TransactionReceipt } from 'web3-core';
import { Address } from './Address';
import { Contract } from './Contract';

export class Transaction<T = TransactionReceipt> {
  constructor(public readonly transaction: any, public readonly from?: Address) {}

  public send(gas?: number): PromiEvent<T>;
  public send(options?: SendOptions): PromiEvent<T>;
  public send(options?: any) {
    const gas: number = (() => {
      if (typeof options === 'object' && options.gas) {
        return options.gas;
      }

      if (!isNaN(options) && isFinite(options)) {
        return options;
      }

      return undefined;
    })();

    const opts: SendOptions = {
      ...(this.from && { from: this.from }),
      ...(typeof options === 'object' && options),
      ...(gas && { gas }),
    };

    return this.transaction.send(opts);
  }

  public estimate(options?: EstimateGasOptions): Promise<number> {
    const opts: EstimateGasOptions = {
      ...(this.from && { from: this.from }),
      ...options,
    };

    return this.transaction.estimateGas(opts);
  }
}

export class Deployment<T extends Contract> extends Transaction<T> {
  constructor(
    public readonly transaction: any,
    protected readonly ctor: (contract: EthContract) => T,
    public readonly from?: Address,
  ) {
    super(transaction, from);
  }

  public send(gas?: number): PromiEvent<T>;
  public send(options?: SendOptions): PromiEvent<T>;
  public send(options?: any) {
    const result = (super.send(options) as any) as PromiEvent<EthContract>;
    const promise = new Promise<T>((resolve, reject) => {
      result.catch(reject);
      result.then(receipt => {
        try {
          resolve(this.ctor(receipt));
        } catch (e) {
          reject(e);
        }
      });
    });

    return (new Proxy(result, {
      get: (target: any, name) => {
        if (name === 'resolve' || name === 'reject') {
          return target[name];
        }

        if (name === 'then') {
          return promise.then.bind(promise);
        }

        if (name === 'catch') {
          return promise.catch.bind(promise);
        }

        if (target.eventEmitter[name]) {
          return target.eventEmitter[name];
        }
      },
    }) as any) as PromiEvent<T>;
  }
}
