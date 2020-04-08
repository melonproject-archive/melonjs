import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IUniswapFactory extends Contract {
  public readonly ethers: IUniswapFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IUniswapFactory` contract call for the `getExchange` function.
   *
   * @contract IUniswapFactory
   * @signature getExchange(address)
   * @method function getExchange(address) view returns (address)
   */
  getExchange: (token: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  static abi: string[] = ['function getExchange(address token) view returns (address exchange)'];
}

export interface IUniswapFactoryEthersContract extends ethers.Contract {
  'getExchange(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  functions: {
    'getExchange(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  };

  callStatic: {
    'getExchange(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  };

  estimateGas: {};

  populateTransaction: {};
}
