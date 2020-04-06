import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IEngine extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IEngine` contract call for the `getAmguPrice` function.
   *
   * @contract IEngine
   * @signature function getAmguPrice() view returns (uint256)
   */
  getAmguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IEngine` contract transaction for `payAmguInEther` function.
   *
   * @contract IEngine
   * @signature function payAmguInEther() payable
   */
  payAmguInEther: () => TransactionWrapper<ethers.PayableOverrides>;

  static abi: string[] = ['function getAmguPrice() view returns (uint256)', 'function payAmguInEther() payable'];
}
