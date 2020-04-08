import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IAccounting extends Contract {
  public readonly ethers: IAccountingEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IAccounting` contract call for the `DEFAULT_SHARE_PRICE` function.
   *
   * @contract IAccounting
   * @signature DEFAULT_SHARE_PRICE()
   * @method function DEFAULT_SHARE_PRICE() view returns (uint256)
   */
  DEFAULT_SHARE_PRICE: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IAccounting` contract call for the `DENOMINATION_ASSET` function.
   *
   * @contract IAccounting
   * @signature DENOMINATION_ASSET()
   * @method function DENOMINATION_ASSET() view returns (address)
   */
  DENOMINATION_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IAccounting` contract call for the `assetBalances` function.
   *
   * @contract IAccounting
   * @signature assetBalances(address)
   * @method function assetBalances(address) view returns (uint256)
   */
  assetBalances: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IAccounting` contract call for the `calcAssetGav` function.
   *
   * @contract IAccounting
   * @signature calcAssetGav(address)
   * @method function calcAssetGav(address) view returns (uint256)
   */
  calcAssetGav: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IAccounting` contract call for the `calcGav` function.
   *
   * @contract IAccounting
   * @signature calcGav()
   * @method function calcGav() view returns (uint256)
   */
  calcGav: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IAccounting` contract call for the `getFundHoldings` function.
   *
   * @contract IAccounting
   * @signature getFundHoldings()
   * @method function getFundHoldings() view returns (address[], uint256[])
   */
  getFundHoldings: ($$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `IAccounting` contract call for the `getFundHoldingsForAsset` function.
   *
   * @contract IAccounting
   * @signature getFundHoldingsForAsset(address)
   * @method function getFundHoldingsForAsset(address) view returns (uint256)
   */
  getFundHoldingsForAsset: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IAccounting` contract call for the `getOwnedAssetsLength` function.
   *
   * @contract IAccounting
   * @signature getOwnedAssetsLength()
   * @method function getOwnedAssetsLength() view returns (uint256)
   */
  getOwnedAssetsLength: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IAccounting` contract call for the `valuePerShare` function.
   *
   * @contract IAccounting
   * @signature valuePerShare(uint256,uint256)
   * @method function valuePerShare(uint256,uint256) pure returns (uint256)
   */
  valuePerShare: (
    $$0: ethers.BigNumberish,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `IAccounting` contract transaction for `decreaseAssetBalance` function.
   *
   * @contract IAccounting
   * @signature decreaseAssetBalance(address,uint256)
   * @method function decreaseAssetBalance(address,uint256)
   */
  decreaseAssetBalance: ($$0: string, $$1: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IAccounting` contract transaction for `getShareCostInAsset` function.
   *
   * @contract IAccounting
   * @signature getShareCostInAsset(uint256,address)
   * @method function getShareCostInAsset(uint256,address) returns (uint256)
   */
  getShareCostInAsset: ($$0: ethers.BigNumberish, $$1: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IAccounting` contract transaction for `increaseAssetBalance` function.
   *
   * @contract IAccounting
   * @signature increaseAssetBalance(address,uint256)
   * @method function increaseAssetBalance(address,uint256)
   */
  increaseAssetBalance: ($$0: string, $$1: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function DEFAULT_SHARE_PRICE() view returns (uint256)',
    'function DENOMINATION_ASSET() view returns (address)',
    'function assetBalances(address) view returns (uint256)',
    'function calcAssetGav(address) view returns (uint256)',
    'function calcGav() view returns (uint256)',
    'function decreaseAssetBalance(address, uint256)',
    'function getFundHoldings() view returns (address[], uint256[])',
    'function getFundHoldingsForAsset(address) view returns (uint256)',
    'function getOwnedAssetsLength() view returns (uint256)',
    'function getShareCostInAsset(uint256, address) returns (uint256)',
    'function increaseAssetBalance(address, uint256)',
    'function valuePerShare(uint256, uint256) pure returns (uint256)',
  ];
}

export interface IAccountingEthersContract extends ethers.Contract {
  'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'assetBalances(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'calcAssetGav(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'calcGav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getFundHoldings()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getFundHoldingsForAsset(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'valuePerShare(uint256,uint256)': (
    $$0: ethers.BigNumberish,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'decreaseAssetBalance(address,uint256)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'getShareCostInAsset(uint256,address)': (
    $$0: ethers.BigNumberish,
    $$1: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'increaseAssetBalance(address,uint256)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'assetBalances(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcAssetGav(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcGav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getFundHoldings()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getFundHoldingsForAsset(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'valuePerShare(uint256,uint256)': (
      $$0: ethers.BigNumberish,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'decreaseAssetBalance(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'getShareCostInAsset(uint256,address)': (
      $$0: ethers.BigNumberish,
      $$1: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'increaseAssetBalance(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'assetBalances(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcAssetGav(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcGav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getFundHoldings()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getFundHoldingsForAsset(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'valuePerShare(uint256,uint256)': (
      $$0: ethers.BigNumberish,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'decreaseAssetBalance(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'getShareCostInAsset(uint256,address)': (
      $$0: ethers.BigNumberish,
      $$1: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'increaseAssetBalance(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'decreaseAssetBalance(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'getShareCostInAsset(uint256,address)': (
      $$0: ethers.BigNumberish,
      $$1: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'increaseAssetBalance(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'decreaseAssetBalance(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'getShareCostInAsset(uint256,address)': (
      $$0: ethers.BigNumberish,
      $$1: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'increaseAssetBalance(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
