import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class OrderFiller extends Contract {
  public readonly ethers: OrderFillerEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  static abi: string[] = [
    'event OrderFilled(address indexed exchangeAddress, address buyAsset, uint256 buyAmount, address sellAsset, uint256 sellAmount, address[] feeAssets, uint256[] feeAmounts)',
  ];
}

export interface OrderFillerEthersContract extends ethers.Contract {
  functions: {};

  callStatic: {};

  estimateGas: {};

  populateTransaction: {};
}
