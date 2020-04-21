import { ethers } from 'ethers';
import { Contract, TransactionWrapper, AddressLike, DeploymentTransactionWrapper } from './../..';

export class FeeManager extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(address _hub, address _denominationAsset, address[] _fees, uint256[] _rates, uint256[] _periods, address _registry)',
    'event FeeRegistration(address fee)',
    'event FeeReward(uint256 shareQuantity)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function authority() view returns (address)',
    'function engine() view returns (address)',
    'function feeIsRegistered(address) view returns (bool)',
    'function fees(uint256) view returns (address)',
    'function hub() view returns (address)',
    'function initialize(address[11] _spokes)',
    'function initialized() view returns (bool)',
    'function managementFeeAmount() returns (uint256)',
    'function mlnToken() view returns (address)',
    'function owner() view returns (address)',
    'function performanceFeeAmount() returns (uint256)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function rewardAllFees()',
    'function rewardManagementFee()',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function totalFeeAmount() returns (uint256 total)',
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
    _fees: AddressLike[],
    _rates: ethers.BigNumber[],
    _periods: ethers.BigNumber[],
    _registry: AddressLike,
  ) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [
      _hub,
      _denominationAsset,
      _fees,
      _rates,
      _periods,
      _registry,
    ]);
  }

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
   * function feeIsRegistered(address) view returns (bool)
   * ```
   *
   */
  feeIsRegistered: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function fees(uint256) view returns (address)
   * ```
   *
   */
  fees: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
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
   * function managementFeeAmount() returns (uint256)
   * ```
   *
   */
  managementFeeAmount: () => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function performanceFeeAmount() returns (uint256)
   * ```
   *
   */
  performanceFeeAmount: () => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function rewardAllFees()
   * ```
   *
   */
  rewardAllFees: () => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function rewardManagementFee()
   * ```
   *
   */
  rewardManagementFee: () => TransactionWrapper<ethers.Overrides>;
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
   * function totalFeeAmount() returns (uint256)
   * ```
   *
   */
  totalFeeAmount: () => TransactionWrapper<ethers.Overrides>;
}
