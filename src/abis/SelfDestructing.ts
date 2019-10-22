import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const SelfDestructingAbi = [
  {
    constant: false,
    inputs: [
      {
        name: '_heir',
        type: 'address',
      },
    ],
    name: 'bequeath',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback',
  },
] as AbiItem[];
