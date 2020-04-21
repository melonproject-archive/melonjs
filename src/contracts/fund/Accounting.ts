import { ethers } from 'ethers';
import { Contract, TransactionWrapper, AddressLike, DeploymentTransactionWrapper } from './../..';

export class Accounting extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
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

  /**
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(
    bytecode: string,
    signer: ethers.Signer,
    _hub: AddressLike,
    _denominationAsset: AddressLike,
    _nativeAsset: AddressLike,
  ) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [_hub, _denominationAsset, _nativeAsset]);
  }

  /**
   * ```solidity
   * function DEFAULT_SHARE_PRICE() view returns (uint256)
   * ```
   *
   */
  DEFAULT_SHARE_PRICE: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function DENOMINATION_ASSET() view returns (address)
   * ```
   *
   */
  DENOMINATION_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function DENOMINATION_ASSET_DECIMALS() view returns (uint256)
   * ```
   *
   */
  DENOMINATION_ASSET_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function MAX_OWNED_ASSETS() view returns (uint256)
   * ```
   *
   */
  MAX_OWNED_ASSETS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function NATIVE_ASSET() view returns (address)
   * ```
   *
   */
  NATIVE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function SHARES_DECIMALS() view returns (uint256)
   * ```
   *
   */
  SHARES_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function atLastAllocation() view returns (uint256, uint256, uint256, uint256, uint256)
   * ```
   *
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
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function calcNav(uint256,uint256) pure returns (uint256)
   * ```
   *
   */
  calcNav: (
    gav: ethers.BigNumberish,
    unclaimedFeesInDenominationAsset: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function engine() view returns (address)
   * ```
   *
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function getOwnedAssets() view returns (address[])
   * ```
   *
   */
  getOwnedAssets: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike[]>;
  /**
   * ```solidity
   * function getOwnedAssetsLength() view returns (uint256)
   * ```
   *
   */
  getOwnedAssetsLength: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function hub() view returns (address)
   * ```
   *
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function initialized() view returns (bool)
   * ```
   *
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isInAssetList(address) view returns (bool)
   * ```
   *
   */
  isInAssetList: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   *
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function ownedAssets(uint256) view returns (address)
   * ```
   *
   */
  ownedAssets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function owner() view returns (address)
   * ```
   *
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   *
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function registry() view returns (address)
   * ```
   *
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
   * ```
   *
   */
  routes: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: AddressLike;
    feeManager: AddressLike;
    participation: AddressLike;
    policyManager: AddressLike;
    shares: AddressLike;
    trading: AddressLike;
    vault: AddressLike;
    registry: AddressLike;
    version: AddressLike;
    engine: AddressLike;
    mlnToken: AddressLike;
  }>;
  /**
   * ```solidity
   * function valuePerShare(uint256,uint256) pure returns (uint256)
   * ```
   *
   */
  valuePerShare: (
    totalValue: ethers.BigNumberish,
    numShares: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function version() view returns (address)
   * ```
   *
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function addAssetToOwnedAssets(address)
   * ```
   *
   */
  addAssetToOwnedAssets: (_asset: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function assetHoldings(address) returns (uint256)
   * ```
   *
   */
  assetHoldings: (_asset: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function calcAssetGAV(address) returns (uint256)
   * ```
   *
   */
  calcAssetGAV: (_queryAsset: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function calcGav() returns (uint256)
   * ```
   *
   */
  calcGav: () => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function calcGavPerShareNetManagementFee() returns (uint256)
   * ```
   *
   */
  calcGavPerShareNetManagementFee: () => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function getFundHoldings() returns (uint256[], address[])
   * ```
   *
   */
  getFundHoldings: () => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function getShareCostInAsset(uint256,address) returns (uint256)
   * ```
   *
   */
  getShareCostInAsset: (
    _numShares: ethers.BigNumberish,
    _altAsset: AddressLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function initialize(address[11])
   * ```
   *
   */
  initialize: (
    _spokes: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
    ],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function performCalculations() returns (uint256, uint256, uint256, uint256, uint256, uint256)
   * ```
   *
   */
  performCalculations: () => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function removeFromOwnedAssets(address)
   * ```
   *
   */
  removeFromOwnedAssets: (_asset: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setAuthority(address)
   * ```
   *
   */
  setAuthority: (authority_: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setOwner(address)
   * ```
   *
   */
  setOwner: (owner_: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function triggerRewardAllFees() payable
   * ```
   *
   */
  triggerRewardAllFees: () => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function updateOwnedAssets()
   * ```
   *
   */
  updateOwnedAssets: () => TransactionWrapper<ethers.Overrides>;
}
