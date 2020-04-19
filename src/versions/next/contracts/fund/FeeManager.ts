import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

/** Manages and allocates fees for a particular fund */
export class FeeManagerContract extends Contract {
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
   * Constructs a new contract instance.
   *
   * @param addressOrName The address or name of the contract.
   * @param signerOrProvider The ethers.js signer or provider instance to use.
   */
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function engine() view returns (address)
   * ```
   *
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function feeIsRegistered(address) view returns (bool)
   * ```
   *
   */
  feeIsRegistered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function fees(uint256) view returns (address)
   * ```
   *
   */
  fees: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function hub() view returns (address)
   * ```
   *
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
   * function registry() view returns (address)
   * ```
   *
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
   * ```
   *
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
   * ```solidity
   * function version() view returns (address)
   * ```
   *
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function initialize(address[11])
   * ```
   *
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * Convenience functionConvention that management fee is 0
   *
   * ```solidity
   * function managementFeeAmount() returns (uint256)
   * ```
   *
   */
  managementFeeAmount: () => TransactionWrapper<ethers.Overrides>;
  /**
   * Convenience functionConvention that performace fee is 1
   *
   * ```solidity
   * function performanceFeeAmount() returns (uint256)
   * ```
   *
   */
  performanceFeeAmount: () => TransactionWrapper<ethers.Overrides>;
  /**
   * Used when calling from other components
   *
   * ```solidity
   * function rewardAllFees()
   * ```
   *
   */
  rewardAllFees: () => TransactionWrapper<ethers.Overrides>;
  /**
   * Convenience function; anyone can reward management fee any timeConvention that management fee is 0
   *
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
   * function totalFeeAmount() returns (uint256)
   * ```
   *
   */
  totalFeeAmount: () => TransactionWrapper<ethers.Overrides>;
}
