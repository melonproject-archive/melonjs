import { TransactionReceipt } from 'web3-core';
import { ContractSendMethod, Contract, SendOptions } from 'web3-eth-contract';
import { Environment } from '../types';
import { getContract } from './getContract';
import { transactionOptions } from './transactionOptions';

interface TransactionConfig {
  environment: Environment;
  contract: Contract | string;
  method: string;
  address?: string;
  account?: string;
}

export const sendTransaction = async (config: TransactionConfig, options?: SendOptions, args?: any[]) => {
  if (typeof config.contract === 'string' && !config.address) {
    throw new Error('Missing address for contract creation.');
  }

  // const name = typeof config.contract === 'string' ? config.contract : (config.contract as Contract).address;
  // console.log('');
  // console.log(`Calling ${config.method}() on ${name}`);
  // console.log('=========================================');

  const env = config.environment;
  const instance =
    typeof config.contract === 'string' ? getContract(env, config.contract, config.address) : config.contract;
  const transaction = instance.methods[config.method](...(args || [])) as ContractSendMethod;
  const opts = options || (await transactionOptions(env, transaction, config.account));
  const receipt = await new Promise<TransactionReceipt>((resolve, reject) => {
    const send = transaction.send(opts);
    send.once('receipt', receipt => resolve(receipt)).catch(error => reject(error));
  });

  // console.log(`Transaction: ${receipt.transactionHash}`);
  // console.log(`From: ${receipt.from}`);
  // console.log(`To: ${receipt.to}`);
  // console.log(`Gas used: ${receipt.gasUsed}`);
  // console.log(`Block: ${receipt.blockNumber}`);
  // console.log('=========================================');
  // console.log('');

  return receipt;
};
