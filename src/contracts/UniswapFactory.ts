import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class UniswapFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `UniswapFactory` contract call for the `getExchange` function.
   *
   * @contract UniswapFactory
   * @signature function getExchange(address) view returns (address) @715
   */
  getExchange: (token: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapFactory` contract call for the `getToken` function.
   *
   * @contract UniswapFactory
   * @signature function getToken(address) view returns (address) @745
   */
  getToken: (exchange: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapFactory` contract call for the `getTokenWithId` function.
   *
   * @contract UniswapFactory
   * @signature function getTokenWithId(uint256) view returns (address) @736
   */
  getTokenWithId: (token_id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapFactory` contract call for the `exchangeTemplate` function.
   *
   * @contract UniswapFactory
   * @signature function exchangeTemplate() view returns (address) @633
   */
  exchangeTemplate: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UniswapFactory` contract call for the `tokenCount` function.
   *
   * @contract UniswapFactory
   * @signature function tokenCount() view returns (uint256) @663
   */
  tokenCount: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `UniswapFactory` contract transaction for `initializeFactory` function.
   *
   * @contract UniswapFactory
   * @signature function initializeFactory(address) @35725
   */
  initializeFactory: (template: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UniswapFactory` contract transaction for `createExchange` function.
   *
   * @contract UniswapFactory
   * @signature function createExchange(address) returns (address) @187911
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
