import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV3ERC20Proxy extends Contract {
  public readonly ethers: ZeroExV3ERC20ProxyEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV3ERC20Proxy` contract call for the `authorities` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature authorities(uint256)
   * @method function authorities(uint256) view returns (address)
   */
  authorities: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ERC20Proxy` contract call for the `owner` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ERC20Proxy` contract call for the `getProxyId` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature getProxyId()
   * @method function getProxyId() pure returns (bytes4)
   */
  getProxyId: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ERC20Proxy` contract call for the `authorized` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature authorized(address)
   * @method function authorized(address) view returns (bool)
   */
  authorized: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3ERC20Proxy` contract call for the `getAuthorizedAddresses` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature getAuthorizedAddresses()
   * @method function getAuthorizedAddresses() view returns (address[])
   */
  getAuthorizedAddresses: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ZeroExV3ERC20Proxy` contract transaction for `addAuthorizedAddress` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature addAuthorizedAddress(address)
   * @method function addAuthorizedAddress(address)
   */
  addAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ERC20Proxy` contract transaction for `removeAuthorizedAddress` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature removeAuthorizedAddress(address)
   * @method function removeAuthorizedAddress(address)
   */
  removeAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ERC20Proxy` contract transaction for `removeAuthorizedAddressAtIndex` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature removeAuthorizedAddressAtIndex(address,uint256)
   * @method function removeAuthorizedAddressAtIndex(address,uint256)
   */
  removeAuthorizedAddressAtIndex: (target: string, index: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ERC20Proxy` contract transaction for `transferOwnership` function.
   *
   * @contract ZeroExV3ERC20Proxy
   * @signature transferOwnership(address)
   * @method function transferOwnership(address)
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

export interface ZeroExV3ERC20ProxyEthersContract extends ethers.Contract {
  'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getProxyId()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'addAuthorizedAddress(address)': (
    target: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'removeAuthorizedAddress(address)': (
    target: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'removeAuthorizedAddressAtIndex(address,uint256)': (
    target: string,
    index: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferOwnership(address)': (
    newOwner: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getProxyId()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'addAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'removeAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'transferOwnership(address)': (
      newOwner: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getProxyId()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'addAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'removeAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'addAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'addAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferOwnership(address)': (
      newOwner: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
