import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IWrapperLockEth extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IWrapperLockEth` contract call for the `balanceOf` function.
   *
   * @contract IWrapperLockEth
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IWrapperLockEth` contract transaction for `deposit` function.
   *
   * @contract IWrapperLockEth
   * @signature function deposit(uint256,uint256) payable returns (bool)
   */
  deposit: ($$0: ethers.BigNumberish, $$1: ethers.BigNumberish) => TransactionWrapper<ethers.PayableOverrides>;

  static abi: string[] = [
    'function balanceOf(address) view returns (uint256)',
    'function deposit(uint256, uint256) payable returns (bool)',
  ];
}
