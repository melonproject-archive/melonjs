import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class PolicyManagerFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `PolicyManagerFactory` contract call for the `childExists` function.
   *
   * @contract PolicyManagerFactory
   * @signature function childExists(address) view returns (bool)
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `PolicyManagerFactory` contract call for the `isInstance` function.
   *
   * @contract PolicyManagerFactory
   * @signature function isInstance(address) view returns (bool)
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `PolicyManagerFactory` contract transaction for `createInstance` function.
   *
   * @contract PolicyManagerFactory
   * @signature function createInstance(address) returns (address)
   */
  createInstance: (_hub: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event NewInstance(address indexed hub, address indexed instance)',
    'function childExists(address) view returns (bool)',
    'function createInstance(address _hub) returns (address)',
    'function isInstance(address _child) view returns (bool)',
  ];
}
