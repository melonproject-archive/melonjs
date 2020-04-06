import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ConversionRatesInterface extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ConversionRatesInterface` contract call for the `getRate` function.
   *
   * @contract ConversionRatesInterface
   * @signature function getRate(address,uint256,bool,uint256) view returns (uint256)
   */
  getRate: (
    token: string,
    currentBlockNumber: ethers.BigNumberish,
    buy: boolean,
    qty: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRatesInterface` contract transaction for `recordImbalance` function.
   *
   * @contract ConversionRatesInterface
   * @signature function recordImbalance(address,int256,uint256,uint256)
   */
  recordImbalance: (
    token: string,
    buyAmount: ethers.BigNumberish,
    rateUpdateBlock: ethers.BigNumberish,
    currentBlock: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function getRate(address token, uint256 currentBlockNumber, bool buy, uint256 qty) view returns (uint256)',
    'function recordImbalance(address token, int256 buyAmount, uint256 rateUpdateBlock, uint256 currentBlock)',
  ];
}
