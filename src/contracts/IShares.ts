import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IShares extends Contract {
  public readonly ethers: ISharesEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IShares` contract call for the `isSharesInvestmentAsset` function.
   *
   * @contract IShares
   * @signature isSharesInvestmentAsset(address)
   * @method function isSharesInvestmentAsset(address) view returns (bool)
   */
  isSharesInvestmentAsset: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IShares` contract transaction for `buyShares` function.
   *
   * @contract IShares
   * @signature buyShares(address,address,uint256)
   * @method function buyShares(address,address,uint256) returns (uint256)
   */
  buyShares: ($$0: string, $$1: string, $$2: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function buyShares(address, address, uint256) returns (uint256)',
    'function isSharesInvestmentAsset(address) view returns (bool)',
  ];
}

export interface ISharesEthersContract extends ethers.Contract {
  'isSharesInvestmentAsset(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'buyShares(address,address,uint256)': (
    $$0: string,
    $$1: string,
    $$2: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'isSharesInvestmentAsset(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'buyShares(address,address,uint256)': (
      $$0: string,
      $$1: string,
      $$2: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'isSharesInvestmentAsset(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'buyShares(address,address,uint256)': (
      $$0: string,
      $$1: string,
      $$2: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  estimateGas: {
    'buyShares(address,address,uint256)': (
      $$0: string,
      $$1: string,
      $$2: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'buyShares(address,address,uint256)': (
      $$0: string,
      $$1: string,
      $$2: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
