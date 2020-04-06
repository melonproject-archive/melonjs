import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IAccountingFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IAccountingFactory` contract transaction for `createInstance` function.
   *
   * @contract IAccountingFactory
   * @signature function createInstance(address,address,address) returns (address)
   */
  createInstance: (
    _hub: string,
    _denominationAsset: string,
    _nativeAsset: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function createInstance(address _hub, address _denominationAsset, address _nativeAsset) returns (address)',
  ];
}
