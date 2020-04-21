import { ethers } from 'ethers';
import { Contract, TransactionWrapper, AddressLike, DeploymentTransactionWrapper } from './..';

export class Engine extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(uint256 _delay, address _registry)',
    'event AmguPaid(uint256 amount)',
    'event Burn(uint256 amount)',
    'event RegistryChange(address registry)',
    'event SetAmguPrice(uint256 amguPrice)',
    'event Thaw(uint256 amount)',
    'function MLN_DECIMALS() view returns (uint256)',
    'function amguPrice() view returns (uint256)',
    'function enginePrice() view returns (uint256)',
    'function ethPayoutForMlnAmount(uint256 mlnAmount) view returns (uint256)',
    'function frozenEther() view returns (uint256)',
    'function getAmguPrice() view returns (uint256)',
    'function lastThaw() view returns (uint256)',
    'function liquidEther() view returns (uint256)',
    'function mlnToken() view returns (address)',
    'function payAmguInEther() payable',
    'function premiumPercent() view returns (uint256)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function sellAndBurnMln(uint256 mlnAmount)',
    'function setAmguPrice(uint256 _price)',
    'function setRegistry(address _registry)',
    'function thaw()',
    'function thawingDelay() view returns (uint256)',
    'function totalAmguConsumed() view returns (uint256)',
    'function totalEtherConsumed() view returns (uint256)',
    'function totalMlnBurned() view returns (uint256)',
  ];

  /**
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(bytecode: string, signer: ethers.Signer, _delay: ethers.BigNumber, _registry: AddressLike) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [_delay, _registry]);
  }

  /**
   * ```solidity
   * function MLN_DECIMALS() view returns (uint256)
   * ```
   *
   */
  MLN_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function amguPrice() view returns (uint256)
   * ```
   *
   */
  amguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function enginePrice() view returns (uint256)
   * ```
   *
   */
  enginePrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function ethPayoutForMlnAmount(uint256) view returns (uint256)
   * ```
   *
   */
  ethPayoutForMlnAmount: (
    mlnAmount: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function frozenEther() view returns (uint256)
   * ```
   *
   */
  frozenEther: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getAmguPrice() view returns (uint256)
   * ```
   *
   */
  getAmguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function lastThaw() view returns (uint256)
   * ```
   *
   */
  lastThaw: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function liquidEther() view returns (uint256)
   * ```
   *
   */
  liquidEther: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   *
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function premiumPercent() view returns (uint256)
   * ```
   *
   */
  premiumPercent: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   *
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function registry() view returns (address)
   * ```
   *
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function thawingDelay() view returns (uint256)
   * ```
   *
   */
  thawingDelay: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function totalAmguConsumed() view returns (uint256)
   * ```
   *
   */
  totalAmguConsumed: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function totalEtherConsumed() view returns (uint256)
   * ```
   *
   */
  totalEtherConsumed: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function totalMlnBurned() view returns (uint256)
   * ```
   *
   */
  totalMlnBurned: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function payAmguInEther() payable
   * ```
   *
   */
  payAmguInEther: () => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function sellAndBurnMln(uint256)
   * ```
   *
   */
  sellAndBurnMln: (mlnAmount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setAmguPrice(uint256)
   * ```
   *
   */
  setAmguPrice: (_price: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setRegistry(address)
   * ```
   *
   */
  setRegistry: (_registry: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function thaw()
   * ```
   *
   */
  thaw: () => TransactionWrapper<ethers.Overrides>;
}
