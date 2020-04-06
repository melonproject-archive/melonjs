import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Engine extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Engine` contract call for the `MLN_DECIMALS` function.
   *
   * @contract Engine
   * @signature function MLN_DECIMALS() view returns (uint256)
   */
  MLN_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `amguPrice` function.
   *
   * @contract Engine
   * @signature function amguPrice() view returns (uint256)
   */
  amguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `enginePrice` function.
   *
   * @contract Engine
   * @signature function enginePrice() view returns (uint256)
   */
  enginePrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `ethPayoutForMlnAmount` function.
   *
   * @contract Engine
   * @signature function ethPayoutForMlnAmount(uint256) view returns (uint256)
   */
  ethPayoutForMlnAmount: (
    mlnAmount: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `frozenEther` function.
   *
   * @contract Engine
   * @signature function frozenEther() view returns (uint256)
   */
  frozenEther: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `getAmguPrice` function.
   *
   * @contract Engine
   * @signature function getAmguPrice() view returns (uint256)
   */
  getAmguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `lastThaw` function.
   *
   * @contract Engine
   * @signature function lastThaw() view returns (uint256)
   */
  lastThaw: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `liquidEther` function.
   *
   * @contract Engine
   * @signature function liquidEther() view returns (uint256)
   */
  liquidEther: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `mlnToken` function.
   *
   * @contract Engine
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Engine` contract call for the `premiumPercent` function.
   *
   * @contract Engine
   * @signature function premiumPercent() view returns (uint256)
   */
  premiumPercent: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `priceSource` function.
   *
   * @contract Engine
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Engine` contract call for the `registry` function.
   *
   * @contract Engine
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Engine` contract call for the `thawingDelay` function.
   *
   * @contract Engine
   * @signature function thawingDelay() view returns (uint256)
   */
  thawingDelay: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `totalAmguConsumed` function.
   *
   * @contract Engine
   * @signature function totalAmguConsumed() view returns (uint256)
   */
  totalAmguConsumed: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `totalEtherConsumed` function.
   *
   * @contract Engine
   * @signature function totalEtherConsumed() view returns (uint256)
   */
  totalEtherConsumed: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `totalMlnBurned` function.
   *
   * @contract Engine
   * @signature function totalMlnBurned() view returns (uint256)
   */
  totalMlnBurned: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract transaction for `payAmguInEther` function.
   *
   * @contract Engine
   * @signature function payAmguInEther() payable
   */
  payAmguInEther: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Engine` contract transaction for `sellAndBurnMln` function.
   *
   * @contract Engine
   * @signature function sellAndBurnMln(uint256)
   */
  sellAndBurnMln: (mlnAmount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Engine` contract transaction for `setAmguPrice` function.
   *
   * @contract Engine
   * @signature function setAmguPrice(uint256)
   */
  setAmguPrice: (_price: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Engine` contract transaction for `setRegistry` function.
   *
   * @contract Engine
   * @signature function setRegistry(address)
   */
  setRegistry: (_registry: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Engine` contract transaction for `thaw` function.
   *
   * @contract Engine
   * @signature function thaw()
   */
  thaw: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
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
}
