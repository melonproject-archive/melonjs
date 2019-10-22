import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const TestingPriceFeedAbi = [
  {
    constant: false,
    inputs: [
      {
        name: '_state',
        type: 'bool',
      },
    ],
    name: 'setNeverValid',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
    name: 'hasValidPrice',
    outputs: [
      {
        name: 'isValid',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getLastUpdateId',
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
    inputs: [
      {
        name: '_assets',
        type: 'address[]',
      },
      {
        name: '_prices',
        type: 'uint256[]',
      },
    ],
    name: 'update',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
    constant: false,
    inputs: [
      {
        name: '_assets',
        type: 'address[]',
      },
      {
        name: '_decimals',
        type: 'uint256[]',
      },
    ],
    name: 'batchSetDecimals',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_state',
        type: 'bool',
      },
    ],
    name: 'setIsRecent',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
    constant: false,
    inputs: [
      {
        name: '_asset',
        type: 'address',
      },
      {
        name: '_decimal',
        type: 'uint256',
      },
    ],
    name: 'setDecimals',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
        name: 'ofAsset',
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
        name: 'assetDecimals',
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
        name: 'ofAssets',
        type: 'address[]',
      },
    ],
    name: 'getPrices',
    outputs: [
      {
        name: '',
        type: 'uint256[]',
      },
      {
        name: '',
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
        name: 'invertedPrice',
        type: 'uint256',
      },
      {
        name: 'assetDecimals',
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
        name: 'ofBase',
        type: 'address',
      },
      {
        name: 'ofQuote',
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
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'assetsToPrices',
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
    name: 'updateId',
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
    inputs: [],
    name: 'lastUpdate',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'assetsToDecimals',
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
    constant: true,
    inputs: [],
    name: 'QUOTE_ASSET',
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
    inputs: [
      {
        name: '_quoteAsset',
        type: 'address',
      },
      {
        name: '_quoteDecimals',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'hash',
        type: 'bytes32',
      },
    ],
    name: 'PriceUpdated',
    type: 'event',
  },
] as AbiItem[];
