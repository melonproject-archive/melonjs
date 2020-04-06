import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IWrapperRegistryEFX extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IWrapperRegistryEFX` contract call for the `token2WrapperLookup` function.
   *
   * @contract IWrapperRegistryEFX
   * @signature function token2WrapperLookup(address) view returns (address)
   */
  token2WrapperLookup: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IWrapperRegistryEFX` contract call for the `wrapper2TokenLookup` function.
   *
   * @contract IWrapperRegistryEFX
   * @signature function wrapper2TokenLookup(address) view returns (address)
   */
  wrapper2TokenLookup: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  static abi: string[] = [
    'function token2WrapperLookup(address) view returns (address)',
    'function wrapper2TokenLookup(address) view returns (address)',
  ];
}
