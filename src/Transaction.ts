import { SendOptions, EstimateGasOptions, Contract as EthContract } from 'web3-eth-contract';
import { PromiEvent, TransactionReceipt } from 'web3-core';
import { Address } from './Address';
import { Contract } from './Contract';
import { Environment } from './Environment';

export class Transaction<T = TransactionReceipt> {
  constructor(
    public readonly transaction: any,
    public readonly from: Address,
    public readonly value?: number | string,
    public readonly validate: () => Promise<void> = () => Promise.resolve(),
  ) {}

  public send(gas?: number): PromiEvent<T>;
  public send(options?: Partial<SendOptions>): PromiEvent<T>;
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
      ...(this.value && { value: this.value }),
      ...(typeof options === 'object' && options),
      ...(gas && { gas }),
    };

    return this.transaction.send(opts);
  }

  public estimateGas(options?: Partial<EstimateGasOptions>): Promise<number> {
    const opts: EstimateGasOptions = {
      ...(this.from && { from: this.from }),
      ...(this.value && { value: this.value }),
      ...options,
    };

    return this.transaction.estimateGas(opts);
  }
}

export class Deployment<T extends Contract> extends Transaction<T> {
  constructor(
    public readonly clazz: typeof Contract,
    public readonly environment: Environment,
    public readonly transaction: any,
    public readonly from: Address,
  ) {
    super(transaction, from);
  }

  public send(gas?: number): PromiEvent<T>;
  public send(options?: Partial<SendOptions>): PromiEvent<T>;
  public send(options?: any) {
    const result = (super.send(options) as any) as PromiEvent<EthContract>;
    const promise = new Promise<T>((resolve, reject) => {
      result.catch(reject);
      result.then(receipt => {
        try {
          resolve(new this.clazz(this.environment, receipt) as T);
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
