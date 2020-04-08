import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IFeeManager extends Contract {
  public readonly ethers: IFeeManagerEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IFeeManager` contract transaction for `managementFeeAmount` function.
   *
   * @contract IFeeManager
   * @signature managementFeeAmount()
   * @method function managementFeeAmount() returns (uint256)
   */
  managementFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `IFeeManager` contract transaction for `performanceFeeAmount` function.
   *
   * @contract IFeeManager
   * @signature performanceFeeAmount()
   * @method function performanceFeeAmount() returns (uint256)
   */
  performanceFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `IFeeManager` contract transaction for `rewardAllFees` function.
   *
   * @contract IFeeManager
   * @signature rewardAllFees()
   * @method function rewardAllFees()
   */
  rewardAllFees: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `IFeeManager` contract transaction for `rewardManagementFee` function.
   *
   * @contract IFeeManager
   * @signature rewardManagementFee()
   * @method function rewardManagementFee()
   */
  rewardManagementFee: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `IFeeManager` contract transaction for `totalFeeAmount` function.
   *
   * @contract IFeeManager
   * @signature totalFeeAmount()
   * @method function totalFeeAmount() returns (uint256)
   */
  totalFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function managementFeeAmount() returns (uint256)',
    'function performanceFeeAmount() returns (uint256)',
    'function rewardAllFees()',
    'function rewardManagementFee()',
    'function totalFeeAmount() returns (uint256)',
  ];
}

export interface IFeeManagerEthersContract extends ethers.Contract {
  'managementFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'rewardAllFees()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'rewardManagementFee()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'totalFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'managementFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'rewardAllFees()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'rewardManagementFee()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'totalFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'managementFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'rewardAllFees()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'rewardManagementFee()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'totalFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  estimateGas: {
    'managementFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'rewardAllFees()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'rewardManagementFee()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'totalFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'managementFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'rewardAllFees()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'rewardManagementFee()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'totalFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
