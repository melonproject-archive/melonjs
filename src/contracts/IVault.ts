import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IVault extends Contract {
  public readonly ethers: IVaultEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IVault` contract transaction for `withdraw` function.
   *
   * @contract IVault
   * @signature withdraw(address,uint256)
   * @method function withdraw(address,uint256)
   */
  withdraw: ($$0: string, $$1: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = ['function withdraw(address, uint256)'];
}

export interface IVaultEthersContract extends ethers.Contract {
  'withdraw(address,uint256)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  callStatic: {
    'withdraw(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'withdraw(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'withdraw(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
