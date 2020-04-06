import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class KyberReserve extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `KyberReserve` contract call for the `pendingAdmin` function.
   *
   * @contract KyberReserve
   * @signature function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `getOperators` function.
   *
   * @contract KyberReserve
   * @signature function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `KyberReserve` contract call for the `sanityRatesContract` function.
   *
   * @contract KyberReserve
   * @signature function sanityRatesContract() view returns (address)
   */
  sanityRatesContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `getAlerters` function.
   *
   * @contract KyberReserve
   * @signature function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `KyberReserve` contract call for the `getConversionRate` function.
   *
   * @contract KyberReserve
   * @signature function getConversionRate(address,address,uint256,uint256) view returns (uint256)
   */
  getConversionRate: (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    blockNumber: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `KyberReserve` contract call for the `getSrcQty` function.
   *
   * @contract KyberReserve
   * @signature function getSrcQty(address,address,uint256,uint256) view returns (uint256)
   */
  getSrcQty: (
    src: string,
    dest: string,
    dstQty: ethers.BigNumberish,
    rate: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `KyberReserve` contract call for the `tokenWallet` function.
   *
   * @contract KyberReserve
   * @signature function tokenWallet(address) view returns (address)
   */
  tokenWallet: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `kyberNetwork` function.
   *
   * @contract KyberReserve
   * @signature function kyberNetwork() view returns (address)
   */
  kyberNetwork: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `conversionRatesContract` function.
   *
   * @contract KyberReserve
   * @signature function conversionRatesContract() view returns (address)
   */
  conversionRatesContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `tradeEnabled` function.
   *
   * @contract KyberReserve
   * @signature function tradeEnabled() view returns (bool)
   */
  tradeEnabled: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberReserve` contract call for the `approvedWithdrawAddresses` function.
   *
   * @contract KyberReserve
   * @signature function approvedWithdrawAddresses(bytes32) view returns (bool)
   */
  approvedWithdrawAddresses: (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `KyberReserve` contract call for the `admin` function.
   *
   * @contract KyberReserve
   * @signature function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `getBalance` function.
   *
   * @contract KyberReserve
   * @signature function getBalance(address) view returns (uint256)
   */
  getBalance: (token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberReserve` contract call for the `getDestQty` function.
   *
   * @contract KyberReserve
   * @signature function getDestQty(address,address,uint256,uint256) view returns (uint256)
   */
  getDestQty: (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    rate: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `KyberReserve` contract transaction for `enableTrade` function.
   *
   * @contract KyberReserve
   * @signature function enableTrade() returns (bool)
   */
  enableTrade: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `removeAlerter` function.
   *
   * @contract KyberReserve
   * @signature function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `setTokenWallet` function.
   *
   * @contract KyberReserve
   * @signature function setTokenWallet(address,address)
   */
  setTokenWallet: (token: string, wallet: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `withdrawToken` function.
   *
   * @contract KyberReserve
   * @signature function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `addAlerter` function.
   *
   * @contract KyberReserve
   * @signature function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `approveWithdrawAddress` function.
   *
   * @contract KyberReserve
   * @signature function approveWithdrawAddress(address,address,bool)
   */
  approveWithdrawAddress: (token: string, addr: string, approve: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `withdraw` function.
   *
   * @contract KyberReserve
   * @signature function withdraw(address,uint256,address) returns (bool)
   */
  withdraw: (token: string, amount: ethers.BigNumberish, destination: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `disableTrade` function.
   *
   * @contract KyberReserve
   * @signature function disableTrade() returns (bool)
   */
  disableTrade: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `trade` function.
   *
   * @contract KyberReserve
   * @signature function trade(address,uint256,address,address,uint256,bool) payable returns (bool)
   */
  trade: (
    srcToken: string,
    srcAmount: ethers.BigNumberish,
    destToken: string,
    destAddress: string,
    conversionRate: ethers.BigNumberish,
    validate: boolean,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `KyberReserve` contract transaction for `transferAdmin` function.
   *
   * @contract KyberReserve
   * @signature function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `claimAdmin` function.
   *
   * @contract KyberReserve
   * @signature function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `transferAdminQuickly` function.
   *
   * @contract KyberReserve
   * @signature function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `addOperator` function.
   *
   * @contract KyberReserve
   * @signature function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `removeOperator` function.
   *
   * @contract KyberReserve
   * @signature function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `setContracts` function.
   *
   * @contract KyberReserve
   * @signature function setContracts(address,address,address)
   */
  setContracts: (
    _kyberNetwork: string,
    _conversionRates: string,
    _sanityRates: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `withdrawEther` function.
   *
   * @contract KyberReserve
   * @signature function withdrawEther(uint256,address)
   */
  withdrawEther: (amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function enableTrade() returns (bool)',
    'function removeAlerter(address alerter)',
    'function setTokenWallet(address token, address wallet)',
    'function pendingAdmin() view returns (address)',
    'function getOperators() view returns (address[])',
    'function withdrawToken(address token, uint256 amount, address sendTo)',
    'function addAlerter(address newAlerter)',
    'function sanityRatesContract() view returns (address)',
    'function approveWithdrawAddress(address token, address addr, bool approve)',
    'function withdraw(address token, uint256 amount, address destination) returns (bool)',
    'function disableTrade() returns (bool)',
    'function trade(address srcToken, uint256 srcAmount, address destToken, address destAddress, uint256 conversionRate, bool validate) payable returns (bool)',
    'function transferAdmin(address newAdmin)',
    'function claimAdmin()',
    'function transferAdminQuickly(address newAdmin)',
    'function getAlerters() view returns (address[])',
    'function getConversionRate(address src, address dest, uint256 srcQty, uint256 blockNumber) view returns (uint256)',
    'function addOperator(address newOperator)',
    'function getSrcQty(address src, address dest, uint256 dstQty, uint256 rate) view returns (uint256)',
    'function tokenWallet(address) view returns (address)',
    'function removeOperator(address operator)',
    'function setContracts(address _kyberNetwork, address _conversionRates, address _sanityRates)',
    'function kyberNetwork() view returns (address)',
    'function withdrawEther(uint256 amount, address sendTo)',
    'function conversionRatesContract() view returns (address)',
    'function tradeEnabled() view returns (bool)',
    'function approvedWithdrawAddresses(bytes32) view returns (bool)',
    'function admin() view returns (address)',
    'function getBalance(address token) view returns (uint256)',
    'function getDestQty(address src, address dest, uint256 srcQty, uint256 rate) view returns (uint256)',
    'constructor(address _kyberNetwork, address _ratesContract, address _admin)',
    'event DepositToken(address token, uint256 amount)',
    'event TradeExecute(address indexed origin, address src, uint256 srcAmount, address destToken, uint256 destAmount, address destAddress)',
    'event TradeEnabled(bool enable)',
    'event WithdrawAddressApproved(address token, address addr, bool approve)',
    'event NewTokenWallet(address token, address wallet)',
    'event WithdrawFunds(address token, uint256 amount, address destination)',
    'event SetContractAddresses(address network, address rate, address sanity)',
    'event TokenWithdraw(address token, uint256 amount, address sendTo)',
    'event EtherWithdraw(uint256 amount, address sendTo)',
    'event TransferAdminPending(address pendingAdmin)',
    'event AdminClaimed(address newAdmin, address previousAdmin)',
    'event AlerterAdded(address newAlerter, bool isAdd)',
    'event OperatorAdded(address newOperator, bool isAdd)',
  ];
}
