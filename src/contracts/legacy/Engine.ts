import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../../Contract';

/**
 * `Engine` contract
 *
 * Liquidity contract and token sink
 */
export class EngineContract extends Contract {
  public readonly ethers: EngineEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Engine` contract call for `MLN_DECIMALS` function.
   *
   * ```solidity
   * function MLN_DECIMALS() view returns (uint256)
   * ```
   */
  MLN_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `amguPrice` function.
   *
   * ```solidity
   * function amguPrice() view returns (uint256)
   * ```
   */
  amguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `enginePrice` function.
   *
   * ```solidity
   * function enginePrice() view returns (uint256)
   * ```
   */
  enginePrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `ethPayoutForMlnAmount` function.
   *
   * ```solidity
   * function ethPayoutForMlnAmount(uint256) view returns (uint256)
   * ```
   */
  ethPayoutForMlnAmount: (
    mlnAmount: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `frozenEther` function.
   *
   * ```solidity
   * function frozenEther() view returns (uint256)
   * ```
   */
  frozenEther: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `getAmguPrice` function.
   *
   * ```solidity
   * function getAmguPrice() view returns (uint256)
   * ```
   */
  getAmguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `lastThaw` function.
   *
   * ```solidity
   * function lastThaw() view returns (uint256)
   * ```
   */
  lastThaw: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `liquidEther` function.
   *
   * ```solidity
   * function liquidEther() view returns (uint256)
   * ```
   */
  liquidEther: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `mlnToken` function.
   *
   * Get MLN from the registry
   *
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Engine` contract call for `premiumPercent` function.
   *
   * ```solidity
   * function premiumPercent() view returns (uint256)
   * ```
   */
  premiumPercent: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `priceSource` function.
   *
   * Get PriceSource from the registry
   *
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Engine` contract call for `registry` function.
   *
   * ```solidity
   * function registry() view returns (address)
   * ```
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Engine` contract call for `thawingDelay` function.
   *
   * ```solidity
   * function thawingDelay() view returns (uint256)
   * ```
   */
  thawingDelay: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `totalAmguConsumed` function.
   *
   * ```solidity
   * function totalAmguConsumed() view returns (uint256)
   * ```
   */
  totalAmguConsumed: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `totalEtherConsumed` function.
   *
   * ```solidity
   * function totalEtherConsumed() view returns (uint256)
   * ```
   */
  totalEtherConsumed: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `totalMlnBurned` function.
   *
   * ```solidity
   * function totalMlnBurned() view returns (uint256)
   * ```
   */
  totalMlnBurned: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for `payAmguInEther` function.
   *
   * ```solidity
   * function payAmguInEther() payable
   * ```
   */
  payAmguInEther: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * MLN must be approved first
   *
   * ```solidity
   * function sellAndBurnMln(uint256)
   * ```
   */
  sellAndBurnMln: (mlnAmount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Engine` contract call for `setAmguPrice` function.
   *
   * set price of AMGU in MLN (base units)only callable by MGM
   *
   * ```solidity
   * function setAmguPrice(uint256)
   * ```
   */
  setAmguPrice: (_price: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Engine` contract call for `setRegistry` function.
   *
   * only callable by MTC
   *
   * ```solidity
   * function setRegistry(address)
   * ```
   */
  setRegistry: (_registry: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * Move frozen ether to liquid pool after delay
   *
   * Delay only restarts when this function is called
   *
   * ```solidity
   * function thaw()
   * ```
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

export interface EngineEthersContract extends ethers.Contract {
  'MLN_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'amguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'enginePrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'ethPayoutForMlnAmount(uint256)': (
    mlnAmount: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'frozenEther()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getAmguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'lastThaw()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'liquidEther()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'premiumPercent()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'thawingDelay()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'totalAmguConsumed()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'totalEtherConsumed()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'totalMlnBurned()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
  'sellAndBurnMln(uint256)': (
    mlnAmount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setAmguPrice(uint256)': (
    _price: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setRegistry(address)': (
    _registry: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'thaw()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'MLN_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'amguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'enginePrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'ethPayoutForMlnAmount(uint256)': (
      mlnAmount: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'frozenEther()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAmguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'lastThaw()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'liquidEther()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'premiumPercent()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'thawingDelay()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'totalAmguConsumed()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'totalEtherConsumed()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'totalMlnBurned()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
    'sellAndBurnMln(uint256)': (
      mlnAmount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setAmguPrice(uint256)': (
      _price: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setRegistry(address)': (
      _registry: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'thaw()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'MLN_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'amguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'enginePrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'ethPayoutForMlnAmount(uint256)': (
      mlnAmount: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'frozenEther()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAmguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'lastThaw()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'liquidEther()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'premiumPercent()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'thawingDelay()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'totalAmguConsumed()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'totalEtherConsumed()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'totalMlnBurned()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
    'sellAndBurnMln(uint256)': (mlnAmount: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'setAmguPrice(uint256)': (_price: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'setRegistry(address)': (_registry: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'thaw()': ($$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'sellAndBurnMln(uint256)': (
      mlnAmount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAmguPrice(uint256)': (_price: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setRegistry(address)': (_registry: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'thaw()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'sellAndBurnMln(uint256)': (
      mlnAmount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAmguPrice(uint256)': (
      _price: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setRegistry(address)': (_registry: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'thaw()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
