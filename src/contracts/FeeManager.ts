import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class FeeManager extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `FeeManager` contract call for the `authority` function.
   *
   * @contract FeeManager
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `engine` function.
   *
   * @contract FeeManager
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `feeIsRegistered` function.
   *
   * @contract FeeManager
   * @signature function feeIsRegistered(address) view returns (bool)
   */
  feeIsRegistered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `FeeManager` contract call for the `fees` function.
   *
   * @contract FeeManager
   * @signature function fees(uint256) view returns (address)
   */
  fees: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `hub` function.
   *
   * @contract FeeManager
   * @signature function hub() view returns (address)
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `initialized` function.
   *
   * @contract FeeManager
   * @signature function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `FeeManager` contract call for the `mlnToken` function.
   *
   * @contract FeeManager
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `owner` function.
   *
   * @contract FeeManager
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `priceSource` function.
   *
   * @contract FeeManager
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `registry` function.
   *
   * @contract FeeManager
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `routes` function.
   *
   * @contract FeeManager
   * @signature function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
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
   * `FeeManager` contract call for the `version` function.
   *
   * @contract FeeManager
   * @signature function version() view returns (address)
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract transaction for `initialize` function.
   *
   * @contract FeeManager
   * @signature function initialize(address[11])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `managementFeeAmount` function.
   *
   * @contract FeeManager
   * @signature function managementFeeAmount() returns (uint256)
   */
  managementFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `performanceFeeAmount` function.
   *
   * @contract FeeManager
   * @signature function performanceFeeAmount() returns (uint256)
   */
  performanceFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `rewardAllFees` function.
   *
   * @contract FeeManager
   * @signature function rewardAllFees()
   */
  rewardAllFees: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `rewardManagementFee` function.
   *
   * @contract FeeManager
   * @signature function rewardManagementFee()
   */
  rewardManagementFee: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `setAuthority` function.
   *
   * @contract FeeManager
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `setOwner` function.
   *
   * @contract FeeManager
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `totalFeeAmount` function.
   *
   * @contract FeeManager
   * @signature function totalFeeAmount() returns (uint256)
   */
  totalFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
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
}
