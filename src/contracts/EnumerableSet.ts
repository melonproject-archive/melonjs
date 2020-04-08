import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class EnumerableSet extends Contract {
  public readonly ethers: EnumerableSetEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  static abi: string[] = [];
}

export interface EnumerableSetEthersContract extends ethers.Contract {
  functions: {};

  callStatic: {};

  estimateGas: {};

  populateTransaction: {};
}
