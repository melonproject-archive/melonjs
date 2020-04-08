import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class KyberReserve extends Contract {
  public readonly ethers: KyberReserveEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `KyberReserve` contract call for the `pendingAdmin` function.
   *
   * @contract KyberReserve
   * @signature pendingAdmin()
   * @method function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `getOperators` function.
   *
   * @contract KyberReserve
   * @signature getOperators()
   * @method function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `KyberReserve` contract call for the `sanityRatesContract` function.
   *
   * @contract KyberReserve
   * @signature sanityRatesContract()
   * @method function sanityRatesContract() view returns (address)
   */
  sanityRatesContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `getAlerters` function.
   *
   * @contract KyberReserve
   * @signature getAlerters()
   * @method function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `KyberReserve` contract call for the `getConversionRate` function.
   *
   * @contract KyberReserve
   * @signature getConversionRate(address,address,uint256,uint256)
   * @method function getConversionRate(address,address,uint256,uint256) view returns (uint256)
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
   * @signature getSrcQty(address,address,uint256,uint256)
   * @method function getSrcQty(address,address,uint256,uint256) view returns (uint256)
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
   * @signature tokenWallet(address)
   * @method function tokenWallet(address) view returns (address)
   */
  tokenWallet: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `kyberNetwork` function.
   *
   * @contract KyberReserve
   * @signature kyberNetwork()
   * @method function kyberNetwork() view returns (address)
   */
  kyberNetwork: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `conversionRatesContract` function.
   *
   * @contract KyberReserve
   * @signature conversionRatesContract()
   * @method function conversionRatesContract() view returns (address)
   */
  conversionRatesContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `tradeEnabled` function.
   *
   * @contract KyberReserve
   * @signature tradeEnabled()
   * @method function tradeEnabled() view returns (bool)
   */
  tradeEnabled: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberReserve` contract call for the `approvedWithdrawAddresses` function.
   *
   * @contract KyberReserve
   * @signature approvedWithdrawAddresses(bytes32)
   * @method function approvedWithdrawAddresses(bytes32) view returns (bool)
   */
  approvedWithdrawAddresses: (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `KyberReserve` contract call for the `admin` function.
   *
   * @contract KyberReserve
   * @signature admin()
   * @method function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberReserve` contract call for the `getBalance` function.
   *
   * @contract KyberReserve
   * @signature getBalance(address)
   * @method function getBalance(address) view returns (uint256)
   */
  getBalance: (token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberReserve` contract call for the `getDestQty` function.
   *
   * @contract KyberReserve
   * @signature getDestQty(address,address,uint256,uint256)
   * @method function getDestQty(address,address,uint256,uint256) view returns (uint256)
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
   * @signature enableTrade()
   * @method function enableTrade() returns (bool)
   */
  enableTrade: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `removeAlerter` function.
   *
   * @contract KyberReserve
   * @signature removeAlerter(address)
   * @method function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `setTokenWallet` function.
   *
   * @contract KyberReserve
   * @signature setTokenWallet(address,address)
   * @method function setTokenWallet(address,address)
   */
  setTokenWallet: (token: string, wallet: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `withdrawToken` function.
   *
   * @contract KyberReserve
   * @signature withdrawToken(address,uint256,address)
   * @method function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `addAlerter` function.
   *
   * @contract KyberReserve
   * @signature addAlerter(address)
   * @method function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `approveWithdrawAddress` function.
   *
   * @contract KyberReserve
   * @signature approveWithdrawAddress(address,address,bool)
   * @method function approveWithdrawAddress(address,address,bool)
   */
  approveWithdrawAddress: (token: string, addr: string, approve: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `withdraw` function.
   *
   * @contract KyberReserve
   * @signature withdraw(address,uint256,address)
   * @method function withdraw(address,uint256,address) returns (bool)
   */
  withdraw: (token: string, amount: ethers.BigNumberish, destination: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `disableTrade` function.
   *
   * @contract KyberReserve
   * @signature disableTrade()
   * @method function disableTrade() returns (bool)
   */
  disableTrade: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `trade` function.
   *
   * @contract KyberReserve
   * @signature trade(address,uint256,address,address,uint256,bool)
   * @method function trade(address,uint256,address,address,uint256,bool) payable returns (bool)
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
   * @signature transferAdmin(address)
   * @method function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `claimAdmin` function.
   *
   * @contract KyberReserve
   * @signature claimAdmin()
   * @method function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `transferAdminQuickly` function.
   *
   * @contract KyberReserve
   * @signature transferAdminQuickly(address)
   * @method function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `addOperator` function.
   *
   * @contract KyberReserve
   * @signature addOperator(address)
   * @method function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `removeOperator` function.
   *
   * @contract KyberReserve
   * @signature removeOperator(address)
   * @method function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberReserve` contract transaction for `setContracts` function.
   *
   * @contract KyberReserve
   * @signature setContracts(address,address,address)
   * @method function setContracts(address,address,address)
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
   * @signature withdrawEther(uint256,address)
   * @method function withdrawEther(uint256,address)
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

export interface KyberReserveEthersContract extends ethers.Contract {
  'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'sanityRatesContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getConversionRate(address,address,uint256,uint256)': (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    blockNumber: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getSrcQty(address,address,uint256,uint256)': (
    src: string,
    dest: string,
    dstQty: ethers.BigNumberish,
    rate: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'tokenWallet(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'kyberNetwork()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'conversionRatesContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'tradeEnabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'approvedWithdrawAddresses(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getBalance(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getDestQty(address,address,uint256,uint256)': (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    rate: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'enableTrade()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'removeAlerter(address)': (
    alerter: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setTokenWallet(address,address)': (
    token: string,
    wallet: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'withdrawToken(address,uint256,address)': (
    token: string,
    amount: ethers.BigNumberish,
    sendTo: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'addAlerter(address)': (
    newAlerter: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'approveWithdrawAddress(address,address,bool)': (
    token: string,
    addr: string,
    approve: boolean,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'withdraw(address,uint256,address)': (
    token: string,
    amount: ethers.BigNumberish,
    destination: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'disableTrade()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'trade(address,uint256,address,address,uint256,bool)': (
    srcToken: string,
    srcAmount: ethers.BigNumberish,
    destToken: string,
    destAddress: string,
    conversionRate: ethers.BigNumberish,
    validate: boolean,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'transferAdmin(address)': (
    newAdmin: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  'transferAdminQuickly(address)': (
    newAdmin: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'addOperator(address)': (
    newOperator: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'removeOperator(address)': (
    operator: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setContracts(address,address,address)': (
    _kyberNetwork: string,
    _conversionRates: string,
    _sanityRates: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'withdrawEther(uint256,address)': (
    amount: ethers.BigNumberish,
    sendTo: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'sanityRatesContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getConversionRate(address,address,uint256,uint256)': (
      src: string,
      dest: string,
      srcQty: ethers.BigNumberish,
      blockNumber: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getSrcQty(address,address,uint256,uint256)': (
      src: string,
      dest: string,
      dstQty: ethers.BigNumberish,
      rate: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'tokenWallet(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'kyberNetwork()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'conversionRatesContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'tradeEnabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'approvedWithdrawAddresses(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getBalance(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getDestQty(address,address,uint256,uint256)': (
      src: string,
      dest: string,
      srcQty: ethers.BigNumberish,
      rate: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'enableTrade()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'removeAlerter(address)': (
      alerter: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setTokenWallet(address,address)': (
      token: string,
      wallet: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'addAlerter(address)': (
      newAlerter: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'approveWithdrawAddress(address,address,bool)': (
      token: string,
      addr: string,
      approve: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'withdraw(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      destination: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'disableTrade()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'trade(address,uint256,address,address,uint256,bool)': (
      srcToken: string,
      srcAmount: ethers.BigNumberish,
      destToken: string,
      destAddress: string,
      conversionRate: ethers.BigNumberish,
      validate: boolean,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'transferAdmin(address)': (
      newAdmin: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
    'transferAdminQuickly(address)': (
      newAdmin: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'addOperator(address)': (
      newOperator: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'removeOperator(address)': (
      operator: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setContracts(address,address,address)': (
      _kyberNetwork: string,
      _conversionRates: string,
      _sanityRates: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'sanityRatesContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getConversionRate(address,address,uint256,uint256)': (
      src: string,
      dest: string,
      srcQty: ethers.BigNumberish,
      blockNumber: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getSrcQty(address,address,uint256,uint256)': (
      src: string,
      dest: string,
      dstQty: ethers.BigNumberish,
      rate: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'tokenWallet(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'kyberNetwork()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'conversionRatesContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'tradeEnabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'approvedWithdrawAddresses(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getBalance(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getDestQty(address,address,uint256,uint256)': (
      src: string,
      dest: string,
      srcQty: ethers.BigNumberish,
      rate: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'enableTrade()': ($$overrides?: ethers.Overrides) => Promise<boolean>;
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setTokenWallet(address,address)': (token: string, wallet: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'approveWithdrawAddress(address,address,bool)': (
      token: string,
      addr: string,
      approve: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'withdraw(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      destination: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'disableTrade()': ($$overrides?: ethers.Overrides) => Promise<boolean>;
    'trade(address,uint256,address,address,uint256,bool)': (
      srcToken: string,
      srcAmount: ethers.BigNumberish,
      destToken: string,
      destAddress: string,
      conversionRate: ethers.BigNumberish,
      validate: boolean,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<boolean>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setContracts(address,address,address)': (
      _kyberNetwork: string,
      _conversionRates: string,
      _sanityRates: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'enableTrade()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setTokenWallet(address,address)': (
      token: string,
      wallet: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'approveWithdrawAddress(address,address,bool)': (
      token: string,
      addr: string,
      approve: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'withdraw(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      destination: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'disableTrade()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'trade(address,uint256,address,address,uint256,bool)': (
      srcToken: string,
      srcAmount: ethers.BigNumberish,
      destToken: string,
      destAddress: string,
      conversionRate: ethers.BigNumberish,
      validate: boolean,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setContracts(address,address,address)': (
      _kyberNetwork: string,
      _conversionRates: string,
      _sanityRates: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'enableTrade()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setTokenWallet(address,address)': (
      token: string,
      wallet: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'approveWithdrawAddress(address,address,bool)': (
      token: string,
      addr: string,
      approve: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdraw(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      destination: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'disableTrade()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'trade(address,uint256,address,address,uint256,bool)': (
      srcToken: string,
      srcAmount: ethers.BigNumberish,
      destToken: string,
      destAddress: string,
      conversionRate: ethers.BigNumberish,
      validate: boolean,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'transferAdminQuickly(address)': (
      newAdmin: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addOperator(address)': (
      newOperator: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeOperator(address)': (
      operator: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setContracts(address,address,address)': (
      _kyberNetwork: string,
      _conversionRates: string,
      _sanityRates: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
