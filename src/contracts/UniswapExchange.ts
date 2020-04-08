import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class UniswapExchange extends Contract {
  public readonly ethers: UniswapExchangeEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `UniswapExchange` contract call for the `getEthToTokenInputPrice` function.
   *
   * @contract UniswapExchange
   * @signature getEthToTokenInputPrice(uint256)
   * @method function getEthToTokenInputPrice(uint256) view returns (uint256) @5542
   */
  getEthToTokenInputPrice: (
    eth_sold: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `UniswapExchange` contract call for the `getEthToTokenOutputPrice` function.
   *
   * @contract UniswapExchange
   * @signature getEthToTokenOutputPrice(uint256)
   * @method function getEthToTokenOutputPrice(uint256) view returns (uint256) @6872
   */
  getEthToTokenOutputPrice: (
    tokens_bought: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `UniswapExchange` contract call for the `getTokenToEthInputPrice` function.
   *
   * @contract UniswapExchange
   * @signature getTokenToEthInputPrice(uint256)
   * @method function getTokenToEthInputPrice(uint256) view returns (uint256) @5637
   */
  getTokenToEthInputPrice: (
    tokens_sold: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `UniswapExchange` contract call for the `getTokenToEthOutputPrice` function.
   *
   * @contract UniswapExchange
   * @signature getTokenToEthOutputPrice(uint256)
   * @method function getTokenToEthOutputPrice(uint256) view returns (uint256) @6897
   */
  getTokenToEthOutputPrice: (
    eth_bought: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `UniswapExchange` contract call for the `tokenAddress` function.
   *
   * @contract UniswapExchange
   * @signature tokenAddress()
   * @method function tokenAddress() view returns (address) @1413
   */
  tokenAddress: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapExchange` contract call for the `factoryAddress` function.
   *
   * @contract UniswapExchange
   * @signature factoryAddress()
   * @method function factoryAddress() view returns (address) @1443
   */
  factoryAddress: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapExchange` contract call for the `balanceOf` function.
   *
   * @contract UniswapExchange
   * @signature balanceOf(address)
   * @method function balanceOf(address) view returns (uint256) @1645
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `UniswapExchange` contract call for the `allowance` function.
   *
   * @contract UniswapExchange
   * @signature allowance(address,address)
   * @method function allowance(address,address) view returns (uint256) @1925
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `UniswapExchange` contract call for the `name` function.
   *
   * @contract UniswapExchange
   * @signature name()
   * @method function name() view returns (bytes32) @1623
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapExchange` contract call for the `symbol` function.
   *
   * @contract UniswapExchange
   * @signature symbol()
   * @method function symbol() view returns (bytes32) @1653
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapExchange` contract call for the `decimals` function.
   *
   * @contract UniswapExchange
   * @signature decimals()
   * @method function decimals() view returns (uint256) @1683
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `UniswapExchange` contract call for the `totalSupply` function.
   *
   * @contract UniswapExchange
   * @signature totalSupply()
   * @method function totalSupply() view returns (uint256) @1713
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `UniswapExchange` contract transaction for `setup` function.
   *
   * @contract UniswapExchange
   * @signature setup(address)
   * @method function setup(address) @175875
   */
  setup: (token_addr: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `addLiquidity` function.
   *
   * @contract UniswapExchange
   * @signature addLiquidity(uint256,uint256,uint256)
   * @method function addLiquidity(uint256,uint256,uint256) payable returns (uint256) @82616
   */
  addLiquidity: (
    min_liquidity: ethers.BigNumberish,
    max_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `UniswapExchange` contract transaction for `removeLiquidity` function.
   *
   * @contract UniswapExchange
   * @signature removeLiquidity(uint256,uint256,uint256,uint256)
   * @method function removeLiquidity(uint256,uint256,uint256,uint256) returns (uint256, uint256) @116814
   */
  removeLiquidity: (
    amount: ethers.BigNumberish,
    min_eth: ethers.BigNumberish,
    min_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `__default__` function.
   *
   * @contract UniswapExchange
   * @signature __default__()
   * @method function __default__() payable
   */
  __default__: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `UniswapExchange` contract transaction for `ethToTokenSwapInput` function.
   *
   * @contract UniswapExchange
   * @signature ethToTokenSwapInput(uint256,uint256)
   * @method function ethToTokenSwapInput(uint256,uint256) payable returns (uint256) @12757
   */
  ethToTokenSwapInput: (
    min_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `UniswapExchange` contract transaction for `ethToTokenTransferInput` function.
   *
   * @contract UniswapExchange
   * @signature ethToTokenTransferInput(uint256,uint256,address)
   * @method function ethToTokenTransferInput(uint256,uint256,address) payable returns (uint256) @12965
   */
  ethToTokenTransferInput: (
    min_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `UniswapExchange` contract transaction for `ethToTokenSwapOutput` function.
   *
   * @contract UniswapExchange
   * @signature ethToTokenSwapOutput(uint256,uint256)
   * @method function ethToTokenSwapOutput(uint256,uint256) payable returns (uint256) @50463
   */
  ethToTokenSwapOutput: (
    tokens_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `UniswapExchange` contract transaction for `ethToTokenTransferOutput` function.
   *
   * @contract UniswapExchange
   * @signature ethToTokenTransferOutput(uint256,uint256,address)
   * @method function ethToTokenTransferOutput(uint256,uint256,address) payable returns (uint256) @50671
   */
  ethToTokenTransferOutput: (
    tokens_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToEthSwapInput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToEthSwapInput(uint256,uint256,uint256)
   * @method function tokenToEthSwapInput(uint256,uint256,uint256) returns (uint256) @47503
   */
  tokenToEthSwapInput: (
    tokens_sold: ethers.BigNumberish,
    min_eth: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToEthTransferInput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToEthTransferInput(uint256,uint256,uint256,address)
   * @method function tokenToEthTransferInput(uint256,uint256,uint256,address) returns (uint256) @47712
   */
  tokenToEthTransferInput: (
    tokens_sold: ethers.BigNumberish,
    min_eth: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToEthSwapOutput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToEthSwapOutput(uint256,uint256,uint256)
   * @method function tokenToEthSwapOutput(uint256,uint256,uint256) returns (uint256) @50175
   */
  tokenToEthSwapOutput: (
    eth_bought: ethers.BigNumberish,
    max_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToEthTransferOutput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToEthTransferOutput(uint256,uint256,uint256,address)
   * @method function tokenToEthTransferOutput(uint256,uint256,uint256,address) returns (uint256) @50384
   */
  tokenToEthTransferOutput: (
    eth_bought: ethers.BigNumberish,
    max_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToTokenSwapInput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)
   * @method function tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address) returns (uint256) @51007
   */
  tokenToTokenSwapInput: (
    tokens_sold: ethers.BigNumberish,
    min_tokens_bought: ethers.BigNumberish,
    min_eth_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    token_addr: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToTokenTransferInput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)
   * @method function tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address) returns (uint256) @51098
   */
  tokenToTokenTransferInput: (
    tokens_sold: ethers.BigNumberish,
    min_tokens_bought: ethers.BigNumberish,
    min_eth_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    token_addr: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToTokenSwapOutput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)
   * @method function tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address) returns (uint256) @54928
   */
  tokenToTokenSwapOutput: (
    tokens_bought: ethers.BigNumberish,
    max_tokens_sold: ethers.BigNumberish,
    max_eth_sold: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    token_addr: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToTokenTransferOutput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)
   * @method function tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address) returns (uint256) @55019
   */
  tokenToTokenTransferOutput: (
    tokens_bought: ethers.BigNumberish,
    max_tokens_sold: ethers.BigNumberish,
    max_eth_sold: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    token_addr: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToExchangeSwapInput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)
   * @method function tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address) returns (uint256) @49342
   */
  tokenToExchangeSwapInput: (
    tokens_sold: ethers.BigNumberish,
    min_tokens_bought: ethers.BigNumberish,
    min_eth_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    exchange_addr: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToExchangeTransferInput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)
   * @method function tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address) returns (uint256) @49532
   */
  tokenToExchangeTransferInput: (
    tokens_sold: ethers.BigNumberish,
    min_tokens_bought: ethers.BigNumberish,
    min_eth_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    exchange_addr: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToExchangeSwapOutput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)
   * @method function tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address) returns (uint256) @53233
   */
  tokenToExchangeSwapOutput: (
    tokens_bought: ethers.BigNumberish,
    max_tokens_sold: ethers.BigNumberish,
    max_eth_sold: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    exchange_addr: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `tokenToExchangeTransferOutput` function.
   *
   * @contract UniswapExchange
   * @signature tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)
   * @method function tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address) returns (uint256) @53423
   */
  tokenToExchangeTransferOutput: (
    tokens_bought: ethers.BigNumberish,
    max_tokens_sold: ethers.BigNumberish,
    max_eth_sold: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    exchange_addr: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `transfer` function.
   *
   * @contract UniswapExchange
   * @signature transfer(address,uint256)
   * @method function transfer(address,uint256) returns (bool) @75034
   */
  transfer: (_to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `transferFrom` function.
   *
   * @contract UniswapExchange
   * @signature transferFrom(address,address,uint256)
   * @method function transferFrom(address,address,uint256) returns (bool) @110907
   */
  transferFrom: (_from: string, _to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapExchange` contract transaction for `approve` function.
   *
   * @contract UniswapExchange
   * @signature approve(address,uint256)
   * @method function approve(address,uint256) returns (bool) @38769
   */
  approve: (_spender: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event TokenPurchase(address indexed buyer, uint256 indexed eth_sold, uint256 indexed tokens_bought)',
    'event EthPurchase(address indexed buyer, uint256 indexed tokens_sold, uint256 indexed eth_bought)',
    'event AddLiquidity(address indexed provider, uint256 indexed eth_amount, uint256 indexed token_amount)',
    'event RemoveLiquidity(address indexed provider, uint256 indexed eth_amount, uint256 indexed token_amount)',
    'event Transfer(address indexed _from, address indexed _to, uint256 _value)',
    'event Approval(address indexed _owner, address indexed _spender, uint256 _value)',
    'function setup(address token_addr) @175875',
    'function addLiquidity(uint256 min_liquidity, uint256 max_tokens, uint256 deadline) payable returns (uint256 out) @82616',
    'function removeLiquidity(uint256 amount, uint256 min_eth, uint256 min_tokens, uint256 deadline) returns (uint256 out, uint256 out) @116814',
    'function __default__() payable',
    'function ethToTokenSwapInput(uint256 min_tokens, uint256 deadline) payable returns (uint256 out) @12757',
    'function ethToTokenTransferInput(uint256 min_tokens, uint256 deadline, address recipient) payable returns (uint256 out) @12965',
    'function ethToTokenSwapOutput(uint256 tokens_bought, uint256 deadline) payable returns (uint256 out) @50463',
    'function ethToTokenTransferOutput(uint256 tokens_bought, uint256 deadline, address recipient) payable returns (uint256 out) @50671',
    'function tokenToEthSwapInput(uint256 tokens_sold, uint256 min_eth, uint256 deadline) returns (uint256 out) @47503',
    'function tokenToEthTransferInput(uint256 tokens_sold, uint256 min_eth, uint256 deadline, address recipient) returns (uint256 out) @47712',
    'function tokenToEthSwapOutput(uint256 eth_bought, uint256 max_tokens, uint256 deadline) returns (uint256 out) @50175',
    'function tokenToEthTransferOutput(uint256 eth_bought, uint256 max_tokens, uint256 deadline, address recipient) returns (uint256 out) @50384',
    'function tokenToTokenSwapInput(uint256 tokens_sold, uint256 min_tokens_bought, uint256 min_eth_bought, uint256 deadline, address token_addr) returns (uint256 out) @51007',
    'function tokenToTokenTransferInput(uint256 tokens_sold, uint256 min_tokens_bought, uint256 min_eth_bought, uint256 deadline, address recipient, address token_addr) returns (uint256 out) @51098',
    'function tokenToTokenSwapOutput(uint256 tokens_bought, uint256 max_tokens_sold, uint256 max_eth_sold, uint256 deadline, address token_addr) returns (uint256 out) @54928',
    'function tokenToTokenTransferOutput(uint256 tokens_bought, uint256 max_tokens_sold, uint256 max_eth_sold, uint256 deadline, address recipient, address token_addr) returns (uint256 out) @55019',
    'function tokenToExchangeSwapInput(uint256 tokens_sold, uint256 min_tokens_bought, uint256 min_eth_bought, uint256 deadline, address exchange_addr) returns (uint256 out) @49342',
    'function tokenToExchangeTransferInput(uint256 tokens_sold, uint256 min_tokens_bought, uint256 min_eth_bought, uint256 deadline, address recipient, address exchange_addr) returns (uint256 out) @49532',
    'function tokenToExchangeSwapOutput(uint256 tokens_bought, uint256 max_tokens_sold, uint256 max_eth_sold, uint256 deadline, address exchange_addr) returns (uint256 out) @53233',
    'function tokenToExchangeTransferOutput(uint256 tokens_bought, uint256 max_tokens_sold, uint256 max_eth_sold, uint256 deadline, address recipient, address exchange_addr) returns (uint256 out) @53423',
    'function getEthToTokenInputPrice(uint256 eth_sold) view returns (uint256 out) @5542',
    'function getEthToTokenOutputPrice(uint256 tokens_bought) view returns (uint256 out) @6872',
    'function getTokenToEthInputPrice(uint256 tokens_sold) view returns (uint256 out) @5637',
    'function getTokenToEthOutputPrice(uint256 eth_bought) view returns (uint256 out) @6897',
    'function tokenAddress() view returns (address out) @1413',
    'function factoryAddress() view returns (address out) @1443',
    'function balanceOf(address _owner) view returns (uint256 out) @1645',
    'function transfer(address _to, uint256 _value) returns (bool out) @75034',
    'function transferFrom(address _from, address _to, uint256 _value) returns (bool out) @110907',
    'function approve(address _spender, uint256 _value) returns (bool out) @38769',
    'function allowance(address _owner, address _spender) view returns (uint256 out) @1925',
    'function name() view returns (bytes32 out) @1623',
    'function symbol() view returns (bytes32 out) @1653',
    'function decimals() view returns (uint256 out) @1683',
    'function totalSupply() view returns (uint256 out) @1713',
  ];
}

export interface UniswapExchangeEthersContract extends ethers.Contract {
  'getEthToTokenInputPrice(uint256)': (
    eth_sold: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getEthToTokenOutputPrice(uint256)': (
    tokens_bought: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getTokenToEthInputPrice(uint256)': (
    tokens_sold: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getTokenToEthOutputPrice(uint256)': (
    eth_bought: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'tokenAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'factoryAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'allowance(address,address)': (
    _owner: string,
    _spender: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'setup(address)': (
    token_addr: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'addLiquidity(uint256,uint256,uint256)': (
    min_liquidity: ethers.BigNumberish,
    max_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'removeLiquidity(uint256,uint256,uint256,uint256)': (
    amount: ethers.BigNumberish,
    min_eth: ethers.BigNumberish,
    min_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  '__default__()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
  'ethToTokenSwapInput(uint256,uint256)': (
    min_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'ethToTokenTransferInput(uint256,uint256,address)': (
    min_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'ethToTokenSwapOutput(uint256,uint256)': (
    tokens_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'ethToTokenTransferOutput(uint256,uint256,address)': (
    tokens_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToEthSwapInput(uint256,uint256,uint256)': (
    tokens_sold: ethers.BigNumberish,
    min_eth: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToEthTransferInput(uint256,uint256,uint256,address)': (
    tokens_sold: ethers.BigNumberish,
    min_eth: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToEthSwapOutput(uint256,uint256,uint256)': (
    eth_bought: ethers.BigNumberish,
    max_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToEthTransferOutput(uint256,uint256,uint256,address)': (
    eth_bought: ethers.BigNumberish,
    max_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)': (
    tokens_sold: ethers.BigNumberish,
    min_tokens_bought: ethers.BigNumberish,
    min_eth_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    token_addr: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)': (
    tokens_sold: ethers.BigNumberish,
    min_tokens_bought: ethers.BigNumberish,
    min_eth_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    token_addr: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)': (
    tokens_bought: ethers.BigNumberish,
    max_tokens_sold: ethers.BigNumberish,
    max_eth_sold: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    token_addr: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)': (
    tokens_bought: ethers.BigNumberish,
    max_tokens_sold: ethers.BigNumberish,
    max_eth_sold: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    token_addr: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)': (
    tokens_sold: ethers.BigNumberish,
    min_tokens_bought: ethers.BigNumberish,
    min_eth_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    exchange_addr: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)': (
    tokens_sold: ethers.BigNumberish,
    min_tokens_bought: ethers.BigNumberish,
    min_eth_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    exchange_addr: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)': (
    tokens_bought: ethers.BigNumberish,
    max_tokens_sold: ethers.BigNumberish,
    max_eth_sold: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    exchange_addr: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)': (
    tokens_bought: ethers.BigNumberish,
    max_tokens_sold: ethers.BigNumberish,
    max_eth_sold: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    exchange_addr: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'transfer(address,uint256)': (
    _to: string,
    _value: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'transferFrom(address,address,uint256)': (
    _from: string,
    _to: string,
    _value: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'approve(address,uint256)': (
    _spender: string,
    _value: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'getEthToTokenInputPrice(uint256)': (
      eth_sold: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getEthToTokenOutputPrice(uint256)': (
      tokens_bought: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getTokenToEthInputPrice(uint256)': (
      tokens_sold: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getTokenToEthOutputPrice(uint256)': (
      eth_bought: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'tokenAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'factoryAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'allowance(address,address)': (
      _owner: string,
      _spender: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'setup(address)': (
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'addLiquidity(uint256,uint256,uint256)': (
      min_liquidity: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'removeLiquidity(uint256,uint256,uint256,uint256)': (
      amount: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    '__default__()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
    'ethToTokenSwapInput(uint256,uint256)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'ethToTokenTransferInput(uint256,uint256,address)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'ethToTokenSwapOutput(uint256,uint256)': (
      tokens_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'ethToTokenTransferOutput(uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToEthSwapInput(uint256,uint256,uint256)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToEthTransferInput(uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToEthSwapOutput(uint256,uint256,uint256)': (
      eth_bought: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToEthTransferOutput(uint256,uint256,uint256,address)': (
      eth_bought: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'transfer(address,uint256)': (
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'transferFrom(address,address,uint256)': (
      _from: string,
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'approve(address,uint256)': (
      _spender: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'getEthToTokenInputPrice(uint256)': (
      eth_sold: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getEthToTokenOutputPrice(uint256)': (
      tokens_bought: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getTokenToEthInputPrice(uint256)': (
      tokens_sold: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getTokenToEthOutputPrice(uint256)': (
      eth_bought: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'tokenAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'factoryAddress()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'allowance(address,address)': (
      _owner: string,
      _spender: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'setup(address)': (token_addr: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'addLiquidity(uint256,uint256,uint256)': (
      min_liquidity: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'removeLiquidity(uint256,uint256,uint256,uint256)': (
      amount: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<any[]>;
    '__default__()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
    'ethToTokenSwapInput(uint256,uint256)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'ethToTokenTransferInput(uint256,uint256,address)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'ethToTokenSwapOutput(uint256,uint256)': (
      tokens_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'ethToTokenTransferOutput(uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToEthSwapInput(uint256,uint256,uint256)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToEthTransferInput(uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToEthSwapOutput(uint256,uint256,uint256)': (
      eth_bought: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToEthTransferOutput(uint256,uint256,uint256,address)': (
      eth_bought: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transfer(address,uint256)': (
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'transferFrom(address,address,uint256)': (
      _from: string,
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'approve(address,uint256)': (
      _spender: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
  };

  estimateGas: {
    'setup(address)': (token_addr: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'addLiquidity(uint256,uint256,uint256)': (
      min_liquidity: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'removeLiquidity(uint256,uint256,uint256,uint256)': (
      amount: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    '__default__()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'ethToTokenSwapInput(uint256,uint256)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'ethToTokenTransferInput(uint256,uint256,address)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'ethToTokenSwapOutput(uint256,uint256)': (
      tokens_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'ethToTokenTransferOutput(uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToEthSwapInput(uint256,uint256,uint256)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToEthTransferInput(uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToEthSwapOutput(uint256,uint256,uint256)': (
      eth_bought: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToEthTransferOutput(uint256,uint256,uint256,address)': (
      eth_bought: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transfer(address,uint256)': (
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferFrom(address,address,uint256)': (
      _from: string,
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'approve(address,uint256)': (
      _spender: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'setup(address)': (token_addr: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'addLiquidity(uint256,uint256,uint256)': (
      min_liquidity: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeLiquidity(uint256,uint256,uint256,uint256)': (
      amount: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    '__default__()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'ethToTokenSwapInput(uint256,uint256)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'ethToTokenTransferInput(uint256,uint256,address)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'ethToTokenSwapOutput(uint256,uint256)': (
      tokens_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'ethToTokenTransferOutput(uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToEthSwapInput(uint256,uint256,uint256)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToEthTransferInput(uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToEthSwapOutput(uint256,uint256,uint256)': (
      eth_bought: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToEthTransferOutput(uint256,uint256,uint256,address)': (
      eth_bought: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)': (
      tokens_bought: ethers.BigNumberish,
      max_tokens_sold: ethers.BigNumberish,
      max_eth_sold: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      recipient: string,
      exchange_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transfer(address,uint256)': (
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferFrom(address,address,uint256)': (
      _from: string,
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'approve(address,uint256)': (
      _spender: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
