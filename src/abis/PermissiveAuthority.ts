import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const PermissiveAuthorityAbi = [
  {
    constant: true,
    inputs: [
      {
        name: 'src',
        type: 'address',
      },
      {
        name: 'dst',
        type: 'address',
      },
      {
        name: 'sig',
        type: 'bytes4',
      },
    ],
    name: 'canCall',
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
] as AbiItem[];
