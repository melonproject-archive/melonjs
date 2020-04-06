import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IOasisDex extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IOasisDex` contract call for the `getBestOffer` function.
   *
   * @contract IOasisDex
   * @signature function getBestOffer(address,address) view returns (uint256)
   */
  getBestOffer: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IOasisDex` contract call for the `getFirstUnsortedOffer` function.
   *
   * @contract IOasisDex
   * @signature function getFirstUnsortedOffer() view returns (uint256)
   */
  getFirstUnsortedOffer: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IOasisDex` contract call for the `getNextUnsortedOffer` function.
   *
   * @contract IOasisDex
   * @signature function getNextUnsortedOffer(uint256) view returns (uint256)
   */
  getNextUnsortedOffer: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IOasisDex` contract call for the `getOffer` function.
   *
   * @contract IOasisDex
   * @signature function getOffer(uint256) view returns (uint256, address, uint256, address)
   */
  getOffer: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `IOasisDex` contract call for the `getWorseOffer` function.
   *
   * @contract IOasisDex
   * @signature function getWorseOffer(uint256) view returns (uint256)
   */
  getWorseOffer: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IOasisDex` contract call for the `isActive` function.
   *
   * @contract IOasisDex
   * @signature function isActive(uint256) view returns (bool)
   */
  isActive: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IOasisDex` contract transaction for `buy` function.
   *
   * @contract IOasisDex
   * @signature function buy(uint256,uint256) returns (bool)
   */
  buy: ($$0: ethers.BigNumberish, $$1: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IOasisDex` contract transaction for `cancel` function.
   *
   * @contract IOasisDex
   * @signature function cancel(uint256) returns (bool)
   */
  cancel: ($$0: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IOasisDex` contract transaction for `offer` function.
   *
   * @contract IOasisDex
   * @signature function offer(uint256,address,uint256,address) returns (uint256)
   */
  offer: (
    $$0: ethers.BigNumberish,
    $$1: string,
    $$2: ethers.BigNumberish,
    $$3: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function buy(uint256, uint256) returns (bool)',
    'function cancel(uint256) returns (bool)',
    'function getBestOffer(address, address) view returns (uint256)',
    'function getFirstUnsortedOffer() view returns (uint256)',
    'function getNextUnsortedOffer(uint256) view returns (uint256)',
    'function getOffer(uint256) view returns (uint256, address, uint256, address)',
    'function getWorseOffer(uint256) view returns (uint256)',
    'function isActive(uint256) view returns (bool)',
    'function offer(uint256, address, uint256, address) returns (uint256)',
  ];
}
