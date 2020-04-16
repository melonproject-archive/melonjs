import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '..';

export class PerformanceFeeContract extends Contract {
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
  canUpdate: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function highWaterMark(address) view returns (uint256)
   * ```
   *
   */
  highWaterMark: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
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
  initializeTime: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function lastPayoutTime(address) view returns (uint256)
   * ```
   *
   */
  lastPayoutTime: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function performanceFeePeriod(address) view returns (uint256)
   * ```
   *
   */
  performanceFeePeriod: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function performanceFeeRate(address) view returns (uint256)
   * ```
   *
   */
  performanceFeeRate: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * Assumes management fee is zero
   *
   * ```solidity
   * function feeAmount() returns (uint256)
   * ```
   *
   */
  feeAmount: () => TransactionWrapper<ethers.Overrides>;
  /**
   * Sets initial state of the fee for a user
   *
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
   * Assumes management fee is zero
   *
   * ```solidity
   * function updateState()
   * ```
   *
   */
  updateState: () => TransactionWrapper<ethers.Overrides>;
}
