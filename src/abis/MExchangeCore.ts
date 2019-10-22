import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const MExchangeCoreAbi = [
  {
    constant: false,
    inputs: [
      {
        name: 'targetOrderEpoch',
        type: 'uint256',
      },
    ],
    name: 'cancelOrdersUpTo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'fillOrder',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'fillResults',
        type: 'tuple',
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
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
    ],
    name: 'getOrderInfo',
    outputs: [
      {
        components: [
          {
            name: 'orderStatus',
            type: 'uint8',
          },
          {
            name: 'orderHash',
            type: 'bytes32',
          },
          {
            name: 'orderTakerAssetFilledAmount',
            type: 'uint256',
          },
        ],
        name: 'orderInfo',
        type: 'tuple',
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
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
    ],
    name: 'cancelOrder',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'makerAddress',
        type: 'address',
      },
      {
        indexed: true,
        name: 'feeRecipientAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'takerAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'senderAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'makerAssetFilledAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'takerAssetFilledAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'makerFeePaid',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'takerFeePaid',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'makerAssetData',
        type: 'bytes',
      },
      {
        indexed: false,
        name: 'takerAssetData',
        type: 'bytes',
      },
    ],
    name: 'Fill',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'makerAddress',
        type: 'address',
      },
      {
        indexed: true,
        name: 'feeRecipientAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'senderAddress',
        type: 'address',
      },
      {
        indexed: true,
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'makerAssetData',
        type: 'bytes',
      },
      {
        indexed: false,
        name: 'takerAssetData',
        type: 'bytes',
      },
    ],
    name: 'Cancel',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'makerAddress',
        type: 'address',
      },
      {
        indexed: true,
        name: 'senderAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'orderEpoch',
        type: 'uint256',
      },
    ],
    name: 'CancelUpTo',
    type: 'event',
  },
] as AbiItem[];
