import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IPolicyManagerFactory extends Contract {
  public readonly ethers: IPolicyManagerFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IPolicyManagerFactory` contract transaction for `createInstance` function.
   *
   * @contract IPolicyManagerFactory
   * @signature createInstance(address)
   * @method function createInstance(address) returns (address)
   */
  createInstance: (_hub: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = ['function createInstance(address _hub) returns (address)'];
}

export interface IPolicyManagerFactoryEthersContract extends ethers.Contract {
  'createInstance(address)': (_hub: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'createInstance(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<string>;
  };

  estimateGas: {
    'createInstance(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'createInstance(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
