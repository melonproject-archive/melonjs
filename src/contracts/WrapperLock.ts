import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class WrapperLock extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `WrapperLock` contract call for the `name` function.
   *
   * @contract WrapperLock
   * @signature function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLock` contract call for the `originalToken` function.
   *
   * @contract WrapperLock
   * @signature function originalToken() view returns (address)
   */
  originalToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLock` contract call for the `totalSupply` function.
   *
   * @contract WrapperLock
   * @signature function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLock` contract call for the `balances` function.
   *
   * @contract WrapperLock
   * @signature function balances(address) view returns (uint256)
   */
  balances: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLock` contract call for the `decimals` function.
   *
   * @contract WrapperLock
   * @signature function decimals() view returns (uint256)
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLock` contract call for the `TRANSFER_PROXY_VEFX` function.
   *
   * @contract WrapperLock
   * @signature function TRANSFER_PROXY_VEFX() view returns (address)
   */
  TRANSFER_PROXY_VEFX: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLock` contract call for the `balanceOf` function.
   *
   * @contract WrapperLock
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLock` contract call for the `keccak` function.
   *
   * @contract WrapperLock
   * @signature function keccak(address,address,uint256) view returns (bytes32)
   */
  keccak: (
    _sender: string,
    _wrapper: string,
    _validTill: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<string>;

  /**
   * `WrapperLock` contract call for the `isSigner` function.
   *
   * @contract WrapperLock
   * @signature function isSigner(address) view returns (bool)
   */
  isSigner: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `WrapperLock` contract call for the `isValidSignature` function.
   *
   * @contract WrapperLock
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
   * `WrapperLock` contract call for the `owner` function.
   *
   * @contract WrapperLock
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLock` contract call for the `symbol` function.
   *
   * @contract WrapperLock
   * @signature function symbol() view returns (string)
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLock` contract call for the `erc20old` function.
   *
   * @contract WrapperLock
   * @signature function erc20old() view returns (bool)
   */
  erc20old: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `WrapperLock` contract call for the `TRANSFER_PROXY_V2` function.
   *
   * @contract WrapperLock
   * @signature function TRANSFER_PROXY_V2() view returns (address)
   */
  TRANSFER_PROXY_V2: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WrapperLock` contract call for the `depositLock` function.
   *
   * @contract WrapperLock
   * @signature function depositLock(address) view returns (uint256)
   */
  depositLock: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLock` contract call for the `allowance` function.
   *
   * @contract WrapperLock
   * @signature function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WrapperLock` contract transaction for `withdrawBalanceDifference` function.
   *
   * @contract WrapperLock
   * @signature function withdrawBalanceDifference() returns (bool)
   */
  withdrawBalanceDifference: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperLock` contract transaction for `withdraw` function.
   *
   * @contract WrapperLock
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
   * `WrapperLock` contract transaction for `transferFrom` function.
   *
   * @contract WrapperLock
   * @signature function transferFrom(address,address,uint256)
   */
  transferFrom: (_from: string, _to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperLock` contract transaction for `transfer` function.
   *
   * @contract WrapperLock
   * @signature function transfer(address,uint256) returns (bool)
   */
  transfer: (_to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperLock` contract transaction for `withdrawDifferentToken` function.
   *
   * @contract WrapperLock
   * @signature function withdrawDifferentToken(address,bool) returns (bool)
   */
  withdrawDifferentToken: (_differentToken: string, _erc20old: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperLock` contract transaction for `deposit` function.
   *
   * @contract WrapperLock
   * @signature function deposit(uint256,uint256) returns (bool)
   */
  deposit: (_value: ethers.BigNumberish, _forTime: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperLock` contract transaction for `addSigner` function.
   *
   * @contract WrapperLock
   * @signature function addSigner(address)
   */
  addSigner: (_newSigner: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WrapperLock` contract transaction for `transferOwnership` function.
   *
   * @contract WrapperLock
   * @signature function transferOwnership(address)
   */
  transferOwnership: (newOwner: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function name() view returns (string)',
    'function withdrawBalanceDifference() returns (bool success)',
    'function originalToken() view returns (address)',
    'function totalSupply() view returns (uint256)',
    'function withdraw(uint256 _value, uint8 v, bytes32 r, bytes32 s, uint256 signatureValidUntilBlock) returns (bool success)',
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
    'function erc20old() view returns (bool)',
    'function transfer(address _to, uint256 _value) returns (bool)',
    'function TRANSFER_PROXY_V2() view returns (address)',
    'function depositLock(address) view returns (uint256)',
    'function withdrawDifferentToken(address _differentToken, bool _erc20old) returns (bool)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function deposit(uint256 _value, uint256 _forTime) returns (bool success)',
    'function addSigner(address _newSigner)',
    'function transferOwnership(address newOwner)',
    'constructor(address _originalToken, string _name, string _symbol, uint256 _decimals, bool _erc20old, address _proxyEfx, address _proxyV2)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
  ];
}
