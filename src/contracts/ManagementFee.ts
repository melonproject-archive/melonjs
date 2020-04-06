import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ManagementFee extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ManagementFee` contract call for the `DIVISOR` function.
   *
   * @contract ManagementFee
   * @signature function DIVISOR() view returns (uint256)
   */
  DIVISOR: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ManagementFee` contract call for the `feeAmount` function.
   *
   * @contract ManagementFee
   * @signature function feeAmount() view returns (uint256)
   */
  feeAmount: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ManagementFee` contract call for the `identifier` function.
   *
   * @contract ManagementFee
   * @signature function identifier() pure returns (uint256)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ManagementFee` contract call for the `lastPayoutTime` function.
   *
   * @contract ManagementFee
   * @signature function lastPayoutTime(address) view returns (uint256)
   */
  lastPayoutTime: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ManagementFee` contract call for the `managementFeeRate` function.
   *
   * @contract ManagementFee
   * @signature function managementFeeRate(address) view returns (uint256)
   */
  managementFeeRate: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ManagementFee` contract transaction for `initializeForUser` function.
   *
   * @contract ManagementFee
   * @signature function initializeForUser(uint256,uint256,address)
   */
  initializeForUser: (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ManagementFee` contract transaction for `updateState` function.
   *
   * @contract ManagementFee
   * @signature function updateState()
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
