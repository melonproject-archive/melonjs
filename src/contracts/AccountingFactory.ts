import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class AccountingFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `AccountingFactory` contract call for the `childExists` function.
   *
   * @contract AccountingFactory
   * @signature function childExists(address) view returns (bool)
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `AccountingFactory` contract call for the `isInstance` function.
   *
   * @contract AccountingFactory
   * @signature function isInstance(address) view returns (bool)
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `AccountingFactory` contract transaction for `createInstance` function.
   *
   * @contract AccountingFactory
   * @signature function createInstance(address,address,address) returns (address)
   */
  createInstance: (
    _hub: string,
    _denominationAsset: string,
    _nativeAsset: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event NewInstance(address indexed hub, address indexed instance, address denominationAsset, address nativeAsset)',
    'event NewInstance(address indexed hub, address indexed instance)',
    'function childExists(address) view returns (bool)',
    'function createInstance(address _hub, address _denominationAsset, address _nativeAsset) returns (address)',
    'function isInstance(address _child) view returns (bool)',
  ];
}
