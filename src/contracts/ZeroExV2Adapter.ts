import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV2Adapter extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV2Adapter` contract call for the `getOrder` function.
   *
   * @contract ZeroExV2Adapter
   * @signature function getOrder(address,uint256,address) view returns (address, address, uint256, uint256)
   */
  getOrder: (
    targetExchange: string,
    id: ethers.BigNumberish,
    makerAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;

  /**
   * `ZeroExV2Adapter` contract transaction for `cancelOrder` function.
   *
   * @contract ZeroExV2Adapter
   * @signature function cancelOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   */
  cancelOrder: (
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

  /**
   * `ZeroExV2Adapter` contract transaction for `makeOrder` function.
   *
   * @contract ZeroExV2Adapter
   * @signature function makeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   */
  makeOrder: (
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

  /**
   * `ZeroExV2Adapter` contract transaction for `takeOrder` function.
   *
   * @contract ZeroExV2Adapter
   * @signature function takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
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
    'function cancelOrder(address targetExchange, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
    'function getOrder(address targetExchange, uint256 id, address makerAsset) view returns (address, address, uint256, uint256)',
    'function makeOrder(address targetExchange, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
    'function takeOrder(address targetExchange, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
  ];
}
