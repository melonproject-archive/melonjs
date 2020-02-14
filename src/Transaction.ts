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

export interface SendOptions extends Omit<Omit<Partial<EthSendOptions>, 'value'>, 'gasPrice'> {
  value?: BigNumber;
  amgu?: BigNumber;
  incentive?: BigNumber;
  gasPrice?: string | number;
}

export interface EstimateGasOptions extends Omit<EthEstimateGasOptions, 'value'> {
  value?: BigNumber;
  gasPrice?: string | number;
}

export class Transaction<T = TransactionReceipt> {
  public readonly amguPayable: boolean = false;
  public readonly incentivePayable: boolean = false;

  constructor(
    public readonly transaction: any,
    public readonly environment: Environment,
    public readonly from: Address,
    public readonly value?: BigNumber,
    public readonly validate: () => Promise<void> = () => Promise.resolve(),
    protected readonly amguFn?: (gas: number) => Promise<BigNumber>,
    protected readonly incentiveFn?: (gas: number) => Promise<BigNumber>,
  ) {
    this.amguPayable = !!amguFn;
    this.incentivePayable = !!incentiveFn;
  }

  public send(options?: SendOptions): PromiEvent<T> {
    const from: Address = (options && options.from) || this.from;
    let value: BigNumber = (options && options.value) || this.value;

    if (this.amguPayable && !options.amgu) {
      throw new Error('Missing amgu for transaction.');
    }

    if (this.incentivePayable && !options.incentive) {
      throw new Error('Missing incentive for transaction.');
    }

    if (options.amgu) {
      value = (value || new BigNumber(0)).plus(options.amgu);
    }

    if (options.incentive) {
      value = (value || new BigNumber(0)).plus(options.incentive);
    }

    const opts = {
      ...(value && { value: value.toFixed() }),
      ...(from && { from }),
      ...(options?.gas && { gas: options.gas }),
      ...(options?.gasPrice && { gasPrice: options.gasPrice }),
    };

    return this.transaction.send(opts);
  }

  public async prepare(options?: EstimateGasOptions) {
    const gas = options?.gas || (await this.estimate(options));
    const [amgu, incentive] = await Promise.all([
      this.amguPayable && this.amguFn && this.amguFn(gas),
      this.incentivePayable && this.incentiveFn && this.incentiveFn(gas),
    ]);

    const opts: SendOptions = {
      gas,
      ...(amgu && { amgu }),
      ...(incentive && { incentive }),
      ...(options?.value && { value: options.value }),
      ...(options?.from && { from: options.from }),
      ...(options?.gasPrice && { gasPrice: options.gasPrice }),
    };

    return opts;
  }

  protected async estimate(options?: EstimateGasOptions): Promise<number> {
    const from: Address = options?.from || this.from;
    const gas = options?.gas;
    let value: BigNumber = options?.value || this.value;

    if (this.amguFn) {
      // We don't know the amgu price at this stage yet, so we just send all
      // available ETH for the gasEstimation. This should throw if amgu price
      // in ETH is bigger than the available balance.
      value = new BigNumber(await this.environment.client.getBalance(from));
    }

    const opts: EthEstimateGasOptions = {
      ...(value && { value: value.toFixed() }),
      ...(from && { from }),
      ...(gas && { gas }),
    };

    const [estimation, block] = await Promise.all([
      this.transaction.estimateGas(opts),
      this.environment.client.getBlock('latest'),
    ]);

    return Math.ceil(Math.min(estimation * 1.1, block.gasLimit));
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

        if (target[name]) {
          return target[name];
        }
      },
    }) as any) as PromiEvent<T>;
  }
}
