import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class PerformanceFee extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `PerformanceFee` contract call for the `DIVISOR` function.
   *
   * @contract PerformanceFee
   * @signature function DIVISOR() view returns (uint256)
   */
  DIVISOR: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `REDEEM_WINDOW` function.
   *
   * @contract PerformanceFee
   * @signature function REDEEM_WINDOW() view returns (uint256)
   */
  REDEEM_WINDOW: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `canUpdate` function.
   *
   * @contract PerformanceFee
   * @signature function canUpdate(address) view returns (bool)
   */
  canUpdate: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `PerformanceFee` contract call for the `highWaterMark` function.
   *
   * @contract PerformanceFee
   * @signature function highWaterMark(address) view returns (uint256)
   */
  highWaterMark: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `identifier` function.
   *
   * @contract PerformanceFee
   * @signature function identifier() pure returns (uint256)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `initializeTime` function.
   *
   * @contract PerformanceFee
   * @signature function initializeTime(address) view returns (uint256)
   */
  initializeTime: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `lastPayoutTime` function.
   *
   * @contract PerformanceFee
   * @signature function lastPayoutTime(address) view returns (uint256)
   */
  lastPayoutTime: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `performanceFeePeriod` function.
   *
   * @contract PerformanceFee
   * @signature function performanceFeePeriod(address) view returns (uint256)
   */
  performanceFeePeriod: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `performanceFeeRate` function.
   *
   * @contract PerformanceFee
   * @signature function performanceFeeRate(address) view returns (uint256)
   */
  performanceFeeRate: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract transaction for `feeAmount` function.
   *
   * @contract PerformanceFee
   * @signature function feeAmount() returns (uint256)
   */
  feeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `PerformanceFee` contract transaction for `initializeForUser` function.
   *
   * @contract PerformanceFee
   * @signature function initializeForUser(uint256,uint256,address)
   */
  initializeForUser: (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PerformanceFee` contract transaction for `updateState` function.
   *
   * @contract PerformanceFee
   * @signature function updateState()
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
