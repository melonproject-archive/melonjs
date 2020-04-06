import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class FeeBurner extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `FeeBurner` contract call for the `reserveKNCWallet` function.
   *
   * @contract FeeBurner
   * @signature function reserveKNCWallet(address) view returns (address)
   */
  reserveKNCWallet: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract call for the `reserveFeeToWallet` function.
   *
   * @contract FeeBurner
   * @signature function reserveFeeToWallet(address,address) view returns (uint256)
   */
  reserveFeeToWallet: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `pendingAdmin` function.
   *
   * @contract FeeBurner
   * @signature function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract call for the `getOperators` function.
   *
   * @contract FeeBurner
   * @signature function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `FeeBurner` contract call for the `reserveFeeToBurn` function.
   *
   * @contract FeeBurner
   * @signature function reserveFeeToBurn(address) view returns (uint256)
   */
  reserveFeeToBurn: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `taxWallet` function.
   *
   * @contract FeeBurner
   * @signature function taxWallet() view returns (address)
   */
  taxWallet: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract call for the `kncPerEthRatePrecision` function.
   *
   * @contract FeeBurner
   * @signature function kncPerEthRatePrecision() view returns (uint256)
   */
  kncPerEthRatePrecision: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `reserveFeesInBps` function.
   *
   * @contract FeeBurner
   * @signature function reserveFeesInBps(address) view returns (uint256)
   */
  reserveFeesInBps: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `taxFeeBps` function.
   *
   * @contract FeeBurner
   * @signature function taxFeeBps() view returns (uint256)
   */
  taxFeeBps: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `walletFeesInBps` function.
   *
   * @contract FeeBurner
   * @signature function walletFeesInBps(address) view returns (uint256)
   */
  walletFeesInBps: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `getAlerters` function.
   *
   * @contract FeeBurner
   * @signature function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `FeeBurner` contract call for the `kyberNetwork` function.
   *
   * @contract FeeBurner
   * @signature function kyberNetwork() view returns (address)
   */
  kyberNetwork: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract call for the `getBalance` function.
   *
   * @contract FeeBurner
   * @signature function getBalance(address,address) view returns (uint256)
   */
  getBalance: (token: string, user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `feePayedPerReserve` function.
   *
   * @contract FeeBurner
   * @signature function feePayedPerReserve(address) view returns (uint256)
   */
  feePayedPerReserve: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `knc` function.
   *
   * @contract FeeBurner
   * @signature function knc() view returns (address)
   */
  knc: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract call for the `admin` function.
   *
   * @contract FeeBurner
   * @signature function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract transaction for `removeAlerter` function.
   *
   * @contract FeeBurner
   * @signature function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `withdrawToken` function.
   *
   * @contract FeeBurner
   * @signature function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `addAlerter` function.
   *
   * @contract FeeBurner
   * @signature function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `setReserveData` function.
   *
   * @contract FeeBurner
   * @signature function setReserveData(address,uint256,address)
   */
  setReserveData: (
    reserve: string,
    feesInBps: ethers.BigNumberish,
    kncWallet: string,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `setWalletFees` function.
   *
   * @contract FeeBurner
   * @signature function setWalletFees(address,uint256)
   */
  setWalletFees: (wallet: string, feesInBps: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `transferAdmin` function.
   *
   * @contract FeeBurner
   * @signature function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `claimAdmin` function.
   *
   * @contract FeeBurner
   * @signature function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `transferAdminQuickly` function.
   *
   * @contract FeeBurner
   * @signature function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `setKNCRate` function.
   *
   * @contract FeeBurner
   * @signature function setKNCRate()
   */
  setKNCRate: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `addOperator` function.
   *
   * @contract FeeBurner
   * @signature function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `setTaxInBps` function.
   *
   * @contract FeeBurner
   * @signature function setTaxInBps(uint256)
   */
  setTaxInBps: (_taxFeeBps: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `removeOperator` function.
   *
   * @contract FeeBurner
   * @signature function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `withdrawEther` function.
   *
   * @contract FeeBurner
   * @signature function withdrawEther(uint256,address)
   */
  withdrawEther: (amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `sendFeeToWallet` function.
   *
   * @contract FeeBurner
   * @signature function sendFeeToWallet(address,address)
   */
  sendFeeToWallet: (wallet: string, reserve: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `setTaxWallet` function.
   *
   * @contract FeeBurner
   * @signature function setTaxWallet(address)
   */
  setTaxWallet: (_taxWallet: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `burnReserveFees` function.
   *
   * @contract FeeBurner
   * @signature function burnReserveFees(address)
   */
  burnReserveFees: (reserve: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `handleFees` function.
   *
   * @contract FeeBurner
   * @signature function handleFees(uint256,address,address) returns (bool)
   */
  handleFees: (
    tradeWeiAmount: ethers.BigNumberish,
    reserve: string,
    wallet: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function removeAlerter(address alerter)',
    'function reserveKNCWallet(address) view returns (address)',
    'function reserveFeeToWallet(address, address) view returns (uint256)',
    'function pendingAdmin() view returns (address)',
    'function getOperators() view returns (address[])',
    'function reserveFeeToBurn(address) view returns (uint256)',
    'function taxWallet() view returns (address)',
    'function kncPerEthRatePrecision() view returns (uint256)',
    'function reserveFeesInBps(address) view returns (uint256)',
    'function taxFeeBps() view returns (uint256)',
    'function withdrawToken(address token, uint256 amount, address sendTo)',
    'function addAlerter(address newAlerter)',
    'function walletFeesInBps(address) view returns (uint256)',
    'function setReserveData(address reserve, uint256 feesInBps, address kncWallet)',
    'function setWalletFees(address wallet, uint256 feesInBps)',
    'function transferAdmin(address newAdmin)',
    'function claimAdmin()',
    'function transferAdminQuickly(address newAdmin)',
    'function getAlerters() view returns (address[])',
    'function setKNCRate()',
    'function addOperator(address newOperator)',
    'function setTaxInBps(uint256 _taxFeeBps)',
    'function removeOperator(address operator)',
    'function kyberNetwork() view returns (address)',
    'function withdrawEther(uint256 amount, address sendTo)',
    'function getBalance(address token, address user) view returns (uint256)',
    'function feePayedPerReserve(address) view returns (uint256)',
    'function sendFeeToWallet(address wallet, address reserve)',
    'function knc() view returns (address)',
    'function setTaxWallet(address _taxWallet)',
    'function burnReserveFees(address reserve)',
    'function admin() view returns (address)',
    'function handleFees(uint256 tradeWeiAmount, address reserve, address wallet) returns (bool)',
    'constructor(address _admin, address _kncToken, address _kyberNetwork, uint256 _initialKncToEthRatePrecision)',
    'event ReserveDataSet(address reserve, uint256 feeInBps, address kncWallet)',
    'event WalletFeesSet(address wallet, uint256 feesInBps)',
    'event TaxFeesSet(uint256 feesInBps)',
    'event TaxWalletSet(address taxWallet)',
    'event KNCRateSet(uint256 ethToKncRatePrecision, uint256 kyberEthKnc, uint256 kyberKncEth, address updater)',
    'event AssignFeeToWallet(address reserve, address wallet, uint256 walletFee)',
    'event AssignBurnFees(address reserve, uint256 burnFee)',
    'event BurnAssignedFees(address indexed reserve, address sender, uint256 quantity)',
    'event SendTaxFee(address indexed reserve, address sender, address taxWallet, uint256 quantity)',
    'event SendWalletFees(address indexed wallet, address reserve, address sender)',
    'event TokenWithdraw(address token, uint256 amount, address sendTo)',
    'event EtherWithdraw(uint256 amount, address sendTo)',
    'event TransferAdminPending(address pendingAdmin)',
    'event AdminClaimed(address newAdmin, address previousAdmin)',
    'event AlerterAdded(address newAlerter, bool isAdd)',
    'event OperatorAdded(address newOperator, bool isAdd)',
  ];
}
