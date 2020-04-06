import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class WhiteList extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `WhiteList` contract call for the `kgtToken` function.
   *
   * @contract WhiteList
   * @signature function kgtToken() view returns (address)
   */
  kgtToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WhiteList` contract call for the `pendingAdmin` function.
   *
   * @contract WhiteList
   * @signature function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WhiteList` contract call for the `getOperators` function.
   *
   * @contract WhiteList
   * @signature function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `WhiteList` contract call for the `getUserCapInWei` function.
   *
   * @contract WhiteList
   * @signature function getUserCapInWei(address) view returns (uint256)
   */
  getUserCapInWei: (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract call for the `kgtHolderCategory` function.
   *
   * @contract WhiteList
   * @signature function kgtHolderCategory() view returns (uint256)
   */
  kgtHolderCategory: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract call for the `userCategory` function.
   *
   * @contract WhiteList
   * @signature function userCategory(address) view returns (uint256)
   */
  userCategory: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract call for the `getAlerters` function.
   *
   * @contract WhiteList
   * @signature function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `WhiteList` contract call for the `weiPerSgd` function.
   *
   * @contract WhiteList
   * @signature function weiPerSgd() view returns (uint256)
   */
  weiPerSgd: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract call for the `getUserCategory` function.
   *
   * @contract WhiteList
   * @signature function getUserCategory(address) view returns (uint256)
   */
  getUserCategory: (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract call for the `admin` function.
   *
   * @contract WhiteList
   * @signature function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `WhiteList` contract call for the `categoryCap` function.
   *
   * @contract WhiteList
   * @signature function categoryCap(uint256) view returns (uint256)
   */
  categoryCap: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `WhiteList` contract transaction for `removeAlerter` function.
   *
   * @contract WhiteList
   * @signature function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `setUserCategory` function.
   *
   * @contract WhiteList
   * @signature function setUserCategory(address,uint256)
   */
  setUserCategory: (user: string, category: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `withdrawToken` function.
   *
   * @contract WhiteList
   * @signature function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `addAlerter` function.
   *
   * @contract WhiteList
   * @signature function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `setCategoryCap` function.
   *
   * @contract WhiteList
   * @signature function setCategoryCap(uint256,uint256)
   */
  setCategoryCap: (category: ethers.BigNumberish, sgdCap: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `setSgdToEthRate` function.
   *
   * @contract WhiteList
   * @signature function setSgdToEthRate(uint256)
   */
  setSgdToEthRate: (_sgdToWeiRate: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `transferAdmin` function.
   *
   * @contract WhiteList
   * @signature function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `claimAdmin` function.
   *
   * @contract WhiteList
   * @signature function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `transferAdminQuickly` function.
   *
   * @contract WhiteList
   * @signature function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `addOperator` function.
   *
   * @contract WhiteList
   * @signature function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `removeOperator` function.
   *
   * @contract WhiteList
   * @signature function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `WhiteList` contract transaction for `withdrawEther` function.
   *
   * @contract WhiteList
   * @signature function withdrawEther(uint256,address)
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
