import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const LibOrderAbi = [
  {
    constant: true,
    inputs: [],
    name: 'EIP712_DOMAIN_HASH',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as AbiItem[];
