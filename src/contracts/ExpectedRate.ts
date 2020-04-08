import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ExpectedRate extends Contract {
  public readonly ethers: ExpectedRateEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ExpectedRate` contract call for the `pendingAdmin` function.
   *
   * @contract ExpectedRate
   * @signature pendingAdmin()
   * @method function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ExpectedRate` contract call for the `getOperators` function.
   *
   * @contract ExpectedRate
   * @signature getOperators()
   * @method function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ExpectedRate` contract call for the `getAlerters` function.
   *
   * @contract ExpectedRate
   * @signature getAlerters()
   * @method function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ExpectedRate` contract call for the `worstCaseRateFactorInBps` function.
   *
   * @contract ExpectedRate
   * @signature worstCaseRateFactorInBps()
   * @method function worstCaseRateFactorInBps() view returns (uint256)
   */
  worstCaseRateFactorInBps: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ExpectedRate` contract call for the `quantityFactor` function.
   *
   * @contract ExpectedRate
   * @signature quantityFactor()
   * @method function quantityFactor() view returns (uint256)
   */
  quantityFactor: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ExpectedRate` contract call for the `kyberNetwork` function.
   *
   * @contract ExpectedRate
   * @signature kyberNetwork()
   * @method function kyberNetwork() view returns (address)
   */
  kyberNetwork: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ExpectedRate` contract call for the `getExpectedRate` function.
   *
   * @contract ExpectedRate
   * @signature getExpectedRate(address,address,uint256,bool)
   * @method function getExpectedRate(address,address,uint256,bool) view returns (uint256, uint256)
   */
  getExpectedRate: (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    usePermissionless: boolean,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;

  /**
   * `ExpectedRate` contract call for the `getBalance` function.
   *
   * @contract ExpectedRate
   * @signature getBalance(address,address)
   * @method function getBalance(address,address) view returns (uint256)
   */
  getBalance: (token: string, user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ExpectedRate` contract call for the `knc` function.
   *
   * @contract ExpectedRate
   * @signature knc()
   * @method function knc() view returns (address)
   */
  knc: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ExpectedRate` contract call for the `checkKncArbitrageRate` function.
   *
   * @contract ExpectedRate
   * @signature checkKncArbitrageRate(uint256)
   * @method function checkKncArbitrageRate(uint256) view returns (bool)
   */
  checkKncArbitrageRate: (
    currentKncToEthRate: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `ExpectedRate` contract call for the `admin` function.
   *
   * @contract ExpectedRate
   * @signature admin()
   * @method function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ExpectedRate` contract transaction for `removeAlerter` function.
   *
   * @contract ExpectedRate
   * @signature removeAlerter(address)
   * @method function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `withdrawToken` function.
   *
   * @contract ExpectedRate
   * @signature withdrawToken(address,uint256,address)
   * @method function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `addAlerter` function.
   *
   * @contract ExpectedRate
   * @signature addAlerter(address)
   * @method function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `transferAdmin` function.
   *
   * @contract ExpectedRate
   * @signature transferAdmin(address)
   * @method function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `setQuantityFactor` function.
   *
   * @contract ExpectedRate
   * @signature setQuantityFactor(uint256)
   * @method function setQuantityFactor(uint256)
   */
  setQuantityFactor: (newFactor: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `claimAdmin` function.
   *
   * @contract ExpectedRate
   * @signature claimAdmin()
   * @method function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `transferAdminQuickly` function.
   *
   * @contract ExpectedRate
   * @signature transferAdminQuickly(address)
   * @method function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `addOperator` function.
   *
   * @contract ExpectedRate
   * @signature addOperator(address)
   * @method function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `removeOperator` function.
   *
   * @contract ExpectedRate
   * @signature removeOperator(address)
   * @method function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `withdrawEther` function.
   *
   * @contract ExpectedRate
   * @signature withdrawEther(uint256,address)
   * @method function withdrawEther(uint256,address)
   */
  withdrawEther: (amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `setWorstCaseRateFactor` function.
   *
   * @contract ExpectedRate
   * @signature setWorstCaseRateFactor(uint256)
   * @method function setWorstCaseRateFactor(uint256)
   */
  setWorstCaseRateFactor: (bps: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function removeAlerter(address alerter)',
    'function pendingAdmin() view returns (address)',
    'function getOperators() view returns (address[])',
    'function withdrawToken(address token, uint256 amount, address sendTo)',
    'function addAlerter(address newAlerter)',
    'function transferAdmin(address newAdmin)',
    'function setQuantityFactor(uint256 newFactor)',
    'function claimAdmin()',
    'function transferAdminQuickly(address newAdmin)',
    'function getAlerters() view returns (address[])',
    'function addOperator(address newOperator)',
    'function worstCaseRateFactorInBps() view returns (uint256)',
    'function quantityFactor() view returns (uint256)',
    'function removeOperator(address operator)',
    'function kyberNetwork() view returns (address)',
    'function withdrawEther(uint256 amount, address sendTo)',
    'function getExpectedRate(address src, address dest, uint256 srcQty, bool usePermissionless) view returns (uint256 expectedRate, uint256 slippageRate)',
    'function getBalance(address token, address user) view returns (uint256)',
    'function setWorstCaseRateFactor(uint256 bps)',
    'function knc() view returns (address)',
    'function checkKncArbitrageRate(uint256 currentKncToEthRate) view returns (bool)',
    'function admin() view returns (address)',
    'constructor(address _kyberNetwork, address _knc, address _admin)',
    'event QuantityFactorSet(uint256 newFactor, uint256 oldFactor, address sender)',
    'event MinSlippageFactorSet(uint256 newMin, uint256 oldMin, address sender)',
    'event TokenWithdraw(address token, uint256 amount, address sendTo)',
    'event EtherWithdraw(uint256 amount, address sendTo)',
    'event TransferAdminPending(address pendingAdmin)',
    'event AdminClaimed(address newAdmin, address previousAdmin)',
    'event AlerterAdded(address newAlerter, bool isAdd)',
    'event OperatorAdded(address newOperator, bool isAdd)',
  ];
}

export interface ExpectedRateEthersContract extends ethers.Contract {
  'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'worstCaseRateFactorInBps()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'quantityFactor()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'kyberNetwork()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getExpectedRate(address,address,uint256,bool)': (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    usePermissionless: boolean,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;
  'getBalance(address,address)': (
    token: string,
    user: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'knc()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'checkKncArbitrageRate(uint256)': (
    currentKncToEthRate: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'removeAlerter(address)': (
    alerter: string,
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
  'transferAdmin(address)': (
    newAdmin: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setQuantityFactor(uint256)': (
    newFactor: ethers.BigNumberish,
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
  'withdrawEther(uint256,address)': (
    amount: ethers.BigNumberish,
    sendTo: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setWorstCaseRateFactor(uint256)': (
    bps: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'worstCaseRateFactorInBps()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'quantityFactor()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'kyberNetwork()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getExpectedRate(address,address,uint256,bool)': (
      src: string,
      dest: string,
      srcQty: ethers.BigNumberish,
      usePermissionless: boolean,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;
    'getBalance(address,address)': (
      token: string,
      user: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'knc()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'checkKncArbitrageRate(uint256)': (
      currentKncToEthRate: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'removeAlerter(address)': (
      alerter: string,
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
    'transferAdmin(address)': (
      newAdmin: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setQuantityFactor(uint256)': (
      newFactor: ethers.BigNumberish,
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
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setWorstCaseRateFactor(uint256)': (
      bps: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'worstCaseRateFactorInBps()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'quantityFactor()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'kyberNetwork()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getExpectedRate(address,address,uint256,bool)': (
      src: string,
      dest: string,
      srcQty: ethers.BigNumberish,
      usePermissionless: boolean,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;
    'getBalance(address,address)': (
      token: string,
      user: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'knc()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'checkKncArbitrageRate(uint256)': (
      currentKncToEthRate: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setQuantityFactor(uint256)': (newFactor: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setWorstCaseRateFactor(uint256)': (bps: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
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
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setQuantityFactor(uint256)': (
      newFactor: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setWorstCaseRateFactor(uint256)': (
      bps: ethers.BigNumberish,
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
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setQuantityFactor(uint256)': (
      newFactor: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
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
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setWorstCaseRateFactor(uint256)': (
      bps: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
