import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ParticipationFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ParticipationFactory` contract call for the `childExists` function.
   *
   * @contract ParticipationFactory
   * @signature function childExists(address) view returns (bool)
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ParticipationFactory` contract call for the `isInstance` function.
   *
   * @contract ParticipationFactory
   * @signature function isInstance(address) view returns (bool)
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ParticipationFactory` contract transaction for `createInstance` function.
   *
   * @contract ParticipationFactory
   * @signature function createInstance(address,address[],address) returns (address)
   */
  createInstance: (_hub: string, _defaultAssets: string[], _registry: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event NewInstance(address indexed hub, address indexed instance, address[] defaultAssets, address registry)',
    'event NewInstance(address indexed hub, address indexed instance)',
    'function childExists(address) view returns (bool)',
    'function createInstance(address _hub, address[] _defaultAssets, address _registry) returns (address)',
    'function isInstance(address _child) view returns (bool)',
  ];
}
