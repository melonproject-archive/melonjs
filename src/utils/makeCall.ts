import { Environment } from '../types';
import { getContract } from './getContract';
import md5 from 'md5';
import { Contract } from 'web3-eth-contract';

// Static cache of call results.
const cache = new Map<string, any>();

export interface CallConfig {
  environment: Environment;
  contract: Contract | string;
  method: string,
  address?: string,
}

export const makeCall = async <T>(config: CallConfig, args?: any[]): Promise<T> => {
  if (typeof config.contract === 'string' && !config.address) {
    throw new Error('Missing address for contract creation.');
  }

  const env = config.environment;
  const address = config.address;
  const method = config.method;
  const block = await env.eth.getBlockNumber();
  const key = md5(JSON.stringify({ block, address, method, args }));

  if (!cache.has(key)) {
    const instance = typeof config.contract === 'string' ? getContract(env, config.contract, config.address) : config.contract;
    const promise = instance.methods[method](...(args || [])).call(undefined, block);
    cache.set(key, promise);
    return await promise;
  }

  return await cache.get(key);
};
