import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

/**
 * Adapter between Melon and OasisDex Matching Market
 * @title OasisDexAdapter Contract
 * @author Melonport AG <team@melonport.com>
 */
export class OasisDexAdapterContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'event OrderCreated(uint256 id)',
    'function cancelOrder(address targetExchange, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
    'function getOrder(address targetExchange, uint256 id, address makerAsset) view returns (address, address, uint256, uint256)',
    'function makeOrder(address targetExchange, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
    'function takeOrder(address targetExchange, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
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
   * ```solidity
   * function getOrder(address,uint256,address) view returns (address, address, uint256, uint256)
   * ```
   *
   */
  getOrder: (
    targetExchange: string,
    id: ethers.BigNumberish,
    makerAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;
  /**
   * Cancels orders that were not expected to settle immediately
   *
   * ```solidity
   * function cancelOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   * @param identifier Order ID on the exchange
   * @param orderAddresses [2] Order maker asset
   * @param targetExchange Address of the exchange
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
   * Makes an order on the selected exchange
   *
   * These orders are not expected to settle immediately
   *
   * ```solidity
   * function makeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   * @param orderAddresses [3] Order taker asset
   * @param orderValues [1] Taker token quantity
   * @param targetExchange Address of the exchange
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
   * Takes an active order on the selected exchange
   *
   * These orders are expected to settle immediately
   *
   * ```solidity
   * function takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   * @param identifier Active order id
   * @param orderValues [6] Fill amount : amount of taker token to fill
   * @param targetExchange Address of the exchange
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
}
