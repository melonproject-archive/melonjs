import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const ERC20ProxyAbi = [
  {
    constant: false,
    inputs: [
      {
        name: 'target',
        type: 'address',
      },
    ],
    name: 'addAuthorizedAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'authorities',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'target',
        type: 'address',
      },
    ],
    name: 'removeAuthorizedAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'target',
        type: 'address',
      },
      {
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'removeAuthorizedAddressAtIndex',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getProxyId',
    outputs: [
      {
        name: '',
        type: 'bytes4',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'authorized',
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
    name: 'getAuthorizedAddresses',
    outputs: [
      {
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
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
  {
    payable: false,
    stateMutability: 'nonpayable',
    type: 'fallback',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'target',
        type: 'address',
      },
      {
        indexed: true,
        name: 'caller',
        type: 'address',
      },
    ],
    name: 'AuthorizedAddressAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'target',
        type: 'address',
      },
      {
        indexed: true,
        name: 'caller',
        type: 'address',
      },
    ],
    name: 'AuthorizedAddressRemoved',
    type: 'event',
  },
] as AbiItem[];