import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockFee extends Contract {
  public readonly ethers: MockFeeEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockFee` contract call for the `FEE_PERIOD` function.
   *
   * @contract MockFee
   * @signature FEE_PERIOD()
   * @method function FEE_PERIOD() view returns (uint256)
   */
  FEE_PERIOD: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockFee` contract call for the `FEE_RATE` function.
   *
   * @contract MockFee
   * @signature FEE_RATE()
   * @method function FEE_RATE() view returns (uint256)
   */
  FEE_RATE: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockFee` contract call for the `fee` function.
   *
   * @contract MockFee
   * @signature fee()
   * @method function fee() view returns (uint256)
   */
  fee: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockFee` contract call for the `feeNumber` function.
   *
   * @contract MockFee
   * @signature feeNumber()
   * @method function feeNumber() view returns (uint256)
   */
  feeNumber: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockFee` contract call for the `identifier` function.
   *
   * @contract MockFee
   * @signature identifier()
   * @method function identifier() view returns (uint256)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockFee` contract transaction for `feeAmount` function.
   *
   * @contract MockFee
   * @signature feeAmount()
   * @method function feeAmount() returns (uint256)
   */
  feeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFee` contract transaction for `initializeForUser` function.
   *
   * @contract MockFee
   * @signature initializeForUser(uint256,uint256,address)
   * @method function initializeForUser(uint256,uint256,address)
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
   * @signature setFeeAmount(uint256)
   * @method function setFeeAmount(uint256)
   */
  setFeeAmount: (amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFee` contract transaction for `updateState` function.
   *
   * @contract MockFee
   * @signature updateState()
   * @method function updateState()
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

export interface MockFeeEthersContract extends ethers.Contract {
  'FEE_PERIOD()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'FEE_RATE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'fee()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'feeNumber()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'feeAmount()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'initializeForUser(uint256,uint256,address)': (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setFeeAmount(uint256)': (
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'updateState()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'FEE_PERIOD()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'FEE_RATE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'fee()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'feeNumber()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'feeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'initializeForUser(uint256,uint256,address)': (
      feeRate: ethers.BigNumberish,
      feePeriod: ethers.BigNumberish,
      denominationAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setFeeAmount(uint256)': (amount: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
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
    'setFeeAmount(uint256)': (amount: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
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
    'setFeeAmount(uint256)': (
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'updateState()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
