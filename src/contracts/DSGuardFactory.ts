import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class DSGuardFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `DSGuardFactory` contract call for the `isGuard` function.
   *
   * @contract DSGuardFactory
   * @signature function isGuard(address) view returns (bool)
   */
  isGuard: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `DSGuardFactory` contract transaction for `newGuard` function.
   *
   * @contract DSGuardFactory
   * @signature function newGuard() returns (address)
   */
  newGuard: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function isGuard(address) view returns (bool)',
    'function newGuard() returns (address guard)',
  ];
}
