import { AbiItem } from 'web3-utils';

export function functionSignature(abi: AbiItem[], name: string): string {
  const abiItem = abi.find(item => item.name === name);
  return `${abiItem.name}(${abiItem.inputs.map(d => d.type).join(',')})`;
}
