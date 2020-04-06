import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class StandardToken extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `StandardToken` contract call for the `allowance` function.
   *
   * @contract StandardToken
   * @signature function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `StandardToken` contract call for the `balanceOf` function.
   *
   * @contract StandardToken
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `StandardToken` contract call for the `totalSupply` function.
   *
   * @contract StandardToken
   * @signature function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `StandardToken` contract transaction for `approve` function.
   *
   * @contract StandardToken
   * @signature function approve(address,uint256) returns (bool)
   */
  approve: (_spender: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `StandardToken` contract transaction for `decreaseApproval` function.
   *
   * @contract StandardToken
   * @signature function decreaseApproval(address,uint256) returns (bool)
   */
  decreaseApproval: (_spender: string, _subtractedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `StandardToken` contract transaction for `increaseApproval` function.
   *
   * @contract StandardToken
   * @signature function increaseApproval(address,uint256) returns (bool)
   */
  increaseApproval: (_spender: string, _addedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `StandardToken` contract transaction for `transfer` function.
   *
   * @contract StandardToken
   * @signature function transfer(address,uint256) returns (bool)
   */
  transfer: (_to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `StandardToken` contract transaction for `transferFrom` function.
   *
   * @contract StandardToken
   * @signature function transferFrom(address,address,uint256) returns (bool)
   */
  transferFrom: (_from: string, _to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
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
}
