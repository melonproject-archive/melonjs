import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const VersionInterfaceAbi = [
  {
    constant: false,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'shutDownFund',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as AbiItem[];
