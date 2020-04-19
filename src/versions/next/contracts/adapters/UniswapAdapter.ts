import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

export class UniswapAdapterContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'function cancelOrder(address targetExchange, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
    'function getOrder(address onExchange, uint256 id, address makerAsset) view returns (address, address, uint256, uint256)',
    'function makeOrder(address targetExchange, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
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
   * Take order that uses a user-defined src token amount to trade for a dest token amount
   *
   * For the purpose of PriceTolerance, _orderValues [1] == _orderValues [6] = Dest token amount
   *
   * ```solidity
   * function takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   * @param _orderAddresses [3] Taker asset (Src token)
   * @param _orderValues [6] Taker asset fill amount
   * @param _targetExchange Address of Uniswap factory contract
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
