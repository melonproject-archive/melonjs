import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ExpectedRateInterface extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ExpectedRateInterface` contract call for the `getExpectedRate` function.
   *
   * @contract ExpectedRateInterface
   * @signature function getExpectedRate(address,address,uint256,bool) view returns (uint256, uint256)
   */
  getExpectedRate: (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    usePermissionless: boolean,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;

  static abi: string[] = [
    'function getExpectedRate(address src, address dest, uint256 srcQty, bool usePermissionless) view returns (uint256 expectedRate, uint256 slippageRate)',
  ];
}
