import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IParticipation extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IParticipation` contract call for the `hasRequest` function.
   *
   * @contract IParticipation
   * @signature function hasRequest(address) view returns (bool)
   */
  hasRequest: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IParticipation` contract transaction for `cancelRequest` function.
   *
   * @contract IParticipation
   * @signature function cancelRequest() payable
   */
  cancelRequest: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `IParticipation` contract transaction for `executeRequestFor` function.
   *
   * @contract IParticipation
   * @signature function executeRequestFor(address) payable
   */
  executeRequestFor: (requestOwner: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `IParticipation` contract transaction for `redeem` function.
   *
   * @contract IParticipation
   * @signature function redeem()
   */
  redeem: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `IParticipation` contract transaction for `redeemWithConstraints` function.
   *
   * @contract IParticipation
   * @signature function redeemWithConstraints(uint256,address[])
   */
  redeemWithConstraints: (
    shareQuantity: ethers.BigNumberish,
    requestedAssets: string[],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IParticipation` contract transaction for `requestInvestment` function.
   *
   * @contract IParticipation
   * @signature function requestInvestment(uint256,uint256,address) payable
   */
  requestInvestment: (
    requestedShares: ethers.BigNumberish,
    investmentAmount: ethers.BigNumberish,
    investmentAsset: string,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  static abi: string[] = [
    'function cancelRequest() payable',
    'function executeRequestFor(address requestOwner) payable',
    'function hasRequest(address) view returns (bool)',
    'function redeem()',
    'function redeemWithConstraints(uint256 shareQuantity, address[] requestedAssets)',
    'function requestInvestment(uint256 requestedShares, uint256 investmentAmount, address investmentAsset) payable',
  ];
}
