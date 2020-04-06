import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IParticipationFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IParticipationFactory` contract transaction for `createInstance` function.
   *
   * @contract IParticipationFactory
   * @signature function createInstance(address,address[],address) returns (address)
   */
  createInstance: (_hub: string, _defaultAssets: string[], _registry: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function createInstance(address _hub, address[] _defaultAssets, address _registry) returns (address)',
  ];
}
