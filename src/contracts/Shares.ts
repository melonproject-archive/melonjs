import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '..';

/**
 * Buy and sell shares for a Melon fund
 * @title Shares Contract
 * @author Melon Council DAO <security@meloncoucil.io>
 */
export class SharesContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
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

  /**
   * Constructs a new contract instance.
   *
   * @param contract The contract interface.
   * @param addressOrName The address or name of the contract.
   * @param signerOrProvider The ethers.js signer or provider instance to use.
   */
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * Function to check the amount of tokens that an owner allowed to a spender.
   *
   * ```solidity
   * function allowance(address,address) view returns (uint256)
   * ```
   * @param _owner address The address which owns the funds.
   * @param _spender address The address which will spend the funds.
   * @returns A uint256 specifying the amount of tokens still available for the spender.
   *
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * Gets the balance of the specified address.
   *
   * ```solidity
   * function balanceOf(address) view returns (uint256)
   * ```
   * @param _owner The address to query the the balance of.
   * @returns An uint256 representing the amount owned by the passed address.
   *
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function decimals() view returns (uint8)
   * ```
   *
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;
  /**
   * ```solidity
   * function fundFactory() view returns (address)
   * ```
   *
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getHub() view returns (address)
   * ```
   *
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getRoutes() view returns (tuple(address,address,address,address,address,address,address))
   * ```
   *
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
   *
   */
  getSharesInvestmentAssets: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  /**
   * ```solidity
   * function initialized() view returns (bool)
   * ```
   *
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * Confirm whether asset can be used to buy shares
   *
   * ```solidity
   * function isSharesInvestmentAsset(address) view returns (bool)
   * ```
   * @param _asset The asset to confirm
   * @returns True if the asset can be used to buy shares
   *
   */
  isSharesInvestmentAsset: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function name() view returns (string)
   * ```
   *
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function owner() view returns (address)
   * ```
   *
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   *
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function symbol() view returns (string)
   * ```
   *
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * Total number of tokens in existence
   *
   * ```solidity
   * function totalSupply() view returns (uint256)
   * ```
   *
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function approve(address,uint256) returns (bool)
   * ```
   *
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
   * @param _buyer The for which to buy shares
   * @param _investmentAsset The asset with which to buy shares
   * @param _sharesQuantity The desired amount of shares
   * @returns The amount of investment asset used to buy the desired shares
   *
   */
  buyShares: (
    _buyer: string,
    _investmentAsset: string,
    _sharesQuantity: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function createFor(address,uint256)
   * ```
   *
   */
  createFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function decreaseApproval(address,uint256) returns (bool)
   * ```
   *
   */
  decreaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * Disable the buying of shares with specific assets
   *
   * ```solidity
   * function disableSharesInvestmentAssets(address[])
   * ```
   * @param _assets The assets for which to disable the buying of shares
   */
  disableSharesInvestmentAssets: (_assets: string[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * Enable the buying of shares with specific assets
   *
   * ```solidity
   * function enableSharesInvestmentAssets(address[])
   * ```
   * @param _assets The assets for which to disable the buying of shares
   */
  enableSharesInvestmentAssets: (_assets: string[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function increaseApproval(address,uint256) returns (bool)
   * ```
   *
   */
  increaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function initialize(address[7])
   * ```
   *
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
   *
   */
  redeemShares: () => TransactionWrapper<ethers.Overrides>;
  /**
   * Redeem a specified quantity of the sender's shares for a proportionate slice of the fund's assets
   *
   * ```solidity
   * function redeemSharesQuantity(uint256)
   * ```
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
   * @param _assets The assets to receive from the redemption
   * @param _sharesQuantity The amount of shares to redeem
   */
  redeemSharesWithConstraints: (
    _sharesQuantity: ethers.BigNumberish,
    _assets: string[],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setAuthority(address)
   * ```
   *
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setOwner(address)
   * ```
   *
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function transfer(address,uint256) returns (bool)
   * ```
   *
   */
  transfer: (to: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function transferFrom(address,address,uint256) returns (bool)
   * ```
   *
   */
  transferFrom: (from: string, to: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
}
