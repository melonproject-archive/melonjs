import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class TradingSignatures extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `TradingSignatures` contract call for the `MAKE_ORDER` function.
   *
   * @contract TradingSignatures
   * @signature function MAKE_ORDER() view returns (bytes4)
   */
  MAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `TradingSignatures` contract call for the `TAKE_ORDER` function.
   *
   * @contract TradingSignatures
   * @signature function TAKE_ORDER() view returns (bytes4)
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  static abi: string[] = ['function MAKE_ORDER() view returns (bytes4)', 'function TAKE_ORDER() view returns (bytes4)'];
}
