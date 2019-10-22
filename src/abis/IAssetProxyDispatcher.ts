import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const IAssetProxyDispatcherAbi = [
  {
    constant: true,
    inputs: [
      {
        name: 'assetProxyId',
        type: 'bytes4',
      },
    ],
    name: 'getAssetProxy',
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
        name: 'assetProxy',
        type: 'address',
      },
    ],
    name: 'registerAssetProxy',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as AbiItem[];
