import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class DSAuthority extends Contract {
  public readonly ethers: DSAuthorityEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `DSAuthority` contract call for the `canCall` function.
   *
   * @contract DSAuthority
   * @signature canCall(address,address,bytes4)
   * @method function canCall(address,address,bytes4) view returns (bool)
   */
  canCall: (
    src: string,
    dst: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  static abi: string[] = ['function canCall(address src, address dst, bytes4 sig) view returns (bool)'];
}

export interface DSAuthorityEthersContract extends ethers.Contract {
  'canCall(address,address,bytes4)': (
    src: string,
    dst: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  functions: {
    'canCall(address,address,bytes4)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
  };

  callStatic: {
    'canCall(address,address,bytes4)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
  };

  estimateGas: {};

  populateTransaction: {};
}
