import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class DSAuth extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `DSAuth` contract call for the `authority` function.
   *
   * @contract DSAuth
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `DSAuth` contract call for the `owner` function.
   *
   * @contract DSAuth
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `DSAuth` contract transaction for `setAuthority` function.
   *
   * @contract DSAuth
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `DSAuth` contract transaction for `setOwner` function.
   *
   * @contract DSAuth
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor()',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function authority() view returns (address)',
    'function owner() view returns (address)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
  ];
}
