import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class KyberNetwork extends Contract {
  public readonly ethers: KyberNetworkEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `KyberNetwork` contract call for the `getReserves` function.
   *
   * @contract KyberNetwork
   * @signature getReserves()
   * @method function getReserves() view returns (address[])
   */
  getReserves: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `KyberNetwork` contract call for the `searchBestRate` function.
   *
   * @contract KyberNetwork
   * @signature searchBestRate(address,address,uint256,bool)
   * @method function searchBestRate(address,address,uint256,bool) view returns (address, uint256)
   */
  searchBestRate: (
    src: string,
    dest: string,
    srcAmount: ethers.BigNumberish,
    usePermissionless: boolean,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;

  /**
   * `KyberNetwork` contract call for the `infoFields` function.
   *
   * @contract KyberNetwork
   * @signature infoFields(bytes32)
   * @method function infoFields(bytes32) view returns (uint256)
   */
  infoFields: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetwork` contract call for the `findBestRateOnlyPermission` function.
   *
   * @contract KyberNetwork
   * @signature findBestRateOnlyPermission(address,address,uint256)
   * @method function findBestRateOnlyPermission(address,address,uint256) view returns (uint256, uint256)
   */
  findBestRateOnlyPermission: (
    src: string,
    dest: string,
    srcAmount: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ obsolete: ethers.BigNumber; rate: ethers.BigNumber }>;

  /**
   * `KyberNetwork` contract call for the `enabled` function.
   *
   * @contract KyberNetwork
   * @signature enabled()
   * @method function enabled() view returns (bool)
   */
  enabled: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberNetwork` contract call for the `pendingAdmin` function.
   *
   * @contract KyberNetwork
   * @signature pendingAdmin()
   * @method function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetwork` contract call for the `getOperators` function.
   *
   * @contract KyberNetwork
   * @signature getOperators()
   * @method function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `KyberNetwork` contract call for the `reservesPerTokenSrc` function.
   *
   * @contract KyberNetwork
   * @signature reservesPerTokenSrc(address,uint256)
   * @method function reservesPerTokenSrc(address,uint256) view returns (address)
   */
  reservesPerTokenSrc: ($$0: string, $$1: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetwork` contract call for the `maxGasPrice` function.
   *
   * @contract KyberNetwork
   * @signature maxGasPrice()
   * @method function maxGasPrice() view returns (uint256)
   */
  maxGasPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetwork` contract call for the `negligibleRateDiff` function.
   *
   * @contract KyberNetwork
   * @signature negligibleRateDiff()
   * @method function negligibleRateDiff() view returns (uint256)
   */
  negligibleRateDiff: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetwork` contract call for the `feeBurnerContract` function.
   *
   * @contract KyberNetwork
   * @signature feeBurnerContract()
   * @method function feeBurnerContract() view returns (address)
   */
  feeBurnerContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetwork` contract call for the `expectedRateContract` function.
   *
   * @contract KyberNetwork
   * @signature expectedRateContract()
   * @method function expectedRateContract() view returns (address)
   */
  expectedRateContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetwork` contract call for the `whiteListContract` function.
   *
   * @contract KyberNetwork
   * @signature whiteListContract()
   * @method function whiteListContract() view returns (address)
   */
  whiteListContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetwork` contract call for the `getUserCapInWei` function.
   *
   * @contract KyberNetwork
   * @signature getUserCapInWei(address)
   * @method function getUserCapInWei(address) view returns (uint256)
   */
  getUserCapInWei: (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetwork` contract call for the `isEnabled` function.
   *
   * @contract KyberNetwork
   * @signature isEnabled()
   * @method function isEnabled() view returns (bool)
   */
  isEnabled: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberNetwork` contract call for the `reserveType` function.
   *
   * @contract KyberNetwork
   * @signature reserveType(address)
   * @method function reserveType(address) view returns (uint8)
   */
  reserveType: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `KyberNetwork` contract call for the `kyberNetworkProxyContract` function.
   *
   * @contract KyberNetwork
   * @signature kyberNetworkProxyContract()
   * @method function kyberNetworkProxyContract() view returns (address)
   */
  kyberNetworkProxyContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetwork` contract call for the `getAlerters` function.
   *
   * @contract KyberNetwork
   * @signature getAlerters()
   * @method function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `KyberNetwork` contract call for the `getExpectedRate` function.
   *
   * @contract KyberNetwork
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
   * `KyberNetwork` contract call for the `reserves` function.
   *
   * @contract KyberNetwork
   * @signature reserves(uint256)
   * @method function reserves(uint256) view returns (address)
   */
  reserves: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetwork` contract call for the `getExpectedRateOnlyPermission` function.
   *
   * @contract KyberNetwork
   * @signature getExpectedRateOnlyPermission(address,address,uint256)
   * @method function getExpectedRateOnlyPermission(address,address,uint256) view returns (uint256, uint256)
   */
  getExpectedRateOnlyPermission: (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;

  /**
   * `KyberNetwork` contract call for the `PERM_HINT` function.
   *
   * @contract KyberNetwork
   * @signature PERM_HINT()
   * @method function PERM_HINT() view returns (bytes)
   */
  PERM_HINT: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetwork` contract call for the `getUserCapInTokenWei` function.
   *
   * @contract KyberNetwork
   * @signature getUserCapInTokenWei(address,address)
   * @method function getUserCapInTokenWei(address,address) view returns (uint256)
   */
  getUserCapInTokenWei: (user: string, token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetwork` contract call for the `reservesPerTokenDest` function.
   *
   * @contract KyberNetwork
   * @signature reservesPerTokenDest(address,uint256)
   * @method function reservesPerTokenDest(address,uint256) view returns (address)
   */
  reservesPerTokenDest: ($$0: string, $$1: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetwork` contract call for the `maxGasPriceValue` function.
   *
   * @contract KyberNetwork
   * @signature maxGasPriceValue()
   * @method function maxGasPriceValue() view returns (uint256)
   */
  maxGasPriceValue: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetwork` contract call for the `info` function.
   *
   * @contract KyberNetwork
   * @signature info(bytes32)
   * @method function info(bytes32) view returns (uint256)
   */
  info: (field: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetwork` contract call for the `findBestRate` function.
   *
   * @contract KyberNetwork
   * @signature findBestRate(address,address,uint256)
   * @method function findBestRate(address,address,uint256) view returns (uint256, uint256)
   */
  findBestRate: (
    src: string,
    dest: string,
    srcAmount: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ obsolete: ethers.BigNumber; rate: ethers.BigNumber }>;

  /**
   * `KyberNetwork` contract call for the `PERM_HINT_GET_RATE` function.
   *
   * @contract KyberNetwork
   * @signature PERM_HINT_GET_RATE()
   * @method function PERM_HINT_GET_RATE() view returns (uint256)
   */
  PERM_HINT_GET_RATE: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetwork` contract call for the `getNumReserves` function.
   *
   * @contract KyberNetwork
   * @signature getNumReserves()
   * @method function getNumReserves() view returns (uint256)
   */
  getNumReserves: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetwork` contract call for the `getBalance` function.
   *
   * @contract KyberNetwork
   * @signature getBalance(address,address)
   * @method function getBalance(address,address) view returns (uint256)
   */
  getBalance: (token: string, user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetwork` contract call for the `getReservesRates` function.
   *
   * @contract KyberNetwork
   * @signature getReservesRates(address,uint256)
   * @method function getReservesRates(address,uint256) view returns (address[], uint256[], address[], uint256[])
   */
  getReservesRates: (
    token: string,
    optionalAmount: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    buyReserves: string[];
    buyRates: ethers.BigNumber[];
    sellReserves: string[];
    sellRates: ethers.BigNumber[];
  }>;

  /**
   * `KyberNetwork` contract call for the `admin` function.
   *
   * @contract KyberNetwork
   * @signature admin()
   * @method function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `KyberNetwork` contract transaction for `removeAlerter` function.
   *
   * @contract KyberNetwork
   * @signature removeAlerter(address)
   * @method function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `tradeWithHint` function.
   *
   * @contract KyberNetwork
   * @signature tradeWithHint(address,address,uint256,address,address,uint256,uint256,address,bytes)
   * @method function tradeWithHint(address,address,uint256,address,address,uint256,uint256,address,bytes) payable returns (uint256)
   */
  tradeWithHint: (
    trader: string,
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
   * `KyberNetwork` contract transaction for `setFeeBurner` function.
   *
   * @contract KyberNetwork
   * @signature setFeeBurner(address)
   * @method function setFeeBurner(address)
   */
  setFeeBurner: (feeBurner: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `removeReserve` function.
   *
   * @contract KyberNetwork
   * @signature removeReserve(address,uint256)
   * @method function removeReserve(address,uint256) returns (bool)
   */
  removeReserve: (reserve: string, index: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `setWhiteList` function.
   *
   * @contract KyberNetwork
   * @signature setWhiteList(address)
   * @method function setWhiteList(address)
   */
  setWhiteList: (whiteList: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `withdrawToken` function.
   *
   * @contract KyberNetwork
   * @signature withdrawToken(address,uint256,address)
   * @method function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `addAlerter` function.
   *
   * @contract KyberNetwork
   * @signature addAlerter(address)
   * @method function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `setExpectedRate` function.
   *
   * @contract KyberNetwork
   * @signature setExpectedRate(address)
   * @method function setExpectedRate(address)
   */
  setExpectedRate: (expectedRate: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `setInfo` function.
   *
   * @contract KyberNetwork
   * @signature setInfo(bytes32,uint256)
   * @method function setInfo(bytes32,uint256)
   */
  setInfo: (field: string | ethers.utils.BytesLike, value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `transferAdmin` function.
   *
   * @contract KyberNetwork
   * @signature transferAdmin(address)
   * @method function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `setEnable` function.
   *
   * @contract KyberNetwork
   * @signature setEnable(bool)
   * @method function setEnable(bool)
   */
  setEnable: (_enable: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `claimAdmin` function.
   *
   * @contract KyberNetwork
   * @signature claimAdmin()
   * @method function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `transferAdminQuickly` function.
   *
   * @contract KyberNetwork
   * @signature transferAdminQuickly(address)
   * @method function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `addOperator` function.
   *
   * @contract KyberNetwork
   * @signature addOperator(address)
   * @method function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `addReserve` function.
   *
   * @contract KyberNetwork
   * @signature addReserve(address,bool)
   * @method function addReserve(address,bool) returns (bool)
   */
  addReserve: (reserve: string, isPermissionless: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `removeOperator` function.
   *
   * @contract KyberNetwork
   * @signature removeOperator(address)
   * @method function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `setParams` function.
   *
   * @contract KyberNetwork
   * @signature setParams(uint256,uint256)
   * @method function setParams(uint256,uint256)
   */
  setParams: (
    _maxGasPrice: ethers.BigNumberish,
    _negligibleRateDiff: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `setKyberProxy` function.
   *
   * @contract KyberNetwork
   * @signature setKyberProxy(address)
   * @method function setKyberProxy(address)
   */
  setKyberProxy: (networkProxy: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `withdrawEther` function.
   *
   * @contract KyberNetwork
   * @signature withdrawEther(uint256,address)
   * @method function withdrawEther(uint256,address)
   */
  withdrawEther: (amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `KyberNetwork` contract transaction for `listPairForReserve` function.
   *
   * @contract KyberNetwork
   * @signature listPairForReserve(address,address,bool,bool,bool)
   * @method function listPairForReserve(address,address,bool,bool,bool) returns (bool)
   */
  listPairForReserve: (
    reserve: string,
    token: string,
    ethToToken: boolean,
    tokenToEth: boolean,
    add: boolean,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function removeAlerter(address alerter)',
    'function tradeWithHint(address trader, address src, uint256 srcAmount, address dest, address destAddress, uint256 maxDestAmount, uint256 minConversionRate, address walletId, bytes hint) payable returns (uint256)',
    'function getReserves() view returns (address[])',
    'function searchBestRate(address src, address dest, uint256 srcAmount, bool usePermissionless) view returns (address, uint256)',
    'function infoFields(bytes32) view returns (uint256)',
    'function setFeeBurner(address feeBurner)',
    'function findBestRateOnlyPermission(address src, address dest, uint256 srcAmount) view returns (uint256 obsolete, uint256 rate)',
    'function enabled() view returns (bool)',
    'function removeReserve(address reserve, uint256 index) returns (bool)',
    'function pendingAdmin() view returns (address)',
    'function getOperators() view returns (address[])',
    'function reservesPerTokenSrc(address, uint256) view returns (address)',
    'function setWhiteList(address whiteList)',
    'function withdrawToken(address token, uint256 amount, address sendTo)',
    'function maxGasPrice() view returns (uint256)',
    'function addAlerter(address newAlerter)',
    'function negligibleRateDiff() view returns (uint256)',
    'function feeBurnerContract() view returns (address)',
    'function setExpectedRate(address expectedRate)',
    'function expectedRateContract() view returns (address)',
    'function whiteListContract() view returns (address)',
    'function setInfo(bytes32 field, uint256 value)',
    'function getUserCapInWei(address user) view returns (uint256)',
    'function isEnabled() view returns (bool)',
    'function reserveType(address) view returns (uint8)',
    'function transferAdmin(address newAdmin)',
    'function setEnable(bool _enable)',
    'function claimAdmin()',
    'function kyberNetworkProxyContract() view returns (address)',
    'function transferAdminQuickly(address newAdmin)',
    'function getAlerters() view returns (address[])',
    'function getExpectedRate(address src, address dest, uint256 srcQty) view returns (uint256 expectedRate, uint256 slippageRate)',
    'function reserves(uint256) view returns (address)',
    'function getExpectedRateOnlyPermission(address src, address dest, uint256 srcQty) view returns (uint256 expectedRate, uint256 slippageRate)',
    'function PERM_HINT() view returns (bytes)',
    'function getUserCapInTokenWei(address user, address token) view returns (uint256)',
    'function reservesPerTokenDest(address, uint256) view returns (address)',
    'function addOperator(address newOperator)',
    'function addReserve(address reserve, bool isPermissionless) returns (bool)',
    'function removeOperator(address operator)',
    'function maxGasPriceValue() view returns (uint256)',
    'function info(bytes32 field) view returns (uint256)',
    'function findBestRate(address src, address dest, uint256 srcAmount) view returns (uint256 obsolete, uint256 rate)',
    'function setParams(uint256 _maxGasPrice, uint256 _negligibleRateDiff)',
    'function PERM_HINT_GET_RATE() view returns (uint256)',
    'function setKyberProxy(address networkProxy)',
    'function withdrawEther(uint256 amount, address sendTo)',
    'function getNumReserves() view returns (uint256)',
    'function getBalance(address token, address user) view returns (uint256)',
    'function listPairForReserve(address reserve, address token, bool ethToToken, bool tokenToEth, bool add) returns (bool)',
    'function getReservesRates(address token, uint256 optionalAmount) view returns (address[] buyReserves, uint256[] buyRates, address[] sellReserves, uint256[] sellRates)',
    'function admin() view returns (address)',
    'constructor(address _admin)',
    'event EtherReceival(address indexed sender, uint256 amount)',
    'event AddReserveToNetwork(address indexed reserve, bool add, bool isPermissionless)',
    'event RemoveReserveFromNetwork(address reserve)',
    'event ListReservePairs(address indexed reserve, address src, address dest, bool add)',
    'event WhiteListContractSet(address newContract, address currentContract)',
    'event ExpectedRateContractSet(address newContract, address currentContract)',
    'event FeeBurnerContractSet(address newContract, address currentContract)',
    'event KyberNetwrokParamsSet(uint256 maxGasPrice, uint256 negligibleRateDiff)',
    'event KyberNetworkSetEnable(bool isEnabled)',
    'event KyberProxySet(address proxy, address sender)',
    'event KyberTrade(address indexed trader, address src, address dest, uint256 srcAmount, uint256 dstAmount, address destAddress, uint256 ethWeiValue, address reserve1, address reserve2, bytes hint)',
    'event TokenWithdraw(address token, uint256 amount, address sendTo)',
    'event EtherWithdraw(uint256 amount, address sendTo)',
    'event TransferAdminPending(address pendingAdmin)',
    'event AdminClaimed(address newAdmin, address previousAdmin)',
    'event AlerterAdded(address newAlerter, bool isAdd)',
    'event OperatorAdded(address newOperator, bool isAdd)',
  ];
}

export interface KyberNetworkEthersContract extends ethers.Contract {
  'getReserves()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'searchBestRate(address,address,uint256,bool)': (
    src: string,
    dest: string,
    srcAmount: ethers.BigNumberish,
    usePermissionless: boolean,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;
  'infoFields(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'findBestRateOnlyPermission(address,address,uint256)': (
    src: string,
    dest: string,
    srcAmount: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ obsolete: ethers.BigNumber; rate: ethers.BigNumber }>;
  'enabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'reservesPerTokenSrc(address,uint256)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<string>;
  'maxGasPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'negligibleRateDiff()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'feeBurnerContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'expectedRateContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'whiteListContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getUserCapInWei(address)': (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'isEnabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'reserveType(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<number>;
  'kyberNetworkProxyContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getExpectedRate(address,address,uint256)': (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;
  'reserves(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'getExpectedRateOnlyPermission(address,address,uint256)': (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;
  'PERM_HINT()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getUserCapInTokenWei(address,address)': (
    user: string,
    token: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'reservesPerTokenDest(address,uint256)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<string>;
  'maxGasPriceValue()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'info(bytes32)': (
    field: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'findBestRate(address,address,uint256)': (
    src: string,
    dest: string,
    srcAmount: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ obsolete: ethers.BigNumber; rate: ethers.BigNumber }>;
  'PERM_HINT_GET_RATE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getNumReserves()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getBalance(address,address)': (
    token: string,
    user: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getReservesRates(address,uint256)': (
    token: string,
    optionalAmount: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    buyReserves: string[];
    buyRates: ethers.BigNumber[];
    sellReserves: string[];
    sellRates: ethers.BigNumber[];
  }>;
  'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'removeAlerter(address)': (
    alerter: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tradeWithHint(address,address,uint256,address,address,uint256,uint256,address,bytes)': (
    trader: string,
    src: string,
    srcAmount: ethers.BigNumberish,
    dest: string,
    destAddress: string,
    maxDestAmount: ethers.BigNumberish,
    minConversionRate: ethers.BigNumberish,
    walletId: string,
    hint: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setFeeBurner(address)': (
    feeBurner: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'removeReserve(address,uint256)': (
    reserve: string,
    index: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setWhiteList(address)': (
    whiteList: string,
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
  'setExpectedRate(address)': (
    expectedRate: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setInfo(bytes32,uint256)': (
    field: string | ethers.utils.BytesLike,
    value: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'transferAdmin(address)': (
    newAdmin: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setEnable(bool)': (
    _enable: boolean,
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
  'addReserve(address,bool)': (
    reserve: string,
    isPermissionless: boolean,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'removeOperator(address)': (
    operator: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setParams(uint256,uint256)': (
    _maxGasPrice: ethers.BigNumberish,
    _negligibleRateDiff: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setKyberProxy(address)': (
    networkProxy: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'withdrawEther(uint256,address)': (
    amount: ethers.BigNumberish,
    sendTo: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'listPairForReserve(address,address,bool,bool,bool)': (
    reserve: string,
    token: string,
    ethToToken: boolean,
    tokenToEth: boolean,
    add: boolean,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'getReserves()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'searchBestRate(address,address,uint256,bool)': (
      src: string,
      dest: string,
      srcAmount: ethers.BigNumberish,
      usePermissionless: boolean,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<any[]>;
    'infoFields(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'findBestRateOnlyPermission(address,address,uint256)': (
      src: string,
      dest: string,
      srcAmount: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ obsolete: ethers.BigNumber; rate: ethers.BigNumber }>;
    'enabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'reservesPerTokenSrc(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'maxGasPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'negligibleRateDiff()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'feeBurnerContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'expectedRateContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'whiteListContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getUserCapInWei(address)': (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'isEnabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'reserveType(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<number>;
    'kyberNetworkProxyContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getExpectedRate(address,address,uint256)': (
      src: string,
      dest: string,
      srcQty: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;
    'reserves(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getExpectedRateOnlyPermission(address,address,uint256)': (
      src: string,
      dest: string,
      srcQty: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;
    'PERM_HINT()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getUserCapInTokenWei(address,address)': (
      user: string,
      token: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'reservesPerTokenDest(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'maxGasPriceValue()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'info(bytes32)': (
      field: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'findBestRate(address,address,uint256)': (
      src: string,
      dest: string,
      srcAmount: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ obsolete: ethers.BigNumber; rate: ethers.BigNumber }>;
    'PERM_HINT_GET_RATE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getNumReserves()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getBalance(address,address)': (
      token: string,
      user: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getReservesRates(address,uint256)': (
      token: string,
      optionalAmount: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      buyReserves: string[];
      buyRates: ethers.BigNumber[];
      sellReserves: string[];
      sellRates: ethers.BigNumber[];
    }>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'removeAlerter(address)': (
      alerter: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tradeWithHint(address,address,uint256,address,address,uint256,uint256,address,bytes)': (
      trader: string,
      src: string,
      srcAmount: ethers.BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: ethers.BigNumberish,
      minConversionRate: ethers.BigNumberish,
      walletId: string,
      hint: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setFeeBurner(address)': (
      feeBurner: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'removeReserve(address,uint256)': (
      reserve: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setWhiteList(address)': (
      whiteList: string,
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
    'setExpectedRate(address)': (
      expectedRate: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setInfo(bytes32,uint256)': (
      field: string | ethers.utils.BytesLike,
      value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'transferAdmin(address)': (
      newAdmin: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setEnable(bool)': (
      _enable: boolean,
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
    'addReserve(address,bool)': (
      reserve: string,
      isPermissionless: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'removeOperator(address)': (
      operator: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setParams(uint256,uint256)': (
      _maxGasPrice: ethers.BigNumberish,
      _negligibleRateDiff: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setKyberProxy(address)': (
      networkProxy: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'listPairForReserve(address,address,bool,bool,bool)': (
      reserve: string,
      token: string,
      ethToToken: boolean,
      tokenToEth: boolean,
      add: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'getReserves()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'searchBestRate(address,address,uint256,bool)': (
      src: string,
      dest: string,
      srcAmount: ethers.BigNumberish,
      usePermissionless: boolean,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<any[]>;
    'infoFields(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'findBestRateOnlyPermission(address,address,uint256)': (
      src: string,
      dest: string,
      srcAmount: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ obsolete: ethers.BigNumber; rate: ethers.BigNumber }>;
    'enabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'reservesPerTokenSrc(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'maxGasPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'negligibleRateDiff()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'feeBurnerContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'expectedRateContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'whiteListContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getUserCapInWei(address)': (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'isEnabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'reserveType(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<number>;
    'kyberNetworkProxyContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getExpectedRate(address,address,uint256)': (
      src: string,
      dest: string,
      srcQty: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;
    'reserves(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getExpectedRateOnlyPermission(address,address,uint256)': (
      src: string,
      dest: string,
      srcQty: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;
    'PERM_HINT()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getUserCapInTokenWei(address,address)': (
      user: string,
      token: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'reservesPerTokenDest(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'maxGasPriceValue()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'info(bytes32)': (
      field: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'findBestRate(address,address,uint256)': (
      src: string,
      dest: string,
      srcAmount: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ obsolete: ethers.BigNumber; rate: ethers.BigNumber }>;
    'PERM_HINT_GET_RATE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getNumReserves()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getBalance(address,address)': (
      token: string,
      user: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getReservesRates(address,uint256)': (
      token: string,
      optionalAmount: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      buyReserves: string[];
      buyRates: ethers.BigNumber[];
      sellReserves: string[];
      sellRates: ethers.BigNumber[];
    }>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'tradeWithHint(address,address,uint256,address,address,uint256,uint256,address,bytes)': (
      trader: string,
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
    'setFeeBurner(address)': (feeBurner: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'removeReserve(address,uint256)': (
      reserve: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'setWhiteList(address)': (whiteList: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setExpectedRate(address)': (expectedRate: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setInfo(bytes32,uint256)': (
      field: string | ethers.utils.BytesLike,
      value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setEnable(bool)': (_enable: boolean, $$overrides?: ethers.Overrides) => Promise<void>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'addReserve(address,bool)': (
      reserve: string,
      isPermissionless: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setParams(uint256,uint256)': (
      _maxGasPrice: ethers.BigNumberish,
      _negligibleRateDiff: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setKyberProxy(address)': (networkProxy: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'listPairForReserve(address,address,bool,bool,bool)': (
      reserve: string,
      token: string,
      ethToToken: boolean,
      tokenToEth: boolean,
      add: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
  };

  estimateGas: {
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'tradeWithHint(address,address,uint256,address,address,uint256,uint256,address,bytes)': (
      trader: string,
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
    'setFeeBurner(address)': (feeBurner: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeReserve(address,uint256)': (
      reserve: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setWhiteList(address)': (whiteList: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setExpectedRate(address)': (expectedRate: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setInfo(bytes32,uint256)': (
      field: string | ethers.utils.BytesLike,
      value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setEnable(bool)': (_enable: boolean, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'addReserve(address,bool)': (
      reserve: string,
      isPermissionless: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setParams(uint256,uint256)': (
      _maxGasPrice: ethers.BigNumberish,
      _negligibleRateDiff: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setKyberProxy(address)': (networkProxy: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'listPairForReserve(address,address,bool,bool,bool)': (
      reserve: string,
      token: string,
      ethToToken: boolean,
      tokenToEth: boolean,
      add: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'tradeWithHint(address,address,uint256,address,address,uint256,uint256,address,bytes)': (
      trader: string,
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
    'setFeeBurner(address)': (feeBurner: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'removeReserve(address,uint256)': (
      reserve: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setWhiteList(address)': (whiteList: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setExpectedRate(address)': (
      expectedRate: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setInfo(bytes32,uint256)': (
      field: string | ethers.utils.BytesLike,
      value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setEnable(bool)': (_enable: boolean, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'transferAdminQuickly(address)': (
      newAdmin: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addOperator(address)': (
      newOperator: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addReserve(address,bool)': (
      reserve: string,
      isPermissionless: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeOperator(address)': (
      operator: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setParams(uint256,uint256)': (
      _maxGasPrice: ethers.BigNumberish,
      _negligibleRateDiff: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setKyberProxy(address)': (
      networkProxy: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'listPairForReserve(address,address,bool,bool,bool)': (
      reserve: string,
      token: string,
      ethToToken: boolean,
      tokenToEth: boolean,
      add: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
