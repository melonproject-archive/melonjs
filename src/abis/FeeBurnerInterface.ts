import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const FeeBurnerInterfaceAbi = [
  {
    constant: false,
    inputs: [
      {
        name: 'tradeWeiAmount',
        type: 'uint256',
      },
      {
        name: 'reserve',
        type: 'address',
      },
      {
        name: 'wallet',
        type: 'address',
      },
    ],
    name: 'handleFees',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as AbiItem[];
