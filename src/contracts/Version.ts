import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Version extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Version` contract call for the `accountingFactory` function.
   *
   * @contract Version
   * @signature function accountingFactory() view returns (address)
   */
  accountingFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `associatedRegistry` function.
   *
   * @contract Version
   * @signature function associatedRegistry() view returns (address)
   */
  associatedRegistry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `authority` function.
   *
   * @contract Version
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `childExists` function.
   *
   * @contract Version
   * @signature function childExists(address) view returns (bool)
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Version` contract call for the `engine` function.
   *
   * @contract Version
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `feeManagerFactory` function.
   *
   * @contract Version
   * @signature function feeManagerFactory() view returns (address)
   */
  feeManagerFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `funds` function.
   *
   * @contract Version
   * @signature function funds(uint256) view returns (address)
   */
  funds: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `getExchangesInfo` function.
   *
   * @contract Version
   * @signature function getExchangesInfo(address) view returns (address[])
   */
  getExchangesInfo: (user: string, $$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Version` contract call for the `getFundById` function.
   *
   * @contract Version
   * @signature function getFundById(uint256) view returns (address)
   */
  getFundById: (withId: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `getLastFundId` function.
   *
   * @contract Version
   * @signature function getLastFundId() view returns (uint256)
   */
  getLastFundId: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Version` contract call for the `isInstance` function.
   *
   * @contract Version
   * @signature function isInstance(address) view returns (bool)
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Version` contract call for the `managersToHubs` function.
   *
   * @contract Version
   * @signature function managersToHubs(address) view returns (address)
   */
  managersToHubs: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `managersToRoutes` function.
   *
   * @contract Version
   * @signature function managersToRoutes(address) view returns (address, address, address, address, address, address, address, address, address, address, address)
   */
  managersToRoutes: (
    $$0: string,
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
   * `Version` contract call for the `managersToSettings` function.
   *
   * @contract Version
   * @signature function managersToSettings(address) view returns (string, address)
   */
  managersToSettings: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ name: string; denominationAsset: string }>;

  /**
   * `Version` contract call for the `mlnToken` function.
   *
   * @contract Version
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `owner` function.
   *
   * @contract Version
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `participationFactory` function.
   *
   * @contract Version
   * @signature function participationFactory() view returns (address)
   */
  participationFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `policyManagerFactory` function.
   *
   * @contract Version
   * @signature function policyManagerFactory() view returns (address)
   */
  policyManagerFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `priceSource` function.
   *
   * @contract Version
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `registry` function.
   *
   * @contract Version
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `sharesFactory` function.
   *
   * @contract Version
   * @signature function sharesFactory() view returns (address)
   */
  sharesFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `tradingFactory` function.
   *
   * @contract Version
   * @signature function tradingFactory() view returns (address)
   */
  tradingFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `vaultFactory` function.
   *
   * @contract Version
   * @signature function vaultFactory() view returns (address)
   */
  vaultFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract call for the `version` function.
   *
   * @contract Version
   * @signature function version() view returns (address)
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Version` contract transaction for `beginSetup` function.
   *
   * @contract Version
   * @signature function beginSetup(string,address[],uint256[],uint256[],address[],address[],address,address[])
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
   * `Version` contract transaction for `completeSetup` function.
   *
   * @contract Version
   * @signature function completeSetup() payable
   */
  completeSetup: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `completeSetupFor` function.
   *
   * @contract Version
   * @signature function completeSetupFor(address) payable
   */
  completeSetupFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createAccounting` function.
   *
   * @contract Version
   * @signature function createAccounting() payable
   */
  createAccounting: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createAccountingFor` function.
   *
   * @contract Version
   * @signature function createAccountingFor(address) payable
   */
  createAccountingFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createFeeManager` function.
   *
   * @contract Version
   * @signature function createFeeManager() payable
   */
  createFeeManager: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createFeeManagerFor` function.
   *
   * @contract Version
   * @signature function createFeeManagerFor(address) payable
   */
  createFeeManagerFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createParticipation` function.
   *
   * @contract Version
   * @signature function createParticipation() payable
   */
  createParticipation: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createParticipationFor` function.
   *
   * @contract Version
   * @signature function createParticipationFor(address) payable
   */
  createParticipationFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createPolicyManager` function.
   *
   * @contract Version
   * @signature function createPolicyManager() payable
   */
  createPolicyManager: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createPolicyManagerFor` function.
   *
   * @contract Version
   * @signature function createPolicyManagerFor(address) payable
   */
  createPolicyManagerFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createShares` function.
   *
   * @contract Version
   * @signature function createShares() payable
   */
  createShares: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createSharesFor` function.
   *
   * @contract Version
   * @signature function createSharesFor(address) payable
   */
  createSharesFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createTrading` function.
   *
   * @contract Version
   * @signature function createTrading() payable
   */
  createTrading: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createTradingFor` function.
   *
   * @contract Version
   * @signature function createTradingFor(address) payable
   */
  createTradingFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createVault` function.
   *
   * @contract Version
   * @signature function createVault() payable
   */
  createVault: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `createVaultFor` function.
   *
   * @contract Version
   * @signature function createVaultFor(address) payable
   */
  createVaultFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Version` contract transaction for `setAuthority` function.
   *
   * @contract Version
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Version` contract transaction for `setOwner` function.
   *
   * @contract Version
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Version` contract transaction for `shutDownFund` function.
   *
   * @contract Version
   * @signature function shutDownFund(address)
   */
  shutDownFund: (_hub: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _accountingFactory, address _feeManagerFactory, address _participationFactory, address _sharesFactory, address _tradingFactory, address _vaultFactory, address _policyManagerFactory, address _registry, address _postDeployOwner)',
    'event AmguPaid(address indexed payer, uint256 totalAmguPaidInEth, uint256 amguChargableGas, uint256 incentivePaid)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event NewFund(address indexed manager, address indexed hub, address[11] routes)',
    'event NewInstance(address indexed hub, address indexed instance)',
    'function accountingFactory() view returns (address)',
    'function associatedRegistry() view returns (address)',
    'function authority() view returns (address)',
    'function beginSetup(string _name, address[] _fees, uint256[] _feeRates, uint256[] _feePeriods, address[] _exchanges, address[] _adapters, address _denominationAsset, address[] _defaultInvestmentAssets)',
    'function childExists(address) view returns (bool)',
    'function completeSetup() payable',
    'function completeSetupFor(address _manager) payable',
    'function createAccounting() payable',
    'function createAccountingFor(address _manager) payable',
    'function createFeeManager() payable',
    'function createFeeManagerFor(address _manager) payable',
    'function createParticipation() payable',
    'function createParticipationFor(address _manager) payable',
    'function createPolicyManager() payable',
    'function createPolicyManagerFor(address _manager) payable',
    'function createShares() payable',
    'function createSharesFor(address _manager) payable',
    'function createTrading() payable',
    'function createTradingFor(address _manager) payable',
    'function createVault() payable',
    'function createVaultFor(address _manager) payable',
    'function engine() view returns (address)',
    'function feeManagerFactory() view returns (address)',
    'function funds(uint256) view returns (address)',
    'function getExchangesInfo(address user) view returns (address[])',
    'function getFundById(uint256 withId) view returns (address)',
    'function getLastFundId() view returns (uint256)',
    'function isInstance(address _child) view returns (bool)',
    'function managersToHubs(address) view returns (address)',
    'function managersToRoutes(address) view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function managersToSettings(address) view returns (string name, address denominationAsset)',
    'function mlnToken() view returns (address)',
    'function owner() view returns (address)',
    'function participationFactory() view returns (address)',
    'function policyManagerFactory() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function sharesFactory() view returns (address)',
    'function shutDownFund(address _hub)',
    'function tradingFactory() view returns (address)',
    'function vaultFactory() view returns (address)',
    'function version() view returns (address)',
  ];
}
