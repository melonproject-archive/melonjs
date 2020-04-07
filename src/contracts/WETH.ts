import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class WETH extends Contract {
  public readonly ethers: WETHEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `WETH` contract call for the `allowance` function.
   *
   * @contract WETH
   * @signature allowance(address,address)
   * @method function allowance(address,address) view returns (uint256)
   */
  allowance: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WETH` contract call for the `balanceOf` function.
   *
   * @contract WETH
   * @signature balanceOf(address)
   * @method function balanceOf(address) view returns (uint256)
   */
  balanceOf: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WETH` contract call for the `decimals` function.
   *
   * @contract WETH
   * @signature decimals()
   * @method function decimals() view returns (uint8)
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `WETH` contract call for the `name` function.
   *
   * @contract WETH
   * @signature name()
   * @method function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WETH` contract call for the `symbol` function.
   *
   * @contract WETH
   * @signature symbol()
   * @method function symbol() view returns (string)
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WETH` contract call for the `totalSupply` function.
   *
   * @contract WETH
   * @signature totalSupply()
   * @method function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WETH` contract transaction for `approve` function.
   *
   * @contract WETH
   * @signature approve(address,uint256)
   * @method function approve(address,uint256) returns (bool)
   */
  approve: (guy: string, wad: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WETH` contract transaction for `deposit` function.
   *
   * @contract WETH
   * @signature deposit()
   * @method function deposit() payable
   */
  deposit: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `WETH` contract transaction for `transfer` function.
   *
   * @contract WETH
   * @signature transfer(address,uint256)
   * @method function transfer(address,uint256) returns (bool)
   */
  transfer: (dst: string, wad: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WETH` contract transaction for `transferFrom` function.
   *
   * @contract WETH
   * @signature transferFrom(address,address,uint256)
   * @method function transferFrom(address,address,uint256) returns (bool)
   */
  transferFrom: (src: string, dst: string, wad: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WETH` contract transaction for `withdraw` function.
   *
   * @contract WETH
   * @signature withdraw(uint256)
   * @method function withdraw(uint256)
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

export interface WETHEthersContract extends ethers.Contract {
  'allowance(address,address)': (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'balanceOf(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'approve(address,uint256)': (
    guy: string,
    wad: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'deposit()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;
  'transfer(address,uint256)': (
    dst: string,
    wad: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferFrom(address,address,uint256)': (
    src: string,
    dst: string,
    wad: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'withdraw(uint256)': (
    wad: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  callStatic: {
    'allowance(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'balanceOf(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'approve(address,uint256)': (
      guy: string,
      wad: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'deposit()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
    'transfer(address,uint256)': (
      dst: string,
      wad: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'transferFrom(address,address,uint256)': (
      src: string,
      dst: string,
      wad: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'withdraw(uint256)': (wad: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'approve(address,uint256)': (
      guy: string,
      wad: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'deposit()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'transfer(address,uint256)': (
      dst: string,
      wad: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferFrom(address,address,uint256)': (
      src: string,
      dst: string,
      wad: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'withdraw(uint256)': (wad: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'approve(address,uint256)': (
      guy: string,
      wad: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'deposit()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'transfer(address,uint256)': (
      dst: string,
      wad: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferFrom(address,address,uint256)': (
      src: string,
      dst: string,
      wad: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdraw(uint256)': (
      wad: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
