import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

/**
 * Adapter to 0xV2 Exchange Contract
 * @title ZeroExV2Adapter Contract
 * @author Melonport AG <team@melonport.com>
 */
export class ZeroExV2AdapterContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
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
   * Get order details
   *
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
   * Cancel the 0x make order
   *
   * ```solidity
   * function cancelOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   *
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
   * Make order by pre-approving signatures
   *
   * ```solidity
   * function makeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   *
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
   * @param identifier Order identifier
   * @param orderAddresses [5] senderAddress
   * @param orderData [3] Encoded data specific to taker asset fee
   * @param orderValues [7] Dexy signature mode
   * @param signature Signature of the order.
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
