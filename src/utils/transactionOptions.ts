import { ContractSendMethod, SendOptions } from 'web3-eth-contract';
import { Environment } from '../';
import { estimateGas } from './estimateGas';

export const transactionOptions = async (env: Environment, transaction: ContractSendMethod, account?: string) => {
  const gasPrice = await env.eth.getGasPrice();
  const gas = await estimateGas(env, transaction, account);

  return {
    ...(account && { from: account }),
    gas,
    gasPrice,
  } as SendOptions;
};
