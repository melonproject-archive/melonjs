import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const ExpectedRateInterfaceAbi = [
  {
    constant: true,
    inputs: [
      {
        name: 'src',
        type: 'address',
      },
      {
        name: 'dest',
        type: 'address',
      },
      {
        name: 'srcQty',
        type: 'uint256',
      },
    ],
    name: 'getExpectedRate',
    outputs: [
      {
        name: 'expectedRate',
        type: 'uint256',
      },
      {
        name: 'slippageRate',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as AbiItem[];
