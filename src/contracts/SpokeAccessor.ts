import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class SpokeAccessor extends Contract {
  public readonly ethers: SpokeAccessorEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  static abi: string[] = [];
}

export interface SpokeAccessorEthersContract extends ethers.Contract {
  functions: {};

  callStatic: {};

  estimateGas: {};

  populateTransaction: {};
}
