import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV3ZrxVault extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV3ZrxVault` contract call for the `authorities` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function authorities(uint256) view returns (address)
   */
  authorities: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `authorized` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function authorized(address) view returns (bool)
   */
  authorized: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `balanceOf` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: (staker: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `balanceOfZrxVault` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function balanceOfZrxVault() view returns (uint256)
   */
  balanceOfZrxVault: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `getAuthorizedAddresses` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function getAuthorizedAddresses() view returns (address[])
   */
  getAuthorizedAddresses: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `isInCatastrophicFailure` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function isInCatastrophicFailure() view returns (bool)
   */
  isInCatastrophicFailure: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `owner` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `stakingProxyAddress` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function stakingProxyAddress() view returns (address)
   */
  stakingProxyAddress: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `zrxAssetProxy` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function zrxAssetProxy() view returns (address)
   */
  zrxAssetProxy: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `addAuthorizedAddress` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function addAuthorizedAddress(address)
   */
  addAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `depositFrom` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function depositFrom(address,uint256)
   */
  depositFrom: (staker: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `enterCatastrophicFailure` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function enterCatastrophicFailure()
   */
  enterCatastrophicFailure: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `removeAuthorizedAddress` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function removeAuthorizedAddress(address)
   */
  removeAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `removeAuthorizedAddressAtIndex` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function removeAuthorizedAddressAtIndex(address,uint256)
   */
  removeAuthorizedAddressAtIndex: (target: string, index: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `setStakingProxy` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function setStakingProxy(address)
   */
  setStakingProxy: (_stakingProxyAddress: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `setZrxProxy` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function setZrxProxy(address)
   */
  setZrxProxy: (_zrxProxyAddress: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `transferOwnership` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function transferOwnership(address)
   */
  transferOwnership: (newOwner: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `withdrawAllFrom` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function withdrawAllFrom(address) returns (uint256)
   */
  withdrawAllFrom: (staker: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `withdrawFrom` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature function withdrawFrom(address,uint256)
   */
  withdrawFrom: (staker: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _zrxProxyAddress, address _zrxTokenAddress)',
    'event AuthorizedAddressAdded(address indexed target, address indexed caller)',
    'event AuthorizedAddressRemoved(address indexed target, address indexed caller)',
    'event Deposit(address indexed staker, uint256 amount)',
    'event InCatastrophicFailureMode(address sender)',
    'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
    'event StakingProxySet(address stakingProxyAddress)',
    'event Withdraw(address indexed staker, uint256 amount)',
    'event ZrxProxySet(address zrxProxyAddress)',
    'function addAuthorizedAddress(address target)',
    'function authorities(uint256) view returns (address)',
    'function authorized(address) view returns (bool)',
    'function balanceOf(address staker) view returns (uint256)',
    'function balanceOfZrxVault() view returns (uint256)',
    'function depositFrom(address staker, uint256 amount)',
    'function enterCatastrophicFailure()',
    'function getAuthorizedAddresses() view returns (address[])',
    'function isInCatastrophicFailure() view returns (bool)',
    'function owner() view returns (address)',
    'function removeAuthorizedAddress(address target)',
    'function removeAuthorizedAddressAtIndex(address target, uint256 index)',
    'function setStakingProxy(address _stakingProxyAddress)',
    'function setZrxProxy(address _zrxProxyAddress)',
    'function stakingProxyAddress() view returns (address)',
    'function transferOwnership(address newOwner)',
    'function withdrawAllFrom(address staker) returns (uint256)',
    'function withdrawFrom(address staker, uint256 amount)',
    'function zrxAssetProxy() view returns (address)',
  ];
}
