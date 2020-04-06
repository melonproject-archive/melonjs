import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockFee extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockFee` contract call for the `FEE_PERIOD` function.
   *
   * @contract MockFee
   * @signature function FEE_PERIOD() view returns (uint256)
   */
  FEE_PERIOD: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockFee` contract call for the `FEE_RATE` function.
   *
   * @contract MockFee
   * @signature function FEE_RATE() view returns (uint256)
   */
  FEE_RATE: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockFee` contract call for the `fee` function.
   *
   * @contract MockFee
   * @signature function fee() view returns (uint256)
   */
  fee: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockFee` contract call for the `feeNumber` function.
   *
   * @contract MockFee
   * @signature function feeNumber() view returns (uint256)
   */
  feeNumber: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockFee` contract call for the `identifier` function.
   *
   * @contract MockFee
   * @signature function identifier() view returns (uint256)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockFee` contract transaction for `feeAmount` function.
   *
   * @contract MockFee
   * @signature function feeAmount() returns (uint256)
   */
  feeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFee` contract transaction for `initializeForUser` function.
   *
   * @contract MockFee
   * @signature function initializeForUser(uint256,uint256,address)
   */
  initializeForUser: (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFee` contract transaction for `setFeeAmount` function.
   *
   * @contract MockFee
   * @signature function setFeeAmount(uint256)
   */
  setFeeAmount: (amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFee` contract transaction for `updateState` function.
   *
   * @contract MockFee
   * @signature function updateState()
   */
  updateState: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(uint256 _feeNumber)',
    'function FEE_PERIOD() view returns (uint256)',
    'function FEE_RATE() view returns (uint256)',
    'function fee() view returns (uint256)',
    'function feeAmount() returns (uint256 feeInShares)',
    'function feeNumber() view returns (uint256)',
    'function identifier() view returns (uint256)',
    'function initializeForUser(uint256 feeRate, uint256 feePeriod, address denominationAsset)',
    'function setFeeAmount(uint256 amount)',
    'function updateState()',
  ];
}
