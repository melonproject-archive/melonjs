import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Engine extends Contract {
  public readonly ethers: EngineEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Engine` contract call for the `MLN_DECIMALS` function.
   *
   * @contract Engine
   * @signature MLN_DECIMALS()
   * @method function MLN_DECIMALS() view returns (uint256)
   */
  MLN_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `amguPrice` function.
   *
   * @contract Engine
   * @signature amguPrice()
   * @method function amguPrice() view returns (uint256)
   */
  amguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `enginePrice` function.
   *
   * @contract Engine
   * @signature enginePrice()
   * @method function enginePrice() view returns (uint256)
   */
  enginePrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `ethPayoutForMlnAmount` function.
   *
   * @contract Engine
   * @signature ethPayoutForMlnAmount(uint256)
   * @method function ethPayoutForMlnAmount(uint256) view returns (uint256)
   */
  ethPayoutForMlnAmount: (
    _mlnAmount: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `frozenEther` function.
   *
   * @contract Engine
   * @signature frozenEther()
   * @method function frozenEther() view returns (uint256)
   */
  frozenEther: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `getAmguPrice` function.
   *
   * @contract Engine
   * @signature getAmguPrice()
   * @method function getAmguPrice() view returns (uint256)
   */
  getAmguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `lastThaw` function.
   *
   * @contract Engine
   * @signature lastThaw()
   * @method function lastThaw() view returns (uint256)
   */
  lastThaw: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `liquidEther` function.
   *
   * @contract Engine
   * @signature liquidEther()
   * @method function liquidEther() view returns (uint256)
   */
  liquidEther: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `mlnToken` function.
   *
   * @contract Engine
   * @signature mlnToken()
   * @method function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Engine` contract call for the `premiumPercent` function.
   *
   * @contract Engine
   * @signature premiumPercent()
   * @method function premiumPercent() view returns (uint256)
   */
  premiumPercent: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `priceSource` function.
   *
   * @contract Engine
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Engine` contract call for the `registry` function.
   *
   * @contract Engine
   * @signature registry()
   * @method function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Engine` contract call for the `thawingDelay` function.
   *
   * @contract Engine
   * @signature thawingDelay()
   * @method function thawingDelay() view returns (uint256)
   */
  thawingDelay: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `totalAmguConsumed` function.
   *
   * @contract Engine
   * @signature totalAmguConsumed()
   * @method function totalAmguConsumed() view returns (uint256)
   */
  totalAmguConsumed: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `totalEtherConsumed` function.
   *
   * @contract Engine
   * @signature totalEtherConsumed()
   * @method function totalEtherConsumed() view returns (uint256)
   */
  totalEtherConsumed: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract call for the `totalMlnBurned` function.
   *
   * @contract Engine
   * @signature totalMlnBurned()
   * @method function totalMlnBurned() view returns (uint256)
   */
  totalMlnBurned: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Engine` contract transaction for `payAmguInEther` function.
   *
   * @contract Engine
   * @signature payAmguInEther()
   * @method function payAmguInEther() payable
   */
  payAmguInEther: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Engine` contract transaction for `sellAndBurnMln` function.
   *
   * @contract Engine
   * @signature sellAndBurnMln(uint256)
   * @method function sellAndBurnMln(uint256)
   */
  sellAndBurnMln: (_mlnAmount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Engine` contract transaction for `setAmguPrice` function.
   *
   * @contract Engine
   * @signature setAmguPrice(uint256)
   * @method function setAmguPrice(uint256)
   */
  setAmguPrice: (_price: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Engine` contract transaction for `setRegistry` function.
   *
   * @contract Engine
   * @signature setRegistry(address)
   * @method function setRegistry(address)
   */
  setRegistry: (_registry: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Engine` contract transaction for `thaw` function.
   *
   * @contract Engine
   * @signature thaw()
   * @method function thaw()
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
    'function ethPayoutForMlnAmount(uint256 _mlnAmount) view returns (uint256)',
    'function frozenEther() view returns (uint256)',
    'function getAmguPrice() view returns (uint256)',
    'function lastThaw() view returns (uint256)',
    'function liquidEther() view returns (uint256)',
    'function mlnToken() view returns (address)',
    'function payAmguInEther() payable',
    'function premiumPercent() view returns (uint256)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function sellAndBurnMln(uint256 _mlnAmount)',
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
    _mlnAmount: ethers.BigNumberish,
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
  'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;
  'sellAndBurnMln(uint256)': (
    _mlnAmount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setAmguPrice(uint256)': (
    _price: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setRegistry(address)': (_registry: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'thaw()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  functions: {
    'MLN_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'amguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'enginePrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'ethPayoutForMlnAmount(uint256)': (
      _mlnAmount: ethers.BigNumberish,
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
    'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;
    'sellAndBurnMln(uint256)': (
      _mlnAmount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setAmguPrice(uint256)': (
      _price: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setRegistry(address)': (_registry: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'thaw()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'MLN_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'amguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'enginePrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'ethPayoutForMlnAmount(uint256)': (
      _mlnAmount: ethers.BigNumberish,
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
    'sellAndBurnMln(uint256)': (_mlnAmount: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'setAmguPrice(uint256)': (_price: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'setRegistry(address)': (_registry: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'thaw()': ($$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'sellAndBurnMln(uint256)': (
      _mlnAmount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAmguPrice(uint256)': (_price: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setRegistry(address)': (_registry: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'thaw()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'sellAndBurnMln(uint256)': (
      _mlnAmount: ethers.BigNumberish,
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
