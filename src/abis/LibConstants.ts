import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const LibConstantsAbi = [
  {
    constant: false,
    inputs: [
      {
        name: 'newData',
        type: 'bytes',
      },
    ],
    name: 'changeZRXAssetData',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'ZRX_ASSET_DATA',
    outputs: [
      {
        name: '',
        type: 'bytes',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as AbiItem[];
