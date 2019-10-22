import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const AccountingInterfaceAbi = [
  {
    constant: true,
    inputs: [
      {
        name: 'gav',
        type: 'uint256',
      },
      {
        name: 'unclaimedFees',
        type: 'uint256',
      },
    ],
    name: 'calcNav',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'calcGav',
    outputs: [
      {
        name: 'gav',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'calcGavPerShareNetManagementFee',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'ofAsset',
        type: 'address',
      },
    ],
    name: 'calcAssetGAV',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'calcSharePrice',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'performCalculations',
    outputs: [
      {
        name: 'gav',
        type: 'uint256',
      },
      {
        name: 'unclaimedFees',
        type: 'uint256',
      },
      {
        name: 'feesInShares',
        type: 'uint256',
      },
      {
        name: 'nav',
        type: 'uint256',
      },
      {
        name: 'sharePrice',
        type: 'uint256',
      },
      {
        name: 'gavPerShareNetManagementFee',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'totalValue',
        type: 'uint256',
      },
      {
        name: 'numShares',
        type: 'uint256',
      },
    ],
    name: 'valuePerShare',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'getFundHoldings',
    outputs: [
      {
        name: '',
        type: 'uint256[]',
      },
      {
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getOwnedAssetsLength',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'AssetAddition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'AssetRemoval',
    type: 'event',
  },
] as AbiItem[];
