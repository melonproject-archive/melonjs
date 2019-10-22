import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const FundRankingAbi = [
  {
    constant: true,
    inputs: [
      {
        name: '_factory',
        type: 'address',
      },
    ],
    name: 'getFundGavs',
    outputs: [
      {
        name: '',
        type: 'address[]',
      },
      {
        name: '',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_factory',
        type: 'address',
      },
    ],
    name: 'getFundDetails',
    outputs: [
      {
        name: '',
        type: 'address[]',
      },
      {
        name: '',
        type: 'uint256[]',
      },
      {
        name: '',
        type: 'uint256[]',
      },
      {
        name: '',
        type: 'string[]',
      },
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
    constant: true,
    inputs: [
      {
        name: '_factory',
        type: 'address',
      },
    ],
    name: 'getFundVersions',
    outputs: [
      {
        name: '',
        type: 'address[]',
      },
      {
        name: '',
        type: 'bytes32[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as AbiItem[];
