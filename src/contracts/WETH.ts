import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class WETH extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `WETH` contract call for the `allowance` function.
   *
   * @contract WETH
   * @signature function allowance(address,address) view returns (uint256)
   */
  allowance: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WETH` contract call for the `balanceOf` function.
   *
   * @contract WETH
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WETH` contract call for the `decimals` function.
   *
   * @contract WETH
   * @signature function decimals() view returns (uint8)
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `WETH` contract call for the `name` function.
   *
   * @contract WETH
   * @signature function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WETH` contract call for the `symbol` function.
   *
   * @contract WETH
   * @signature function symbol() view returns (string)
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WETH` contract call for the `totalSupply` function.
   *
   * @contract WETH
   * @signature function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WETH` contract transaction for `approve` function.
   *
   * @contract WETH
   * @signature function approve(address,uint256) returns (bool)
   */
  approve: (guy: string, wad: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WETH` contract transaction for `deposit` function.
   *
   * @contract WETH
   * @signature function deposit() payable
   */
  deposit: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `WETH` contract transaction for `transfer` function.
   *
   * @contract WETH
   * @signature function transfer(address,uint256) returns (bool)
   */
  transfer: (dst: string, wad: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WETH` contract transaction for `transferFrom` function.
   *
   * @contract WETH
   * @signature function transferFrom(address,address,uint256) returns (bool)
   */
  transferFrom: (src: string, dst: string, wad: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WETH` contract transaction for `withdraw` function.
   *
   * @contract WETH
   * @signature function withdraw(uint256)
   */
  withdraw: (wad: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event Approval(address indexed src, address indexed guy, uint256 wad)',
    'event Deposit(address indexed dst, uint256 wad)',
    'event Transfer(address indexed src, address indexed dst, uint256 wad)',
    'event Withdrawal(address indexed src, uint256 wad)',
    'function allowance(address, address) view returns (uint256)',
    'function approve(address guy, uint256 wad) returns (bool)',
    'function balanceOf(address) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function deposit() payable',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address dst, uint256 wad) returns (bool)',
    'function transferFrom(address src, address dst, uint256 wad) returns (bool)',
    'function withdraw(uint256 wad)',
  ];
}
