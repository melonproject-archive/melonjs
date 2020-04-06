import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ConversionRates extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ConversionRates` contract call for the `validRateDurationInBlocks` function.
   *
   * @contract ConversionRates
   * @signature function validRateDurationInBlocks() view returns (uint256)
   */
  validRateDurationInBlocks: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRates` contract call for the `pendingAdmin` function.
   *
   * @contract ConversionRates
   * @signature function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ConversionRates` contract call for the `getOperators` function.
   *
   * @contract ConversionRates
   * @signature function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ConversionRates` contract call for the `getListedTokens` function.
   *
   * @contract ConversionRates
   * @signature function getListedTokens() view returns (address[])
   */
  getListedTokens: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ConversionRates` contract call for the `numTokensInCurrentCompactData` function.
   *
   * @contract ConversionRates
   * @signature function numTokensInCurrentCompactData() view returns (uint256)
   */
  numTokensInCurrentCompactData: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRates` contract call for the `getStepFunctionData` function.
   *
   * @contract ConversionRates
   * @signature function getStepFunctionData(address,uint256,uint256) view returns (int256)
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
   * @signature function getTokenBasicData(address) view returns (bool, bool)
   */
  getTokenBasicData: (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `ConversionRates` contract call for the `getAlerters` function.
   *
   * @contract ConversionRates
   * @signature function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ConversionRates` contract call for the `getRateUpdateBlock` function.
   *
   * @contract ConversionRates
   * @signature function getRateUpdateBlock(address) view returns (uint256)
   */
  getRateUpdateBlock: (token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRates` contract call for the `reserveContract` function.
   *
   * @contract ConversionRates
   * @signature function reserveContract() view returns (address)
   */
  reserveContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ConversionRates` contract call for the `tokenImbalanceData` function.
   *
   * @contract ConversionRates
   * @signature function tokenImbalanceData(address,uint256) view returns (uint256)
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
   * @signature function getRate(address,uint256,bool,uint256) view returns (uint256)
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
   * @signature function getBasicRate(address,bool) view returns (uint256)
   */
  getBasicRate: (token: string, buy: boolean, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ConversionRates` contract call for the `getCompactData` function.
   *
   * @contract ConversionRates
   * @signature function getCompactData(address) view returns (uint256, uint256, bytes1, bytes1)
   */
  getCompactData: (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `ConversionRates` contract call for the `getTokenControlInfo` function.
   *
   * @contract ConversionRates
   * @signature function getTokenControlInfo(address) view returns (uint256, uint256, uint256)
   */
  getTokenControlInfo: (token: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `ConversionRates` contract call for the `admin` function.
   *
   * @contract ConversionRates
   * @signature function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ConversionRates` contract transaction for `removeAlerter` function.
   *
   * @contract ConversionRates
   * @signature function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setReserveAddress` function.
   *
   * @contract ConversionRates
   * @signature function setReserveAddress(address)
   */
  setReserveAddress: (reserve: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `disableTokenTrade` function.
   *
   * @contract ConversionRates
   * @signature function disableTokenTrade(address)
   */
  disableTokenTrade: (token: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setBaseRate` function.
   *
   * @contract ConversionRates
   * @signature function setBaseRate(address[],uint256[],uint256[],bytes14[],bytes14[],uint256,uint256[])
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
   * @signature function enableTokenTrade(address)
   */
  enableTokenTrade: (token: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `withdrawToken` function.
   *
   * @contract ConversionRates
   * @signature function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `addAlerter` function.
   *
   * @contract ConversionRates
   * @signature function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setCompactData` function.
   *
   * @contract ConversionRates
   * @signature function setCompactData(bytes14[],bytes14[],uint256,uint256[])
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
   * @signature function setValidRateDurationInBlocks(uint256)
   */
  setValidRateDurationInBlocks: (duration: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `transferAdmin` function.
   *
   * @contract ConversionRates
   * @signature function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `claimAdmin` function.
   *
   * @contract ConversionRates
   * @signature function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `transferAdminQuickly` function.
   *
   * @contract ConversionRates
   * @signature function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setQtyStepFunction` function.
   *
   * @contract ConversionRates
   * @signature function setQtyStepFunction(address,int256[],int256[],int256[],int256[])
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
   * @signature function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `removeOperator` function.
   *
   * @contract ConversionRates
   * @signature function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `setImbalanceStepFunction` function.
   *
   * @contract ConversionRates
   * @signature function setImbalanceStepFunction(address,int256[],int256[],int256[],int256[])
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
   * @signature function setTokenControlInfo(address,uint256,uint256,uint256)
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
   * @signature function recordImbalance(address,int256,uint256,uint256)
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
   * @signature function withdrawEther(uint256,address)
   */
  withdrawEther: (amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ConversionRates` contract transaction for `addToken` function.
   *
   * @contract ConversionRates
   * @signature function addToken(address)
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
