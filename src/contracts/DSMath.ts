import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class DSMath extends Contract {
  public readonly ethers: DSMathEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  static abi: string[] = [];
}

export interface DSMathEthersContract extends ethers.Contract {
  callStatic: {};

  estimateGas: {};

  populateTransaction: {};
}
