import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class FundFactory extends Contract {
  public readonly ethers: FundFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `FundFactory` contract call for the `REGISTRY` function.
   *
   * @contract FundFactory
   * @signature REGISTRY()
   * @method function REGISTRY() view returns (address)
   */
  REGISTRY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for the `accountingFactory` function.
   *
   * @contract FundFactory
   * @signature accountingFactory()
   * @method function accountingFactory() view returns (address)
   */
  accountingFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for the `authority` function.
   *
   * @contract FundFactory
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for the `childExists` function.
   *
   * @contract FundFactory
   * @signature childExists(address)
   * @method function childExists(address) view returns (bool)
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `FundFactory` contract call for the `feeManagerFactory` function.
   *
   * @contract FundFactory
   * @signature feeManagerFactory()
   * @method function feeManagerFactory() view returns (address)
   */
  feeManagerFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for the `funds` function.
   *
   * @contract FundFactory
   * @signature funds(uint256)
   * @method function funds(uint256) view returns (address)
   */
  funds: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for the `getExchangesInfo` function.
   *
   * @contract FundFactory
   * @signature getExchangesInfo(address)
   * @method function getExchangesInfo(address) view returns (address[])
   */
  getExchangesInfo: (_user: string, $$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `FundFactory` contract call for the `getFundById` function.
   *
   * @contract FundFactory
   * @signature getFundById(uint256)
   * @method function getFundById(uint256) view returns (address)
   */
  getFundById: (_id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for the `getLastFundId` function.
   *
   * @contract FundFactory
   * @signature getLastFundId()
   * @method function getLastFundId() view returns (uint256)
   */
  getLastFundId: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FundFactory` contract call for the `isInstance` function.
   *
   * @contract FundFactory
   * @signature isInstance(address)
   * @method function isInstance(address) view returns (bool)
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `FundFactory` contract call for the `managersToHubs` function.
   *
   * @contract FundFactory
   * @signature managersToHubs(address)
   * @method function managersToHubs(address) view returns (address)
   */
  managersToHubs: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for the `managersToRoutes` function.
   *
   * @contract FundFactory
   * @signature managersToRoutes(address)
   * @method function managersToRoutes(address) view returns (address, address, address, address, address, address, address)
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
   * `FundFactory` contract call for the `managersToSettings` function.
   *
   * @contract FundFactory
   * @signature managersToSettings(address)
   * @method function managersToSettings(address) view returns (string, address)
   */
  managersToSettings: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ name: string; denominationAsset: string }>;

  /**
   * `FundFactory` contract call for the `owner` function.
   *
   * @contract FundFactory
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for the `policyManagerFactory` function.
   *
   * @contract FundFactory
   * @signature policyManagerFactory()
   * @method function policyManagerFactory() view returns (address)
   */
  policyManagerFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for the `sharesFactory` function.
   *
   * @contract FundFactory
   * @signature sharesFactory()
   * @method function sharesFactory() view returns (address)
   */
  sharesFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract call for the `vaultFactory` function.
   *
   * @contract FundFactory
   * @signature vaultFactory()
   * @method function vaultFactory() view returns (address)
   */
  vaultFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FundFactory` contract transaction for `beginSetup` function.
   *
   * @contract FundFactory
   * @signature beginSetup(string,address[],uint256[],uint256[],address[],address[],address,address[])
   * @method function beginSetup(string,address[],uint256[],uint256[],address[],address[],address,address[])
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
   * `FundFactory` contract transaction for `completeSetup` function.
   *
   * @contract FundFactory
   * @signature completeSetup()
   * @method function completeSetup() payable
   */
  completeSetup: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `completeSetupFor` function.
   *
   * @contract FundFactory
   * @signature completeSetupFor(address)
   * @method function completeSetupFor(address) payable
   */
  completeSetupFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `createAccounting` function.
   *
   * @contract FundFactory
   * @signature createAccounting()
   * @method function createAccounting() payable
   */
  createAccounting: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `createAccountingFor` function.
   *
   * @contract FundFactory
   * @signature createAccountingFor(address)
   * @method function createAccountingFor(address) payable
   */
  createAccountingFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `createFeeManager` function.
   *
   * @contract FundFactory
   * @signature createFeeManager()
   * @method function createFeeManager() payable
   */
  createFeeManager: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `createFeeManagerFor` function.
   *
   * @contract FundFactory
   * @signature createFeeManagerFor(address)
   * @method function createFeeManagerFor(address) payable
   */
  createFeeManagerFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `createPolicyManager` function.
   *
   * @contract FundFactory
   * @signature createPolicyManager()
   * @method function createPolicyManager() payable
   */
  createPolicyManager: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `createPolicyManagerFor` function.
   *
   * @contract FundFactory
   * @signature createPolicyManagerFor(address)
   * @method function createPolicyManagerFor(address) payable
   */
  createPolicyManagerFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `createShares` function.
   *
   * @contract FundFactory
   * @signature createShares()
   * @method function createShares() payable
   */
  createShares: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `createSharesFor` function.
   *
   * @contract FundFactory
   * @signature createSharesFor(address)
   * @method function createSharesFor(address) payable
   */
  createSharesFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `createVault` function.
   *
   * @contract FundFactory
   * @signature createVault()
   * @method function createVault() payable
   */
  createVault: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `createVaultFor` function.
   *
   * @contract FundFactory
   * @signature createVaultFor(address)
   * @method function createVaultFor(address) payable
   */
  createVaultFor: (_manager: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `FundFactory` contract transaction for `setAuthority` function.
   *
   * @contract FundFactory
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FundFactory` contract transaction for `setOwner` function.
   *
   * @contract FundFactory
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FundFactory` contract transaction for `shutDownFund` function.
   *
   * @contract FundFactory
   * @signature shutDownFund(address)
   * @method function shutDownFund(address)
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
  ) => ethers.providers.TransactionResponse;
  'completeSetup()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;
  'completeSetupFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'createAccounting()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;
  'createAccountingFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'createFeeManager()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;
  'createFeeManagerFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'createPolicyManager()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;
  'createPolicyManagerFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'createShares()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;
  'createSharesFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'createVault()': ($$overrides?: ethers.PayableOverrides) => ethers.providers.TransactionResponse;
  'createVaultFor(address)': (
    _manager: string,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'shutDownFund(address)': (_hub: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

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
