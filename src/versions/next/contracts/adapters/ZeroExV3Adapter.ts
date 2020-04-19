import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

/**
 * Adapter to 0xV3 Exchange Contract
 * @title ZeroExV3Adapter Contract
 * @author Melonport AG <team@melonport.com>
 */
export class ZeroExV3AdapterContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'function cancelOrder(address _targetExchange, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
    'function getOrder(address _targetExchange, uint256 _id, address _makerAsset) view returns (address, address, uint256, uint256)',
    'function makeOrder(address _targetExchange, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
    'function takeOrder(address _targetExchange, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
  ];

  /**
   * Constructs a new contract instance.
   *
   * @param addressOrName The address or name of the contract.
   * @param signerOrProvider The ethers.js signer or provider instance to use.
   */
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * Get order details
   *
   * ```solidity
   * function getOrder(address,uint256,address) view returns (address, address, uint256, uint256)
   * ```
   *
   */
  getOrder: (
    _targetExchange: string,
    _id: ethers.BigNumberish,
    _makerAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;
  /**
   * Cancel the 0x make order
   *
   * ```solidity
   * function cancelOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   * @param _identifier Order _identifier
   * @param _orderAddresses [2] Order maker asset
   * @param _targetExchange Address of the exchange
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
   * Make order by pre-approving signatures
   *
   * ```solidity
   * function makeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   * @param _orderAddresses [3] Taker asset (Src token)
   * @param _orderData [1] Encoded data specific to taker asset
   * @param _signature _signature of the order.
   * @param _targetExchange Address of the exchange
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
   * Takes an active order on the selected exchange
   *
   * These orders are expected to settle immediately
   *
   * ```solidity
   * function takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   * @param _orderAddresses [3] Order taker asset
   * @param _orderValues [6] Fill amount: amount of taker token to be traded
   * @param _signature _signature of the order.
   * @param _targetExchange Address of the exchange
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
}
