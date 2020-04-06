import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IVaultFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IVaultFactory` contract transaction for `createInstance` function.
   *
   * @contract IVaultFactory
   * @signature function createInstance(address) returns (address)
   */
  createInstance: (_hub: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = ['function createInstance(address _hub) returns (address)'];
}
