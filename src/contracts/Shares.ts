import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Shares extends Contract {
  public readonly ethers: SharesEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Shares` contract call for the `allowance` function.
   *
   * @contract Shares
   * @signature allowance(address,address)
   * @method function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Shares` contract call for the `authority` function.
   *
   * @contract Shares
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `balanceOf` function.
   *
   * @contract Shares
   * @signature balanceOf(address)
   * @method function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Shares` contract call for the `decimals` function.
   *
   * @contract Shares
   * @signature decimals()
   * @method function decimals() view returns (uint8)
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `Shares` contract call for the `fundFactory` function.
   *
   * @contract Shares
   * @signature fundFactory()
   * @method function fundFactory() view returns (address)
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `getHub` function.
   *
   * @contract Shares
   * @signature getHub()
   * @method function getHub() view returns (address)
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `getRoutes` function.
   *
   * @contract Shares
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
   * `Shares` contract call for the `getSharesInvestmentAssets` function.
   *
   * @contract Shares
   * @signature getSharesInvestmentAssets()
   * @method function getSharesInvestmentAssets() view returns (address[])
   */
  getSharesInvestmentAssets: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Shares` contract call for the `initialized` function.
   *
   * @contract Shares
   * @signature initialized()
   * @method function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Shares` contract call for the `isSharesInvestmentAsset` function.
   *
   * @contract Shares
   * @signature isSharesInvestmentAsset(address)
   * @method function isSharesInvestmentAsset(address) view returns (bool)
   */
  isSharesInvestmentAsset: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Shares` contract call for the `name` function.
   *
   * @contract Shares
   * @signature name()
   * @method function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `owner` function.
   *
   * @contract Shares
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `priceSource` function.
   *
   * @contract Shares
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `symbol` function.
   *
   * @contract Shares
   * @signature symbol()
   * @method function symbol() view returns (string)
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `totalSupply` function.
   *
   * @contract Shares
   * @signature totalSupply()
   * @method function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Shares` contract transaction for `approve` function.
   *
   * @contract Shares
   * @signature approve(address,uint256)
   * @method function approve(address,uint256) returns (bool)
   */
  approve: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `buyShares` function.
   *
   * @contract Shares
   * @signature buyShares(address,address,uint256)
   * @method function buyShares(address,address,uint256) returns (uint256)
   */
  buyShares: (
    _buyer: string,
    _investmentAsset: string,
    _sharesQuantity: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `createFor` function.
   *
   * @contract Shares
   * @signature createFor(address,uint256)
   * @method function createFor(address,uint256)
   */
  createFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `decreaseApproval` function.
   *
   * @contract Shares
   * @signature decreaseApproval(address,uint256)
   * @method function decreaseApproval(address,uint256) returns (bool)
   */
  decreaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `disableSharesInvestmentAssets` function.
   *
   * @contract Shares
   * @signature disableSharesInvestmentAssets(address[])
   * @method function disableSharesInvestmentAssets(address[])
   */
  disableSharesInvestmentAssets: (_assets: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `enableSharesInvestmentAssets` function.
   *
   * @contract Shares
   * @signature enableSharesInvestmentAssets(address[])
   * @method function enableSharesInvestmentAssets(address[])
   */
  enableSharesInvestmentAssets: (_assets: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `increaseApproval` function.
   *
   * @contract Shares
   * @signature increaseApproval(address,uint256)
   * @method function increaseApproval(address,uint256) returns (bool)
   */
  increaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `initialize` function.
   *
   * @contract Shares
   * @signature initialize(address[7])
   * @method function initialize(address[7])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `redeemShares` function.
   *
   * @contract Shares
   * @signature redeemShares()
   * @method function redeemShares()
   */
  redeemShares: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `redeemSharesQuantity` function.
   *
   * @contract Shares
   * @signature redeemSharesQuantity(uint256)
   * @method function redeemSharesQuantity(uint256)
   */
  redeemSharesQuantity: (_sharesQuantity: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `redeemSharesWithConstraints` function.
   *
   * @contract Shares
   * @signature redeemSharesWithConstraints(uint256,address[])
   * @method function redeemSharesWithConstraints(uint256,address[])
   */
  redeemSharesWithConstraints: (
    _sharesQuantity: ethers.BigNumberish,
    _assets: string[],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `setAuthority` function.
   *
   * @contract Shares
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `setOwner` function.
   *
   * @contract Shares
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `transfer` function.
   *
   * @contract Shares
   * @signature transfer(address,uint256)
   * @method function transfer(address,uint256) returns (bool)
   */
  transfer: (to: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `transferFrom` function.
   *
   * @contract Shares
   * @signature transferFrom(address,address,uint256)
   * @method function transferFrom(address,address,uint256) returns (bool)
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
