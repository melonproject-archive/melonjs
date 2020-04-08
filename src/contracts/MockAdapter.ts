import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockAdapter extends Contract {
  public readonly ethers: MockAdapterEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockAdapter` contract transaction for `takeOrder` function.
   *
   * @contract MockAdapter
   * @signature takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * @method function takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   */
  takeOrder: (
    targetExchange: string,
    orderAddresses: [string, string, string, string, string, string, string, string],
    orderValues: [
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
    ],
    orderData: string | ethers.utils.BytesLike,
    identifier: string | ethers.utils.BytesLike,
    signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event OrderFilled(address indexed exchangeAddress, address buyAsset, uint256 buyAmount, address sellAsset, uint256 sellAmount, address[] feeAssets, uint256[] feeAmounts)',
    'function takeOrder(address targetExchange, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
  ];
}

export interface MockAdapterEthersContract extends ethers.Contract {
  'takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)': (
    targetExchange: string,
    orderAddresses: [string, string, string, string, string, string, string, string],
    orderValues: [
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
    ],
    orderData: string | ethers.utils.BytesLike,
    identifier: string | ethers.utils.BytesLike,
    signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      targetExchange: string,
      orderAddresses: [string, string, string, string, string, string, string, string],
      orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      orderData: string | ethers.utils.BytesLike,
      identifier: string | ethers.utils.BytesLike,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      targetExchange: string,
      orderAddresses: [string, string, string, string, string, string, string, string],
      orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      orderData: string | ethers.utils.BytesLike,
      identifier: string | ethers.utils.BytesLike,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      targetExchange: string,
      orderAddresses: [string, string, string, string, string, string, string, string],
      orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      orderData: string | ethers.utils.BytesLike,
      identifier: string | ethers.utils.BytesLike,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      targetExchange: string,
      orderAddresses: [string, string, string, string, string, string, string, string],
      orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      orderData: string | ethers.utils.BytesLike,
      identifier: string | ethers.utils.BytesLike,
      signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
