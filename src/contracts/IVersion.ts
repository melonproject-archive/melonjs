import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IVersion extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IVersion` contract transaction for `shutDownFund` function.
   *
   * @contract IVersion
   * @signature function shutDownFund(address)
   */
  shutDownFund: ($$0: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = ['function shutDownFund(address)'];
}
