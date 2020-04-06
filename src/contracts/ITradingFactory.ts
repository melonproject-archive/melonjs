import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ITradingFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ITradingFactory` contract transaction for `createInstance` function.
   *
   * @contract ITradingFactory
   * @signature function createInstance(address,address[],address[],address) returns (address)
   */
  createInstance: (
    _hub: string,
    _exchanges: string[],
    _adapters: string[],
    _registry: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function createInstance(address _hub, address[] _exchanges, address[] _adapters, address _registry) returns (address)',
  ];
}
