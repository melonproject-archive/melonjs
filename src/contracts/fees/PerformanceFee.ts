import { ethers } from 'ethers';
import { Contract, TransactionWrapper, DeploymentTransactionWrapper, AddressLike } from './../..';

export class PerformanceFee extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'event HighWaterMarkUpdate(address indexed feeManager, uint256 indexed hwm)',
    'function DIVISOR() view returns (uint256)',
    'function REDEEM_WINDOW() view returns (uint256)',
    'function canUpdate(address _who) view returns (bool)',
    'function feeAmount() returns (uint256 feeInShares)',
    'function highWaterMark(address) view returns (uint256)',
    'function identifier() pure returns (uint256)',
    'function initializeForUser(uint256 feeRate, uint256 feePeriod, address denominationAsset)',
    'function initializeTime(address) view returns (uint256)',
    'function lastPayoutTime(address) view returns (uint256)',
    'function performanceFeePeriod(address) view returns (uint256)',
    'function performanceFeeRate(address) view returns (uint256)',
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
   * function REDEEM_WINDOW() view returns (uint256)
   * ```
   *
   */
  REDEEM_WINDOW: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function canUpdate(address) view returns (bool)
   * ```
   *
   */
  canUpdate: (_who: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function highWaterMark(address) view returns (uint256)
   * ```
   *
   */
  highWaterMark: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function identifier() pure returns (uint256)
   * ```
   *
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function initializeTime(address) view returns (uint256)
   * ```
   *
   */
  initializeTime: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function lastPayoutTime(address) view returns (uint256)
   * ```
   *
   */
  lastPayoutTime: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function performanceFeePeriod(address) view returns (uint256)
   * ```
   *
   */
  performanceFeePeriod: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function performanceFeeRate(address) view returns (uint256)
   * ```
   *
   */
  performanceFeeRate: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function feeAmount() returns (uint256)
   * ```
   *
   */
  feeAmount: () => TransactionWrapper<ethers.Overrides>;
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
