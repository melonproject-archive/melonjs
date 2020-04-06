import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IFeeManagerFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IFeeManagerFactory` contract transaction for `createInstance` function.
   *
   * @contract IFeeManagerFactory
   * @signature function createInstance(address,address,address[],uint256[],uint256[],address) returns (address)
   */
  createInstance: (
    _hub: string,
    _denominationAsset: string,
    _fees: string[],
    _feeRates: ethers.BigNumber[],
    _feePeriods: ethers.BigNumber[],
    _registry: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function createInstance(address _hub, address _denominationAsset, address[] _fees, uint256[] _feeRates, uint256[] _feePeriods, address _registry) returns (address)',
  ];
}
