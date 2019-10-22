import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const WhiteListInterfaceAbi = [
  {
    constant: true,
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getUserCapInWei',
    outputs: [
      {
        name: 'userCapWei',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as AbiItem[];
