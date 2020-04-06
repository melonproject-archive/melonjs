import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IFee extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IFee` contract call for the `identifier` function.
   *
   * @contract IFee
   * @signature function identifier() view returns (uint256)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IFee` contract transaction for `feeAmount` function.
   *
   * @contract IFee
   * @signature function feeAmount() returns (uint256)
   */
  feeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `IFee` contract transaction for `initializeForUser` function.
   *
   * @contract IFee
   * @signature function initializeForUser(uint256,uint256,address)
   */
  initializeForUser: (
    feeRate: ethers.BigNumberish,
    feePeriod: ethers.BigNumberish,
    denominationAsset: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IFee` contract transaction for `updateState` function.
   *
   * @contract IFee
   * @signature function updateState()
   */
  updateState: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function feeAmount() returns (uint256)',
    'function identifier() view returns (uint256)',
    'function initializeForUser(uint256 feeRate, uint256 feePeriod, address denominationAsset)',
    'function updateState()',
  ];
}
