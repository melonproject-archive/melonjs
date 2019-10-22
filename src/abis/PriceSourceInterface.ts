import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const PriceSourceInterfaceAbi = [
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'hasValidPrice',
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
  {
    constant: true,
    inputs: [
      {
        name: '_asset',
        type: 'address',
      },
    ],
    name: 'getPrice',
    outputs: [
      {
        name: 'price',
        type: 'uint256',
      },
      {
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getLastUpdate',
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
    constant: true,
    inputs: [
      {
        name: 'fromAssetQuantity',
        type: 'uint256',
      },
      {
        name: 'fromAsset',
        type: 'address',
      },
      {
        name: 'toAsset',
        type: 'address',
      },
    ],
    name: 'convertQuantity',
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
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address[]',
      },
    ],
    name: 'hasValidPrices',
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
  {
    constant: true,
    inputs: [
      {
        name: '_asset',
        type: 'address',
      },
    ],
    name: 'getPriceInfo',
    outputs: [
      {
        name: 'price',
        type: 'uint256',
      },
      {
        name: 'decimals',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_assets',
        type: 'address[]',
      },
    ],
    name: 'getPrices',
    outputs: [
      {
        name: 'prices',
        type: 'uint256[]',
      },
      {
        name: 'timestamps',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'ofAsset',
        type: 'address',
      },
    ],
    name: 'getInvertedPriceInfo',
    outputs: [
      {
        name: 'price',
        type: 'uint256',
      },
      {
        name: 'decimals',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'sellAsset',
        type: 'address',
      },
      {
        name: 'buyAsset',
        type: 'address',
      },
      {
        name: 'sellQuantity',
        type: 'uint256',
      },
      {
        name: 'buyQuantity',
        type: 'uint256',
      },
    ],
    name: 'getOrderPriceInfo',
    outputs: [
      {
        name: 'orderPrice',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_base',
        type: 'address',
      },
      {
        name: '_quote',
        type: 'address',
      },
    ],
    name: 'getReferencePriceInfo',
    outputs: [
      {
        name: 'referencePrice',
        type: 'uint256',
      },
      {
        name: 'decimal',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getQuoteAsset',
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
    constant: true,
    inputs: [
      {
        name: 'sellAsset',
        type: 'address',
      },
      {
        name: 'buyAsset',
        type: 'address',
      },
    ],
    name: 'existsPriceOnAssetPair',
    outputs: [
      {
        name: 'isExistent',
        type: 'bool',
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
        indexed: false,
        name: 'token',
        type: 'address[]',
      },
      {
        indexed: false,
        name: 'price',
        type: 'uint256[]',
      },
    ],
    name: 'PriceUpdate',
    type: 'event',
  },
] as AbiItem[];
