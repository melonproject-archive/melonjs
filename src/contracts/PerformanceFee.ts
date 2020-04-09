import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

/**
 * `PerformanceFee` contract
 */
export class PerformanceFee extends Contract {
  public readonly ethers: PerformanceFeeEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `PerformanceFee` contract call for `DIVISOR` function.
   *
   * ```solc
   * function DIVISOR() view returns (uint256)
   * ```
   */
  DIVISOR: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for `REDEEM_WINDOW` function.
   *
   * ```solc
   * function REDEEM_WINDOW() view returns (uint256)
   * ```
   */
  REDEEM_WINDOW: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for `canUpdate` function.
   *
   * ```solc
   * function canUpdate(address) view returns (bool)
   * ```
   */
  canUpdate: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `PerformanceFee` contract call for `highWaterMark` function.
   *
   * ```solc
   * function highWaterMark(address) view returns (uint256)
   * ```
   */
  highWaterMark: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for `identifier` function.
   *
   * ```solc
   * function identifier() pure returns (uint256)
   * ```
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for `initializeTime` function.
   *
   * ```solc
   * function initializeTime(address) view returns (uint256)
   * ```
   */
  initializeTime: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for `lastPayoutTime` function.
   *
   * ```solc
   * function lastPayoutTime(address) view returns (uint256)
   * ```
   */
  lastPayoutTime: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for `performanceFeePeriod` function.
   *
   * ```solc
   * function performanceFeePeriod(address) view returns (uint256)
   * ```
   */
  performanceFeePeriod: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for `performanceFeeRate` function.
   *
   * ```solc
   * function performanceFeeRate(address) view returns (uint256)
   * ```
   */
  performanceFeeRate: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * Assumes management fee is zero
   *
   * ```solc
   * function feeAmount() returns (uint256)
   * ```
   */
  feeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * Sets initial state of the fee for a user
   *
   * ```solc
   * function initializeForUser(uint256,uint256,address)
   * ```
   */
  initializeForUser: (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * Assumes management fee is zero
   *
   * ```solc
   * function updateState()
   * ```
   */
  updateState: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
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
}

export interface PerformanceFeeEthersContract extends ethers.Contract {
  'DIVISOR()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'REDEEM_WINDOW()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'canUpdate(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'highWaterMark(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'initializeTime(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'lastPayoutTime(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'performanceFeePeriod(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'performanceFeeRate(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'feeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'initializeForUser(uint256,uint256,address)': (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'updateState()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'DIVISOR()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'REDEEM_WINDOW()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'canUpdate(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'highWaterMark(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'initializeTime(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'lastPayoutTime(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'performanceFeePeriod(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'performanceFeeRate(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'feeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'initializeForUser(uint256,uint256,address)': (
      feeRate: ethers.BigNumberish,
      feePeriod: ethers.BigNumberish,
      denominationAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'updateState()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'DIVISOR()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'REDEEM_WINDOW()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'canUpdate(address)': (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'highWaterMark(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'initializeTime(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'lastPayoutTime(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'performanceFeePeriod(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'performanceFeeRate(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'feeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'initializeForUser(uint256,uint256,address)': (
      feeRate: ethers.BigNumberish,
      feePeriod: ethers.BigNumberish,
      denominationAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'updateState()': ($$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'feeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'initializeForUser(uint256,uint256,address)': (
      feeRate: ethers.BigNumberish,
      feePeriod: ethers.BigNumberish,
      denominationAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'updateState()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'feeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'initializeForUser(uint256,uint256,address)': (
      feeRate: ethers.BigNumberish,
      feePeriod: ethers.BigNumberish,
      denominationAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'updateState()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
