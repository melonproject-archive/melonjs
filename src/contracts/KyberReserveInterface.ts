import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class KyberReserveInterface extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `KyberReserveInterface` contract call for the `getConversionRate` function.
   *
   * @contract KyberReserveInterface
   * @signature function getConversionRate(address,address,uint256,uint256) view returns (uint256)
   */
  getConversionRate: (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    blockNumber: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `KyberReserveInterface` contract transaction for `trade` function.
   *
   * @contract KyberReserveInterface
   * @signature function trade(address,uint256,address,address,uint256,bool) payable returns (bool)
   */
  trade: (
    srcToken: string,
    srcAmount: ethers.BigNumberish,
    destToken: string,
    destAddress: string,
    conversionRate: ethers.BigNumberish,
    validate: boolean,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  static abi: string[] = [
    'function trade(address srcToken, uint256 srcAmount, address destToken, address destAddress, uint256 conversionRate, bool validate) payable returns (bool)',
    'function getConversionRate(address src, address dest, uint256 srcQty, uint256 blockNumber) view returns (uint256)',
  ];
}
