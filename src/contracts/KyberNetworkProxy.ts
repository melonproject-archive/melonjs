import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class KyberNetworkProxy extends Contract {
  public readonly ethers: KyberNetworkProxyEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `KyberNetworkProxy` contract call for the `enabled` function.
   *
   * @contract KyberNetworkProxy
   * @signature enabled()
   * @method function enabled() view returns (bool)
   */
  enabled: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberNetworkProxy` contract call for the `pendingAdmin` function.
   *
   * @contract KyberNetworkProxy
   * @signature pendingAdmin()
   * @method function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetworkProxy` contract call for the `getOperators` function.
   *
   * @contract KyberNetworkProxy
   * @signature getOperators()
   * @method function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `KyberNetworkProxy` contract call for the `maxGasPrice` function.
   *
   * @contract KyberNetworkProxy
   * @signature maxGasPrice()
   * @method function maxGasPrice() view returns (uint256)
   */
  maxGasPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetworkProxy` contract call for the `kyberNetworkContract` function.
   *
   * @contract KyberNetworkProxy
   * @signature kyberNetworkContract()
   * @method function kyberNetworkContract() view returns (address)
   */
  kyberNetworkContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetworkProxy` contract call for the `getUserCapInWei` function.
   *
   * @contract KyberNetworkProxy
   * @signature getUserCapInWei(address)
   * @method function getUserCapInWei(address) view returns (uint256)
   */
  getUserCapInWei: (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetworkProxy` contract call for the `getAlerters` function.
   *
   * @contract KyberNetworkProxy
   * @signature getAlerters()
   * @method function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `KyberNetworkProxy` contract call for the `getExpectedRate` function.
   *
   * @contract KyberNetworkProxy
   * @signature getExpectedRate(address,address,uint256)
   * @method function getExpectedRate(address,address,uint256) view returns (uint256, uint256)
   */
  getExpectedRate: (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;

  /**
   * `KyberNetworkProxy` contract call for the `getUserCapInTokenWei` function.
   *
   * @contract KyberNetworkProxy
   * @signature getUserCapInTokenWei(address,address)
   * @method function getUserCapInTokenWei(address,address) view returns (uint256)
   */
  getUserCapInTokenWei: (user: string, token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetworkProxy` contract call for the `info` function.
   *
   * @contract KyberNetworkProxy
   * @signature info(bytes32)
   * @method function info(bytes32) view returns (uint256)
   */
  info: (field: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetworkProxy` contract call for the `getBalance` function.
   *
   * @contract KyberNetworkProxy
   * @signature getBalance(address,address)
   * @method function getBalance(address,address) view returns (uint256)
   */
  getBalance: (token: string, user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetworkProxy` contract call for the `admin` function.
   *
   * @contract KyberNetworkProxy
   * @signature admin()
   * @method function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetworkProxy` contract transaction for `removeAlerter` function.
   *
   * @contract KyberNetworkProxy
   * @signature removeAlerter(address)
   * @method function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `tradeWithHint` function.
   *
   * @contract KyberNetworkProxy
   * @signature tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)
   * @method function tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes) payable returns (uint256)
   */
  tradeWithHint: (
    src: string,
    srcAmount: ethers.BigNumberish,
    dest: string,
    destAddress: string,
    maxDestAmount: ethers.BigNumberish,
    minConversionRate: ethers.BigNumberish,
    walletId: string,
    hint: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `swapTokenToEther` function.
   *
   * @contract KyberNetworkProxy
   * @signature swapTokenToEther(address,uint256,uint256)
   * @method function swapTokenToEther(address,uint256,uint256) returns (uint256)
   */
  swapTokenToEther: (
    token: string,
    srcAmount: ethers.BigNumberish,
    minConversionRate: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `withdrawToken` function.
   *
   * @contract KyberNetworkProxy
   * @signature withdrawToken(address,uint256,address)
   * @method function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `addAlerter` function.
   *
   * @contract KyberNetworkProxy
   * @signature addAlerter(address)
   * @method function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `swapTokenToToken` function.
   *
   * @contract KyberNetworkProxy
   * @signature swapTokenToToken(address,uint256,address,uint256)
   * @method function swapTokenToToken(address,uint256,address,uint256) returns (uint256)
   */
  swapTokenToToken: (
    src: string,
    srcAmount: ethers.BigNumberish,
    dest: string,
    minConversionRate: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `transferAdmin` function.
   *
   * @contract KyberNetworkProxy
   * @signature transferAdmin(address)
   * @method function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `claimAdmin` function.
   *
   * @contract KyberNetworkProxy
   * @signature claimAdmin()
   * @method function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `swapEtherToToken` function.
   *
   * @contract KyberNetworkProxy
   * @signature swapEtherToToken(address,uint256)
   * @method function swapEtherToToken(address,uint256) payable returns (uint256)
   */
  swapEtherToToken: (
    token: string,
    minConversionRate: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `transferAdminQuickly` function.
   *
   * @contract KyberNetworkProxy
   * @signature transferAdminQuickly(address)
   * @method function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `addOperator` function.
   *
   * @contract KyberNetworkProxy
   * @signature addOperator(address)
   * @method function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `setKyberNetworkContract` function.
   *
   * @contract KyberNetworkProxy
   * @signature setKyberNetworkContract(address)
   * @method function setKyberNetworkContract(address)
   */
  setKyberNetworkContract: (_kyberNetworkContract: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `removeOperator` function.
   *
   * @contract KyberNetworkProxy
   * @signature removeOperator(address)
   * @method function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `trade` function.
   *
   * @contract KyberNetworkProxy
   * @signature trade(address,uint256,address,address,uint256,uint256,address)
   * @method function trade(address,uint256,address,address,uint256,uint256,address) payable returns (uint256)
   */
  trade: (
    src: string,
    srcAmount: ethers.BigNumberish,
    dest: string,
    destAddress: string,
    maxDestAmount: ethers.BigNumberish,
    minConversionRate: ethers.BigNumberish,
    walletId: string,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `KyberNetworkProxy` contract transaction for `withdrawEther` function.
   *
   * @contract KyberNetworkProxy
   * @signature withdrawEther(uint256,address)
   * @method function withdrawEther(uint256,address)
   */
  withdrawEther: (amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function removeAlerter(address alerter)',
    'function enabled() view returns (bool)',
    'function pendingAdmin() view returns (address)',
    'function getOperators() view returns (address[])',
    'function tradeWithHint(address src, uint256 srcAmount, address dest, address destAddress, uint256 maxDestAmount, uint256 minConversionRate, address walletId, bytes hint) payable returns (uint256)',
    'function swapTokenToEther(address token, uint256 srcAmount, uint256 minConversionRate) returns (uint256)',
    'function withdrawToken(address token, uint256 amount, address sendTo)',
    'function maxGasPrice() view returns (uint256)',
    'function addAlerter(address newAlerter)',
    'function kyberNetworkContract() view returns (address)',
    'function getUserCapInWei(address user) view returns (uint256)',
    'function swapTokenToToken(address src, uint256 srcAmount, address dest, uint256 minConversionRate) returns (uint256)',
    'function transferAdmin(address newAdmin)',
    'function claimAdmin()',
    'function swapEtherToToken(address token, uint256 minConversionRate) payable returns (uint256)',
    'function transferAdminQuickly(address newAdmin)',
    'function getAlerters() view returns (address[])',
    'function getExpectedRate(address src, address dest, uint256 srcQty) view returns (uint256 expectedRate, uint256 slippageRate)',
    'function getUserCapInTokenWei(address user, address token) view returns (uint256)',
    'function addOperator(address newOperator)',
    'function setKyberNetworkContract(address _kyberNetworkContract)',
    'function removeOperator(address operator)',
    'function info(bytes32 field) view returns (uint256)',
    'function trade(address src, uint256 srcAmount, address dest, address destAddress, uint256 maxDestAmount, uint256 minConversionRate, address walletId) payable returns (uint256)',
    'function withdrawEther(uint256 amount, address sendTo)',
    'function getBalance(address token, address user) view returns (uint256)',
    'function admin() view returns (address)',
    'constructor(address _admin)',
    'event ExecuteTrade(address indexed trader, address src, address dest, uint256 actualSrcAmount, uint256 actualDestAmount)',
    'event KyberNetworkSet(address newNetworkContract, address oldNetworkContract)',
    'event TokenWithdraw(address token, uint256 amount, address sendTo)',
    'event EtherWithdraw(uint256 amount, address sendTo)',
    'event TransferAdminPending(address pendingAdmin)',
    'event AdminClaimed(address newAdmin, address previousAdmin)',
    'event AlerterAdded(address newAlerter, bool isAdd)',
    'event OperatorAdded(address newOperator, bool isAdd)',
  ];
}

export interface KyberNetworkProxyEthersContract extends ethers.Contract {
  'enabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'maxGasPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'kyberNetworkContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getUserCapInWei(address)': (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getExpectedRate(address,address,uint256)': (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;
  'getUserCapInTokenWei(address,address)': (
    user: string,
    token: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'info(bytes32)': (
    field: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getBalance(address,address)': (
    token: string,
    user: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)': (
    src: string,
    srcAmount: ethers.BigNumberish,
    dest: string,
    destAddress: string,
    maxDestAmount: ethers.BigNumberish,
    minConversionRate: ethers.BigNumberish,
    walletId: string,
    hint: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'swapTokenToEther(address,uint256,uint256)': (
    token: string,
    srcAmount: ethers.BigNumberish,
    minConversionRate: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'withdrawToken(address,uint256,address)': (
    token: string,
    amount: ethers.BigNumberish,
    sendTo: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'swapTokenToToken(address,uint256,address,uint256)': (
    src: string,
    srcAmount: ethers.BigNumberish,
    dest: string,
    minConversionRate: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'claimAdmin()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'swapEtherToToken(address,uint256)': (
    token: string,
    minConversionRate: ethers.BigNumberish,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'transferAdminQuickly(address)': (
    newAdmin: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setKyberNetworkContract(address)': (
    _kyberNetworkContract: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'trade(address,uint256,address,address,uint256,uint256,address)': (
    src: string,
    srcAmount: ethers.BigNumberish,
    dest: string,
    destAddress: string,
    maxDestAmount: ethers.BigNumberish,
    minConversionRate: ethers.BigNumberish,
    walletId: string,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'withdrawEther(uint256,address)': (
    amount: ethers.BigNumberish,
    sendTo: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  callStatic: {
    'enabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'maxGasPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'kyberNetworkContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getUserCapInWei(address)': (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getExpectedRate(address,address,uint256)': (
      src: string,
      dest: string,
      srcQty: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;
    'getUserCapInTokenWei(address,address)': (
      user: string,
      token: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'info(bytes32)': (
      field: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getBalance(address,address)': (
      token: string,
      user: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)': (
      src: string,
      srcAmount: ethers.BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: ethers.BigNumberish,
      minConversionRate: ethers.BigNumberish,
      walletId: string,
      hint: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'swapTokenToEther(address,uint256,uint256)': (
      token: string,
      srcAmount: ethers.BigNumberish,
      minConversionRate: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'swapTokenToToken(address,uint256,address,uint256)': (
      src: string,
      srcAmount: ethers.BigNumberish,
      dest: string,
      minConversionRate: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'swapEtherToToken(address,uint256)': (
      token: string,
      minConversionRate: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setKyberNetworkContract(address)': (
      _kyberNetworkContract: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'trade(address,uint256,address,address,uint256,uint256,address)': (
      src: string,
      srcAmount: ethers.BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: ethers.BigNumberish,
      minConversionRate: ethers.BigNumberish,
      walletId: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)': (
      src: string,
      srcAmount: ethers.BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: ethers.BigNumberish,
      minConversionRate: ethers.BigNumberish,
      walletId: string,
      hint: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'swapTokenToEther(address,uint256,uint256)': (
      token: string,
      srcAmount: ethers.BigNumberish,
      minConversionRate: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'swapTokenToToken(address,uint256,address,uint256)': (
      src: string,
      srcAmount: ethers.BigNumberish,
      dest: string,
      minConversionRate: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'swapEtherToToken(address,uint256)': (
      token: string,
      minConversionRate: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setKyberNetworkContract(address)': (
      _kyberNetworkContract: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'trade(address,uint256,address,address,uint256,uint256,address)': (
      src: string,
      srcAmount: ethers.BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: ethers.BigNumberish,
      minConversionRate: ethers.BigNumberish,
      walletId: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)': (
      src: string,
      srcAmount: ethers.BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: ethers.BigNumberish,
      minConversionRate: ethers.BigNumberish,
      walletId: string,
      hint: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'swapTokenToEther(address,uint256,uint256)': (
      token: string,
      srcAmount: ethers.BigNumberish,
      minConversionRate: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'swapTokenToToken(address,uint256,address,uint256)': (
      src: string,
      srcAmount: ethers.BigNumberish,
      dest: string,
      minConversionRate: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'swapEtherToToken(address,uint256)': (
      token: string,
      minConversionRate: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferAdminQuickly(address)': (
      newAdmin: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addOperator(address)': (
      newOperator: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setKyberNetworkContract(address)': (
      _kyberNetworkContract: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeOperator(address)': (
      operator: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'trade(address,uint256,address,address,uint256,uint256,address)': (
      src: string,
      srcAmount: ethers.BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: ethers.BigNumberish,
      minConversionRate: ethers.BigNumberish,
      walletId: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
