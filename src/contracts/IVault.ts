import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IVault extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IVault` contract transaction for `withdraw` function.
   *
   * @contract IVault
   * @signature function withdraw(address,uint256)
   */
  withdraw: (token: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = ['function withdraw(address token, uint256 amount)'];
}
