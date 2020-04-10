import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

/**
 * `Accounting` contract
 */
export class Accounting extends Contract {
  public readonly ethers: AccountingEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Accounting` contract call for `DEFAULT_SHARE_PRICE` function.
   *
   * ```solidity
   * function DEFAULT_SHARE_PRICE() view returns (uint256)
   * ```
   */
  DEFAULT_SHARE_PRICE: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for `DENOMINATION_ASSET` function.
   *
   * ```solidity
   * function DENOMINATION_ASSET() view returns (address)
   * ```
   */
  DENOMINATION_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for `MAX_OWNED_ASSETS` function.
   *
   * ```solidity
   * function MAX_OWNED_ASSETS() view returns (uint8)
   * ```
   */
  MAX_OWNED_ASSETS: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `Accounting` contract call for `REGISTRY` function.
   *
   * ```solidity
   * function REGISTRY() view returns (address)
   * ```
   */
  REGISTRY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for `SHARES_DECIMALS` function.
   *
   * ```solidity
   * function SHARES_DECIMALS() view returns (uint8)
   * ```
   */
  SHARES_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `Accounting` contract call for `assetBalances` function.
   *
   * ```solidity
   * function assetBalances(address) view returns (uint256)
   * ```
   */
  assetBalances: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for `authority` function.
   *
   * ```solidity
   * function authority() view returns (address)
   * ```
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * Calculates the GAV for an asset held by the fund
   *
   * ```solidity
   * function calcAssetGav(address) view returns (uint256)
   * ```
   *
   * @param _asset The ERC20 token for which to calculate the GAV
   * @returns The GAV of the _asset
   */
  calcAssetGav: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * Calculate the overall GAV of the fund
   *
   * ```solidity
   * function calcGav() view returns (uint256)
   * ```
   */
  calcGav: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * Calculate the overall NAV of the fund
   *
   * ```solidity
   * function calcNav(uint256,uint256) pure returns (uint256)
   * ```
   *
   * @param _gav The fund GAV
   * @param _unclaimedFeesInDenominationAsset The fees owed to the fund manager relative to the fund's denomination asset
   * @returns The fund NAV
   */
  calcNav: (
    _gav: ethers.BigNumberish,
    _unclaimedFeesInDenominationAsset: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for `fundFactory` function.
   *
   * ```solidity
   * function fundFactory() view returns (address)
   * ```
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * Retrieves the assetBalances of all assets of the fund
   *
   * Use getFundHoldings() as the canonical way to get all token balances for a fund
   *
   * ```solidity
   * function getAllAssetBalances() view returns (address[], uint256[])
   * ```
   *
   * @returns
   *   - `assets_` — The assets of the fund
   *   - `balances_` — The assetBalances of owned assets
   */
  getAllAssetBalances: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ assets_: string[]; balances_: ethers.BigNumber[] }>;

  /**
   * Retrieves the assetBalances of an array of tokens for the fund
   *
   * ```solidity
   * function getAssetBalances(address[]) view returns (uint256[])
   * ```
   *
   * @param _assets The assets for which to retrieve assetBalances
   * @returns The assetBalances relative to _assets
   */
  getAssetBalances: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber[]>;

  /**
   * Retrieves the balances of all holdings of the fund
   *
   * Use this as the canonical function for retrieving total balances, not only balances currently in the contract (e.g., includes lending balances)
   *
   * ```solidity
   * function getFundHoldings() view returns (address[], uint256[])
   * ```
   *
   * @returns
   *   - `assets_` — The owned assets
   *   - `balances_` — The balances of owned assets
   */
  getFundHoldings: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ assets_: string[]; balances_: ethers.BigNumber[] }>;

  /**
   * Retrieves the balance of a particular asset holding of the fund
   *
   * Use this as the canonical function for retrieving a single asset's total balance
   *
   * ```solidity
   * function getFundHoldingsForAsset(address) view returns (uint256)
   * ```
   *
   * @param _asset The asset for which to retrieve the fund's balance
   * @returns The fund's balance of the _asset
   */
  getFundHoldingsForAsset: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for `getHub` function.
   *
   * ```solidity
   * function getHub() view returns (address)
   * ```
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * Retrieves the number of owned assets in this fund
   *
   * ```solidity
   * function getOwnedAssetsLength() view returns (uint256)
   * ```
   */
  getOwnedAssetsLength: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for `getRoutes` function.
   *
   * ```solidity
   * function getRoutes() view returns (tuple(address,address,address,address,address,address,address))
   * ```
   */
  getRoutes: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    policyManager: string;
    shares: string;
    vault: string;
    registry: string;
    fundFactory: string;
  }>;

  /**
   * `Accounting` contract call for `initialized` function.
   *
   * ```solidity
   * function initialized() view returns (bool)
   * ```
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Accounting` contract call for `ownedAssets` function.
   *
   * ```solidity
   * function ownedAssets(uint256) view returns (address)
   * ```
   */
  ownedAssets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for `owner` function.
   *
   * ```solidity
   * function owner() view returns (address)
   * ```
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for `priceSource` function.
   *
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * Calculates the value per unit of shares, given a total value and total number of shares
   *
   * ```solidity
   * function valuePerShare(uint256,uint256) pure returns (uint256)
   * ```
   *
   * @param _numShares The total number of shares of a fund (can include management fee shares)
   * @param _totalValue The total value of a fund, generally the GAV
   * @returns The value per unit of shares (relative to the decimals of shares)
   */
  valuePerShare: (
    _totalValue: ethers.BigNumberish,
    _numShares: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * Calculates fund metrics
   *
   * ```solidity
   * function calcFundMetrics() returns (uint256, uint256, uint256, uint256, uint256, uint256)
   * ```
   */
  calcFundMetrics: () => TransactionWrapper<ethers.Overrides>;

  /**
   * Decreases the balance of an asset in a fund's internal system of account
   *
   * ```solidity
   * function decreaseAssetBalance(address,uint256)
   * ```
   *
   * @param _amount The amount by which to decrease the assetBalance
   * @param _asset The asset for which to decrease the assetBalance
   */
  decreaseAssetBalance: (_asset: string, _amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * Calculate the cost for a given number of shares this fund, in an asset other than the fund's denomination asset
   *
   * ```solidity
   * function getShareCostInAsset(uint256,address) returns (uint256)
   * ```
   *
   * @param _altAsset Alternative asset in which to calculate share cost
   * @param _numShares Number of shares
   * @returns The cost of _numShares in the _altAsset
   */
  getShareCostInAsset: (_numShares: ethers.BigNumberish, _altAsset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * Increases the balance of an asset in a fund's internal system of account
   *
   * ```solidity
   * function increaseAssetBalance(address,uint256)
   * ```
   *
   * @param _amount The amount by which to increase the assetBalance
   * @param _asset The asset for which to increase the assetBalance
   */
  increaseAssetBalance: (_asset: string, _amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `initialize` function.
   *
   * ```solidity
   * function initialize(address[7])
   * ```
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `setAuthority` function.
   *
   * ```solidity
   * function setAuthority(address)
   * ```
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `setOwner` function.
   *
   * ```solidity
   * function setOwner(address)
   * ```
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * Triggers FeeManager's rewardAllFees(), allocating fees (in shares) to the fund manager
   *
   * Anyone can call this
   *
   * ```solidity
   * function triggerRewardAllFees() payable
   * ```
   */
  triggerRewardAllFees: () => TransactionWrapper<ethers.PayableOverrides>;

  static abi: string[] = [
    'constructor(address _hub, address _denominationAsset, address _registry)',
    'event AmguPaid(address indexed payer, uint256 totalAmguPaidInEth, uint256 amguChargableGas)',
    'event AssetAddition(address indexed asset)',
    'event AssetBalanceUpdated(address indexed asset, uint256 oldBalance, uint256 newBalance)',
    'event AssetRemoval(address indexed asset)',
    'event IncentivePaid(address indexed payer, uint256 incentiveAmount)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function DEFAULT_SHARE_PRICE() view returns (uint256)',
    'function DENOMINATION_ASSET() view returns (address)',
    'function MAX_OWNED_ASSETS() view returns (uint8)',
    'function REGISTRY() view returns (address)',
    'function SHARES_DECIMALS() view returns (uint8)',
    'function assetBalances(address) view returns (uint256)',
    'function authority() view returns (address)',
    'function calcAssetGav(address _asset) view returns (uint256)',
    'function calcFundMetrics() returns (uint256 gav_, uint256 feesInDenominationAsset_, uint256 feesInShares_, uint256 nav_, uint256 sharePrice_, uint256 gavPerShareNetManagementFee_)',
    'function calcGav() view returns (uint256)',
    'function calcNav(uint256 _gav, uint256 _unclaimedFeesInDenominationAsset) pure returns (uint256)',
    'function decreaseAssetBalance(address _asset, uint256 _amount)',
    'function fundFactory() view returns (address)',
    'function getAllAssetBalances() view returns (address[] assets_, uint256[] balances_)',
    'function getAssetBalances(address[] _assets) view returns (uint256[])',
    'function getFundHoldings() view returns (address[] assets_, uint256[] balances_)',
    'function getFundHoldingsForAsset(address _asset) view returns (uint256)',
    'function getHub() view returns (address)',
    'function getOwnedAssetsLength() view returns (uint256)',
    'function getRoutes() view returns (tuple(address accounting, address feeManager, address policyManager, address shares, address vault, address registry, address fundFactory))',
    'function getShareCostInAsset(uint256 _numShares, address _altAsset) returns (uint256)',
    'function increaseAssetBalance(address _asset, uint256 _amount)',
    'function initialize(address[7] _spokes)',
    'function initialized() view returns (bool)',
    'function ownedAssets(uint256) view returns (address)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function triggerRewardAllFees() payable',
    'function valuePerShare(uint256 _totalValue, uint256 _numShares) pure returns (uint256)',
  ];
}

export interface AccountingEthersContract extends ethers.Contract {
  'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'MAX_OWNED_ASSETS()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'SHARES_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'assetBalances(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'calcAssetGav(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'calcGav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'calcNav(uint256,uint256)': (
    _gav: ethers.BigNumberish,
    _unclaimedFeesInDenominationAsset: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getAllAssetBalances()': (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ assets_: string[]; balances_: ethers.BigNumber[] }>;
  'getAssetBalances(address[])': (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber[]>;
  'getFundHoldings()': (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ assets_: string[]; balances_: ethers.BigNumber[] }>;
  'getFundHoldingsForAsset(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getRoutes()': (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    policyManager: string;
    shares: string;
    vault: string;
    registry: string;
    fundFactory: string;
  }>;
  'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'ownedAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'valuePerShare(uint256,uint256)': (
    _totalValue: ethers.BigNumberish,
    _numShares: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'calcFundMetrics()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'decreaseAssetBalance(address,uint256)': (
    _asset: string,
    _amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'getShareCostInAsset(uint256,address)': (
    _numShares: ethers.BigNumberish,
    _altAsset: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'increaseAssetBalance(address,uint256)': (
    _asset: string,
    _amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'initialize(address[7])': (
    _spokes: [string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setAuthority(address)': (
    authority_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setOwner(address)': (
    owner_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'triggerRewardAllFees()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'MAX_OWNED_ASSETS()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'SHARES_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'assetBalances(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'calcAssetGav(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcGav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcNav(uint256,uint256)': (
      _gav: ethers.BigNumberish,
      _unclaimedFeesInDenominationAsset: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAllAssetBalances()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ assets_: string[]; balances_: ethers.BigNumber[] }>;
    'getAssetBalances(address[])': (
      _assets: string[],
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber[]>;
    'getFundHoldings()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ assets_: string[]; balances_: ethers.BigNumber[] }>;
    'getFundHoldingsForAsset(address)': (
      _asset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getRoutes()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      accounting: string;
      feeManager: string;
      policyManager: string;
      shares: string;
      vault: string;
      registry: string;
      fundFactory: string;
    }>;
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'ownedAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'valuePerShare(uint256,uint256)': (
      _totalValue: ethers.BigNumberish,
      _numShares: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'calcFundMetrics()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'decreaseAssetBalance(address,uint256)': (
      _asset: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'getShareCostInAsset(uint256,address)': (
      _numShares: ethers.BigNumberish,
      _altAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'increaseAssetBalance(address,uint256)': (
      _asset: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setOwner(address)': (
      owner_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'triggerRewardAllFees()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'MAX_OWNED_ASSETS()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'SHARES_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'assetBalances(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'calcAssetGav(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcGav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcNav(uint256,uint256)': (
      _gav: ethers.BigNumberish,
      _unclaimedFeesInDenominationAsset: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAllAssetBalances()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ assets_: string[]; balances_: ethers.BigNumber[] }>;
    'getAssetBalances(address[])': (
      _assets: string[],
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber[]>;
    'getFundHoldings()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ assets_: string[]; balances_: ethers.BigNumber[] }>;
    'getFundHoldingsForAsset(address)': (
      _asset: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getRoutes()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      accounting: string;
      feeManager: string;
      policyManager: string;
      shares: string;
      vault: string;
      registry: string;
      fundFactory: string;
    }>;
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'ownedAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'valuePerShare(uint256,uint256)': (
      _totalValue: ethers.BigNumberish,
      _numShares: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'calcFundMetrics()': (
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      gav_: ethers.BigNumber;
      feesInDenominationAsset_: ethers.BigNumber;
      feesInShares_: ethers.BigNumber;
      nav_: ethers.BigNumber;
      sharePrice_: ethers.BigNumber;
      gavPerShareNetManagementFee_: ethers.BigNumber;
    }>;
    'decreaseAssetBalance(address,uint256)': (
      _asset: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'getShareCostInAsset(uint256,address)': (
      _numShares: ethers.BigNumberish,
      _altAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'increaseAssetBalance(address,uint256)': (
      _asset: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'triggerRewardAllFees()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
  };

  estimateGas: {
    'calcFundMetrics()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'decreaseAssetBalance(address,uint256)': (
      _asset: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'getShareCostInAsset(uint256,address)': (
      _numShares: ethers.BigNumberish,
      _altAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'increaseAssetBalance(address,uint256)': (
      _asset: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'triggerRewardAllFees()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'calcFundMetrics()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'decreaseAssetBalance(address,uint256)': (
      _asset: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'getShareCostInAsset(uint256,address)': (
      _numShares: ethers.BigNumberish,
      _altAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'increaseAssetBalance(address,uint256)': (
      _asset: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'triggerRewardAllFees()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
  };
}
