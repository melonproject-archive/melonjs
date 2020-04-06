import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class WrapperLockEth extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `WrapperLockEth` contract call for the `name` function.
   *
   * @contract WrapperLockEth
   * @signature function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLockEth` contract call for the `originalToken` function.
   *
   * @contract WrapperLockEth
   * @signature function originalToken() view returns (address)
   */
  originalToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLockEth` contract call for the `totalSupply` function.
   *
   * @contract WrapperLockEth
   * @signature function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLockEth` contract call for the `balances` function.
   *
   * @contract WrapperLockEth
   * @signature function balances(address) view returns (uint256)
   */
  balances: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLockEth` contract call for the `decimals` function.
   *
   * @contract WrapperLockEth
   * @signature function decimals() view returns (uint256)
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLockEth` contract call for the `TRANSFER_PROXY_VEFX` function.
   *
   * @contract WrapperLockEth
   * @signature function TRANSFER_PROXY_VEFX() view returns (address)
   */
  TRANSFER_PROXY_VEFX: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLockEth` contract call for the `balanceOf` function.
   *
   * @contract WrapperLockEth
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLockEth` contract call for the `keccak` function.
   *
   * @contract WrapperLockEth
   * @signature function keccak(address,address,uint256) view returns (bytes32)
   */
  keccak: (
    _sender: string,
    _wrapper: string,
    _validTill: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<string>;

  /**
   * `WrapperLockEth` contract call for the `isSigner` function.
   *
   * @contract WrapperLockEth
   * @signature function isSigner(address) view returns (bool)
   */
  isSigner: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `WrapperLockEth` contract call for the `isValidSignature` function.
   *
   * @contract WrapperLockEth
   * @signature function isValidSignature(bytes32,uint8,bytes32,bytes32) view returns (bool)
   */
  isValidSignature: (
    hash: string | ethers.utils.BytesLike,
    v: ethers.BigNumberish,
    r: string | ethers.utils.BytesLike,
    s: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `WrapperLockEth` contract call for the `owner` function.
   *
   * @contract WrapperLockEth
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLockEth` contract call for the `symbol` function.
   *
   * @contract WrapperLockEth
   * @signature function symbol() view returns (string)
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLockEth` contract call for the `TRANSFER_PROXY_V2` function.
   *
   * @contract WrapperLockEth
   * @signature function TRANSFER_PROXY_V2() view returns (address)
   */
  TRANSFER_PROXY_V2: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLockEth` contract call for the `depositLock` function.
   *
   * @contract WrapperLockEth
   * @signature function depositLock(address) view returns (uint256)
   */
  depositLock: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLockEth` contract call for the `allowance` function.
   *
   * @contract WrapperLockEth
   * @signature function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLockEth` contract transaction for `withdraw` function.
   *
   * @contract WrapperLockEth
   * @signature function withdraw(uint256,uint8,bytes32,bytes32,uint256) returns (bool)
   */
  withdraw: (
    _value: ethers.BigNumberish,
    v: ethers.BigNumberish,
    r: string | ethers.utils.BytesLike,
    s: string | ethers.utils.BytesLike,
    signatureValidUntilBlock: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperLockEth` contract transaction for `transferFrom` function.
   *
   * @contract WrapperLockEth
   * @signature function transferFrom(address,address,uint256)
   */
  transferFrom: (_from: string, _to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperLockEth` contract transaction for `transfer` function.
   *
   * @contract WrapperLockEth
   * @signature function transfer(address,uint256) returns (bool)
   */
  transfer: (_to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperLockEth` contract transaction for `withdrawDifferentToken` function.
   *
   * @contract WrapperLockEth
   * @signature function withdrawDifferentToken(address,bool) returns (bool)
   */
  withdrawDifferentToken: (_token: string, _erc20old: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperLockEth` contract transaction for `deposit` function.
   *
   * @contract WrapperLockEth
   * @signature function deposit(uint256,uint256) payable returns (bool)
   */
  deposit: (_value: ethers.BigNumberish, _forTime: ethers.BigNumberish) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `WrapperLockEth` contract transaction for `addSigner` function.
   *
   * @contract WrapperLockEth
   * @signature function addSigner(address)
   */
  addSigner: (_newSigner: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperLockEth` contract transaction for `transferOwnership` function.
   *
   * @contract WrapperLockEth
   * @signature function transferOwnership(address)
   */
  transferOwnership: (newOwner: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function name() view returns (string)',
    'function originalToken() view returns (address)',
    'function totalSupply() view returns (uint256)',
    'function withdraw(uint256 _value, uint8 v, bytes32 r, bytes32 s, uint256 signatureValidUntilBlock) returns (bool)',
    'function transferFrom(address _from, address _to, uint256 _value)',
    'function balances(address) view returns (uint256)',
    'function decimals() view returns (uint256)',
    'function TRANSFER_PROXY_VEFX() view returns (address)',
    'function balanceOf(address _owner) view returns (uint256)',
    'function keccak(address _sender, address _wrapper, uint256 _validTill) view returns (bytes32)',
    'function isSigner(address) view returns (bool)',
    'function isValidSignature(bytes32 hash, uint8 v, bytes32 r, bytes32 s) view returns (bool)',
    'function owner() view returns (address)',
    'function symbol() view returns (string)',
    'function transfer(address _to, uint256 _value) returns (bool)',
    'function TRANSFER_PROXY_V2() view returns (address)',
    'function depositLock(address) view returns (uint256)',
    'function withdrawDifferentToken(address _token, bool _erc20old) returns (bool)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function deposit(uint256 _value, uint256 _forTime) payable returns (bool success)',
    'function addSigner(address _newSigner)',
    'function transferOwnership(address newOwner)',
    'constructor(string _name, string _symbol, uint256 _decimals, address _proxyEfx, address _proxyV2)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
  ];
}
