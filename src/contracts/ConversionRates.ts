import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ConversionRates extends Contract {
  public readonly ethers: ConversionRatesEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ConversionRates` contract call for the `validRateDurationInBlocks` function.
   *
   * @contract ConversionRates
   * @signature validRateDurationInBlocks()
   * @method function validRateDurationInBlocks() view returns (uint256)
   */
  validRateDurationInBlocks: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRates` contract call for the `pendingAdmin` function.
   *
   * @contract ConversionRates
   * @signature pendingAdmin()
   * @method function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ConversionRates` contract call for the `getOperators` function.
   *
   * @contract ConversionRates
   * @signature getOperators()
   * @method function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ConversionRates` contract call for the `getListedTokens` function.
   *
   * @contract ConversionRates
   * @signature getListedTokens()
   * @method function getListedTokens() view returns (address[])
   */
  getListedTokens: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ConversionRates` contract call for the `numTokensInCurrentCompactData` function.
   *
   * @contract ConversionRates
   * @signature numTokensInCurrentCompactData()
   * @method function numTokensInCurrentCompactData() view returns (uint256)
   */
  numTokensInCurrentCompactData: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRates` contract call for the `getStepFunctionData` function.
   *
   * @contract ConversionRates
   * @signature getStepFunctionData(address,uint256,uint256)
   * @method function getStepFunctionData(address,uint256,uint256) view returns (int256)
   */
  getStepFunctionData: (
    token: string,
    command: ethers.BigNumberish,
    param: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRates` contract call for the `getTokenBasicData` function.
   *
   * @contract ConversionRates
   * @signature getTokenBasicData(address)
   * @method function getTokenBasicData(address) view returns (bool, bool)
   */
  getTokenBasicData: (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `ConversionRates` contract call for the `getAlerters` function.
   *
   * @contract ConversionRates
   * @signature getAlerters()
   * @method function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ConversionRates` contract call for the `getRateUpdateBlock` function.
   *
   * @contract ConversionRates
   * @signature getRateUpdateBlock(address)
   * @method function getRateUpdateBlock(address) view returns (uint256)
   */
  getRateUpdateBlock: (token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRates` contract call for the `reserveContract` function.
   *
   * @contract ConversionRates
   * @signature reserveContract()
   * @method function reserveContract() view returns (address)
   */
  reserveContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ConversionRates` contract call for the `tokenImbalanceData` function.
   *
   * @contract ConversionRates
   * @signature tokenImbalanceData(address,uint256)
   * @method function tokenImbalanceData(address,uint256) view returns (uint256)
   */
  tokenImbalanceData: (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRates` contract call for the `getRate` function.
   *
   * @contract ConversionRates
   * @signature getRate(address,uint256,bool,uint256)
   * @method function getRate(address,uint256,bool,uint256) view returns (uint256)
   */
  getRate: (
    token: string,
    currentBlockNumber: ethers.BigNumberish,
    buy: boolean,
    qty: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRates` contract call for the `getBasicRate` function.
   *
   * @contract ConversionRates
   * @signature getBasicRate(address,bool)
   * @method function getBasicRate(address,bool) view returns (uint256)
   */
  getBasicRate: (token: string, buy: boolean, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRates` contract call for the `getCompactData` function.
   *
   * @contract ConversionRates
   * @signature getCompactData(address)
   * @method function getCompactData(address) view returns (uint256, uint256, bytes1, bytes1)
   */
  getCompactData: (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `ConversionRates` contract call for the `getTokenControlInfo` function.
   *
   * @contract ConversionRates
   * @signature getTokenControlInfo(address)
   * @method function getTokenControlInfo(address) view returns (uint256, uint256, uint256)
   */
  getTokenControlInfo: (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `ConversionRates` contract call for the `admin` function.
   *
   * @contract ConversionRates
   * @signature admin()
   * @method function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ConversionRates` contract transaction for `removeAlerter` function.
   *
   * @contract ConversionRates
   * @signature removeAlerter(address)
   * @method function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setReserveAddress` function.
   *
   * @contract ConversionRates
   * @signature setReserveAddress(address)
   * @method function setReserveAddress(address)
   */
  setReserveAddress: (reserve: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `disableTokenTrade` function.
   *
   * @contract ConversionRates
   * @signature disableTokenTrade(address)
   * @method function disableTokenTrade(address)
   */
  disableTokenTrade: (token: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setBaseRate` function.
   *
   * @contract ConversionRates
   * @signature setBaseRate(address[],uint256[],uint256[],bytes14[],bytes14[],uint256,uint256[])
   * @method function setBaseRate(address[],uint256[],uint256[],bytes14[],bytes14[],uint256,uint256[])
   */
  setBaseRate: (
    tokens: string[],
    baseBuy: ethers.BigNumber[],
    baseSell: ethers.BigNumber[],
    buy: string | ethers.utils.BytesLike,
    sell: string | ethers.utils.BytesLike,
    blockNumber: ethers.BigNumberish,
    indices: ethers.BigNumber[],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `enableTokenTrade` function.
   *
   * @contract ConversionRates
   * @signature enableTokenTrade(address)
   * @method function enableTokenTrade(address)
   */
  enableTokenTrade: (token: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `withdrawToken` function.
   *
   * @contract ConversionRates
   * @signature withdrawToken(address,uint256,address)
   * @method function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `addAlerter` function.
   *
   * @contract ConversionRates
   * @signature addAlerter(address)
   * @method function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setCompactData` function.
   *
   * @contract ConversionRates
   * @signature setCompactData(bytes14[],bytes14[],uint256,uint256[])
   * @method function setCompactData(bytes14[],bytes14[],uint256,uint256[])
   */
  setCompactData: (
    buy: string | ethers.utils.BytesLike,
    sell: string | ethers.utils.BytesLike,
    blockNumber: ethers.BigNumberish,
    indices: ethers.BigNumber[],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setValidRateDurationInBlocks` function.
   *
   * @contract ConversionRates
   * @signature setValidRateDurationInBlocks(uint256)
   * @method function setValidRateDurationInBlocks(uint256)
   */
  setValidRateDurationInBlocks: (duration: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `transferAdmin` function.
   *
   * @contract ConversionRates
   * @signature transferAdmin(address)
   * @method function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `claimAdmin` function.
   *
   * @contract ConversionRates
   * @signature claimAdmin()
   * @method function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `transferAdminQuickly` function.
   *
   * @contract ConversionRates
   * @signature transferAdminQuickly(address)
   * @method function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setQtyStepFunction` function.
   *
   * @contract ConversionRates
   * @signature setQtyStepFunction(address,int256[],int256[],int256[],int256[])
   * @method function setQtyStepFunction(address,int256[],int256[],int256[],int256[])
   */
  setQtyStepFunction: (
    token: string,
    xBuy: ethers.BigNumber[],
    yBuy: ethers.BigNumber[],
    xSell: ethers.BigNumber[],
    ySell: ethers.BigNumber[],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `addOperator` function.
   *
   * @contract ConversionRates
   * @signature addOperator(address)
   * @method function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `removeOperator` function.
   *
   * @contract ConversionRates
   * @signature removeOperator(address)
   * @method function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setImbalanceStepFunction` function.
   *
   * @contract ConversionRates
   * @signature setImbalanceStepFunction(address,int256[],int256[],int256[],int256[])
   * @method function setImbalanceStepFunction(address,int256[],int256[],int256[],int256[])
   */
  setImbalanceStepFunction: (
    token: string,
    xBuy: ethers.BigNumber[],
    yBuy: ethers.BigNumber[],
    xSell: ethers.BigNumber[],
    ySell: ethers.BigNumber[],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setTokenControlInfo` function.
   *
   * @contract ConversionRates
   * @signature setTokenControlInfo(address,uint256,uint256,uint256)
   * @method function setTokenControlInfo(address,uint256,uint256,uint256)
   */
  setTokenControlInfo: (
    token: string,
    minimalRecordResolution: ethers.BigNumberish,
    maxPerBlockImbalance: ethers.BigNumberish,
    maxTotalImbalance: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `recordImbalance` function.
   *
   * @contract ConversionRates
   * @signature recordImbalance(address,int256,uint256,uint256)
   * @method function recordImbalance(address,int256,uint256,uint256)
   */
  recordImbalance: (
    token: string,
    buyAmount: ethers.BigNumberish,
    rateUpdateBlock: ethers.BigNumberish,
    currentBlock: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `withdrawEther` function.
   *
   * @contract ConversionRates
   * @signature withdrawEther(uint256,address)
   * @method function withdrawEther(uint256,address)
   */
  withdrawEther: (amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `addToken` function.
   *
   * @contract ConversionRates
   * @signature addToken(address)
   * @method function addToken(address)
   */
  addToken: (token: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function removeAlerter(address alerter)',
    'function setReserveAddress(address reserve)',
    'function disableTokenTrade(address token)',
    'function validRateDurationInBlocks() view returns (uint256)',
    'function setBaseRate(address[] tokens, uint256[] baseBuy, uint256[] baseSell, bytes14[] buy, bytes14[] sell, uint256 blockNumber, uint256[] indices)',
    'function enableTokenTrade(address token)',
    'function pendingAdmin() view returns (address)',
    'function getOperators() view returns (address[])',
    'function getListedTokens() view returns (address[])',
    'function withdrawToken(address token, uint256 amount, address sendTo)',
    'function addAlerter(address newAlerter)',
    'function numTokensInCurrentCompactData() view returns (uint256)',
    'function getStepFunctionData(address token, uint256 command, uint256 param) view returns (int256)',
    'function setCompactData(bytes14[] buy, bytes14[] sell, uint256 blockNumber, uint256[] indices)',
    'function setValidRateDurationInBlocks(uint256 duration)',
    'function getTokenBasicData(address token) view returns (bool, bool)',
    'function transferAdmin(address newAdmin)',
    'function claimAdmin()',
    'function transferAdminQuickly(address newAdmin)',
    'function getAlerters() view returns (address[])',
    'function getRateUpdateBlock(address token) view returns (uint256)',
    'function setQtyStepFunction(address token, int256[] xBuy, int256[] yBuy, int256[] xSell, int256[] ySell)',
    'function addOperator(address newOperator)',
    'function reserveContract() view returns (address)',
    'function tokenImbalanceData(address, uint256) view returns (uint256)',
    'function removeOperator(address operator)',
    'function getRate(address token, uint256 currentBlockNumber, bool buy, uint256 qty) view returns (uint256)',
    'function setImbalanceStepFunction(address token, int256[] xBuy, int256[] yBuy, int256[] xSell, int256[] ySell)',
    'function setTokenControlInfo(address token, uint256 minimalRecordResolution, uint256 maxPerBlockImbalance, uint256 maxTotalImbalance)',
    'function recordImbalance(address token, int256 buyAmount, uint256 rateUpdateBlock, uint256 currentBlock)',
    'function withdrawEther(uint256 amount, address sendTo)',
    'function getBasicRate(address token, bool buy) view returns (uint256)',
    'function addToken(address token)',
    'function getCompactData(address token) view returns (uint256, uint256, bytes1, bytes1)',
    'function getTokenControlInfo(address token) view returns (uint256, uint256, uint256)',
    'function admin() view returns (address)',
    'constructor(address _admin)',
    'event TokenWithdraw(address token, uint256 amount, address sendTo)',
    'event EtherWithdraw(uint256 amount, address sendTo)',
    'event TransferAdminPending(address pendingAdmin)',
    'event AdminClaimed(address newAdmin, address previousAdmin)',
    'event AlerterAdded(address newAlerter, bool isAdd)',
    'event OperatorAdded(address newOperator, bool isAdd)',
  ];
}

export interface ConversionRatesEthersContract extends ethers.Contract {
  'validRateDurationInBlocks()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getListedTokens()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'numTokensInCurrentCompactData()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getStepFunctionData(address,uint256,uint256)': (
    token: string,
    command: ethers.BigNumberish,
    param: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getTokenBasicData(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getRateUpdateBlock(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'reserveContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'tokenImbalanceData(address,uint256)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getRate(address,uint256,bool,uint256)': (
    token: string,
    currentBlockNumber: ethers.BigNumberish,
    buy: boolean,
    qty: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getBasicRate(address,bool)': (
    token: string,
    buy: boolean,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getCompactData(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getTokenControlInfo(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'removeAlerter(address)': (
    alerter: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setReserveAddress(address)': (
    reserve: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'disableTokenTrade(address)': (
    token: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setBaseRate(address[],uint256[],uint256[],bytes14[],bytes14[],uint256,uint256[])': (
    tokens: string[],
    baseBuy: ethers.BigNumber[],
    baseSell: ethers.BigNumber[],
    buy: string | ethers.utils.BytesLike,
    sell: string | ethers.utils.BytesLike,
    blockNumber: ethers.BigNumberish,
    indices: ethers.BigNumber[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'enableTokenTrade(address)': (
    token: string,
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
  'setCompactData(bytes14[],bytes14[],uint256,uint256[])': (
    buy: string | ethers.utils.BytesLike,
    sell: string | ethers.utils.BytesLike,
    blockNumber: ethers.BigNumberish,
    indices: ethers.BigNumber[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setValidRateDurationInBlocks(uint256)': (
    duration: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
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
  'setQtyStepFunction(address,int256[],int256[],int256[],int256[])': (
    token: string,
    xBuy: ethers.BigNumber[],
    yBuy: ethers.BigNumber[],
    xSell: ethers.BigNumber[],
    ySell: ethers.BigNumber[],
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
  'setImbalanceStepFunction(address,int256[],int256[],int256[],int256[])': (
    token: string,
    xBuy: ethers.BigNumber[],
    yBuy: ethers.BigNumber[],
    xSell: ethers.BigNumber[],
    ySell: ethers.BigNumber[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setTokenControlInfo(address,uint256,uint256,uint256)': (
    token: string,
    minimalRecordResolution: ethers.BigNumberish,
    maxPerBlockImbalance: ethers.BigNumberish,
    maxTotalImbalance: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'recordImbalance(address,int256,uint256,uint256)': (
    token: string,
    buyAmount: ethers.BigNumberish,
    rateUpdateBlock: ethers.BigNumberish,
    currentBlock: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'withdrawEther(uint256,address)': (
    amount: ethers.BigNumberish,
    sendTo: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'addToken(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'validRateDurationInBlocks()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getListedTokens()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'numTokensInCurrentCompactData()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getStepFunctionData(address,uint256,uint256)': (
      token: string,
      command: ethers.BigNumberish,
      param: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getTokenBasicData(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getRateUpdateBlock(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'reserveContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'tokenImbalanceData(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getRate(address,uint256,bool,uint256)': (
      token: string,
      currentBlockNumber: ethers.BigNumberish,
      buy: boolean,
      qty: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getBasicRate(address,bool)': (
      token: string,
      buy: boolean,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getCompactData(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getTokenControlInfo(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'removeAlerter(address)': (
      alerter: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setReserveAddress(address)': (
      reserve: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'disableTokenTrade(address)': (
      token: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setBaseRate(address[],uint256[],uint256[],bytes14[],bytes14[],uint256,uint256[])': (
      tokens: string[],
      baseBuy: ethers.BigNumber[],
      baseSell: ethers.BigNumber[],
      buy: string | ethers.utils.BytesLike,
      sell: string | ethers.utils.BytesLike,
      blockNumber: ethers.BigNumberish,
      indices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'enableTokenTrade(address)': (
      token: string,
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
    'setCompactData(bytes14[],bytes14[],uint256,uint256[])': (
      buy: string | ethers.utils.BytesLike,
      sell: string | ethers.utils.BytesLike,
      blockNumber: ethers.BigNumberish,
      indices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setValidRateDurationInBlocks(uint256)': (
      duration: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
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
    'setQtyStepFunction(address,int256[],int256[],int256[],int256[])': (
      token: string,
      xBuy: ethers.BigNumber[],
      yBuy: ethers.BigNumber[],
      xSell: ethers.BigNumber[],
      ySell: ethers.BigNumber[],
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
    'setImbalanceStepFunction(address,int256[],int256[],int256[],int256[])': (
      token: string,
      xBuy: ethers.BigNumber[],
      yBuy: ethers.BigNumber[],
      xSell: ethers.BigNumber[],
      ySell: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setTokenControlInfo(address,uint256,uint256,uint256)': (
      token: string,
      minimalRecordResolution: ethers.BigNumberish,
      maxPerBlockImbalance: ethers.BigNumberish,
      maxTotalImbalance: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'recordImbalance(address,int256,uint256,uint256)': (
      token: string,
      buyAmount: ethers.BigNumberish,
      rateUpdateBlock: ethers.BigNumberish,
      currentBlock: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'addToken(address)': (
      token: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'validRateDurationInBlocks()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getListedTokens()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'numTokensInCurrentCompactData()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getStepFunctionData(address,uint256,uint256)': (
      token: string,
      command: ethers.BigNumberish,
      param: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getTokenBasicData(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getRateUpdateBlock(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'reserveContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'tokenImbalanceData(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getRate(address,uint256,bool,uint256)': (
      token: string,
      currentBlockNumber: ethers.BigNumberish,
      buy: boolean,
      qty: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getBasicRate(address,bool)': (
      token: string,
      buy: boolean,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getCompactData(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getTokenControlInfo(address)': (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setReserveAddress(address)': (reserve: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'disableTokenTrade(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setBaseRate(address[],uint256[],uint256[],bytes14[],bytes14[],uint256,uint256[])': (
      tokens: string[],
      baseBuy: ethers.BigNumber[],
      baseSell: ethers.BigNumber[],
      buy: string | ethers.utils.BytesLike,
      sell: string | ethers.utils.BytesLike,
      blockNumber: ethers.BigNumberish,
      indices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'enableTokenTrade(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setCompactData(bytes14[],bytes14[],uint256,uint256[])': (
      buy: string | ethers.utils.BytesLike,
      sell: string | ethers.utils.BytesLike,
      blockNumber: ethers.BigNumberish,
      indices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setValidRateDurationInBlocks(uint256)': (
      duration: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setQtyStepFunction(address,int256[],int256[],int256[],int256[])': (
      token: string,
      xBuy: ethers.BigNumber[],
      yBuy: ethers.BigNumber[],
      xSell: ethers.BigNumber[],
      ySell: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setImbalanceStepFunction(address,int256[],int256[],int256[],int256[])': (
      token: string,
      xBuy: ethers.BigNumber[],
      yBuy: ethers.BigNumber[],
      xSell: ethers.BigNumber[],
      ySell: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setTokenControlInfo(address,uint256,uint256,uint256)': (
      token: string,
      minimalRecordResolution: ethers.BigNumberish,
      maxPerBlockImbalance: ethers.BigNumberish,
      maxTotalImbalance: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'recordImbalance(address,int256,uint256,uint256)': (
      token: string,
      buyAmount: ethers.BigNumberish,
      rateUpdateBlock: ethers.BigNumberish,
      currentBlock: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'addToken(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setReserveAddress(address)': (reserve: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'disableTokenTrade(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setBaseRate(address[],uint256[],uint256[],bytes14[],bytes14[],uint256,uint256[])': (
      tokens: string[],
      baseBuy: ethers.BigNumber[],
      baseSell: ethers.BigNumber[],
      buy: string | ethers.utils.BytesLike,
      sell: string | ethers.utils.BytesLike,
      blockNumber: ethers.BigNumberish,
      indices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'enableTokenTrade(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setCompactData(bytes14[],bytes14[],uint256,uint256[])': (
      buy: string | ethers.utils.BytesLike,
      sell: string | ethers.utils.BytesLike,
      blockNumber: ethers.BigNumberish,
      indices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setValidRateDurationInBlocks(uint256)': (
      duration: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setQtyStepFunction(address,int256[],int256[],int256[],int256[])': (
      token: string,
      xBuy: ethers.BigNumber[],
      yBuy: ethers.BigNumber[],
      xSell: ethers.BigNumber[],
      ySell: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setImbalanceStepFunction(address,int256[],int256[],int256[],int256[])': (
      token: string,
      xBuy: ethers.BigNumber[],
      yBuy: ethers.BigNumber[],
      xSell: ethers.BigNumber[],
      ySell: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setTokenControlInfo(address,uint256,uint256,uint256)': (
      token: string,
      minimalRecordResolution: ethers.BigNumberish,
      maxPerBlockImbalance: ethers.BigNumberish,
      maxTotalImbalance: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'recordImbalance(address,int256,uint256,uint256)': (
      token: string,
      buyAmount: ethers.BigNumberish,
      rateUpdateBlock: ethers.BigNumberish,
      currentBlock: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'addToken(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setReserveAddress(address)': (
      reserve: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'disableTokenTrade(address)': (
      token: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setBaseRate(address[],uint256[],uint256[],bytes14[],bytes14[],uint256,uint256[])': (
      tokens: string[],
      baseBuy: ethers.BigNumber[],
      baseSell: ethers.BigNumber[],
      buy: string | ethers.utils.BytesLike,
      sell: string | ethers.utils.BytesLike,
      blockNumber: ethers.BigNumberish,
      indices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'enableTokenTrade(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setCompactData(bytes14[],bytes14[],uint256,uint256[])': (
      buy: string | ethers.utils.BytesLike,
      sell: string | ethers.utils.BytesLike,
      blockNumber: ethers.BigNumberish,
      indices: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setValidRateDurationInBlocks(uint256)': (
      duration: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'transferAdminQuickly(address)': (
      newAdmin: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setQtyStepFunction(address,int256[],int256[],int256[],int256[])': (
      token: string,
      xBuy: ethers.BigNumber[],
      yBuy: ethers.BigNumber[],
      xSell: ethers.BigNumber[],
      ySell: ethers.BigNumber[],
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
    'setImbalanceStepFunction(address,int256[],int256[],int256[],int256[])': (
      token: string,
      xBuy: ethers.BigNumber[],
      yBuy: ethers.BigNumber[],
      xSell: ethers.BigNumber[],
      ySell: ethers.BigNumber[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setTokenControlInfo(address,uint256,uint256,uint256)': (
      token: string,
      minimalRecordResolution: ethers.BigNumberish,
      maxPerBlockImbalance: ethers.BigNumberish,
      maxTotalImbalance: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'recordImbalance(address,int256,uint256,uint256)': (
      token: string,
      buyAmount: ethers.BigNumberish,
      rateUpdateBlock: ethers.BigNumberish,
      currentBlock: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addToken(address)': (token: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
