import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

/**
 * `ManagementFee` contract
 */
export class ManagementFee extends Contract {
  public readonly ethers: ManagementFeeEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ManagementFee` contract call for `DIVISOR` function.
   *
   * ```solidity
   * function DIVISOR() view returns (uint256)
   * ```
   */
  DIVISOR: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ManagementFee` contract call for `feeAmount` function.
   *
   * ```solidity
   * function feeAmount() view returns (uint256)
   * ```
   */
  feeAmount: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ManagementFee` contract call for `identifier` function.
   *
   * ```solidity
   * function identifier() pure returns (uint256)
   * ```
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ManagementFee` contract call for `lastPayoutTime` function.
   *
   * ```solidity
   * function lastPayoutTime(address) view returns (uint256)
   * ```
   */
  lastPayoutTime: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ManagementFee` contract call for `managementFeeRate` function.
   *
   * ```solidity
   * function managementFeeRate(address) view returns (uint256)
   * ```
   */
  managementFeeRate: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ManagementFee` contract call for `initializeForUser` function.
   *
   * ```solidity
   * function initializeForUser(uint256,uint256,address)
   * ```
   */
  initializeForUser: (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ManagementFee` contract call for `updateState` function.
   *
   * ```solidity
   * function updateState()
   * ```
   */
  updateState: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function DIVISOR() view returns (uint256)',
    'function feeAmount() view returns (uint256 feeInShares)',
    'function identifier() pure returns (uint256)',
    'function initializeForUser(uint256 feeRate, uint256 feePeriod, address denominationAsset)',
    'function lastPayoutTime(address) view returns (uint256)',
    'function managementFeeRate(address) view returns (uint256)',
    'function updateState()',
  ];
}

export interface ManagementFeeEthersContract extends ethers.Contract {
  'DIVISOR()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'feeAmount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'lastPayoutTime(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'managementFeeRate(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'initializeForUser(uint256,uint256,address)': (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'updateState()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'DIVISOR()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'feeAmount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'lastPayoutTime(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'managementFeeRate(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
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
    'feeAmount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'lastPayoutTime(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'managementFeeRate(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'initializeForUser(uint256,uint256,address)': (
      feeRate: ethers.BigNumberish,
      feePeriod: ethers.BigNumberish,
      denominationAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'updateState()': ($$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'initializeForUser(uint256,uint256,address)': (
      feeRate: ethers.BigNumberish,
      feePeriod: ethers.BigNumberish,
      denominationAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'updateState()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'initializeForUser(uint256,uint256,address)': (
      feeRate: ethers.BigNumberish,
      feePeriod: ethers.BigNumberish,
      denominationAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'updateState()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
