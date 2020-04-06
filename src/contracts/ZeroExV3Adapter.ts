import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV3Adapter extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV3Adapter` contract call for the `getOrder` function.
   *
   * @contract ZeroExV3Adapter
   * @signature function getOrder(address,uint256,address) view returns (address, address, uint256, uint256)
   */
  getOrder: (
    _targetExchange: string,
    _id: ethers.BigNumberish,
    _makerAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;

  /**
   * `ZeroExV3Adapter` contract transaction for `cancelOrder` function.
   *
   * @contract ZeroExV3Adapter
   * @signature function cancelOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   */
  cancelOrder: (
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

  /**
   * `ZeroExV3Adapter` contract transaction for `makeOrder` function.
   *
   * @contract ZeroExV3Adapter
   * @signature function makeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   */
  makeOrder: (
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

  /**
   * `ZeroExV3Adapter` contract transaction for `takeOrder` function.
   *
   * @contract ZeroExV3Adapter
   * @signature function takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
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
    'function cancelOrder(address _targetExchange, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
    'function getOrder(address _targetExchange, uint256 _id, address _makerAsset) view returns (address, address, uint256, uint256)',
    'function makeOrder(address _targetExchange, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
    'function takeOrder(address _targetExchange, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
  ];
}
