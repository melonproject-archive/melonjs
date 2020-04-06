import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class FeeBurnerInterface extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `FeeBurnerInterface` contract transaction for `setReserveData` function.
   *
   * @contract FeeBurnerInterface
   * @signature function setReserveData(address,uint256,address)
   */
  setReserveData: (
    reserve: string,
    feesInBps: ethers.BigNumberish,
    kncWallet: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurnerInterface` contract transaction for `handleFees` function.
   *
   * @contract FeeBurnerInterface
   * @signature function handleFees(uint256,address,address) returns (bool)
   */
  handleFees: (
    tradeWeiAmount: ethers.BigNumberish,
    reserve: string,
    wallet: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function setReserveData(address reserve, uint256 feesInBps, address kncWallet)',
    'function handleFees(uint256 tradeWeiAmount, address reserve, address wallet) returns (bool)',
  ];
}
