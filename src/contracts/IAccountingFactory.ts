import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IAccountingFactory extends Contract {
  public readonly ethers: IAccountingFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IAccountingFactory` contract transaction for `createInstance` function.
   *
   * @contract IAccountingFactory
   * @signature createInstance(address,address,address)
   * @method function createInstance(address,address,address) returns (address)
   */
  createInstance: ($$0: string, $$1: string, $$2: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = ['function createInstance(address, address, address) returns (address)'];
}

export interface IAccountingFactoryEthersContract extends ethers.Contract {
  'createInstance(address,address,address)': (
    $$0: string,
    $$1: string,
    $$2: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'createInstance(address,address,address)': (
      $$0: string,
      $$1: string,
      $$2: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'createInstance(address,address,address)': (
      $$0: string,
      $$1: string,
      $$2: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<string>;
  };

  estimateGas: {
    'createInstance(address,address,address)': (
      $$0: string,
      $$1: string,
      $$2: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'createInstance(address,address,address)': (
      $$0: string,
      $$1: string,
      $$2: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
