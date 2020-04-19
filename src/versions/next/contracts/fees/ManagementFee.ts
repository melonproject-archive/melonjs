import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

export class ManagementFeeContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'function DIVISOR() view returns (uint256)',
    'function feeAmount() view returns (uint256 feeInShares)',
    'function identifier() pure returns (uint256)',
    'function initializeForUser(uint256 feeRate, uint256 feePeriod, address denominationAsset)',
    'function lastPayoutTime(address) view returns (uint256)',
    'function managementFeeRate(address) view returns (uint256)',
    'function updateState()',
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
   * function DIVISOR() view returns (uint256)
   * ```
   *
   */
  DIVISOR: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function feeAmount() view returns (uint256)
   * ```
   *
   */
  feeAmount: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function identifier() pure returns (uint256)
   * ```
   *
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function lastPayoutTime(address) view returns (uint256)
   * ```
   *
   */
  lastPayoutTime: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function managementFeeRate(address) view returns (uint256)
   * ```
   *
   */
  managementFeeRate: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function initializeForUser(uint256,uint256,address)
   * ```
   *
   */
  initializeForUser: (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: string,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function updateState()
   * ```
   *
   */
  updateState: () => TransactionWrapper<ethers.Overrides>;
}
