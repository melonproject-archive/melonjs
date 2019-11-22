import BigNumber from 'bignumber.js';
import {
  SendOptions as EthSendOptions,
  EstimateGasOptions as EthEstimateGasOptions,
  Contract as EthContract,
} from 'web3-eth-contract';
import { PromiEvent, TransactionReceipt } from 'web3-core';
import { Address } from './Address';
import { Contract } from './Contract';
import { Environment } from './Environment';

export interface SendOptions extends Omit<Partial<EthSendOptions>, 'value'> {
  value?: BigNumber;
  amgu?: BigNumber;
  incentive?: BigNumber;
}

export interface EstimateGasOptions extends Omit<EthEstimateGasOptions, 'value'> {
  value?: BigNumber;
}

export class Transaction<T = TransactionReceipt> {
  constructor(
    public readonly transaction: any,
    public readonly environment: Environment,
    public readonly from: Address,
    public readonly value?: BigNumber,
    public readonly validate: () => Promise<void> = () => Promise.resolve(),
    protected readonly amgu?: (gas: number) => Promise<BigNumber>,
    protected readonly incentive?: (gas: number) => Promise<BigNumber>,
  ) {}

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

    const from: Address = (options && options.from) || this.from;
    let value: BigNumber = (options && options.value) || this.value;

    if (this.amgu) {
      if (!options.amgu) {
        throw new Error('Missing AMGU value for transaction.');
      }

      value = (value || new BigNumber(0)).plus(options.amgu);
    }

    if (this.incentive && !options.incentive) {
      if (!options.incentive) {
        throw new Error('Missing incentive value for transaction.');
      }

      value = (value || new BigNumber(0)).plus(options.incentive);
    }

    const opts: EthSendOptions = {
      ...(value && { value: value.toString() }),
      ...(from && { from }),
      ...(gas && { gas }),
      ...(options && options.gasPrice && { gasPrice: options.gasPrice }),
    };

    return this.transaction.send(opts);
  }

  public async prepare(options?: EstimateGasOptions) {
    const gas = await this.estimateGas(options);
    const [amgu, incentive] = await Promise.all([this.calculateAmgu(gas), this.calculateIncentive(gas)]);

    const opts: SendOptions = {
      gas,
      amgu,
      incentive,
      ...(options && options.value && { value: options.value }),
      ...(options && options.from && { from: options.from }),
    };

    return opts;
  }

  public async estimateGas(options?: EstimateGasOptions): Promise<number> {
    const gas = options && options.gas;
    const from: Address = (options && options.from) || this.from;
    let value: BigNumber = (options && options.value) || this.value;

    if (this.amgu) {
      // We don't know the amgu price at this stage yet, so we just send all
      // available ETH for the gasEstimation. This should throw if amgu price
      // in ETH is bigger than the available balance.
      value = (value || new BigNumber(0)).plus(await this.environment.client.getBalance(from));
    }

    const opts: EthEstimateGasOptions = {
      ...(value && { value: value.toString() }),
      ...(from && { from }),
      ...(gas && { gas }),
    };

    const [estimation, block] = await Promise.all([
      this.transaction.estimateGas(opts),
      this.environment.client.getBlock('latest'),
    ]);

    return Math.ceil(Math.min(estimation * 1.1, block.gasLimit));
  }

  public calculateAmgu(gas: number) {
    if (!this.amgu) {
      return Promise.resolve(new BigNumber(0));
    }

    return this.amgu(gas);
  }

  public calculateIncentive(gas: number) {
    if (!this.incentive) {
      return Promise.resolve(new BigNumber(0));
    }

    return this.incentive(gas);
  }
}

export class Deployment<T extends Contract> extends Transaction<T> {
  constructor(
    public readonly clazz: typeof Contract,
    public readonly environment: Environment,
    public readonly transaction: any,
    public readonly from: Address,
  ) {
    super(environment, transaction, from);
  }

  public send(gas?: number): PromiEvent<T>;
  public send(options?: SendOptions): PromiEvent<T>;
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
