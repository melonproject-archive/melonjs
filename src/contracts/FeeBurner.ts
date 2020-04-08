import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class FeeBurner extends Contract {
  public readonly ethers: FeeBurnerEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `FeeBurner` contract call for the `reserveKNCWallet` function.
   *
   * @contract FeeBurner
   * @signature reserveKNCWallet(address)
   * @method function reserveKNCWallet(address) view returns (address)
   */
  reserveKNCWallet: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract call for the `reserveFeeToWallet` function.
   *
   * @contract FeeBurner
   * @signature reserveFeeToWallet(address,address)
   * @method function reserveFeeToWallet(address,address) view returns (uint256)
   */
  reserveFeeToWallet: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `pendingAdmin` function.
   *
   * @contract FeeBurner
   * @signature pendingAdmin()
   * @method function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract call for the `getOperators` function.
   *
   * @contract FeeBurner
   * @signature getOperators()
   * @method function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `FeeBurner` contract call for the `reserveFeeToBurn` function.
   *
   * @contract FeeBurner
   * @signature reserveFeeToBurn(address)
   * @method function reserveFeeToBurn(address) view returns (uint256)
   */
  reserveFeeToBurn: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `taxWallet` function.
   *
   * @contract FeeBurner
   * @signature taxWallet()
   * @method function taxWallet() view returns (address)
   */
  taxWallet: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract call for the `kncPerEthRatePrecision` function.
   *
   * @contract FeeBurner
   * @signature kncPerEthRatePrecision()
   * @method function kncPerEthRatePrecision() view returns (uint256)
   */
  kncPerEthRatePrecision: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `reserveFeesInBps` function.
   *
   * @contract FeeBurner
   * @signature reserveFeesInBps(address)
   * @method function reserveFeesInBps(address) view returns (uint256)
   */
  reserveFeesInBps: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `taxFeeBps` function.
   *
   * @contract FeeBurner
   * @signature taxFeeBps()
   * @method function taxFeeBps() view returns (uint256)
   */
  taxFeeBps: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `walletFeesInBps` function.
   *
   * @contract FeeBurner
   * @signature walletFeesInBps(address)
   * @method function walletFeesInBps(address) view returns (uint256)
   */
  walletFeesInBps: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `getAlerters` function.
   *
   * @contract FeeBurner
   * @signature getAlerters()
   * @method function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `FeeBurner` contract call for the `kyberNetwork` function.
   *
   * @contract FeeBurner
   * @signature kyberNetwork()
   * @method function kyberNetwork() view returns (address)
   */
  kyberNetwork: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract call for the `getBalance` function.
   *
   * @contract FeeBurner
   * @signature getBalance(address,address)
   * @method function getBalance(address,address) view returns (uint256)
   */
  getBalance: (token: string, user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `feePayedPerReserve` function.
   *
   * @contract FeeBurner
   * @signature feePayedPerReserve(address)
   * @method function feePayedPerReserve(address) view returns (uint256)
   */
  feePayedPerReserve: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `FeeBurner` contract call for the `knc` function.
   *
   * @contract FeeBurner
   * @signature knc()
   * @method function knc() view returns (address)
   */
  knc: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract call for the `admin` function.
   *
   * @contract FeeBurner
   * @signature admin()
   * @method function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `FeeBurner` contract transaction for `removeAlerter` function.
   *
   * @contract FeeBurner
   * @signature removeAlerter(address)
   * @method function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `withdrawToken` function.
   *
   * @contract FeeBurner
   * @signature withdrawToken(address,uint256,address)
   * @method function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `addAlerter` function.
   *
   * @contract FeeBurner
   * @signature addAlerter(address)
   * @method function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `setReserveData` function.
   *
   * @contract FeeBurner
   * @signature setReserveData(address,uint256,address)
   * @method function setReserveData(address,uint256,address)
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
   * @signature setWalletFees(address,uint256)
   * @method function setWalletFees(address,uint256)
   */
  setWalletFees: (wallet: string, feesInBps: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `transferAdmin` function.
   *
   * @contract FeeBurner
   * @signature transferAdmin(address)
   * @method function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `claimAdmin` function.
   *
   * @contract FeeBurner
   * @signature claimAdmin()
   * @method function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `transferAdminQuickly` function.
   *
   * @contract FeeBurner
   * @signature transferAdminQuickly(address)
   * @method function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `setKNCRate` function.
   *
   * @contract FeeBurner
   * @signature setKNCRate()
   * @method function setKNCRate()
   */
  setKNCRate: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `addOperator` function.
   *
   * @contract FeeBurner
   * @signature addOperator(address)
   * @method function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `setTaxInBps` function.
   *
   * @contract FeeBurner
   * @signature setTaxInBps(uint256)
   * @method function setTaxInBps(uint256)
   */
  setTaxInBps: (_taxFeeBps: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `removeOperator` function.
   *
   * @contract FeeBurner
   * @signature removeOperator(address)
   * @method function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `withdrawEther` function.
   *
   * @contract FeeBurner
   * @signature withdrawEther(uint256,address)
   * @method function withdrawEther(uint256,address)
   */
  withdrawEther: (amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `sendFeeToWallet` function.
   *
   * @contract FeeBurner
   * @signature sendFeeToWallet(address,address)
   * @method function sendFeeToWallet(address,address)
   */
  sendFeeToWallet: (wallet: string, reserve: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `setTaxWallet` function.
   *
   * @contract FeeBurner
   * @signature setTaxWallet(address)
   * @method function setTaxWallet(address)
   */
  setTaxWallet: (_taxWallet: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `burnReserveFees` function.
   *
   * @contract FeeBurner
   * @signature burnReserveFees(address)
   * @method function burnReserveFees(address)
   */
  burnReserveFees: (reserve: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `FeeBurner` contract transaction for `handleFees` function.
   *
   * @contract FeeBurner
   * @signature handleFees(uint256,address,address)
   * @method function handleFees(uint256,address,address) returns (bool)
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

export interface FeeBurnerEthersContract extends ethers.Contract {
  'reserveKNCWallet(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'reserveFeeToWallet(address,address)': (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'reserveFeeToBurn(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'taxWallet()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'kncPerEthRatePrecision()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'reserveFeesInBps(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'taxFeeBps()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'walletFeesInBps(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'kyberNetwork()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getBalance(address,address)': (
    token: string,
    user: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'feePayedPerReserve(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'knc()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'withdrawToken(address,uint256,address)': (
    token: string,
    amount: ethers.BigNumberish,
    sendTo: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setReserveData(address,uint256,address)': (
    reserve: string,
    feesInBps: ethers.BigNumberish,
    kncWallet: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setWalletFees(address,uint256)': (
    wallet: string,
    feesInBps: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'claimAdmin()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'transferAdminQuickly(address)': (
    newAdmin: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setKNCRate()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setTaxInBps(uint256)': (
    _taxFeeBps: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'withdrawEther(uint256,address)': (
    amount: ethers.BigNumberish,
    sendTo: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'sendFeeToWallet(address,address)': (
    wallet: string,
    reserve: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setTaxWallet(address)': (_taxWallet: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'burnReserveFees(address)': (reserve: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'handleFees(uint256,address,address)': (
    tradeWeiAmount: ethers.BigNumberish,
    reserve: string,
    wallet: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'reserveKNCWallet(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'reserveFeeToWallet(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'reserveFeeToBurn(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'taxWallet()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'kncPerEthRatePrecision()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'reserveFeesInBps(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'taxFeeBps()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'walletFeesInBps(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'kyberNetwork()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getBalance(address,address)': (
      token: string,
      user: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'feePayedPerReserve(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'knc()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'setReserveData(address,uint256,address)': (
      reserve: string,
      feesInBps: ethers.BigNumberish,
      kncWallet: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setWalletFees(address,uint256)': (
      wallet: string,
      feesInBps: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'transferAdmin(address)': (
      newAdmin: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'transferAdminQuickly(address)': (
      newAdmin: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setKNCRate()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'addOperator(address)': (
      newOperator: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setTaxInBps(uint256)': (
      _taxFeeBps: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'removeOperator(address)': (
      operator: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'sendFeeToWallet(address,address)': (
      wallet: string,
      reserve: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setTaxWallet(address)': (
      _taxWallet: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'burnReserveFees(address)': (
      reserve: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'handleFees(uint256,address,address)': (
      tradeWeiAmount: ethers.BigNumberish,
      reserve: string,
      wallet: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'reserveKNCWallet(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'reserveFeeToWallet(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'reserveFeeToBurn(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'taxWallet()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'kncPerEthRatePrecision()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'reserveFeesInBps(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'taxFeeBps()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'walletFeesInBps(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'kyberNetwork()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getBalance(address,address)': (
      token: string,
      user: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'feePayedPerReserve(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'knc()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setReserveData(address,uint256,address)': (
      reserve: string,
      feesInBps: ethers.BigNumberish,
      kncWallet: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setWalletFees(address,uint256)': (
      wallet: string,
      feesInBps: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setKNCRate()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setTaxInBps(uint256)': (_taxFeeBps: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'sendFeeToWallet(address,address)': (
      wallet: string,
      reserve: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setTaxWallet(address)': (_taxWallet: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'burnReserveFees(address)': (reserve: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'handleFees(uint256,address,address)': (
      tradeWeiAmount: ethers.BigNumberish,
      reserve: string,
      wallet: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
  };

  estimateGas: {
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setReserveData(address,uint256,address)': (
      reserve: string,
      feesInBps: ethers.BigNumberish,
      kncWallet: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setWalletFees(address,uint256)': (
      wallet: string,
      feesInBps: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setKNCRate()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setTaxInBps(uint256)': (
      _taxFeeBps: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'sendFeeToWallet(address,address)': (
      wallet: string,
      reserve: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setTaxWallet(address)': (_taxWallet: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'burnReserveFees(address)': (reserve: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'handleFees(uint256,address,address)': (
      tradeWeiAmount: ethers.BigNumberish,
      reserve: string,
      wallet: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setReserveData(address,uint256,address)': (
      reserve: string,
      feesInBps: ethers.BigNumberish,
      kncWallet: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setWalletFees(address,uint256)': (
      wallet: string,
      feesInBps: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'transferAdminQuickly(address)': (
      newAdmin: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setKNCRate()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'addOperator(address)': (
      newOperator: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setTaxInBps(uint256)': (
      _taxFeeBps: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeOperator(address)': (
      operator: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'sendFeeToWallet(address,address)': (
      wallet: string,
      reserve: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setTaxWallet(address)': (
      _taxWallet: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'burnReserveFees(address)': (
      reserve: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'handleFees(uint256,address,address)': (
      tradeWeiAmount: ethers.BigNumberish,
      reserve: string,
      wallet: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
