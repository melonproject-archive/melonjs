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
   * `Accounting` contract call for `DENOMINATION_ASSET_DECIMALS` function.
   *
   * ```solidity
   * function DENOMINATION_ASSET_DECIMALS() view returns (uint256)
   * ```
   */
  DENOMINATION_ASSET_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for `MAX_OWNED_ASSETS` function.
   *
   * ```solidity
   * function MAX_OWNED_ASSETS() view returns (uint256)
   * ```
   */
  MAX_OWNED_ASSETS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for `NATIVE_ASSET` function.
   *
   * ```solidity
   * function NATIVE_ASSET() view returns (address)
   * ```
   */
  NATIVE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for `SHARES_DECIMALS` function.
   *
   * ```solidity
   * function SHARES_DECIMALS() view returns (uint256)
   * ```
   */
  SHARES_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for `atLastAllocation` function.
   *
   * ```solidity
   * function atLastAllocation() view returns (uint256, uint256, uint256, uint256, uint256)
   * ```
   */
  atLastAllocation: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    gav: ethers.BigNumber;
    nav: ethers.BigNumber;
    allocatedFees: ethers.BigNumber;
    totalSupply: ethers.BigNumber;
    timestamp: ethers.BigNumber;
  }>;

  /**
   * `Accounting` contract call for `authority` function.
   *
   * ```solidity
   * function authority() view returns (address)
   * ```
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for `calcNav` function.
   *
   * ```solidity
   * function calcNav(uint256,uint256) pure returns (uint256)
   * ```
   */
  calcNav: (
    gav: ethers.BigNumberish,
    unclaimedFeesInDenominationAsset: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for `engine` function.
   *
   * ```solidity
   * function engine() view returns (address)
   * ```
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for `getOwnedAssets` function.
   *
   * ```solidity
   * function getOwnedAssets() view returns (address[])
   * ```
   */
  getOwnedAssets: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Accounting` contract call for `getOwnedAssetsLength` function.
   *
   * ```solidity
   * function getOwnedAssetsLength() view returns (uint256)
   * ```
   */
  getOwnedAssetsLength: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for `hub` function.
   *
   * ```solidity
   * function hub() view returns (address)
   * ```
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for `initialized` function.
   *
   * ```solidity
   * function initialized() view returns (bool)
   * ```
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Accounting` contract call for `isInAssetList` function.
   *
   * ```solidity
   * function isInAssetList(address) view returns (bool)
   * ```
   */
  isInAssetList: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Accounting` contract call for `mlnToken` function.
   *
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

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
   * `Accounting` contract call for `registry` function.
   *
   * ```solidity
   * function registry() view returns (address)
   * ```
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for `routes` function.
   *
   * ```solidity
   * function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
   * ```
   */
  routes: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    participation: string;
    policyManager: string;
    shares: string;
    trading: string;
    vault: string;
    registry: string;
    version: string;
    engine: string;
    mlnToken: string;
  }>;

  /**
   * `Accounting` contract call for `valuePerShare` function.
   *
   * ```solidity
   * function valuePerShare(uint256,uint256) pure returns (uint256)
   * ```
   */
  valuePerShare: (
    totalValue: ethers.BigNumberish,
    numShares: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `Accounting` contract call for `version` function.
   *
   * ```solidity
   * function version() view returns (address)
   * ```
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Accounting` contract call for `addAssetToOwnedAssets` function.
   *
   * ```solidity
   * function addAssetToOwnedAssets(address)
   * ```
   */
  addAssetToOwnedAssets: (_asset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `assetHoldings` function.
   *
   * ```solidity
   * function assetHoldings(address) returns (uint256)
   * ```
   */
  assetHoldings: (_asset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `calcAssetGAV` function.
   *
   * ```solidity
   * function calcAssetGAV(address) returns (uint256)
   * ```
   */
  calcAssetGAV: (_queryAsset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `calcGav` function.
   *
   * ```solidity
   * function calcGav() returns (uint256)
   * ```
   */
  calcGav: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `calcGavPerShareNetManagementFee` function.
   *
   * ```solidity
   * function calcGavPerShareNetManagementFee() returns (uint256)
   * ```
   */
  calcGavPerShareNetManagementFee: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `getFundHoldings` function.
   *
   * Returns sparse array
   *
   * ```solidity
   * function getFundHoldings() returns (uint256[], address[])
   * ```
   */
  getFundHoldings: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `getShareCostInAsset` function.
   *
   * ```solidity
   * function getShareCostInAsset(uint256,address) returns (uint256)
   * ```
   */
  getShareCostInAsset: (_numShares: ethers.BigNumberish, _altAsset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `initialize` function.
   *
   * ```solidity
   * function initialize(address[11])
   * ```
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `performCalculations` function.
   *
   * ```solidity
   * function performCalculations() returns (uint256, uint256, uint256, uint256, uint256, uint256)
   * ```
   */
  performCalculations: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `Accounting` contract call for `removeFromOwnedAssets` function.
   *
   * ```solidity
   * function removeFromOwnedAssets(address)
   * ```
   */
  removeFromOwnedAssets: (_asset: string) => TransactionWrapper<ethers.Overrides>;

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
   * Reward all fees and perform some updates
   *
   * Anyone can call this
   *
   * ```solidity
   * function triggerRewardAllFees() payable
   * ```
   */
  triggerRewardAllFees: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Accounting` contract call for `updateOwnedAssets` function.
   *
   * Check holdings for all assets, and adjust list
   *
   * ```solidity
   * function updateOwnedAssets()
   * ```
   */
  updateOwnedAssets: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub, address _denominationAsset, address _nativeAsset)',
    'event AmguPaid(address indexed payer, uint256 totalAmguPaidInEth, uint256 amguChargableGas, uint256 incentivePaid)',
    'event AssetAddition(address indexed asset)',
    'event AssetRemoval(address indexed asset)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function DEFAULT_SHARE_PRICE() view returns (uint256)',
    'function DENOMINATION_ASSET() view returns (address)',
    'function DENOMINATION_ASSET_DECIMALS() view returns (uint256)',
    'function MAX_OWNED_ASSETS() view returns (uint256)',
    'function NATIVE_ASSET() view returns (address)',
    'function SHARES_DECIMALS() view returns (uint256)',
    'function addAssetToOwnedAssets(address _asset)',
    'function assetHoldings(address _asset) returns (uint256)',
    'function atLastAllocation() view returns (uint256 gav, uint256 nav, uint256 allocatedFees, uint256 totalSupply, uint256 timestamp)',
    'function authority() view returns (address)',
    'function calcAssetGAV(address _queryAsset) returns (uint256)',
    'function calcGav() returns (uint256 gav)',
    'function calcGavPerShareNetManagementFee() returns (uint256 gavPerShareNetManagementFee)',
    'function calcNav(uint256 gav, uint256 unclaimedFeesInDenominationAsset) pure returns (uint256)',
    'function engine() view returns (address)',
    'function getFundHoldings() returns (uint256[], address[])',
    'function getOwnedAssets() view returns (address[])',
    'function getOwnedAssetsLength() view returns (uint256)',
    'function getShareCostInAsset(uint256 _numShares, address _altAsset) returns (uint256)',
    'function hub() view returns (address)',
    'function initialize(address[11] _spokes)',
    'function initialized() view returns (bool)',
    'function isInAssetList(address) view returns (bool)',
    'function mlnToken() view returns (address)',
    'function ownedAssets(uint256) view returns (address)',
    'function owner() view returns (address)',
    'function performCalculations() returns (uint256 gav, uint256 feesInDenominationAsset, uint256 feesInShares, uint256 nav, uint256 sharePrice, uint256 gavPerShareNetManagementFee)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function removeFromOwnedAssets(address _asset)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function triggerRewardAllFees() payable',
    'function updateOwnedAssets()',
    'function valuePerShare(uint256 totalValue, uint256 numShares) pure returns (uint256)',
    'function version() view returns (address)',
  ];
}

export interface AccountingEthersContract extends ethers.Contract {
  'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'DENOMINATION_ASSET_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'MAX_OWNED_ASSETS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'NATIVE_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'SHARES_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'atLastAllocation()': (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    gav: ethers.BigNumber;
    nav: ethers.BigNumber;
    allocatedFees: ethers.BigNumber;
    totalSupply: ethers.BigNumber;
    timestamp: ethers.BigNumber;
  }>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'calcNav(uint256,uint256)': (
    gav: ethers.BigNumberish,
    unclaimedFeesInDenominationAsset: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getOwnedAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'hub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isInAssetList(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'ownedAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'routes()': (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    participation: string;
    policyManager: string;
    shares: string;
    trading: string;
    vault: string;
    registry: string;
    version: string;
    engine: string;
    mlnToken: string;
  }>;
  'valuePerShare(uint256,uint256)': (
    totalValue: ethers.BigNumberish,
    numShares: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'version()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'addAssetToOwnedAssets(address)': (
    _asset: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'assetHoldings(address)': (
    _asset: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'calcAssetGAV(address)': (
    _queryAsset: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'calcGav()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'calcGavPerShareNetManagementFee()': (
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'getFundHoldings()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'getShareCostInAsset(uint256,address)': (
    _numShares: ethers.BigNumberish,
    _altAsset: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'initialize(address[11])': (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'performCalculations()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'removeFromOwnedAssets(address)': (
    _asset: string,
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
  'updateOwnedAssets()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'DENOMINATION_ASSET_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'MAX_OWNED_ASSETS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'NATIVE_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'SHARES_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'atLastAllocation()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      gav: ethers.BigNumber;
      nav: ethers.BigNumber;
      allocatedFees: ethers.BigNumber;
      totalSupply: ethers.BigNumber;
      timestamp: ethers.BigNumber;
    }>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'calcNav(uint256,uint256)': (
      gav: ethers.BigNumberish,
      unclaimedFeesInDenominationAsset: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOwnedAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'hub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isInAssetList(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'ownedAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'routes()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      accounting: string;
      feeManager: string;
      participation: string;
      policyManager: string;
      shares: string;
      trading: string;
      vault: string;
      registry: string;
      version: string;
      engine: string;
      mlnToken: string;
    }>;
    'valuePerShare(uint256,uint256)': (
      totalValue: ethers.BigNumberish,
      numShares: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'version()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'addAssetToOwnedAssets(address)': (
      _asset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'assetHoldings(address)': (
      _asset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'calcAssetGAV(address)': (
      _queryAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'calcGav()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'calcGavPerShareNetManagementFee()': (
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'getFundHoldings()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'getShareCostInAsset(uint256,address)': (
      _numShares: ethers.BigNumberish,
      _altAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'initialize(address[11])': (
      _spokes: [string, string, string, string, string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'performCalculations()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'removeFromOwnedAssets(address)': (
      _asset: string,
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
    'updateOwnedAssets()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'DENOMINATION_ASSET_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'MAX_OWNED_ASSETS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'NATIVE_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'SHARES_DECIMALS()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'atLastAllocation()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      gav: ethers.BigNumber;
      nav: ethers.BigNumber;
      allocatedFees: ethers.BigNumber;
      totalSupply: ethers.BigNumber;
      timestamp: ethers.BigNumber;
    }>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'calcNav(uint256,uint256)': (
      gav: ethers.BigNumberish,
      unclaimedFeesInDenominationAsset: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOwnedAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'hub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isInAssetList(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'ownedAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'routes()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      accounting: string;
      feeManager: string;
      participation: string;
      policyManager: string;
      shares: string;
      trading: string;
      vault: string;
      registry: string;
      version: string;
      engine: string;
      mlnToken: string;
    }>;
    'valuePerShare(uint256,uint256)': (
      totalValue: ethers.BigNumberish,
      numShares: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'version()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'addAssetToOwnedAssets(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'assetHoldings(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'calcAssetGAV(address)': (_queryAsset: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'calcGav()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'calcGavPerShareNetManagementFee()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'getFundHoldings()': ($$overrides?: ethers.Overrides) => Promise<any[]>;
    'getShareCostInAsset(uint256,address)': (
      _numShares: ethers.BigNumberish,
      _altAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'initialize(address[11])': (
      _spokes: [string, string, string, string, string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'performCalculations()': (
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      gav: ethers.BigNumber;
      feesInDenominationAsset: ethers.BigNumber;
      feesInShares: ethers.BigNumber;
      nav: ethers.BigNumber;
      sharePrice: ethers.BigNumber;
      gavPerShareNetManagementFee: ethers.BigNumber;
    }>;
    'removeFromOwnedAssets(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'triggerRewardAllFees()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
    'updateOwnedAssets()': ($$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'addAssetToOwnedAssets(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'assetHoldings(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'calcAssetGAV(address)': (_queryAsset: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'calcGav()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'calcGavPerShareNetManagementFee()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'getFundHoldings()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'getShareCostInAsset(uint256,address)': (
      _numShares: ethers.BigNumberish,
      _altAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'initialize(address[11])': (
      _spokes: [string, string, string, string, string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'performCalculations()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeFromOwnedAssets(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'triggerRewardAllFees()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'updateOwnedAssets()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'addAssetToOwnedAssets(address)': (
      _asset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'assetHoldings(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'calcAssetGAV(address)': (
      _queryAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'calcGav()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'calcGavPerShareNetManagementFee()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'getFundHoldings()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'getShareCostInAsset(uint256,address)': (
      _numShares: ethers.BigNumberish,
      _altAsset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'initialize(address[11])': (
      _spokes: [string, string, string, string, string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'performCalculations()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'removeFromOwnedAssets(address)': (
      _asset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'triggerRewardAllFees()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'updateOwnedAssets()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
