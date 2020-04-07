import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class SafeMath extends Contract {
  public readonly ethers: SafeMathEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  static abi: string[] = [];
}

export interface SafeMathEthersContract extends ethers.Contract {
  callStatic: {};

  estimateGas: {};

  populateTransaction: {};
}
