import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IFeeManagerFactory extends Contract {
  public readonly ethers: IFeeManagerFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IFeeManagerFactory` contract transaction for `createInstance` function.
   *
   * @contract IFeeManagerFactory
   * @signature createInstance(address,address,address[],uint256[],uint256[],address)
   * @method function createInstance(address,address,address[],uint256[],uint256[],address) returns (address)
   */
  createInstance: (
    $$0: string,
    $$1: string,
    $$2: string[],
    $$3: ethers.BigNumber[],
    $$4: ethers.BigNumber[],
    $$5: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function createInstance(address, address, address[], uint256[], uint256[], address) returns (address)',
  ];
}

export interface IFeeManagerFactoryEthersContract extends ethers.Contract {
  'createInstance(address,address,address[],uint256[],uint256[],address)': (
    $$0: string,
    $$1: string,
    $$2: string[],
    $$3: ethers.BigNumber[],
    $$4: ethers.BigNumber[],
    $$5: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'createInstance(address,address,address[],uint256[],uint256[],address)': (
      $$0: string,
      $$1: string,
      $$2: string[],
      $$3: ethers.BigNumber[],
      $$4: ethers.BigNumber[],
      $$5: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'createInstance(address,address,address[],uint256[],uint256[],address)': (
      $$0: string,
      $$1: string,
      $$2: string[],
      $$3: ethers.BigNumber[],
      $$4: ethers.BigNumber[],
      $$5: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<string>;
  };

  estimateGas: {
    'createInstance(address,address,address[],uint256[],uint256[],address)': (
      $$0: string,
      $$1: string,
      $$2: string[],
      $$3: ethers.BigNumber[],
      $$4: ethers.BigNumber[],
      $$5: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'createInstance(address,address,address[],uint256[],uint256[],address)': (
      $$0: string,
      $$1: string,
      $$2: string[],
      $$3: ethers.BigNumber[],
      $$4: ethers.BigNumber[],
      $$5: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
