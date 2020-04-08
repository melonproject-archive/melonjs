import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class DSGuardEvents extends Contract {
  public readonly ethers: DSGuardEventsEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  static abi: string[] = [
    'event LogForbid(bytes32 indexed src, bytes32 indexed dst, bytes32 indexed sig)',
    'event LogPermit(bytes32 indexed src, bytes32 indexed dst, bytes32 indexed sig)',
  ];
}

export interface DSGuardEventsEthersContract extends ethers.Contract {
  functions: {};

  callStatic: {};

  estimateGas: {};

  populateTransaction: {};
}
