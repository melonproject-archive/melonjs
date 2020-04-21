import { ethers } from 'ethers';
import { Contract, TransactionWrapper, DeploymentTransactionWrapper, AddressLike } from './../..';

export class StandardToken extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function approve(address _spender, uint256 _value) returns (bool)',
    'function balanceOf(address _owner) view returns (uint256)',
    'function decreaseApproval(address _spender, uint256 _subtractedValue) returns (bool)',
    'function increaseApproval(address _spender, uint256 _addedValue) returns (bool)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address _to, uint256 _value) returns (bool)',
    'function transferFrom(address _from, address _to, uint256 _value) returns (bool)',
  ];

  /**
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(bytecode: string, signer: ethers.Signer) {
    return new DeploymentTransactionWrapper(this, bytecode, signer);
  }

  /**
   * ```solidity
   * function allowance(address,address) view returns (uint256)
   * ```
   *
   */
  allowance: (
    _owner: AddressLike,
    _spender: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function balanceOf(address) view returns (uint256)
   * ```
   *
   */
  balanceOf: (_owner: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function totalSupply() view returns (uint256)
   * ```
   *
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function approve(address,uint256) returns (bool)
   * ```
   *
   */
  approve: (_spender: AddressLike, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function decreaseApproval(address,uint256) returns (bool)
   * ```
   *
   */
  decreaseApproval: (
    _spender: AddressLike,
    _subtractedValue: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function increaseApproval(address,uint256) returns (bool)
   * ```
   *
   */
  increaseApproval: (_spender: AddressLike, _addedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function transfer(address,uint256) returns (bool)
   * ```
   *
   */
  transfer: (_to: AddressLike, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function transferFrom(address,address,uint256) returns (bool)
   * ```
   *
   */
  transferFrom: (
    _from: AddressLike,
    _to: AddressLike,
    _value: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;
}
