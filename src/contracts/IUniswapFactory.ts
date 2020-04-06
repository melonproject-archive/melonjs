import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IUniswapFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IUniswapFactory` contract call for the `getExchange` function.
   *
   * @contract IUniswapFactory
   * @signature function getExchange(address) view returns (address)
   */
  getExchange: (token: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  static abi: string[] = ['function getExchange(address token) view returns (address exchange)'];
}
