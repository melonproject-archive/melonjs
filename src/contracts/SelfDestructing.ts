import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class SelfDestructing extends Contract {
  public readonly ethers: SelfDestructingEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `SelfDestructing` contract transaction for `bequeath` function.
   *
   * @contract SelfDestructing
   * @signature bequeath(address)
   * @method function bequeath(address)
   */
  bequeath: (_heir: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = ['function bequeath(address _heir)'];
}

export interface SelfDestructingEthersContract extends ethers.Contract {
  'bequeath(address)': (_heir: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'bequeath(address)': (_heir: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'bequeath(address)': (_heir: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'bequeath(address)': (_heir: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
