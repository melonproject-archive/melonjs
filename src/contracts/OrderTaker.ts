import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '..';

/**
 * @title Order Taker base contract
 * @author Melonport AG <team@melonport.com>
 */
export class OrderTakerContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'event OrderFilled(address indexed exchangeAddress, address buyAsset, uint256 buyAmount, address sellAsset, uint256 sellAmount, address[] feeAssets, uint256[] feeAmounts)',
    'function takeOrder(address _targetExchange, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
  ];

  /**
   * Constructs a new contract instance.
   *
   * @param contract The contract interface.
   * @param addressOrName The address or name of the contract.
   * @param signerOrProvider The ethers.js signer or provider instance to use.
   */
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * Perform a Take Order on a particular exchange
   *
   * Synchronously handles the responsibilities of takeOrder: - Validate user inputs - Prepare a formatted list of assets and their expected fill amounts - Fill an order on the _targetExchange (with validateAndFinalizeFilledOrder)
   *
   * ```solidity
   * function takeOrder(address,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   * @param _identifier Order identifier
   * @param _orderAddresses [7] taker fee asset
   * @param _orderData [3] Encoded data specific to taker asset fee
   * @param _orderValues [7] Dexy signature mode
   * @param _signature Signature of order maker
   * @param _targetExchange Order maker
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
