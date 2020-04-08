import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class WhiteList extends Contract {
  public readonly ethers: WhiteListEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `WhiteList` contract call for the `kgtToken` function.
   *
   * @contract WhiteList
   * @signature kgtToken()
   * @method function kgtToken() view returns (address)
   */
  kgtToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WhiteList` contract call for the `pendingAdmin` function.
   *
   * @contract WhiteList
   * @signature pendingAdmin()
   * @method function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WhiteList` contract call for the `getOperators` function.
   *
   * @contract WhiteList
   * @signature getOperators()
   * @method function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `WhiteList` contract call for the `getUserCapInWei` function.
   *
   * @contract WhiteList
   * @signature getUserCapInWei(address)
   * @method function getUserCapInWei(address) view returns (uint256)
   */
  getUserCapInWei: (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract call for the `kgtHolderCategory` function.
   *
   * @contract WhiteList
   * @signature kgtHolderCategory()
   * @method function kgtHolderCategory() view returns (uint256)
   */
  kgtHolderCategory: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract call for the `userCategory` function.
   *
   * @contract WhiteList
   * @signature userCategory(address)
   * @method function userCategory(address) view returns (uint256)
   */
  userCategory: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract call for the `getAlerters` function.
   *
   * @contract WhiteList
   * @signature getAlerters()
   * @method function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `WhiteList` contract call for the `weiPerSgd` function.
   *
   * @contract WhiteList
   * @signature weiPerSgd()
   * @method function weiPerSgd() view returns (uint256)
   */
  weiPerSgd: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract call for the `getUserCategory` function.
   *
   * @contract WhiteList
   * @signature getUserCategory(address)
   * @method function getUserCategory(address) view returns (uint256)
   */
  getUserCategory: (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract call for the `admin` function.
   *
   * @contract WhiteList
   * @signature admin()
   * @method function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WhiteList` contract call for the `categoryCap` function.
   *
   * @contract WhiteList
   * @signature categoryCap(uint256)
   * @method function categoryCap(uint256) view returns (uint256)
   */
  categoryCap: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract transaction for `removeAlerter` function.
   *
   * @contract WhiteList
   * @signature removeAlerter(address)
   * @method function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `setUserCategory` function.
   *
   * @contract WhiteList
   * @signature setUserCategory(address,uint256)
   * @method function setUserCategory(address,uint256)
   */
  setUserCategory: (user: string, category: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `withdrawToken` function.
   *
   * @contract WhiteList
   * @signature withdrawToken(address,uint256,address)
   * @method function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `addAlerter` function.
   *
   * @contract WhiteList
   * @signature addAlerter(address)
   * @method function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `setCategoryCap` function.
   *
   * @contract WhiteList
   * @signature setCategoryCap(uint256,uint256)
   * @method function setCategoryCap(uint256,uint256)
   */
  setCategoryCap: (category: ethers.BigNumberish, sgdCap: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `setSgdToEthRate` function.
   *
   * @contract WhiteList
   * @signature setSgdToEthRate(uint256)
   * @method function setSgdToEthRate(uint256)
   */
  setSgdToEthRate: (_sgdToWeiRate: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `transferAdmin` function.
   *
   * @contract WhiteList
   * @signature transferAdmin(address)
   * @method function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `claimAdmin` function.
   *
   * @contract WhiteList
   * @signature claimAdmin()
   * @method function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `transferAdminQuickly` function.
   *
   * @contract WhiteList
   * @signature transferAdminQuickly(address)
   * @method function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `addOperator` function.
   *
   * @contract WhiteList
   * @signature addOperator(address)
   * @method function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `removeOperator` function.
   *
   * @contract WhiteList
   * @signature removeOperator(address)
   * @method function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `withdrawEther` function.
   *
   * @contract WhiteList
   * @signature withdrawEther(uint256,address)
   * @method function withdrawEther(uint256,address)
   */
  withdrawEther: (amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function removeAlerter(address alerter)',
    'function kgtToken() view returns (address)',
    'function setUserCategory(address user, uint256 category)',
    'function pendingAdmin() view returns (address)',
    'function getOperators() view returns (address[])',
    'function withdrawToken(address token, uint256 amount, address sendTo)',
    'function addAlerter(address newAlerter)',
    'function setCategoryCap(uint256 category, uint256 sgdCap)',
    'function getUserCapInWei(address user) view returns (uint256)',
    'function setSgdToEthRate(uint256 _sgdToWeiRate)',
    'function kgtHolderCategory() view returns (uint256)',
    'function userCategory(address) view returns (uint256)',
    'function transferAdmin(address newAdmin)',
    'function claimAdmin()',
    'function transferAdminQuickly(address newAdmin)',
    'function getAlerters() view returns (address[])',
    'function addOperator(address newOperator)',
    'function removeOperator(address operator)',
    'function weiPerSgd() view returns (uint256)',
    'function withdrawEther(uint256 amount, address sendTo)',
    'function getUserCategory(address user) view returns (uint256)',
    'function admin() view returns (address)',
    'function categoryCap(uint256) view returns (uint256)',
    'constructor(address _admin, address _kgtToken)',
    'event UserCategorySet(address user, uint256 category)',
    'event CategoryCapSet(uint256 category, uint256 sgdCap)',
    'event SgdToWeiRateSet(uint256 rate)',
    'event TokenWithdraw(address token, uint256 amount, address sendTo)',
    'event EtherWithdraw(uint256 amount, address sendTo)',
    'event TransferAdminPending(address pendingAdmin)',
    'event AdminClaimed(address newAdmin, address previousAdmin)',
    'event AlerterAdded(address newAlerter, bool isAdd)',
    'event OperatorAdded(address newOperator, bool isAdd)',
  ];
}

export interface WhiteListEthersContract extends ethers.Contract {
  'kgtToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getUserCapInWei(address)': (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'kgtHolderCategory()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'userCategory(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'weiPerSgd()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getUserCategory(address)': (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'categoryCap(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setUserCategory(address,uint256)': (
    user: string,
    category: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'withdrawToken(address,uint256,address)': (
    token: string,
    amount: ethers.BigNumberish,
    sendTo: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setCategoryCap(uint256,uint256)': (
    category: ethers.BigNumberish,
    sgdCap: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setSgdToEthRate(uint256)': (
    _sgdToWeiRate: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'claimAdmin()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'transferAdminQuickly(address)': (
    newAdmin: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'withdrawEther(uint256,address)': (
    amount: ethers.BigNumberish,
    sendTo: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'kgtToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getUserCapInWei(address)': (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'kgtHolderCategory()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'userCategory(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'weiPerSgd()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getUserCategory(address)': (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'categoryCap(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'setUserCategory(address,uint256)': (
      user: string,
      category: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'setCategoryCap(uint256,uint256)': (
      category: ethers.BigNumberish,
      sgdCap: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setSgdToEthRate(uint256)': (
      _sgdToWeiRate: ethers.BigNumberish,
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
    'addOperator(address)': (
      newOperator: string,
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
  };

  callStatic: {
    'kgtToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'pendingAdmin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOperators()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getUserCapInWei(address)': (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'kgtHolderCategory()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'userCategory(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAlerters()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'weiPerSgd()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getUserCategory(address)': (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'admin()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'categoryCap(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setUserCategory(address,uint256)': (
      user: string,
      category: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setCategoryCap(uint256,uint256)': (
      category: ethers.BigNumberish,
      sgdCap: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setSgdToEthRate(uint256)': (_sgdToWeiRate: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setUserCategory(address,uint256)': (
      user: string,
      category: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setCategoryCap(uint256,uint256)': (
      category: ethers.BigNumberish,
      sgdCap: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setSgdToEthRate(uint256)': (
      _sgdToWeiRate: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferAdmin(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'claimAdmin()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'transferAdminQuickly(address)': (newAdmin: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'addOperator(address)': (newOperator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeOperator(address)': (operator: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'removeAlerter(address)': (alerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setUserCategory(address,uint256)': (
      user: string,
      category: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdrawToken(address,uint256,address)': (
      token: string,
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addAlerter(address)': (newAlerter: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setCategoryCap(uint256,uint256)': (
      category: ethers.BigNumberish,
      sgdCap: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setSgdToEthRate(uint256)': (
      _sgdToWeiRate: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
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
    'withdrawEther(uint256,address)': (
      amount: ethers.BigNumberish,
      sendTo: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
