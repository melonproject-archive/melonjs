import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Participation extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Participation` contract call for the `REQUEST_LIFESPAN` function.
   *
   * @contract Participation
   * @signature function REQUEST_LIFESPAN() view returns (uint256)
   */
  REQUEST_LIFESPAN: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Participation` contract call for the `SHARES_DECIMALS` function.
   *
   * @contract Participation
   * @signature function SHARES_DECIMALS() view returns (uint256)
   */
  SHARES_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Participation` contract call for the `authority` function.
   *
   * @contract Participation
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Participation` contract call for the `engine` function.
   *
   * @contract Participation
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Participation` contract call for the `getHistoricalInvestors` function.
   *
   * @contract Participation
   * @signature function getHistoricalInvestors() view returns (address[])
   */
  getHistoricalInvestors: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `Participation` contract call for the `hasExpiredRequest` function.
   *
   * @contract Participation
   * @signature function hasExpiredRequest(address) view returns (bool)
   */
  hasExpiredRequest: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Participation` contract call for the `hasInvested` function.
   *
   * @contract Participation
   * @signature function hasInvested(address) view returns (bool)
   */
  hasInvested: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Participation` contract call for the `hasRequest` function.
   *
   * @contract Participation
   * @signature function hasRequest(address) view returns (bool)
   */
  hasRequest: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Participation` contract call for the `hasValidRequest` function.
   *
   * @contract Participation
   * @signature function hasValidRequest(address) view returns (bool)
   */
  hasValidRequest: (_who: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Participation` contract call for the `historicalInvestors` function.
   *
   * @contract Participation
   * @signature function historicalInvestors(uint256) view returns (address)
   */
  historicalInvestors: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Participation` contract call for the `hub` function.
   *
   * @contract Participation
   * @signature function hub() view returns (address)
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Participation` contract call for the `initialized` function.
   *
   * @contract Participation
   * @signature function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Participation` contract call for the `investAllowed` function.
   *
   * @contract Participation
   * @signature function investAllowed(address) view returns (bool)
   */
  investAllowed: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Participation` contract call for the `mlnToken` function.
   *
   * @contract Participation
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Participation` contract call for the `owner` function.
   *
   * @contract Participation
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Participation` contract call for the `priceSource` function.
   *
   * @contract Participation
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Participation` contract call for the `registry` function.
   *
   * @contract Participation
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Participation` contract call for the `requests` function.
   *
   * @contract Participation
   * @signature function requests(address) view returns (address, uint256, uint256, uint256)
   */
  requests: (
    $$0: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    investmentAsset: string;
    investmentAmount: ethers.BigNumber;
    requestedShares: ethers.BigNumber;
    timestamp: ethers.BigNumber;
  }>;

  /**
   * `Participation` contract call for the `routes` function.
   *
   * @contract Participation
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
   * `Participation` contract call for the `version` function.
   *
   * @contract Participation
   * @signature function version() view returns (address)
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Participation` contract transaction for `cancelRequest` function.
   *
   * @contract Participation
   * @signature function cancelRequest() payable
   */
  cancelRequest: () => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Participation` contract transaction for `cancelRequestFor` function.
   *
   * @contract Participation
   * @signature function cancelRequestFor(address) payable
   */
  cancelRequestFor: (requestOwner: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Participation` contract transaction for `disableInvestment` function.
   *
   * @contract Participation
   * @signature function disableInvestment(address[])
   */
  disableInvestment: (_assets: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Participation` contract transaction for `enableInvestment` function.
   *
   * @contract Participation
   * @signature function enableInvestment(address[])
   */
  enableInvestment: (_assets: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Participation` contract transaction for `executeRequestFor` function.
   *
   * @contract Participation
   * @signature function executeRequestFor(address) payable
   */
  executeRequestFor: (requestOwner: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Participation` contract transaction for `getOwedPerformanceFees` function.
   *
   * @contract Participation
   * @signature function getOwedPerformanceFees(uint256) returns (uint256)
   */
  getOwedPerformanceFees: (shareQuantity: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Participation` contract transaction for `initialize` function.
   *
   * @contract Participation
   * @signature function initialize(address[11])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Participation` contract transaction for `redeem` function.
   *
   * @contract Participation
   * @signature function redeem()
   */
  redeem: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `Participation` contract transaction for `redeemQuantity` function.
   *
   * @contract Participation
   * @signature function redeemQuantity(uint256)
   */
  redeemQuantity: (shareQuantity: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Participation` contract transaction for `redeemWithConstraints` function.
   *
   * @contract Participation
   * @signature function redeemWithConstraints(uint256,address[])
   */
  redeemWithConstraints: (
    shareQuantity: ethers.BigNumberish,
    requestedAssets: string[],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Participation` contract transaction for `requestInvestment` function.
   *
   * @contract Participation
   * @signature function requestInvestment(uint256,uint256,address) payable
   */
  requestInvestment: (
    requestedShares: ethers.BigNumberish,
    investmentAmount: ethers.BigNumberish,
    investmentAsset: string,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `Participation` contract transaction for `setAuthority` function.
   *
   * @contract Participation
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Participation` contract transaction for `setOwner` function.
   *
   * @contract Participation
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub, address[] _defaultAssets, address _registry)',
    'event AmguPaid(address indexed payer, uint256 totalAmguPaidInEth, uint256 amguChargableGas, uint256 incentivePaid)',
    'event CancelRequest(address indexed requestOwner)',
    'event DisableInvestment(address[] assets)',
    'event EnableInvestment(address[] asset)',
    'event InvestmentRequest(address indexed requestOwner, address indexed investmentAsset, uint256 requestedShares, uint256 investmentAmount)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event Redemption(address indexed redeemer, address[] assets, uint256[] assetQuantities, uint256 redeemedShares)',
    'event RequestExecution(address indexed requestOwner, address indexed executor, address indexed investmentAsset, uint256 investmentAmount, uint256 requestedShares)',
    'function REQUEST_LIFESPAN() view returns (uint256)',
    'function SHARES_DECIMALS() view returns (uint256)',
    'function authority() view returns (address)',
    'function cancelRequest() payable',
    'function cancelRequestFor(address requestOwner) payable',
    'function disableInvestment(address[] _assets)',
    'function enableInvestment(address[] _assets)',
    'function engine() view returns (address)',
    'function executeRequestFor(address requestOwner) payable',
    'function getHistoricalInvestors() view returns (address[])',
    'function getOwedPerformanceFees(uint256 shareQuantity) returns (uint256 remainingShareQuantity)',
    'function hasExpiredRequest(address _who) view returns (bool)',
    'function hasInvested(address) view returns (bool)',
    'function hasRequest(address _who) view returns (bool)',
    'function hasValidRequest(address _who) view returns (bool)',
    'function historicalInvestors(uint256) view returns (address)',
    'function hub() view returns (address)',
    'function initialize(address[11] _spokes)',
    'function initialized() view returns (bool)',
    'function investAllowed(address) view returns (bool)',
    'function mlnToken() view returns (address)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function redeem()',
    'function redeemQuantity(uint256 shareQuantity)',
    'function redeemWithConstraints(uint256 shareQuantity, address[] requestedAssets)',
    'function registry() view returns (address)',
    'function requestInvestment(uint256 requestedShares, uint256 investmentAmount, address investmentAsset) payable',
    'function requests(address) view returns (address investmentAsset, uint256 investmentAmount, uint256 requestedShares, uint256 timestamp)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function version() view returns (address)',
  ];
}
