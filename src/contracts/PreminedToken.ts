import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class PreminedToken extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `PreminedToken` contract call for the `allowance` function.
   *
   * @contract PreminedToken
   * @signature function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PreminedToken` contract call for the `balanceOf` function.
   *
   * @contract PreminedToken
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PreminedToken` contract call for the `decimals` function.
   *
   * @contract PreminedToken
   * @signature function decimals() view returns (uint8)
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `PreminedToken` contract call for the `name` function.
   *
   * @contract PreminedToken
   * @signature function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PreminedToken` contract call for the `symbol` function.
   *
   * @contract PreminedToken
   * @signature function symbol() view returns (string)
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PreminedToken` contract call for the `totalSupply` function.
   *
   * @contract PreminedToken
   * @signature function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PreminedToken` contract transaction for `approve` function.
   *
   * @contract PreminedToken
   * @signature function approve(address,uint256) returns (bool)
   */
  approve: (_spender: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PreminedToken` contract transaction for `decreaseApproval` function.
   *
   * @contract PreminedToken
   * @signature function decreaseApproval(address,uint256) returns (bool)
   */
  decreaseApproval: (_spender: string, _subtractedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PreminedToken` contract transaction for `increaseApproval` function.
   *
   * @contract PreminedToken
   * @signature function increaseApproval(address,uint256) returns (bool)
   */
  increaseApproval: (_spender: string, _addedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PreminedToken` contract transaction for `transfer` function.
   *
   * @contract PreminedToken
   * @signature function transfer(address,uint256) returns (bool)
   */
  transfer: (_to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PreminedToken` contract transaction for `transferFrom` function.
   *
   * @contract PreminedToken
   * @signature function transferFrom(address,address,uint256) returns (bool)
   */
  transferFrom: (_from: string, _to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(string _symbol, uint8 _decimals, string _name)',
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function approve(address _spender, uint256 _value) returns (bool)',
    'function balanceOf(address _owner) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function decreaseApproval(address _spender, uint256 _subtractedValue) returns (bool)',
    'function increaseApproval(address _spender, uint256 _addedValue) returns (bool)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address _to, uint256 _value) returns (bool)',
    'function transferFrom(address _from, address _to, uint256 _value) returns (bool)',
  ];
}
