import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const LibEIP712Abi = [
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
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
] as AbiItem[];
