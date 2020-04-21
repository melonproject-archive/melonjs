import { ethers } from 'ethers';
import { Contract, TransactionWrapper, DeploymentTransactionWrapper, AddressLike } from './../..';

export class ManagementFee extends Contract {
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
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(bytecode: string, signer: ethers.Signer) {
    return new DeploymentTransactionWrapper(this, bytecode, signer);
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
  lastPayoutTime: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function managementFeeRate(address) view returns (uint256)
   * ```
   *
   */
  managementFeeRate: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function initializeForUser(uint256,uint256,address)
   * ```
   *
   */
  initializeForUser: (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: AddressLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function updateState()
   * ```
   *
   */
  updateState: () => TransactionWrapper<ethers.Overrides>;
}
