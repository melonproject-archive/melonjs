import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IFundFactory extends Contract {
  public readonly ethers: IFundFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IFundFactory` contract transaction for `shutDownFund` function.
   *
   * @contract IFundFactory
   * @signature shutDownFund(address)
   * @method function shutDownFund(address)
   */
  shutDownFund: ($$0: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = ['function shutDownFund(address)'];
}

export interface IFundFactoryEthersContract extends ethers.Contract {
  'shutDownFund(address)': ($$0: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'shutDownFund(address)': ($$0: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'shutDownFund(address)': ($$0: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'shutDownFund(address)': ($$0: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
