import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class FeeManager extends Contract {
  public readonly ethers: FeeManagerEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `FeeManager` contract call for the `authority` function.
   *
   * @contract FeeManager
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `feeIsRegistered` function.
   *
   * @contract FeeManager
   * @signature feeIsRegistered(address)
   * @method function feeIsRegistered(address) view returns (bool)
   */
  feeIsRegistered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `FeeManager` contract call for the `fees` function.
   *
   * @contract FeeManager
   * @signature fees(uint256)
   * @method function fees(uint256) view returns (address)
   */
  fees: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `fundFactory` function.
   *
   * @contract FeeManager
   * @signature fundFactory()
   * @method function fundFactory() view returns (address)
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `getHub` function.
   *
   * @contract FeeManager
   * @signature getHub()
   * @method function getHub() view returns (address)
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `getRoutes` function.
   *
   * @contract FeeManager
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
   * `FeeManager` contract call for the `initialized` function.
   *
   * @contract FeeManager
   * @signature initialized()
   * @method function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `FeeManager` contract call for the `owner` function.
   *
   * @contract FeeManager
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract call for the `priceSource` function.
   *
   * @contract FeeManager
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeManager` contract transaction for `initialize` function.
   *
   * @contract FeeManager
   * @signature initialize(address[7])
   * @method function initialize(address[7])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `managementFeeAmount` function.
   *
   * @contract FeeManager
   * @signature managementFeeAmount()
   * @method function managementFeeAmount() returns (uint256)
   */
  managementFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `performanceFeeAmount` function.
   *
   * @contract FeeManager
   * @signature performanceFeeAmount()
   * @method function performanceFeeAmount() returns (uint256)
   */
  performanceFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `rewardAllFees` function.
   *
   * @contract FeeManager
   * @signature rewardAllFees()
   * @method function rewardAllFees()
   */
  rewardAllFees: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `rewardManagementFee` function.
   *
   * @contract FeeManager
   * @signature rewardManagementFee()
   * @method function rewardManagementFee()
   */
  rewardManagementFee: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `setAuthority` function.
   *
   * @contract FeeManager
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `setOwner` function.
   *
   * @contract FeeManager
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeManager` contract transaction for `totalFeeAmount` function.
   *
   * @contract FeeManager
   * @signature totalFeeAmount()
   * @method function totalFeeAmount() returns (uint256)
   */
  totalFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub, address _denominationAsset, address[] _fees, uint256[] _rates, uint256[] _periods, address _registry)',
    'event FeeRegistration(address fee)',
    'event FeeReward(uint256 shareQuantity)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function authority() view returns (address)',
    'function feeIsRegistered(address) view returns (bool)',
    'function fees(uint256) view returns (address)',
    'function fundFactory() view returns (address)',
    'function getHub() view returns (address)',
    'function getRoutes() view returns (tuple(address accounting, address feeManager, address policyManager, address shares, address vault, address registry, address fundFactory))',
    'function initialize(address[7] _spokes)',
    'function initialized() view returns (bool)',
    'function managementFeeAmount() returns (uint256)',
    'function owner() view returns (address)',
    'function performanceFeeAmount() returns (uint256)',
    'function priceSource() view returns (address)',
    'function rewardAllFees()',
    'function rewardManagementFee()',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function totalFeeAmount() returns (uint256 total)',
  ];
}

export interface FeeManagerEthersContract extends ethers.Contract {
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'feeIsRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'fees(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
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
  'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'initialize(address[7])': (
    _spokes: [string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'managementFeeAmount()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'rewardAllFees()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'rewardManagementFee()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'totalFeeAmount()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'feeIsRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'fees(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
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
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'managementFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'rewardAllFees()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'rewardManagementFee()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'totalFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  estimateGas: {
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'managementFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'rewardAllFees()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'rewardManagementFee()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'totalFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'managementFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'rewardAllFees()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'rewardManagementFee()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'totalFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
