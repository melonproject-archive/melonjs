import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class UniswapFactory extends Contract {
  public readonly ethers: UniswapFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `UniswapFactory` contract call for the `getExchange` function.
   *
   * @contract UniswapFactory
   * @signature getExchange(address)
   * @method function getExchange(address) view returns (address) @715
   */
  getExchange: (token: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapFactory` contract call for the `getToken` function.
   *
   * @contract UniswapFactory
   * @signature getToken(address)
   * @method function getToken(address) view returns (address) @745
   */
  getToken: (exchange: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapFactory` contract call for the `getTokenWithId` function.
   *
   * @contract UniswapFactory
   * @signature getTokenWithId(uint256)
   * @method function getTokenWithId(uint256) view returns (address) @736
   */
  getTokenWithId: (token_id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapFactory` contract call for the `exchangeTemplate` function.
   *
   * @contract UniswapFactory
   * @signature exchangeTemplate()
   * @method function exchangeTemplate() view returns (address) @633
   */
  exchangeTemplate: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapFactory` contract call for the `tokenCount` function.
   *
   * @contract UniswapFactory
   * @signature tokenCount()
   * @method function tokenCount() view returns (uint256) @663
   */
  tokenCount: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `UniswapFactory` contract transaction for `initializeFactory` function.
   *
   * @contract UniswapFactory
   * @signature initializeFactory(address)
   * @method function initializeFactory(address) @35725
   */
  initializeFactory: (template: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapFactory` contract transaction for `createExchange` function.
   *
   * @contract UniswapFactory
   * @signature createExchange(address)
   * @method function createExchange(address) returns (address) @187911
   */
  createExchange: (token: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event NewExchange(address indexed token, address indexed exchange)',
    'function initializeFactory(address template) @35725',
    'function createExchange(address token) returns (address out) @187911',
    'function getExchange(address token) view returns (address out) @715',
    'function getToken(address exchange) view returns (address out) @745',
    'function getTokenWithId(uint256 token_id) view returns (address out) @736',
    'function exchangeTemplate() view returns (address out) @633',
    'function tokenCount() view returns (uint256 out) @663',
  ];
}

export interface UniswapFactoryEthersContract extends ethers.Contract {
  'getExchange(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'getToken(address)': (exchange: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'getTokenWithId(uint256)': (token_id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'exchangeTemplate()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'tokenCount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'initializeFactory(address)': (
    template: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'createExchange(address)': (token: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'getExchange(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getToken(address)': (exchange: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getTokenWithId(uint256)': (token_id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchangeTemplate()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'tokenCount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'initializeFactory(address)': (template: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'createExchange(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<string>;
  };

  estimateGas: {
    'initializeFactory(address)': (template: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'createExchange(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'initializeFactory(address)': (
      template: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'createExchange(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
