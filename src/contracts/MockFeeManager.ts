import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockFeeManager extends Contract {
  public readonly ethers: MockFeeManagerEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockFeeManager` contract call for the `authority` function.
   *
   * @contract MockFeeManager
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract call for the `fundFactory` function.
   *
   * @contract MockFeeManager
   * @signature fundFactory()
   * @method function fundFactory() view returns (address)
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract call for the `getHub` function.
   *
   * @contract MockFeeManager
   * @signature getHub()
   * @method function getHub() view returns (address)
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract call for the `getRoutes` function.
   *
   * @contract MockFeeManager
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
   * `MockFeeManager` contract call for the `initialized` function.
   *
   * @contract MockFeeManager
   * @signature initialized()
   * @method function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockFeeManager` contract call for the `owner` function.
   *
   * @contract MockFeeManager
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract call for the `priceSource` function.
   *
   * @contract MockFeeManager
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockFeeManager` contract transaction for `initialize` function.
   *
   * @contract MockFeeManager
   * @signature initialize(address[7])
   * @method function initialize(address[7])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `performanceFeeAmount` function.
   *
   * @contract MockFeeManager
   * @signature performanceFeeAmount()
   * @method function performanceFeeAmount() returns (uint256)
   */
  performanceFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `rewardManagementFee` function.
   *
   * @contract MockFeeManager
   * @signature rewardManagementFee()
   * @method function rewardManagementFee()
   */
  rewardManagementFee: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `setAuthority` function.
   *
   * @contract MockFeeManager
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `setOwner` function.
   *
   * @contract MockFeeManager
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `setPerformanceFeeAmount` function.
   *
   * @contract MockFeeManager
   * @signature setPerformanceFeeAmount(uint256)
   * @method function setPerformanceFeeAmount(uint256)
   */
  setPerformanceFeeAmount: (_amt: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `setTotalFeeAmount` function.
   *
   * @contract MockFeeManager
   * @signature setTotalFeeAmount(uint256)
   * @method function setTotalFeeAmount(uint256)
   */
  setTotalFeeAmount: (_amt: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockFeeManager` contract transaction for `totalFeeAmount` function.
   *
   * @contract MockFeeManager
   * @signature totalFeeAmount()
   * @method function totalFeeAmount() returns (uint256)
   */
  totalFeeAmount: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub, address _denominationAsset, address[] _fees, uint256[] _periods, uint256 _rates, address registry)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function authority() view returns (address)',
    'function fundFactory() view returns (address)',
    'function getHub() view returns (address)',
    'function getRoutes() view returns (tuple(address accounting, address feeManager, address policyManager, address shares, address vault, address registry, address fundFactory))',
    'function initialize(address[7] _spokes)',
    'function initialized() view returns (bool)',
    'function owner() view returns (address)',
    'function performanceFeeAmount() returns (uint256)',
    'function priceSource() view returns (address)',
    'function rewardManagementFee()',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function setPerformanceFeeAmount(uint256 _amt)',
    'function setTotalFeeAmount(uint256 _amt)',
    'function totalFeeAmount() returns (uint256)',
  ];
}

export interface MockFeeManagerEthersContract extends ethers.Contract {
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
  'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'rewardManagementFee()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setPerformanceFeeAmount(uint256)': (
    _amt: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setTotalFeeAmount(uint256)': (
    _amt: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'totalFeeAmount()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  functions: {
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
    'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'rewardManagementFee()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'setPerformanceFeeAmount(uint256)': (
      _amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setTotalFeeAmount(uint256)': (
      _amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'totalFeeAmount()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
    'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'rewardManagementFee()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setPerformanceFeeAmount(uint256)': (_amt: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'setTotalFeeAmount(uint256)': (_amt: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'totalFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  estimateGas: {
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'rewardManagementFee()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setPerformanceFeeAmount(uint256)': (
      _amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setTotalFeeAmount(uint256)': (
      _amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'totalFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'performanceFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'rewardManagementFee()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setPerformanceFeeAmount(uint256)': (
      _amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setTotalFeeAmount(uint256)': (
      _amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'totalFeeAmount()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
