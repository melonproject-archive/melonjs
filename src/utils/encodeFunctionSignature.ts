import { AbiItem } from 'web3-utils';
import { AbiCoder } from 'web3-eth-abi';

export function encodeFunctionSignature(abi: AbiItem[], name: string): string {
  const abiItem = abi.find((item) => item.name === name);
  const abiCoder = new AbiCoder();
  return abiCoder.encodeFunctionSignature(abiItem);
}
