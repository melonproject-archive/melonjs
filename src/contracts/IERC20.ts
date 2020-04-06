import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IERC20 extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IERC20` contract call for the `allowance` function.
   *
   * @contract IERC20
   * @signature function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IERC20` contract call for the `balanceOf` function.
   *
   * @contract IERC20
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IERC20` contract call for the `totalSupply` function.
   *
   * @contract IERC20
   * @signature function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IERC20` contract transaction for `approve` function.
   *
   * @contract IERC20
   * @signature function approve(address,uint256) returns (bool)
   */
  approve: (_spender: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IERC20` contract transaction for `transfer` function.
   *
   * @contract IERC20
   * @signature function transfer(address,uint256) returns (bool)
   */
  transfer: (_to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IERC20` contract transaction for `transferFrom` function.
   *
   * @contract IERC20
   * @signature function transferFrom(address,address,uint256) returns (bool)
   */
  transferFrom: (_from: string, _to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function approve(address _spender, uint256 _value) returns (bool)',
    'function balanceOf(address _who) view returns (uint256)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address _to, uint256 _value) returns (bool)',
    'function transferFrom(address _from, address _to, uint256 _value) returns (bool)',
  ];
}
