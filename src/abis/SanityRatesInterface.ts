import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const SanityRatesInterfaceAbi = [
  {
    constant: true,
    inputs: [
      {
        name: 'src',
        type: 'address',
      },
      {
        name: 'dest',
        type: 'address',
      },
    ],
    name: 'getSanityRate',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as AbiItem[];
