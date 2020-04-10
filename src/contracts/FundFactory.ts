import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

/**
 * `FundFactory` contract
 *
 * Creates fund routes and links them together
 */
export class FundFactory extends Contract {
  public readonly ethers: FundFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `FundFactory` contract call for `REGISTRY` function.
   *
   * ```solidity
   * function REGISTRY() view returns (address)
   * ```
   */
  REGISTRY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for `accountingFactory` function.
   *
   * ```solidity
   * function accountingFactory() view returns (address)
   * ```
   */
  accountingFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for `authority` function.
   *
   * ```solidity
   * function authority() view returns (address)
   * ```
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for `childExists` function.
   *
   * ```solidity
   * function childExists(address) view returns (bool)
   * ```
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `FundFactory` contract call for `feeManagerFactory` function.
   *
   * ```solidity
   * function feeManagerFactory() view returns (address)
   * ```
   */
  feeManagerFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for `funds` function.
   *
   * ```solidity
   * function funds(uint256) view returns (address)
   * ```
   */
  funds: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for `getExchangesInfo` function.
   *
   * ```solidity
   * function getExchangesInfo(address) view returns (address[])
   * ```
   */
  getExchangesInfo: (_user: string, $$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `FundFactory` contract call for `getFundById` function.
   *
   * ```solidity
   * function getFundById(uint256) view returns (address)
   * ```
   */
  getFundById: (_id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for `getLastFundId` function.
   *
   * ```solidity
   * function getLastFundId() view returns (uint256)
   * ```
   */
  getLastFundId: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FundFactory` contract call for `isInstance` function.
   *
   * ```solidity
   * function isInstance(address) view returns (bool)
   * ```
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `FundFactory` contract call for `managersToHubs` function.
   *
   * ```solidity
   * function managersToHubs(address) view returns (address)
   * ```
   */
  managersToHubs: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for `managersToRoutes` function.
   *
   * ```solidity
   * function managersToRoutes(address) view returns (address, address, address, address, address, address, address)
   * ```
   */
  managersToRoutes: (
    $$0: string,
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
   * `FundFactory` contract call for `managersToSettings` function.
   *
   * ```solidity
   * function managersToSettings(address) view returns (string, address)
   * ```
   */
  managersToSettings: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ name: string; denominationAsset: string }>;

  /**
   * `FundFactory` contract call for `owner` function.
   *
   * ```solidity
   * function owner() view returns (address)
   * ```
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for `policyManagerFactory` function.
   *
   * ```solidity
   * function policyManagerFactory() view returns (address)
   * ```
   */
  policyManagerFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for `sharesFactory` function.
   *
   * ```solidity
   * function sharesFactory() view returns (address)
   * ```
   */
  sharesFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for `vaultFactory` function.
   *
   * ```solidity
   * function vaultFactory() view returns (address)
   * ```
   */
  vaultFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for `beginSetup` function.
   *
   * ```solidity
   * function beginSetup(string,address[],uint256[],uint256[],address[],address[],address,address[])
   * ```
   */
  beginSetup: (
    _name: string,
    _fees: string[],
    _feeRates: ethers.BigNumber[],
    _feePeriods: ethers.BigNumber[],
    _exchanges: string[],
    _adapters: string[],
    _denominationAsset: string,
    _defaultInvestmentAssets: string[],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FundFactory` contract call for `completeSetup` function.
   *
   * ```solidity
   * function completeSetup() payable
   * ```
   */
  completeSetup: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `completeSetupFor` function.
   *
   * ```solidity
   * function completeSetupFor(address) payable
   * ```
   */
  completeSetupFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `createAccounting` function.
   *
   * ```solidity
   * function createAccounting() payable
   * ```
   */
  createAccounting: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `createAccountingFor` function.
   *
   * ```solidity
   * function createAccountingFor(address) payable
   * ```
   */
  createAccountingFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `createFeeManager` function.
   *
   * ```solidity
   * function createFeeManager() payable
   * ```
   */
  createFeeManager: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `createFeeManagerFor` function.
   *
   * ```solidity
   * function createFeeManagerFor(address) payable
   * ```
   */
  createFeeManagerFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `createPolicyManager` function.
   *
   * ```solidity
   * function createPolicyManager() payable
   * ```
   */
  createPolicyManager: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `createPolicyManagerFor` function.
   *
   * ```solidity
   * function createPolicyManagerFor(address) payable
   * ```
   */
  createPolicyManagerFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `createShares` function.
   *
   * ```solidity
   * function createShares() payable
   * ```
   */
  createShares: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `createSharesFor` function.
   *
   * ```solidity
   * function createSharesFor(address) payable
   * ```
   */
  createSharesFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `createVault` function.
   *
   * ```solidity
   * function createVault() payable
   * ```
   */
  createVault: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `createVaultFor` function.
   *
   * ```solidity
   * function createVaultFor(address) payable
   * ```
   */
  createVaultFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract call for `setAuthority` function.
   *
   * ```solidity
   * function setAuthority(address)
   * ```
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FundFactory` contract call for `setOwner` function.
   *
   * ```solidity
   * function setOwner(address)
   * ```
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FundFactory` contract call for `shutDownFund` function.
   *
   * ```solidity
   * function shutDownFund(address)
   * ```
   */
  shutDownFund: (_hub: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _accountingFactory, address _feeManagerFactory, address _sharesFactory, address _vaultFactory, address _policyManagerFactory, address _registry, address _postDeployOwner)',
    'event AmguPaid(address indexed payer, uint256 totalAmguPaidInEth, uint256 amguChargableGas)',
    'event IncentivePaid(address indexed payer, uint256 incentiveAmount)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event NewFund(address indexed manager, address indexed hub, address[7] routes)',
    'event NewInstance(address indexed hub, address indexed instance)',
    'function REGISTRY() view returns (address)',
    'function accountingFactory() view returns (address)',
    'function authority() view returns (address)',
    'function beginSetup(string _name, address[] _fees, uint256[] _feeRates, uint256[] _feePeriods, address[] _exchanges, address[] _adapters, address _denominationAsset, address[] _defaultInvestmentAssets)',
    'function childExists(address) view returns (bool)',
    'function completeSetup() payable',
    'function completeSetupFor(address _manager) payable',
    'function createAccounting() payable',
    'function createAccountingFor(address _manager) payable',
    'function createFeeManager() payable',
    'function createFeeManagerFor(address _manager) payable',
    'function createPolicyManager() payable',
    'function createPolicyManagerFor(address _manager) payable',
    'function createShares() payable',
    'function createSharesFor(address _manager) payable',
    'function createVault() payable',
    'function createVaultFor(address _manager) payable',
    'function feeManagerFactory() view returns (address)',
    'function funds(uint256) view returns (address)',
    'function getExchangesInfo(address _user) view returns (address[])',
    'function getFundById(uint256 _id) view returns (address)',
    'function getLastFundId() view returns (uint256)',
    'function isInstance(address _child) view returns (bool)',
    'function managersToHubs(address) view returns (address)',
    'function managersToRoutes(address) view returns (address accounting, address feeManager, address policyManager, address shares, address vault, address registry, address fundFactory)',
    'function managersToSettings(address) view returns (string name, address denominationAsset)',
    'function owner() view returns (address)',
    'function policyManagerFactory() view returns (address)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function sharesFactory() view returns (address)',
    'function shutDownFund(address _hub)',
    'function vaultFactory() view returns (address)',
  ];
}

export interface FundFactoryEthersContract extends ethers.Contract {
  'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'accountingFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'childExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'feeManagerFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'funds(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'getExchangesInfo(address)': (_user: string, $$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getFundById(uint256)': (_id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'getLastFundId()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'isInstance(address)': (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'managersToHubs(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'managersToRoutes(address)': (
    $$0: string,
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
  'managersToSettings(address)': (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ name: string; denominationAsset: string }>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'policyManagerFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'sharesFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'vaultFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'beginSetup(string,address[],uint256[],uint256[],address[],address[],address,address[])': (
    _name: string,
    _fees: string[],
    _feeRates: ethers.BigNumber[],
    _feePeriods: ethers.BigNumber[],
    _exchanges: string[],
    _adapters: string[],
    _denominationAsset: string,
    _defaultInvestmentAssets: string[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'completeSetup()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
  'completeSetupFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'createAccounting()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
  'createAccountingFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'createFeeManager()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
  'createFeeManagerFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'createPolicyManager()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
  'createPolicyManagerFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'createShares()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
  'createSharesFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'createVault()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
  'createVaultFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setAuthority(address)': (
    authority_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setOwner(address)': (
    owner_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'shutDownFund(address)': (
    _hub: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'accountingFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'childExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'feeManagerFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'funds(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getExchangesInfo(address)': (_user: string, $$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getFundById(uint256)': (_id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getLastFundId()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'isInstance(address)': (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'managersToHubs(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'managersToRoutes(address)': (
      $$0: string,
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
    'managersToSettings(address)': (
      $$0: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ name: string; denominationAsset: string }>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'policyManagerFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'sharesFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'vaultFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'beginSetup(string,address[],uint256[],uint256[],address[],address[],address,address[])': (
      _name: string,
      _fees: string[],
      _feeRates: ethers.BigNumber[],
      _feePeriods: ethers.BigNumber[],
      _exchanges: string[],
      _adapters: string[],
      _denominationAsset: string,
      _defaultInvestmentAssets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'completeSetup()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
    'completeSetupFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'createAccounting()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
    'createAccountingFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'createFeeManager()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
    'createFeeManagerFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'createPolicyManager()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
    'createPolicyManagerFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'createShares()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
    'createSharesFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'createVault()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.providers.TransactionResponse>;
    'createVaultFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setOwner(address)': (
      owner_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'shutDownFund(address)': (
      _hub: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'accountingFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'childExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'feeManagerFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'funds(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getExchangesInfo(address)': (_user: string, $$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getFundById(uint256)': (_id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getLastFundId()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'isInstance(address)': (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'managersToHubs(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'managersToRoutes(address)': (
      $$0: string,
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
    'managersToSettings(address)': (
      $$0: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ name: string; denominationAsset: string }>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'policyManagerFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'sharesFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'vaultFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'beginSetup(string,address[],uint256[],uint256[],address[],address[],address,address[])': (
      _name: string,
      _fees: string[],
      _feeRates: ethers.BigNumber[],
      _feePeriods: ethers.BigNumber[],
      _exchanges: string[],
      _adapters: string[],
      _denominationAsset: string,
      _defaultInvestmentAssets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'completeSetup()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
    'completeSetupFor(address)': (_manager: string, $$overrides?: ethers.PayableOverrides) => Promise<void>;
    'createAccounting()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
    'createAccountingFor(address)': (_manager: string, $$overrides?: ethers.PayableOverrides) => Promise<void>;
    'createFeeManager()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
    'createFeeManagerFor(address)': (_manager: string, $$overrides?: ethers.PayableOverrides) => Promise<void>;
    'createPolicyManager()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
    'createPolicyManagerFor(address)': (_manager: string, $$overrides?: ethers.PayableOverrides) => Promise<void>;
    'createShares()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
    'createSharesFor(address)': (_manager: string, $$overrides?: ethers.PayableOverrides) => Promise<void>;
    'createVault()': ($$overrides?: ethers.PayableOverrides) => Promise<void>;
    'createVaultFor(address)': (_manager: string, $$overrides?: ethers.PayableOverrides) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'shutDownFund(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'beginSetup(string,address[],uint256[],uint256[],address[],address[],address,address[])': (
      _name: string,
      _fees: string[],
      _feeRates: ethers.BigNumber[],
      _feePeriods: ethers.BigNumber[],
      _exchanges: string[],
      _adapters: string[],
      _denominationAsset: string,
      _defaultInvestmentAssets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'completeSetup()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'completeSetupFor(address)': (_manager: string, $$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'createAccounting()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'createAccountingFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'createFeeManager()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'createFeeManagerFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'createPolicyManager()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'createPolicyManagerFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'createShares()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'createSharesFor(address)': (_manager: string, $$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'createVault()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'createVaultFor(address)': (_manager: string, $$overrides?: ethers.PayableOverrides) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'shutDownFund(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'beginSetup(string,address[],uint256[],uint256[],address[],address[],address,address[])': (
      _name: string,
      _fees: string[],
      _feeRates: ethers.BigNumber[],
      _feePeriods: ethers.BigNumber[],
      _exchanges: string[],
      _adapters: string[],
      _denominationAsset: string,
      _defaultInvestmentAssets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'completeSetup()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'completeSetupFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'createAccounting()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'createAccountingFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'createFeeManager()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'createFeeManagerFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'createPolicyManager()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'createPolicyManagerFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'createShares()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'createSharesFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'createVault()': ($$overrides?: ethers.PayableOverrides) => Promise<ethers.UnsignedTransaction>;
    'createVaultFor(address)': (
      _manager: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'shutDownFund(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
