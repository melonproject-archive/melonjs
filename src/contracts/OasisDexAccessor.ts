import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class OasisDexAccessor extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `OasisDexAccessor` contract call for the `getOrders` function.
   *
   * @contract OasisDexAccessor
   * @signature function getOrders(address,address,address) view returns (uint256[], uint256[], uint256[])
   */
  getOrders: (
    targetExchange: string,
    sellAsset: string,
    buyAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;

  /**
   * `OasisDexAccessor` contract call for the `getSortedOfferIds` function.
   *
   * @contract OasisDexAccessor
   * @signature function getSortedOfferIds(address,address,address) view returns (uint256[])
   */
  getSortedOfferIds: (
    targetExchange: string,
    sellAsset: string,
    buyAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber[]>;

  /**
   * `OasisDexAccessor` contract call for the `getUnsortedOfferIds` function.
   *
   * @contract OasisDexAccessor
   * @signature function getUnsortedOfferIds(address,address,address) view returns (uint256[])
   */
  getUnsortedOfferIds: (
    targetExchange: string,
    sellAsset: string,
    buyAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber[]>;

  static abi: string[] = [
    'function getOrders(address targetExchange, address sellAsset, address buyAsset) view returns (uint256[], uint256[], uint256[])',
    'function getSortedOfferIds(address targetExchange, address sellAsset, address buyAsset) view returns (uint256[])',
    'function getUnsortedOfferIds(address targetExchange, address sellAsset, address buyAsset) view returns (uint256[])',
  ];
}
