import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class WrapperRegistryEFX extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `WrapperRegistryEFX` contract call for the `wrapper2TokenLookup` function.
   *
   * @contract WrapperRegistryEFX
   * @signature function wrapper2TokenLookup(address) view returns (address)
   */
  wrapper2TokenLookup: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperRegistryEFX` contract call for the `owner` function.
   *
   * @contract WrapperRegistryEFX
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperRegistryEFX` contract call for the `token2WrapperLookup` function.
   *
   * @contract WrapperRegistryEFX
   * @signature function token2WrapperLookup(address) view returns (address)
   */
  token2WrapperLookup: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperRegistryEFX` contract transaction for `addNewWrapperPair` function.
   *
   * @contract WrapperRegistryEFX
   * @signature function addNewWrapperPair(address[],address[])
   */
  addNewWrapperPair: (originalTokens: string[], wrapperTokens: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperRegistryEFX` contract transaction for `transferOwnership` function.
   *
   * @contract WrapperRegistryEFX
   * @signature function transferOwnership(address)
   */
  transferOwnership: (newOwner: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function wrapper2TokenLookup(address) view returns (address)',
    'function owner() view returns (address)',
    'function token2WrapperLookup(address) view returns (address)',
    'function addNewWrapperPair(address[] originalTokens, address[] wrapperTokens)',
    'function transferOwnership(address newOwner)',
    'event AddNewPair(address token, address wrapper)',
  ];
}
