import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Factory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Factory` contract call for the `childExists` function.
   *
   * @contract Factory
   * @signature function childExists(address) view returns (bool)
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Factory` contract call for the `isInstance` function.
   *
   * @contract Factory
   * @signature function isInstance(address) view returns (bool)
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  static abi: string[] = [
    'event NewInstance(address indexed hub, address indexed instance)',
    'function childExists(address) view returns (bool)',
    'function isInstance(address _child) view returns (bool)',
  ];
}
