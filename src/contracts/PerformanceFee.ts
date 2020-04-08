import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class PerformanceFee extends Contract {
  public readonly ethers: PerformanceFeeEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `PerformanceFee` contract call for the `DIVISOR` function.
   *
   * @contract PerformanceFee
   * @signature DIVISOR()
   * @method function DIVISOR() view returns (uint256)
   */
  DIVISOR: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `REDEEM_WINDOW` function.
   *
   * @contract PerformanceFee
   * @signature REDEEM_WINDOW()
   * @method function REDEEM_WINDOW() view returns (uint256)
   */
  REDEEM_WINDOW: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `canUpdate` function.
   *
   * @contract PerformanceFee
   * @signature canUpdate(address)
   * @method function canUpdate(address) view returns (bool)
   */
  canUpdate: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `PerformanceFee` contract call for the `highWaterMark` function.
   *
   * @contract PerformanceFee
   * @signature highWaterMark(address)
   * @method function highWaterMark(address) view returns (uint256)
   */
  highWaterMark: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `identifier` function.
   *
   * @contract PerformanceFee
   * @signature identifier()
   * @method function identifier() pure returns (uint256)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `initializeTime` function.
   *
   * @contract PerformanceFee
   * @signature initializeTime(address)
   * @method function initializeTime(address) view returns (uint256)
   */
  initializeTime: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `lastPayoutTime` function.
   *
   * @contract PerformanceFee
   * @signature lastPayoutTime(address)
   * @method function lastPayoutTime(address) view returns (uint256)
   */
  lastPayoutTime: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `performanceFeePeriod` function.
   *
   * @contract PerformanceFee
   * @signature performanceFeePeriod(address)
   * @method function performanceFeePeriod(address) view returns (uint256)
   */
  performanceFeePeriod: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract call for the `performanceFeeRate` function.
   *
   * @contract PerformanceFee
   * @signature performanceFeeRate(address)
   * @method function performanceFeeRate(address) view returns (uint256)
   */
  performanceFeeRate: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PerformanceFee` contract transaction for `feeAmount` function.
   *
   * @contract PerformanceFee
   * @signature feeAmount()
   * @method function feeAmount() returns (uint256)
   */
  feeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `PerformanceFee` contract transaction for `initializeForUser` function.
   *
   * @contract PerformanceFee
   * @signature initializeForUser(uint256,uint256,address)
   * @method function initializeForUser(uint256,uint256,address)
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
   * @signature updateState()
   * @method function updateState()
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
  'feeAmount()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'initializeForUser(uint256,uint256,address)': (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'updateState()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

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
    'feeAmount()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'initializeForUser(uint256,uint256,address)': (
      feeRate: ethers.BigNumberish,
      feePeriod: ethers.BigNumberish,
      denominationAsset: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'updateState()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
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
