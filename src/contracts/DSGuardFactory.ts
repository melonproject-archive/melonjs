import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class DSGuardFactory extends Contract {
  public readonly ethers: DSGuardFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `DSGuardFactory` contract call for the `isGuard` function.
   *
   * @contract DSGuardFactory
   * @signature isGuard(address)
   * @method function isGuard(address) view returns (bool)
   */
  isGuard: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `DSGuardFactory` contract transaction for `newGuard` function.
   *
   * @contract DSGuardFactory
   * @signature newGuard()
   * @method function newGuard() returns (address)
   */
  newGuard: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function isGuard(address) view returns (bool)',
    'function newGuard() returns (address guard)',
  ];
}

export interface DSGuardFactoryEthersContract extends ethers.Contract {
  'isGuard(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'newGuard()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  functions: {
    'isGuard(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'newGuard()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'isGuard(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'newGuard()': ($$overrides?: ethers.Overrides) => Promise<string>;
  };

  estimateGas: {
    'newGuard()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'newGuard()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
