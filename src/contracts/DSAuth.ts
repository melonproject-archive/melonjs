import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class DSAuth extends Contract {
  public readonly ethers: DSAuthEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `DSAuth` contract call for the `authority` function.
   *
   * @contract DSAuth
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `DSAuth` contract call for the `owner` function.
   *
   * @contract DSAuth
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `DSAuth` contract transaction for `setAuthority` function.
   *
   * @contract DSAuth
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `DSAuth` contract transaction for `setOwner` function.
   *
   * @contract DSAuth
   * @signature setOwner(address)
   * @method function setOwner(address)
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

export interface DSAuthEthersContract extends ethers.Contract {
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
