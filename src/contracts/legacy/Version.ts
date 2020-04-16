import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../..';

/** Controlled by governance */
export class VersionContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
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
   * ```solidity
   * function accountingFactory() view returns (address)
   * ```
   *
   */
  accountingFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function associatedRegistry() view returns (address)
   * ```
   *
   */
  associatedRegistry: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function childExists(address) view returns (bool)
   * ```
   *
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function engine() view returns (address)
   * ```
   *
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function feeManagerFactory() view returns (address)
   * ```
   *
   */
  feeManagerFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function funds(uint256) view returns (address)
   * ```
   *
   */
  funds: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getExchangesInfo(address) view returns (address[])
   * ```
   *
   */
  getExchangesInfo: (user: string, $$overrides?: ethers.CallOverrides) => Promise<string[]>;
  /**
   * ```solidity
   * function getFundById(uint256) view returns (address)
   * ```
   *
   */
  getFundById: (withId: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getLastFundId() view returns (uint256)
   * ```
   *
   */
  getLastFundId: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function isInstance(address) view returns (bool)
   * ```
   *
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function managersToHubs(address) view returns (address)
   * ```
   *
   */
  managersToHubs: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function managersToRoutes(address) view returns (address, address, address, address, address, address, address, address, address, address, address)
   * ```
   *
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
   * ```solidity
   * function managersToSettings(address) view returns (string, address)
   * ```
   *
   */
  managersToSettings: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ name: string; denominationAsset: string }>;
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
   * function participationFactory() view returns (address)
   * ```
   *
   */
  participationFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function policyManagerFactory() view returns (address)
   * ```
   *
   */
  policyManagerFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
   * function sharesFactory() view returns (address)
   * ```
   *
   */
  sharesFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function tradingFactory() view returns (address)
   * ```
   *
   */
  tradingFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function vaultFactory() view returns (address)
   * ```
   *
   */
  vaultFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function version() view returns (address)
   * ```
   *
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function beginSetup(string,address[],uint256[],uint256[],address[],address[],address,address[])
   * ```
   *
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
   * ```solidity
   * function completeSetup() payable
   * ```
   *
   */
  completeSetup: () => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function completeSetupFor(address) payable
   * ```
   *
   */
  completeSetupFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createAccounting() payable
   * ```
   *
   */
  createAccounting: () => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createAccountingFor(address) payable
   * ```
   *
   */
  createAccountingFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createFeeManager() payable
   * ```
   *
   */
  createFeeManager: () => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createFeeManagerFor(address) payable
   * ```
   *
   */
  createFeeManagerFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createParticipation() payable
   * ```
   *
   */
  createParticipation: () => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createParticipationFor(address) payable
   * ```
   *
   */
  createParticipationFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createPolicyManager() payable
   * ```
   *
   */
  createPolicyManager: () => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createPolicyManagerFor(address) payable
   * ```
   *
   */
  createPolicyManagerFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createShares() payable
   * ```
   *
   */
  createShares: () => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createSharesFor(address) payable
   * ```
   *
   */
  createSharesFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createTrading() payable
   * ```
   *
   */
  createTrading: () => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createTradingFor(address) payable
   * ```
   *
   */
  createTradingFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createVault() payable
   * ```
   *
   */
  createVault: () => TransactionWrapper<ethers.PayableOverrides>;
  /**
   * ```solidity
   * function createVaultFor(address) payable
   * ```
   *
   */
  createVaultFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;
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
   * function shutDownFund(address)
   * ```
   *
   */
  shutDownFund: (_hub: string) => TransactionWrapper<ethers.Overrides>;
}
