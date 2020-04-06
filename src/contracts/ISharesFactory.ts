import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ISharesFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ISharesFactory` contract transaction for `createInstance` function.
   *
   * @contract ISharesFactory
   * @signature function createInstance(address) returns (address)
   */
  createInstance: (_hub: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = ['function createInstance(address _hub) returns (address)'];
}
