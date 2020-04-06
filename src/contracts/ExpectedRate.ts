import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ExpectedRate extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ExpectedRate` contract call for the `pendingAdmin` function.
   *
   * @contract ExpectedRate
   * @signature function pendingAdmin() view returns (address)
   */
  pendingAdmin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ExpectedRate` contract call for the `getOperators` function.
   *
   * @contract ExpectedRate
   * @signature function getOperators() view returns (address[])
   */
  getOperators: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ExpectedRate` contract call for the `getAlerters` function.
   *
   * @contract ExpectedRate
   * @signature function getAlerters() view returns (address[])
   */
  getAlerters: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ExpectedRate` contract call for the `worstCaseRateFactorInBps` function.
   *
   * @contract ExpectedRate
   * @signature function worstCaseRateFactorInBps() view returns (uint256)
   */
  worstCaseRateFactorInBps: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ExpectedRate` contract call for the `quantityFactor` function.
   *
   * @contract ExpectedRate
   * @signature function quantityFactor() view returns (uint256)
   */
  quantityFactor: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ExpectedRate` contract call for the `kyberNetwork` function.
   *
   * @contract ExpectedRate
   * @signature function kyberNetwork() view returns (address)
   */
  kyberNetwork: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ExpectedRate` contract call for the `getExpectedRate` function.
   *
   * @contract ExpectedRate
   * @signature function getExpectedRate(address,address,uint256,bool) view returns (uint256, uint256)
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
   * @signature function getBalance(address,address) view returns (uint256)
   */
  getBalance: (token: string, user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ExpectedRate` contract call for the `knc` function.
   *
   * @contract ExpectedRate
   * @signature function knc() view returns (address)
   */
  knc: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ExpectedRate` contract call for the `checkKncArbitrageRate` function.
   *
   * @contract ExpectedRate
   * @signature function checkKncArbitrageRate(uint256) view returns (bool)
   */
  checkKncArbitrageRate: (
    currentKncToEthRate: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `ExpectedRate` contract call for the `admin` function.
   *
   * @contract ExpectedRate
   * @signature function admin() view returns (address)
   */
  admin: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ExpectedRate` contract transaction for `removeAlerter` function.
   *
   * @contract ExpectedRate
   * @signature function removeAlerter(address)
   */
  removeAlerter: (alerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `withdrawToken` function.
   *
   * @contract ExpectedRate
   * @signature function withdrawToken(address,uint256,address)
   */
  withdrawToken: (token: string, amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `addAlerter` function.
   *
   * @contract ExpectedRate
   * @signature function addAlerter(address)
   */
  addAlerter: (newAlerter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `transferAdmin` function.
   *
   * @contract ExpectedRate
   * @signature function transferAdmin(address)
   */
  transferAdmin: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `setQuantityFactor` function.
   *
   * @contract ExpectedRate
   * @signature function setQuantityFactor(uint256)
   */
  setQuantityFactor: (newFactor: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `claimAdmin` function.
   *
   * @contract ExpectedRate
   * @signature function claimAdmin()
   */
  claimAdmin: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `transferAdminQuickly` function.
   *
   * @contract ExpectedRate
   * @signature function transferAdminQuickly(address)
   */
  transferAdminQuickly: (newAdmin: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `addOperator` function.
   *
   * @contract ExpectedRate
   * @signature function addOperator(address)
   */
  addOperator: (newOperator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `removeOperator` function.
   *
   * @contract ExpectedRate
   * @signature function removeOperator(address)
   */
  removeOperator: (operator: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `withdrawEther` function.
   *
   * @contract ExpectedRate
   * @signature function withdrawEther(uint256,address)
   */
  withdrawEther: (amount: ethers.BigNumberish, sendTo: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ExpectedRate` contract transaction for `setWorstCaseRateFactor` function.
   *
   * @contract ExpectedRate
   * @signature function setWorstCaseRateFactor(uint256)
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
