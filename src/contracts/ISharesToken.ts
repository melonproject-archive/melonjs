import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ISharesToken extends Contract {
  public readonly ethers: ISharesTokenEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ISharesToken` contract transaction for `createFor` function.
   *
   * @contract ISharesToken
   * @signature createFor(address,uint256)
   * @method function createFor(address,uint256)
   */
  createFor: ($$0: string, $$1: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = ['function createFor(address, uint256)'];
}

export interface ISharesTokenEthersContract extends ethers.Contract {
  'createFor(address,uint256)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'createFor(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'createFor(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'createFor(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'createFor(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
