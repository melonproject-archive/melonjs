import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const MaxPositionsAbi = [
  {
    constant: true,
    inputs: [
      {
        name: 'sig',
        type: 'bytes4',
      },
      {
        name: 'addresses',
        type: 'address[5]',
      },
      {
        name: 'values',
        type: 'uint256[3]',
      },
      {
        name: 'identifier',
        type: 'bytes32',
      },
    ],
    name: 'rule',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'position',
    outputs: [
      {
        name: '',
        type: 'uint8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'maxPositions',
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
    name: 'identifier',
    outputs: [
      {
        name: '',
        type: 'string',
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
  {
    inputs: [
      {
        name: '_maxPositions',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
] as AbiItem[];