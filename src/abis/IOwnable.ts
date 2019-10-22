import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const IOwnableAbi = [
  {
    constant: false,
    inputs: [
      {
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as AbiItem[];
