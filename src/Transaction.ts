import { SendOptions as EthSendOptions, EstimateGasOptions as EthEstimateGasOptions } from 'web3-eth-contract';
import { PromiEvent, TransactionReceipt } from 'web3-core';
import { Environment } from './Environment';
import { Address } from './Address';

interface EthTransaction {
  send(options?: EthSendOptions): PromiEvent<TransactionReceipt>;
  estimateGas(options?: EthEstimateGasOptions): Promise<number>;
}

export interface EstimateOptions {
  gas?: number;
}

export interface SendOptions extends EstimateOptions {
  gasPrice?: string;
}

export class Transaction {
  constructor(
    public readonly environment: Environment,
    public readonly from: Address,
    public readonly transaction: EthTransaction,
    public readonly value?: number | string,
  ) {}

  public send(options?: SendOptions) {
    const opts: EthSendOptions = {
      ...(options.gasPrice && { gasPrice: options.gasPrice }),
      ...(options.gas && { gas: options.gas }),
      ...(this.value && { value: this.value }),
      from: this.from,
    };

    return new TransactionProcessor(this.transaction.send(opts));
  }

  public estimate(options?: EstimateOptions) {
    const opts: EthEstimateGasOptions = {
      ...(options.gas && { gas: options.gas }),
      ...(this.value && { value: this.value }),
      from: this.from,
    };

    return this.transaction.estimateGas(opts);
  }
}

export class TransactionProcessor {
  constructor(private transaction: PromiEvent<TransactionReceipt>) {}

  public getHash() {
    return new Promise<string>((resolve, reject) => {
      this.transaction.once('transactionHash', resolve).catch(reject);
      this.transaction.once('error', reject).catch(reject);
    });
  }

  public getReceipt() {
    return new Promise<TransactionReceipt>((resolve, reject) => {
      this.transaction.once('receipt', resolve).catch(reject);
      this.transaction.once('error', reject).catch(reject);
    });
  }

  public getConfirmationsStream() {
    // TODO: Add observable stream here.
  }
}
