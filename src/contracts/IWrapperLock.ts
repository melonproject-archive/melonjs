import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IWrapperLock extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IWrapperLock` contract call for the `balanceOf` function.
   *
   * @contract IWrapperLock
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IWrapperLock` contract transaction for `deposit` function.
   *
   * @contract IWrapperLock
   * @signature function deposit(uint256,uint256) returns (bool)
   */
  deposit: ($$0: ethers.BigNumberish, $$1: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IWrapperLock` contract transaction for `withdraw` function.
   *
   * @contract IWrapperLock
   * @signature function withdraw(uint256,uint8,bytes32,bytes32,uint256) returns (bool)
   */
  withdraw: (
    $$0: ethers.BigNumberish,
    $$1: ethers.BigNumberish,
    $$2: string | ethers.utils.BytesLike,
    $$3: string | ethers.utils.BytesLike,
    $$4: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function balanceOf(address) view returns (uint256)',
    'function deposit(uint256, uint256) returns (bool)',
    'function withdraw(uint256, uint8, bytes32, bytes32, uint256) returns (bool)',
  ];
}
