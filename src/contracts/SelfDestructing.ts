import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class SelfDestructing extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `SelfDestructing` contract transaction for `bequeath` function.
   *
   * @contract SelfDestructing
   * @signature function bequeath(address)
   */
  bequeath: (_heir: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = ['function bequeath(address _heir)'];
}
