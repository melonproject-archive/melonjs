import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class DSGuard extends Contract {
  public readonly ethers: DSGuardEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `DSGuard` contract call for the `ANY` function.
   *
   * @contract DSGuard
   * @signature ANY()
   * @method function ANY() view returns (bytes32)
   */
  ANY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `DSGuard` contract call for the `authority` function.
   *
   * @contract DSGuard
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `DSGuard` contract call for the `canCall` function.
   *
   * @contract DSGuard
   * @signature canCall(address,address,bytes4)
   * @method function canCall(address,address,bytes4) view returns (bool)
   */
  canCall: (
    src_: string,
    dst_: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `DSGuard` contract call for the `owner` function.
   *
   * @contract DSGuard
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `DSGuard` contract transaction for `forbid` function.
   *
   * @contract DSGuard
   * @signature forbid(address,address,bytes32)
   * @method function forbid(address,address,bytes32)
   */
  forbid: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `DSGuard` contract transaction for `permit` function.
   *
   * @contract DSGuard
   * @signature permit(address,address,bytes32)
   * @method function permit(address,address,bytes32)
   */
  permit: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `DSGuard` contract transaction for `setAuthority` function.
   *
   * @contract DSGuard
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `DSGuard` contract transaction for `setOwner` function.
   *
   * @contract DSGuard
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event LogForbid(bytes32 indexed src, bytes32 indexed dst, bytes32 indexed sig)',
    'event LogPermit(bytes32 indexed src, bytes32 indexed dst, bytes32 indexed sig)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function ANY() view returns (bytes32)',
    'function authority() view returns (address)',
    'function canCall(address src_, address dst_, bytes4 sig) view returns (bool)',
    'function forbid(address src, address dst, bytes32 sig)',
    'function forbid(bytes32 src, bytes32 dst, bytes32 sig)',
    'function owner() view returns (address)',
    'function permit(address src, address dst, bytes32 sig)',
    'function permit(bytes32 src, bytes32 dst, bytes32 sig)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
  ];
}

export interface DSGuardEthersContract extends ethers.Contract {
  'ANY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'canCall(address,address,bytes4)': (
    src_: string,
    dst_: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'forbid(address,address,bytes32)': (
    src: string,
    dst: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'permit(address,address,bytes32)': (
    src: string,
    dst: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'ANY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'canCall(address,address,bytes4)': (
      src_: string,
      dst_: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
