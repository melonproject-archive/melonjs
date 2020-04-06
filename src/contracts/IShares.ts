import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IShares extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IShares` contract transaction for `createFor` function.
   *
   * @contract IShares
   * @signature function createFor(address,uint256)
   */
  createFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IShares` contract transaction for `destroyFor` function.
   *
   * @contract IShares
   * @signature function destroyFor(address,uint256)
   */
  destroyFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function createFor(address who, uint256 amount)',
    'function destroyFor(address who, uint256 amount)',
  ];
}
