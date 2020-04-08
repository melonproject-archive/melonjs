import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV3ZrxVault extends Contract {
  public readonly ethers: ZeroExV3ZrxVaultEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV3ZrxVault` contract call for the `authorities` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature authorities(uint256)
   * @method function authorities(uint256) view returns (address)
   */
  authorities: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `authorized` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature authorized(address)
   * @method function authorized(address) view returns (bool)
   */
  authorized: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `balanceOf` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature balanceOf(address)
   * @method function balanceOf(address) view returns (uint256)
   */
  balanceOf: (staker: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `balanceOfZrxVault` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature balanceOfZrxVault()
   * @method function balanceOfZrxVault() view returns (uint256)
   */
  balanceOfZrxVault: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `getAuthorizedAddresses` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature getAuthorizedAddresses()
   * @method function getAuthorizedAddresses() view returns (address[])
   */
  getAuthorizedAddresses: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `isInCatastrophicFailure` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature isInCatastrophicFailure()
   * @method function isInCatastrophicFailure() view returns (bool)
   */
  isInCatastrophicFailure: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `owner` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `stakingProxyAddress` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature stakingProxyAddress()
   * @method function stakingProxyAddress() view returns (address)
   */
  stakingProxyAddress: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ZrxVault` contract call for the `zrxAssetProxy` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature zrxAssetProxy()
   * @method function zrxAssetProxy() view returns (address)
   */
  zrxAssetProxy: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `addAuthorizedAddress` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature addAuthorizedAddress(address)
   * @method function addAuthorizedAddress(address)
   */
  addAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `depositFrom` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature depositFrom(address,uint256)
   * @method function depositFrom(address,uint256)
   */
  depositFrom: (staker: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `enterCatastrophicFailure` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature enterCatastrophicFailure()
   * @method function enterCatastrophicFailure()
   */
  enterCatastrophicFailure: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `removeAuthorizedAddress` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature removeAuthorizedAddress(address)
   * @method function removeAuthorizedAddress(address)
   */
  removeAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `removeAuthorizedAddressAtIndex` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature removeAuthorizedAddressAtIndex(address,uint256)
   * @method function removeAuthorizedAddressAtIndex(address,uint256)
   */
  removeAuthorizedAddressAtIndex: (target: string, index: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `setStakingProxy` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature setStakingProxy(address)
   * @method function setStakingProxy(address)
   */
  setStakingProxy: (_stakingProxyAddress: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `setZrxProxy` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature setZrxProxy(address)
   * @method function setZrxProxy(address)
   */
  setZrxProxy: (_zrxProxyAddress: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `transferOwnership` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature transferOwnership(address)
   * @method function transferOwnership(address)
   */
  transferOwnership: (newOwner: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `withdrawAllFrom` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature withdrawAllFrom(address)
   * @method function withdrawAllFrom(address) returns (uint256)
   */
  withdrawAllFrom: (staker: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3ZrxVault` contract transaction for `withdrawFrom` function.
   *
   * @contract ZeroExV3ZrxVault
   * @signature withdrawFrom(address,uint256)
   * @method function withdrawFrom(address,uint256)
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

export interface ZeroExV3ZrxVaultEthersContract extends ethers.Contract {
  'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'balanceOf(address)': (staker: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'balanceOfZrxVault()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'isInCatastrophicFailure()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'stakingProxyAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'zrxAssetProxy()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'addAuthorizedAddress(address)': (
    target: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'depositFrom(address,uint256)': (
    staker: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'enterCatastrophicFailure()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'removeAuthorizedAddress(address)': (
    target: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'removeAuthorizedAddressAtIndex(address,uint256)': (
    target: string,
    index: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setStakingProxy(address)': (
    _stakingProxyAddress: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setZrxProxy(address)': (
    _zrxProxyAddress: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferOwnership(address)': (
    newOwner: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'withdrawAllFrom(address)': (staker: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'withdrawFrom(address,uint256)': (
    staker: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'balanceOf(address)': (staker: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'balanceOfZrxVault()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'isInCatastrophicFailure()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'stakingProxyAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'zrxAssetProxy()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'addAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'depositFrom(address,uint256)': (
      staker: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'enterCatastrophicFailure()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'removeAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setStakingProxy(address)': (
      _stakingProxyAddress: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setZrxProxy(address)': (
      _zrxProxyAddress: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'transferOwnership(address)': (
      newOwner: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'withdrawAllFrom(address)': (
      staker: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'withdrawFrom(address,uint256)': (
      staker: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'balanceOf(address)': (staker: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'balanceOfZrxVault()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'isInCatastrophicFailure()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'stakingProxyAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'zrxAssetProxy()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'addAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'depositFrom(address,uint256)': (
      staker: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'enterCatastrophicFailure()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'removeAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setStakingProxy(address)': (_stakingProxyAddress: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setZrxProxy(address)': (_zrxProxyAddress: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdrawAllFrom(address)': (staker: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdrawFrom(address,uint256)': (
      staker: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'addAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'depositFrom(address,uint256)': (
      staker: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'enterCatastrophicFailure()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setStakingProxy(address)': (
      _stakingProxyAddress: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setZrxProxy(address)': (_zrxProxyAddress: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdrawAllFrom(address)': (staker: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdrawFrom(address,uint256)': (
      staker: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'addAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'depositFrom(address,uint256)': (
      staker: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'enterCatastrophicFailure()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'removeAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setStakingProxy(address)': (
      _stakingProxyAddress: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setZrxProxy(address)': (
      _zrxProxyAddress: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferOwnership(address)': (
      newOwner: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdrawAllFrom(address)': (staker: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'withdrawFrom(address,uint256)': (
      staker: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
