import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IFee extends Contract {
  public readonly ethers: IFeeEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IFee` contract call for the `identifier` function.
   *
   * @contract IFee
   * @signature identifier()
   * @method function identifier() view returns (uint256)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IFee` contract transaction for `feeAmount` function.
   *
   * @contract IFee
   * @signature feeAmount()
   * @method function feeAmount() returns (uint256)
   */
  feeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `IFee` contract transaction for `initializeForUser` function.
   *
   * @contract IFee
   * @signature initializeForUser(uint256,uint256,address)
   * @method function initializeForUser(uint256,uint256,address)
   */
  initializeForUser: (
    $$0: ethers.BigNumberish,
    $$1: ethers.BigNumberish,
    $$2: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IFee` contract transaction for `updateState` function.
   *
   * @contract IFee
   * @signature updateState()
   * @method function updateState()
   */
  updateState: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function feeAmount() returns (uint256)',
    'function identifier() view returns (uint256)',
    'function initializeForUser(uint256, uint256, address)',
    'function updateState()',
  ];
}

export interface IFeeEthersContract extends ethers.Contract {
  'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'feeAmount()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'initializeForUser(uint256,uint256,address)': (
    $$0: ethers.BigNumberish,
    $$1: ethers.BigNumberish,
    $$2: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'updateState()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'feeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'initializeForUser(uint256,uint256,address)': (
      $$0: ethers.BigNumberish,
      $$1: ethers.BigNumberish,
      $$2: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'updateState()': ($$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'feeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'initializeForUser(uint256,uint256,address)': (
      $$0: ethers.BigNumberish,
      $$1: ethers.BigNumberish,
      $$2: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'updateState()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'feeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'initializeForUser(uint256,uint256,address)': (
      $$0: ethers.BigNumberish,
      $$1: ethers.BigNumberish,
      $$2: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'updateState()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
