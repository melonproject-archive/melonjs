import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

/**
 * Adapter to EthFinex exchange
 * @title EthfinexAdapter Contract
 * @author Melonport AG <team@melonport.com>
 */
export class EthfinexAdapterContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'function cancelOrder(address _targetExchange, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
    'function getOrder(address _targetExchange, uint256 _id, address _makerAsset) view returns (address, address, uint256, uint256)',
    'function makeOrder(address _targetExchange, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
    'function takeOrder(address targetExchange, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
    'function withdrawTokens(address _targetExchange, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
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
   * Minor: Wrapped tokens directly sent to the fund are not accounted. To be called by Trading spoke
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
   *
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
   *
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
   * ```solidity
   * function takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   *
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
  /**
   * Unwrap (withdraw) tokens, uses _orderAddresses for input list of tokens to be unwrapped
   *
   * Call to "withdraw" fails if timestamp < `Wrapper.depositLock(tradingComponent)`
   *
   * ```solidity
   * function withdrawTokens(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   *
   */
  withdrawTokens: (
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
