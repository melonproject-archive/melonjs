import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IAccounting extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IAccounting` contract call for the `calcNav` function.
   *
   * @contract IAccounting
   * @signature function calcNav(uint256,uint256) pure returns (uint256)
   */
  calcNav: (
    gav: ethers.BigNumberish,
    unclaimedFees: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `IAccounting` contract call for the `getOwnedAssetsLength` function.
   *
   * @contract IAccounting
   * @signature function getOwnedAssetsLength() view returns (uint256)
   */
  getOwnedAssetsLength: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IAccounting` contract call for the `valuePerShare` function.
   *
   * @contract IAccounting
   * @signature function valuePerShare(uint256,uint256) view returns (uint256)
   */
  valuePerShare: (
    totalValue: ethers.BigNumberish,
    numShares: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `IAccounting` contract transaction for `calcAssetGAV` function.
   *
   * @contract IAccounting
   * @signature function calcAssetGAV(address) returns (uint256)
   */
  calcAssetGAV: (ofAsset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IAccounting` contract transaction for `calcGav` function.
   *
   * @contract IAccounting
   * @signature function calcGav() returns (uint256)
   */
  calcGav: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `IAccounting` contract transaction for `calcGavPerShareNetManagementFee` function.
   *
   * @contract IAccounting
   * @signature function calcGavPerShareNetManagementFee() returns (uint256)
   */
  calcGavPerShareNetManagementFee: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `IAccounting` contract transaction for `getFundHoldings` function.
   *
   * @contract IAccounting
   * @signature function getFundHoldings() returns (uint256[], address[])
   */
  getFundHoldings: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `IAccounting` contract transaction for `performCalculations` function.
   *
   * @contract IAccounting
   * @signature function performCalculations() returns (uint256, uint256, uint256, uint256, uint256, uint256)
   */
  performCalculations: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function calcAssetGAV(address ofAsset) returns (uint256)',
    'function calcGav() returns (uint256 gav)',
    'function calcGavPerShareNetManagementFee() returns (uint256)',
    'function calcNav(uint256 gav, uint256 unclaimedFees) pure returns (uint256)',
    'function getFundHoldings() returns (uint256[], address[])',
    'function getOwnedAssetsLength() view returns (uint256)',
    'function performCalculations() returns (uint256 gav, uint256 unclaimedFees, uint256 feesInShares, uint256 nav, uint256 sharePrice, uint256 gavPerShareNetManagementFee)',
    'function valuePerShare(uint256 totalValue, uint256 numShares) view returns (uint256)',
  ];
}
