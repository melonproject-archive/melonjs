import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const UpdatableFeedInterfaceAbi = [
  {
    constant: true,
    inputs: [],
    name: 'getLastUpdateId',
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
    constant: false,
    inputs: [
      {
        name: '_assets',
        type: 'address[]',
      },
      {
        name: '_prices',
        type: 'uint256[]',
      },
    ],
    name: 'update',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'hash',
        type: 'bytes32',
      },
    ],
    name: 'PriceUpdated',
    type: 'event',
  },
] as AbiItem[];
