import { Environment } from '../';
import { getContract } from './getContract';
import { Contract } from 'web3-eth-contract';

export interface BasicCallConfig {
  environment: Environment;
  block?: number;
}

export interface CallConfig extends BasicCallConfig {
  contract: Contract | string;
  method: string;
  address?: string;
}

export const makeCall = async <T>(config: CallConfig, args?: any[]): Promise<T> => {
  if (typeof config.contract === 'string' && !config.address) {
    throw new Error('Missing address for contract creation.');
  }

  const env = config.environment;
  const contract = config.contract;
  const address = config.address;
  const method = config.method;
  const block = config.block;
  const instance = typeof contract === 'string' ? getContract(env, contract, address) : contract;
  return instance.methods[method](...(args || [])).call(undefined, block);
};
