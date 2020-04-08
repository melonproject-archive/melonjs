import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ExchangeAdapter extends Contract {
  public readonly ethers: ExchangeAdapterEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  static abi: string[] = [];
}

export interface ExchangeAdapterEthersContract extends ethers.Contract {
  functions: {};

  callStatic: {};

  estimateGas: {};

  populateTransaction: {};
}
