import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockFeeManager extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockFeeManager` contract call for the `authority` function.
   *
   * @contract MockFeeManager
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract call for the `engine` function.
   *
   * @contract MockFeeManager
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract call for the `hub` function.
   *
   * @contract MockFeeManager
   * @signature function hub() view returns (address)
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract call for the `initialized` function.
   *
   * @contract MockFeeManager
   * @signature function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockFeeManager` contract call for the `mlnToken` function.
   *
   * @contract MockFeeManager
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract call for the `owner` function.
   *
   * @contract MockFeeManager
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract call for the `priceSource` function.
   *
   * @contract MockFeeManager
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract call for the `registry` function.
   *
   * @contract MockFeeManager
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract call for the `routes` function.
   *
   * @contract MockFeeManager
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
   * `MockFeeManager` contract call for the `version` function.
   *
   * @contract MockFeeManager
   * @signature function version() view returns (address)
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract transaction for `initialize` function.
   *
   * @contract MockFeeManager
   * @signature function initialize(address[11])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `performanceFeeAmount` function.
   *
   * @contract MockFeeManager
   * @signature function performanceFeeAmount() returns (uint256)
   */
  performanceFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `rewardManagementFee` function.
   *
   * @contract MockFeeManager
   * @signature function rewardManagementFee()
   */
  rewardManagementFee: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `setAuthority` function.
   *
   * @contract MockFeeManager
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `setOwner` function.
   *
   * @contract MockFeeManager
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `setPerformanceFeeAmount` function.
   *
   * @contract MockFeeManager
   * @signature function setPerformanceFeeAmount(uint256)
   */
  setPerformanceFeeAmount: (_amt: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `setTotalFeeAmount` function.
   *
   * @contract MockFeeManager
   * @signature function setTotalFeeAmount(uint256)
   */
  setTotalFeeAmount: (_amt: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `totalFeeAmount` function.
   *
   * @contract MockFeeManager
   * @signature function totalFeeAmount() returns (uint256)
   */
  totalFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub, address _denominationAsset, address[] _fees, uint256[] _periods, uint256 _rates, address registry)',
    'event AmguPaid(address indexed payer, uint256 totalAmguPaidInEth, uint256 amguChargableGas, uint256 incentivePaid)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function authority() view returns (address)',
    'function engine() view returns (address)',
    'function hub() view returns (address)',
    'function initialize(address[11] _spokes)',
    'function initialized() view returns (bool)',
    'function mlnToken() view returns (address)',
    'function owner() view returns (address)',
    'function performanceFeeAmount() returns (uint256)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function rewardManagementFee()',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function setPerformanceFeeAmount(uint256 _amt)',
    'function setTotalFeeAmount(uint256 _amt)',
    'function totalFeeAmount() returns (uint256)',
    'function version() view returns (address)',
  ];
}
