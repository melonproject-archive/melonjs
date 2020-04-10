import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

/**
 * Shares Contract
 *
 * Buy and sell shares for a Melon fund
 *
 * @author Melon Council DAO <security@meloncoucil.io>
 */
export class Shares extends Contract {
  public readonly ethers: SharesEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Shares` contract call for `allowance` function.
   *
   * Function to check the amount of tokens that an owner allowed to a spender.
   *
   * ```solidity
   * function allowance(address,address) view returns (uint256)
   * ```
   *
   * @param _owner address The address which owns the funds.
   * @param _spender address The address which will spend the funds.
   * @returns A uint256 specifying the amount of tokens still available for the spender.
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Shares` contract call for `authority` function.
   *
   * ```solidity
   * function authority() view returns (address)
   * ```
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for `balanceOf` function.
   *
   * Gets the balance of the specified address.
   *
   * ```solidity
   * function balanceOf(address) view returns (uint256)
   * ```
   *
   * @param _owner The address to query the the balance of.
   * @returns An uint256 representing the amount owned by the passed address.
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Shares` contract call for `decimals` function.
   *
   * ```solidity
   * function decimals() view returns (uint8)
   * ```
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `Shares` contract call for `fundFactory` function.
   *
   * ```solidity
   * function fundFactory() view returns (address)
   * ```
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for `getHub` function.
   *
   * ```solidity
   * function getHub() view returns (address)
   * ```
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for `getRoutes` function.
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
   * Get all assets that can be used to buy shares
   *
   * ```solidity
   * function getSharesInvestmentAssets() view returns (address[])
   * ```
   */
  getSharesInvestmentAssets: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Shares` contract call for `initialized` function.
   *
   * ```solidity
   * function initialized() view returns (bool)
   * ```
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * Confirm whether asset can be used to buy shares
   *
   * ```solidity
   * function isSharesInvestmentAsset(address) view returns (bool)
   * ```
   *
   * @param _asset The asset to confirm
   * @returns True if the asset can be used to buy shares
   */
  isSharesInvestmentAsset: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Shares` contract call for `name` function.
   *
   * ```solidity
   * function name() view returns (string)
   * ```
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for `owner` function.
   *
   * ```solidity
   * function owner() view returns (address)
   * ```
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for `priceSource` function.
   *
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for `symbol` function.
   *
   * ```solidity
   * function symbol() view returns (string)
   * ```
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for `totalSupply` function.
   *
   * Total number of tokens in existence
   *
   * ```solidity
   * function totalSupply() view returns (uint256)
   * ```
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Shares` contract call for `approve` function.
   *
   * ```solidity
   * function approve(address,uint256) returns (bool)
   * ```
   */
  approve: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * Buy shares on behalf of a specified user
   *
   * Only callable by the SharesRequestor associated with the Registry
   *
   * ```solidity
   * function buyShares(address,address,uint256) returns (uint256)
   * ```
   *
   * @param _buyer The for which to buy shares
   * @param _investmentAsset The asset with which to buy shares
   * @param _sharesQuantity The desired amount of shares
   * @returns The amount of investment asset used to buy the desired shares
   */
  buyShares: (
    _buyer: string,
    _investmentAsset: string,
    _sharesQuantity: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract call for `createFor` function.
   *
   * ```solidity
   * function createFor(address,uint256)
   * ```
   */
  createFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract call for `decreaseApproval` function.
   *
   * ```solidity
   * function decreaseApproval(address,uint256) returns (bool)
   * ```
   */
  decreaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * Disable the buying of shares with specific assets
   *
   * ```solidity
   * function disableSharesInvestmentAssets(address[])
   * ```
   *
   * @param _assets The assets for which to disable the buying of shares
   */
  disableSharesInvestmentAssets: (_assets: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * Enable the buying of shares with specific assets
   *
   * ```solidity
   * function enableSharesInvestmentAssets(address[])
   * ```
   *
   * @param _assets The assets for which to disable the buying of shares
   */
  enableSharesInvestmentAssets: (_assets: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract call for `increaseApproval` function.
   *
   * ```solidity
   * function increaseApproval(address,uint256) returns (bool)
   * ```
   */
  increaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract call for `initialize` function.
   *
   * ```solidity
   * function initialize(address[7])
   * ```
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * Redeem all of the sender's shares for a proportionate slice of the fund's assets
   *
   * ```solidity
   * function redeemShares()
   * ```
   */
  redeemShares: () => TransactionWrapper<ethers.Overrides>;

  /**
   * Redeem a specified quantity of the sender's shares for a proportionate slice of the fund's assets
   *
   * ```solidity
   * function redeemSharesQuantity(uint256)
   * ```
   *
   * @param _sharesQuantity The amount of shares to redeem
   */
  redeemSharesQuantity: (_sharesQuantity: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * Redeem a specified quantity of the sender's shares for ONLY SPECIFIC ASSETS in the fund, forfeiting the remaining assets
   *
   * Do not call directly, unless an asset throws preventing redemption. Calling directly with a limited set of assets will result in the sender losing claim to the remaining assets for their shares. It is intended as a last resort for users to directly redeem their assets.
   *
   * ```solidity
   * function redeemSharesWithConstraints(uint256,address[])
   * ```
   *
   * @param _assets The assets to receive from the redemption
   * @param _sharesQuantity The amount of shares to redeem
   */
  redeemSharesWithConstraints: (
    _sharesQuantity: ethers.BigNumberish,
    _assets: string[],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract call for `setAuthority` function.
   *
   * ```solidity
   * function setAuthority(address)
   * ```
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract call for `setOwner` function.
   *
   * ```solidity
   * function setOwner(address)
   * ```
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract call for `transfer` function.
   *
   * ```solidity
   * function transfer(address,uint256) returns (bool)
   * ```
   */
  transfer: (to: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract call for `transferFrom` function.
   *
   * ```solidity
   * function transferFrom(address,address,uint256) returns (bool)
   * ```
   */
  transferFrom: (from: string, to: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub, address[] _defaultAssets, address _registry)',
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event SharesBought(address indexed buyer, uint256 sharesQuantity, address investmentAsset, uint256 investmentAmount)',
    'event SharesInvestmentAssetsDisabled(address[] assets)',
    'event SharesInvestmentAssetsEnabled(address[] assets)',
    'event SharesRedeemed(address indexed redeemer, uint256 sharesQuantity, address[] receivedAssets, uint256[] receivedAssetQuantities)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function authority() view returns (address)',
    'function balanceOf(address _owner) view returns (uint256)',
    'function buyShares(address _buyer, address _investmentAsset, uint256 _sharesQuantity) returns (uint256 costInInvestmentAsset_)',
    'function createFor(address who, uint256 amount)',
    'function decimals() view returns (uint8)',
    'function decreaseApproval(address spender, uint256 amount) returns (bool)',
    'function disableSharesInvestmentAssets(address[] _assets)',
    'function enableSharesInvestmentAssets(address[] _assets)',
    'function fundFactory() view returns (address)',
    'function getHub() view returns (address)',
    'function getRoutes() view returns (tuple(address accounting, address feeManager, address policyManager, address shares, address vault, address registry, address fundFactory))',
    'function getSharesInvestmentAssets() view returns (address[])',
    'function increaseApproval(address spender, uint256 amount) returns (bool)',
    'function initialize(address[7] _spokes)',
    'function initialized() view returns (bool)',
    'function isSharesInvestmentAsset(address _asset) view returns (bool)',
    'function name() view returns (string)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function redeemShares()',
    'function redeemSharesQuantity(uint256 _sharesQuantity)',
    'function redeemSharesWithConstraints(uint256 _sharesQuantity, address[] _assets)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address to, uint256 amount) returns (bool)',
    'function transferFrom(address from, address to, uint256 amount) returns (bool)',
  ];
}

export interface SharesEthersContract extends ethers.Contract {
  'allowance(address,address)': (
    _owner: string,
    _spender: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
  'getSharesInvestmentAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isSharesInvestmentAsset(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'approve(address,uint256)': (
    spender: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'buyShares(address,address,uint256)': (
    _buyer: string,
    _investmentAsset: string,
    _sharesQuantity: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'createFor(address,uint256)': (
    who: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'decreaseApproval(address,uint256)': (
    spender: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'disableSharesInvestmentAssets(address[])': (
    _assets: string[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'enableSharesInvestmentAssets(address[])': (
    _assets: string[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'increaseApproval(address,uint256)': (
    spender: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'initialize(address[7])': (
    _spokes: [string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'redeemShares()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'redeemSharesQuantity(uint256)': (
    _sharesQuantity: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'redeemSharesWithConstraints(uint256,address[])': (
    _sharesQuantity: ethers.BigNumberish,
    _assets: string[],
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
  'transfer(address,uint256)': (
    to: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'transferFrom(address,address,uint256)': (
    from: string,
    to: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'allowance(address,address)': (
      _owner: string,
      _spender: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
    'getSharesInvestmentAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isSharesInvestmentAsset(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'approve(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'buyShares(address,address,uint256)': (
      _buyer: string,
      _investmentAsset: string,
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'createFor(address,uint256)': (
      who: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'decreaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'disableSharesInvestmentAssets(address[])': (
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'enableSharesInvestmentAssets(address[])': (
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'increaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'redeemShares()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'redeemSharesQuantity(uint256)': (
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'redeemSharesWithConstraints(uint256,address[])': (
      _sharesQuantity: ethers.BigNumberish,
      _assets: string[],
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
    'transfer(address,uint256)': (
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'transferFrom(address,address,uint256)': (
      from: string,
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'allowance(address,address)': (
      _owner: string,
      _spender: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
    'getSharesInvestmentAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isSharesInvestmentAsset(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'approve(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'buyShares(address,address,uint256)': (
      _buyer: string,
      _investmentAsset: string,
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'createFor(address,uint256)': (
      who: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'decreaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'disableSharesInvestmentAssets(address[])': (_assets: string[], $$overrides?: ethers.Overrides) => Promise<void>;
    'enableSharesInvestmentAssets(address[])': (_assets: string[], $$overrides?: ethers.Overrides) => Promise<void>;
    'increaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'redeemShares()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'redeemSharesQuantity(uint256)': (
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'redeemSharesWithConstraints(uint256,address[])': (
      _sharesQuantity: ethers.BigNumberish,
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'transfer(address,uint256)': (
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'transferFrom(address,address,uint256)': (
      from: string,
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
  };

  estimateGas: {
    'approve(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'buyShares(address,address,uint256)': (
      _buyer: string,
      _investmentAsset: string,
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'createFor(address,uint256)': (
      who: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'decreaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'disableSharesInvestmentAssets(address[])': (
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'enableSharesInvestmentAssets(address[])': (
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'increaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'redeemShares()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'redeemSharesQuantity(uint256)': (
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'redeemSharesWithConstraints(uint256,address[])': (
      _sharesQuantity: ethers.BigNumberish,
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'transfer(address,uint256)': (
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferFrom(address,address,uint256)': (
      from: string,
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'approve(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'buyShares(address,address,uint256)': (
      _buyer: string,
      _investmentAsset: string,
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'createFor(address,uint256)': (
      who: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'decreaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'disableSharesInvestmentAssets(address[])': (
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'enableSharesInvestmentAssets(address[])': (
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'increaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'redeemShares()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'redeemSharesQuantity(uint256)': (
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'redeemSharesWithConstraints(uint256,address[])': (
      _sharesQuantity: ethers.BigNumberish,
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'transfer(address,uint256)': (
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferFrom(address,address,uint256)': (
      from: string,
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
