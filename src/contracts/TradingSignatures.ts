import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class TradingSignatures extends Contract {
  public readonly ethers: TradingSignaturesEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `TradingSignatures` contract call for the `TAKE_ORDER` function.
   *
   * @contract TradingSignatures
   * @signature TAKE_ORDER()
   * @method function TAKE_ORDER() view returns (bytes4)
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  static abi: string[] = ['function TAKE_ORDER() view returns (bytes4)'];
}

export interface TradingSignaturesEthersContract extends ethers.Contract {
  'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;

  callStatic: {
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  };

  estimateGas: {};

  populateTransaction: {};
}
