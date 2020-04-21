import { ethers } from 'ethers';
import { Contract, TransactionWrapper, AddressLike, DeploymentTransactionWrapper } from './../..';

export class Participation extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(address _hub, address[] _defaultAssets, address _registry)',
    'event AmguPaid(address indexed payer, uint256 totalAmguPaidInEth, uint256 amguChargableGas, uint256 incentivePaid)',
    'event CancelRequest(address indexed requestOwner)',
    'event DisableInvestment(address[] assets)',
    'event EnableInvestment(address[] asset)',
    'event InvestmentRequest(address indexed requestOwner, address indexed investmentAsset, uint256 requestedShares, uint256 investmentAmount)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event Redemption(address indexed redeemer, address[] assets, uint256[] assetQuantities, uint256 redeemedShares)',
    'event RequestExecution(address indexed requestOwner, address indexed executor, address indexed investmentAsset, uint256 investmentAmount, uint256 requestedShares)',
    'function REQUEST_LIFESPAN() view returns (uint256)',
    'function SHARES_DECIMALS() view returns (uint256)',
    'function authority() view returns (address)',
    'function cancelRequest() payable',
    'function cancelRequestFor(address requestOwner) payable',
    'function disableInvestment(address[] _assets)',
    'function enableInvestment(address[] _assets)',
    'function engine() view returns (address)',
    'function executeRequestFor(address requestOwner) payable',
    'function getHistoricalInvestors() view returns (address[])',
    'function getOwedPerformanceFees(uint256 shareQuantity) returns (uint256 remainingShareQuantity)',
    'function hasExpiredRequest(address _who) view returns (bool)',
    'function hasInvested(address) view returns (bool)',
    'function hasRequest(address _who) view returns (bool)',
    'function hasValidRequest(address _who) view returns (bool)',
    'function historicalInvestors(uint256) view returns (address)',
    'function hub() view returns (address)',
    'function initialize(address[11] _spokes)',
    'function initialized() view returns (bool)',
    'function investAllowed(address) view returns (bool)',
    'function mlnToken() view returns (address)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function redeem()',
    'function redeemQuantity(uint256 shareQuantity)',
    'function redeemWithConstraints(uint256 shareQuantity, address[] requestedAssets)',
    'function registry() view returns (address)',
    'function requestInvestment(uint256 requestedShares, uint256 investmentAmount, address investmentAsset) payable',
    'function requests(address) view returns (address investmentAsset, uint256 investmentAmount, uint256 requestedShares, uint256 timestamp)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
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
    _defaultAssets: AddressLike[],
    _registry: AddressLike,
  ) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [_hub, _defaultAssets, _registry]);
  }

  /**
   * ```solidity
   * function REQUEST_LIFESPAN() view returns (uint256)
   * ```
   *
   */
  REQUEST_LIFESPAN: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function SHARES_DECIMALS() view returns (uint256)
   * ```
   *
   */
  SHARES_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function engine() view returns (address)
   * ```
   *
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function getHistoricalInvestors() view returns (address[])
   * ```
   *
   */
  getHistoricalInvestors: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike[]>;
  /**
   * ```solidity
   * function hasExpiredRequest(address) view returns (bool)
   * ```
   *
   */
  hasExpiredRequest: (_who: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function hasInvested(address) view returns (bool)
   * ```
   *
   */
  hasInvested: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function hasRequest(address) view returns (bool)
   * ```
   *
   */
  hasRequest: (_who: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function hasValidRequest(address) view returns (bool)
   * ```
   *
   */
  hasValidRequest: (_who: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function historicalInvestors(uint256) view returns (address)
   * ```
   *
   */
  historicalInvestors: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
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
   * function investAllowed(address) view returns (bool)
   * ```
   *
   */
  investAllowed: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   *
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
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
   * function requests(address) view returns (address, uint256, uint256, uint256)
   * ```
   *
   */
  requests: (
    $$0: AddressLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    investmentAsset: AddressLike;
    investmentAmount: ethers.BigNumber;
    requestedShares: ethers.BigNumber;
    timestamp: ethers.BigNumber;
  }>;
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
   * function version() view returns (address)
   * ```
   *
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function cancelRequest() payable
   * ```
   *
   */
  cancelRequest: () => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function cancelRequestFor(address) payable
   * ```
   *
   */
  cancelRequestFor: (requestOwner: AddressLike) => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function disableInvestment(address[])
   * ```
   *
   */
  disableInvestment: (_assets: AddressLike[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function enableInvestment(address[])
   * ```
   *
   */
  enableInvestment: (_assets: AddressLike[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function executeRequestFor(address) payable
   * ```
   *
   */
  executeRequestFor: (requestOwner: AddressLike) => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function getOwedPerformanceFees(uint256) returns (uint256)
   * ```
   *
   */
  getOwedPerformanceFees: (shareQuantity: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
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
   * function redeem()
   * ```
   *
   */
  redeem: () => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function redeemQuantity(uint256)
   * ```
   *
   */
  redeemQuantity: (shareQuantity: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function redeemWithConstraints(uint256,address[])
   * ```
   *
   */
  redeemWithConstraints: (
    shareQuantity: ethers.BigNumberish,
    requestedAssets: AddressLike[],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function requestInvestment(uint256,uint256,address) payable
   * ```
   *
   */
  requestInvestment: (
    requestedShares: ethers.BigNumberish,
    investmentAmount: ethers.BigNumberish,
    investmentAsset: AddressLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;
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
}
