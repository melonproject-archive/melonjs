import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV3ERC20Proxy extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV3ERC20Proxy` contract call for the `authorities` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature function authorities(uint256) view returns (address)
   */
  authorities: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ERC20Proxy` contract call for the `owner` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ERC20Proxy` contract call for the `getProxyId` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature function getProxyId() pure returns (bytes4)
   */
  getProxyId: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ERC20Proxy` contract call for the `authorized` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature function authorized(address) view returns (bool)
   */
  authorized: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3ERC20Proxy` contract call for the `getAuthorizedAddresses` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature function getAuthorizedAddresses() view returns (address[])
   */
  getAuthorizedAddresses: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ZeroExV3ERC20Proxy` contract transaction for `addAuthorizedAddress` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature function addAuthorizedAddress(address)
   */
  addAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ERC20Proxy` contract transaction for `removeAuthorizedAddress` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature function removeAuthorizedAddress(address)
   */
  removeAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ERC20Proxy` contract transaction for `removeAuthorizedAddressAtIndex` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature function removeAuthorizedAddressAtIndex(address,uint256)
   */
  removeAuthorizedAddressAtIndex: (target: string, index: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ERC20Proxy` contract transaction for `transferOwnership` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature function transferOwnership(address)
   */
  transferOwnership: (newOwner: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function addAuthorizedAddress(address target)',
    'function authorities(uint256) view returns (address)',
    'function removeAuthorizedAddress(address target)',
    'function owner() view returns (address)',
    'function removeAuthorizedAddressAtIndex(address target, uint256 index)',
    'function getProxyId() pure returns (bytes4)',
    'function authorized(address) view returns (bool)',
    'function getAuthorizedAddresses() view returns (address[])',
    'function transferOwnership(address newOwner)',
    'event AuthorizedAddressAdded(address indexed target, address indexed caller)',
    'event AuthorizedAddressRemoved(address indexed target, address indexed caller)',
  ];
}
