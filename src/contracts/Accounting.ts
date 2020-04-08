import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Accounting extends Contract {
  public readonly ethers: AccountingEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Accounting` contract call for the `DEFAULT_SHARE_PRICE` function.
   *
   * @contract Accounting
   * @signature DEFAULT_SHARE_PRICE()
   * @method function DEFAULT_SHARE_PRICE() view returns (uint256)
   */
  DEFAULT_SHARE_PRICE: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for the `DENOMINATION_ASSET` function.
   *
   * @contract Accounting
   * @signature DENOMINATION_ASSET()
   * @method function DENOMINATION_ASSET() view returns (address)
   */
  DENOMINATION_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for the `MAX_OWNED_ASSETS` function.
   *
   * @contract Accounting
   * @signature MAX_OWNED_ASSETS()
   * @method function MAX_OWNED_ASSETS() view returns (uint8)
   */
  MAX_OWNED_ASSETS: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `Accounting` contract call for the `REGISTRY` function.
   *
   * @contract Accounting
   * @signature REGISTRY()
   * @method function REGISTRY() view returns (address)
   */
  REGISTRY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for the `SHARES_DECIMALS` function.
   *
   * @contract Accounting
   * @signature SHARES_DECIMALS()
   * @method function SHARES_DECIMALS() view returns (uint8)
   */
  SHARES_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `Accounting` contract call for the `assetBalances` function.
   *
   * @contract Accounting
   * @signature assetBalances(address)
   * @method function assetBalances(address) view returns (uint256)
   */
  assetBalances: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for the `authority` function.
   *
   * @contract Accounting
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for the `calcAssetGav` function.
   *
   * @contract Accounting
   * @signature calcAssetGav(address)
   * @method function calcAssetGav(address) view returns (uint256)
   */
  calcAssetGav: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for the `calcGav` function.
   *
   * @contract Accounting
   * @signature calcGav()
   * @method function calcGav() view returns (uint256)
   */
  calcGav: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for the `calcNav` function.
   *
   * @contract Accounting
   * @signature calcNav(uint256,uint256)
   * @method function calcNav(uint256,uint256) pure returns (uint256)
   */
  calcNav: (
    _gav: ethers.BigNumberish,
    _unclaimedFeesInDenominationAsset: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for the `fundFactory` function.
   *
   * @contract Accounting
   * @signature fundFactory()
   * @method function fundFactory() view returns (address)
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for the `getAllAssetBalances` function.
   *
   * @contract Accounting
   * @signature getAllAssetBalances()
   * @method function getAllAssetBalances() view returns (address[], uint256[])
   */
  getAllAssetBalances: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ assets_: string[]; balances_: ethers.BigNumber[] }>;

  /**
   * `Accounting` contract call for the `getAssetBalances` function.
   *
   * @contract Accounting
   * @signature getAssetBalances(address[])
   * @method function getAssetBalances(address[]) view returns (uint256[])
   */
  getAssetBalances: (_assets: string[], $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber[]>;

  /**
   * `Accounting` contract call for the `getFundHoldings` function.
   *
   * @contract Accounting
   * @signature getFundHoldings()
   * @method function getFundHoldings() view returns (address[], uint256[])
   */
  getFundHoldings: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ assets_: string[]; balances_: ethers.BigNumber[] }>;

  /**
   * `Accounting` contract call for the `getFundHoldingsForAsset` function.
   *
   * @contract Accounting
   * @signature getFundHoldingsForAsset(address)
   * @method function getFundHoldingsForAsset(address) view returns (uint256)
   */
  getFundHoldingsForAsset: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for the `getHub` function.
   *
   * @contract Accounting
   * @signature getHub()
   * @method function getHub() view returns (address)
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for the `getOwnedAssetsLength` function.
   *
   * @contract Accounting
   * @signature getOwnedAssetsLength()
   * @method function getOwnedAssetsLength() view returns (uint256)
   */
  getOwnedAssetsLength: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for the `getRoutes` function.
   *
   * @contract Accounting
   * @signature getRoutes()
   * @method function getRoutes() view returns (tuple(address,address,address,address,address,address,address))
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
   * `Accounting` contract call for the `initialized` function.
   *
   * @contract Accounting
   * @signature initialized()
   * @method function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Accounting` contract call for the `ownedAssets` function.
   *
   * @contract Accounting
   * @signature ownedAssets(uint256)
   * @method function ownedAssets(uint256) view returns (address)
   */
  ownedAssets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for the `owner` function.
   *
   * @contract Accounting
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for the `priceSource` function.
   *
   * @contract Accounting
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for the `valuePerShare` function.
   *
   * @contract Accounting
   * @signature valuePerShare(uint256,uint256)
   * @method function valuePerShare(uint256,uint256) pure returns (uint256)
   */
  valuePerShare: (
    _totalValue: ethers.BigNumberish,
    _numShares: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract transaction for `calcFundMetrics` function.
   *
   * @contract Accounting
   * @signature calcFundMetrics()
   * @method function calcFundMetrics() returns (uint256, uint256, uint256, uint256, uint256, uint256)
   */
  calcFundMetrics: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract transaction for `decreaseAssetBalance` function.
   *
   * @contract Accounting
   * @signature decreaseAssetBalance(address,uint256)
   * @method function decreaseAssetBalance(address,uint256)
   */
  decreaseAssetBalance: (_asset: string, _amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract transaction for `getShareCostInAsset` function.
   *
   * @contract Accounting
   * @signature getShareCostInAsset(uint256,address)
   * @method function getShareCostInAsset(uint256,address) returns (uint256)
   */
  getShareCostInAsset: (_numShares: ethers.BigNumberish, _altAsset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract transaction for `increaseAssetBalance` function.
   *
   * @contract Accounting
   * @signature increaseAssetBalance(address,uint256)
   * @method function increaseAssetBalance(address,uint256)
   */
  increaseAssetBalance: (_asset: string, _amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract transaction for `initialize` function.
   *
   * @contract Accounting
   * @signature initialize(address[7])
   * @method function initialize(address[7])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract transaction for `setAuthority` function.
   *
   * @contract Accounting
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract transaction for `setOwner` function.
   *
   * @contract Accounting
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract transaction for `triggerRewardAllFees` function.
   *
   * @contract Accounting
   * @signature triggerRewardAllFees()
   * @method function triggerRewardAllFees() payable
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
  'calcFundMetrics()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'decreaseAssetBalance(address,uint256)': (
    _asset: string,
    _amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'getShareCostInAsset(uint256,address)': (
    _numShares: ethers.BigNumberish,
    _altAsset: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'increaseAssetBalance(address,uint256)': (
    _asset: string,
    _amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'initialize(address[7])': (
    _spokes: [string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'triggerRewardAllFees()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;

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
    'calcFundMetrics()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'decreaseAssetBalance(address,uint256)': (
      _asset: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'getShareCostInAsset(uint256,address)': (
      _numShares: ethers.BigNumberish,
      _altAsset: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'increaseAssetBalance(address,uint256)': (
      _asset: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'triggerRewardAllFees()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;
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
