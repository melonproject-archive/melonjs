import BigNumber from 'bignumber.js';
import md5 from 'md5';
import { Contract as EthContract } from 'web3-eth-contract';
import { Environment, ContractName } from './Environment';

export class Contract {
  public readonly contract: EthContract;
  public readonly address: string;

  constructor(public readonly environment: Environment, contract: EthContract | ContractName, address?: string) {
    this.contract = typeof contract === 'string' ? this.environment.getContract(contract, address) : contract;
    this.address = this.contract.address;
  }

  protected makeCall<TReturn = any, TArgs extends any[] = any[]>(
    name: string,
    args?: TArgs,
    block?: BigNumber,
  ): Promise<TReturn> {
    const bloq = block && block.toFixed(0);
    const cache = this.environment.cache;
    const key = cache && `${block}:${name}:${md5(JSON.stringify(args))}`;
    if (cache && cache.has(key)) {
      return cache.get(key)!;
    }

    const fn = this.contract.methods[name];
    const promise = fn(...(args || [])).call(undefined, bloq);
    cache && cache.set(key, promise);

    return promise;
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
