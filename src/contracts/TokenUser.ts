import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class TokenUser extends Contract {
  public readonly ethers: TokenUserEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  static abi: string[] = [];
}

export interface TokenUserEthersContract extends ethers.Contract {
  callStatic: {};

  estimateGas: {};

  populateTransaction: {};
}
