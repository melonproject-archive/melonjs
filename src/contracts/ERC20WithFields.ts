import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ERC20WithFields extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ERC20WithFields` contract call for the `allowance` function.
   *
   * @contract ERC20WithFields
   * @signature function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ERC20WithFields` contract call for the `balanceOf` function.
   *
   * @contract ERC20WithFields
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ERC20WithFields` contract call for the `decimals` function.
   *
   * @contract ERC20WithFields
   * @signature function decimals() view returns (uint8)
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `ERC20WithFields` contract call for the `name` function.
   *
   * @contract ERC20WithFields
   * @signature function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ERC20WithFields` contract call for the `symbol` function.
   *
   * @contract ERC20WithFields
   * @signature function symbol() view returns (string)
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ERC20WithFields` contract call for the `totalSupply` function.
   *
   * @contract ERC20WithFields
   * @signature function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ERC20WithFields` contract transaction for `approve` function.
   *
   * @contract ERC20WithFields
   * @signature function approve(address,uint256) returns (bool)
   */
  approve: (_spender: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ERC20WithFields` contract transaction for `transfer` function.
   *
   * @contract ERC20WithFields
   * @signature function transfer(address,uint256) returns (bool)
   */
  transfer: (_to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ERC20WithFields` contract transaction for `transferFrom` function.
   *
   * @contract ERC20WithFields
   * @signature function transferFrom(address,address,uint256) returns (bool)
   */
  transferFrom: (_from: string, _to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function approve(address _spender, uint256 _value) returns (bool)',
    'function balanceOf(address _who) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address _to, uint256 _value) returns (bool)',
    'function transferFrom(address _from, address _to, uint256 _value) returns (bool)',
  ];
}
