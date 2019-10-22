import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const FeeAbi = [
  {
    constant: false,
    inputs: [
      {
        name: 'feeRate',
        type: 'uint256',
      },
      {
        name: 'feePeriod',
        type: 'uint256',
      },
      {
        name: 'denominationAsset',
        type: 'address',
      },
    ],
    name: 'initializeForUser',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'updateState',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'feeAmount',
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
  {
    constant: true,
    inputs: [],
    name: 'identifier',
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
