import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const MatchingMarketAccessorAbi = [
  {
    constant: true,
    inputs: [
      {
        name: 'targetExchange',
        type: 'address',
      },
      {
        name: 'sellAsset',
        type: 'address',
      },
      {
        name: 'buyAsset',
        type: 'address',
      },
    ],
    name: 'getSortedOfferIds',
    outputs: [
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
        name: 'targetExchange',
        type: 'address',
      },
      {
        name: 'sellAsset',
        type: 'address',
      },
      {
        name: 'buyAsset',
        type: 'address',
      },
    ],
    name: 'getUnsortedOfferIds',
    outputs: [
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
        name: 'targetExchange',
        type: 'address',
      },
      {
        name: 'sellAsset',
        type: 'address',
      },
      {
        name: 'buyAsset',
        type: 'address',
      },
    ],
    name: 'getOrders',
    outputs: [
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
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as AbiItem[];
