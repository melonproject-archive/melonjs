import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class OasisDexAdapter extends Contract {
  public readonly ethers: OasisDexAdapterEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `OasisDexAdapter` contract transaction for `takeOrder` function.
   *
   * @contract OasisDexAdapter
   * @signature takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * @method function takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   */
  takeOrder: (
    _targetExchange: string,
    _orderAddresses: [string, string, string, string, string, string, string, string],
    _orderValues: [
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
    ],
    _orderData: string | ethers.utils.BytesLike,
    _identifier: string | ethers.utils.BytesLike,
    _signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event OrderFilled(address indexed exchangeAddress, address buyAsset, uint256 buyAmount, address sellAsset, uint256 sellAmount, address[] feeAssets, uint256[] feeAmounts)',
    'function takeOrder(address _targetExchange, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
  ];
}

export interface OasisDexAdapterEthersContract extends ethers.Contract {
  'takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)': (
    _targetExchange: string,
    _orderAddresses: [string, string, string, string, string, string, string, string],
    _orderValues: [
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
    ],
    _orderData: string | ethers.utils.BytesLike,
    _identifier: string | ethers.utils.BytesLike,
    _signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      _targetExchange: string,
      _orderAddresses: [string, string, string, string, string, string, string, string],
      _orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      _orderData: string | ethers.utils.BytesLike,
      _identifier: string | ethers.utils.BytesLike,
      _signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      _targetExchange: string,
      _orderAddresses: [string, string, string, string, string, string, string, string],
      _orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      _orderData: string | ethers.utils.BytesLike,
      _identifier: string | ethers.utils.BytesLike,
      _signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      _targetExchange: string,
      _orderAddresses: [string, string, string, string, string, string, string, string],
      _orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      _orderData: string | ethers.utils.BytesLike,
      _identifier: string | ethers.utils.BytesLike,
      _signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      _targetExchange: string,
      _orderAddresses: [string, string, string, string, string, string, string, string],
      _orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      _orderData: string | ethers.utils.BytesLike,
      _identifier: string | ethers.utils.BytesLike,
      _signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
