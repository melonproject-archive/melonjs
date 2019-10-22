import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const TradingSignaturesAbi = [
  {
    constant: true,
    inputs: [],
    name: 'MAKE_ORDER',
    outputs: [
      {
        name: '',
        type: 'bytes4',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'TAKE_ORDER',
    outputs: [
      {
        name: '',
        type: 'bytes4',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as AbiItem[];
