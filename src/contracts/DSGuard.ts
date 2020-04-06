import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class DSGuard extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `DSGuard` contract call for the `ANY` function.
   *
   * @contract DSGuard
   * @signature function ANY() view returns (bytes32)
   */
  ANY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `DSGuard` contract call for the `authority` function.
   *
   * @contract DSGuard
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `DSGuard` contract call for the `canCall` function.
   *
   * @contract DSGuard
   * @signature function canCall(address,address,bytes4) view returns (bool)
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
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `DSGuard` contract transaction for `forbid` function.
   *
   * @contract DSGuard
   * @signature function forbid(address,address,bytes32)
   */
  forbid: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `DSGuard` contract transaction for `permit` function.
   *
   * @contract DSGuard
   * @signature function permit(address,address,bytes32)
   */
  permit: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `DSGuard` contract transaction for `setAuthority` function.
   *
   * @contract DSGuard
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `DSGuard` contract transaction for `setOwner` function.
   *
   * @contract DSGuard
   * @signature function setOwner(address)
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
