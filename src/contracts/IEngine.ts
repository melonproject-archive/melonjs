import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IEngine extends Contract {
  public readonly ethers: IEngineEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IEngine` contract call for the `getAmguPrice` function.
   *
   * @contract IEngine
   * @signature getAmguPrice()
   * @method function getAmguPrice() view returns (uint256)
   */
  getAmguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IEngine` contract transaction for `payAmguInEther` function.
   *
   * @contract IEngine
   * @signature payAmguInEther()
   * @method function payAmguInEther() payable
   */
  payAmguInEther: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `IEngine` contract transaction for `sellAndBurnMln` function.
   *
   * @contract IEngine
   * @signature sellAndBurnMln(uint256)
   * @method function sellAndBurnMln(uint256)
   */
  sellAndBurnMln: ($$0: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function getAmguPrice() view returns (uint256)',
    'function payAmguInEther() payable',
    'function sellAndBurnMln(uint256)',
  ];
}

export interface IEngineEthersContract extends ethers.Contract {
  'getAmguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;
  'sellAndBurnMln(uint256)': (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  callStatic: {
    'getAmguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
    'sellAndBurnMln(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'sellAndBurnMln(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'payAmguInEther()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'sellAndBurnMln(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
