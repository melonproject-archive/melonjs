import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

export class KyberAdapterContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'function ETH_TOKEN_ADDRESS() view returns (address)',
    'function cancelOrder(address targetExchange, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
    'function getOrder(address onExchange, uint256 id, address makerAsset) view returns (address, address, uint256, uint256)',
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
   * function ETH_TOKEN_ADDRESS() view returns (address)
   * ```
   *
   */
  ETH_TOKEN_ADDRESS: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getOrder(address,uint256,address) view returns (address, address, uint256, uint256)
   * ```
   *
   */
  getOrder: (
    onExchange: string,
    id: ethers.BigNumberish,
    makerAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;
  /**
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
   * ```solidity
   * function makeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   * @param identifier Order identifier
   * @param orderAddresses [7] taker fee asset
   * @param orderData [3] Encoded data specific to taker asset fee
   * @param orderValues [7] Dexy signature mode
   * @param signature Signature of order maker
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
   * Swaps srcAmount of srcToken for destAmount of destToken
   *
   * Variable naming to be close to Kyber's namingFor the purpose of PriceTolerance, fillTakerQuantity == takerAssetQuantity = Dest token amount
   *
   * ```solidity
   * function takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   * @param orderAddresses [3] Taker asset (Src token)
   * @param orderValues [1] Taker asset quantity (Src token amount)
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
