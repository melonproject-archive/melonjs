import { Contract } from 'web3-eth-contract';
import { Environment } from '../';

const contracts = new Map<string, Contract>();

const loadContract = (env: Environment, name: string, address: string) => {
  try {
    const abi = require(`../contracts/${name}.abi.json`);
    return new env.eth.Contract(abi, address);
  } catch (e) {
    throw new Error(`Failed to load contract ${name}: ${e.toString()}`);
  }
};

export const getContract = (env: Environment, name: string, address: string) => {
  const key = `${name}:${address}`;
  if (!contracts.has(key)) {
    contracts.set(key, loadContract(env, name, address));
  }

  return contracts.get(key);
};
