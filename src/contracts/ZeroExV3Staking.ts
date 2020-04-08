import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV3Staking extends Contract {
  public readonly ethers: ZeroExV3StakingEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV3Staking` contract call for the `aggregatedStatsByEpoch` function.
   *
   * @contract ZeroExV3Staking
   * @signature aggregatedStatsByEpoch(uint256)
   * @method function aggregatedStatsByEpoch(uint256) view returns (uint256, uint256, uint256, uint256, uint256)
   */
  aggregatedStatsByEpoch: (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    rewardsAvailable: ethers.BigNumber;
    numPoolsToFinalize: ethers.BigNumber;
    totalFeesCollected: ethers.BigNumber;
    totalWeightedStake: ethers.BigNumber;
    totalRewardsFinalized: ethers.BigNumber;
  }>;

  /**
   * `ZeroExV3Staking` contract call for the `authorities` function.
   *
   * @contract ZeroExV3Staking
   * @signature authorities(uint256)
   * @method function authorities(uint256) view returns (address)
   */
  authorities: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Staking` contract call for the `authorized` function.
   *
   * @contract ZeroExV3Staking
   * @signature authorized(address)
   * @method function authorized(address) view returns (bool)
   */
  authorized: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3Staking` contract call for the `cobbDouglasAlphaDenominator` function.
   *
   * @contract ZeroExV3Staking
   * @signature cobbDouglasAlphaDenominator()
   * @method function cobbDouglasAlphaDenominator() view returns (uint32)
   */
  cobbDouglasAlphaDenominator: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `ZeroExV3Staking` contract call for the `cobbDouglasAlphaNumerator` function.
   *
   * @contract ZeroExV3Staking
   * @signature cobbDouglasAlphaNumerator()
   * @method function cobbDouglasAlphaNumerator() view returns (uint32)
   */
  cobbDouglasAlphaNumerator: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `ZeroExV3Staking` contract call for the `computeRewardBalanceOfDelegator` function.
   *
   * @contract ZeroExV3Staking
   * @signature computeRewardBalanceOfDelegator(bytes32,address)
   * @method function computeRewardBalanceOfDelegator(bytes32,address) view returns (uint256)
   */
  computeRewardBalanceOfDelegator: (
    poolId: string | ethers.utils.BytesLike,
    member: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Staking` contract call for the `computeRewardBalanceOfOperator` function.
   *
   * @contract ZeroExV3Staking
   * @signature computeRewardBalanceOfOperator(bytes32)
   * @method function computeRewardBalanceOfOperator(bytes32) view returns (uint256)
   */
  computeRewardBalanceOfOperator: (
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Staking` contract call for the `currentEpoch` function.
   *
   * @contract ZeroExV3Staking
   * @signature currentEpoch()
   * @method function currentEpoch() view returns (uint256)
   */
  currentEpoch: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Staking` contract call for the `currentEpochStartTimeInSeconds` function.
   *
   * @contract ZeroExV3Staking
   * @signature currentEpochStartTimeInSeconds()
   * @method function currentEpochStartTimeInSeconds() view returns (uint256)
   */
  currentEpochStartTimeInSeconds: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Staking` contract call for the `epochDurationInSeconds` function.
   *
   * @contract ZeroExV3Staking
   * @signature epochDurationInSeconds()
   * @method function epochDurationInSeconds() view returns (uint256)
   */
  epochDurationInSeconds: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Staking` contract call for the `getAuthorizedAddresses` function.
   *
   * @contract ZeroExV3Staking
   * @signature getAuthorizedAddresses()
   * @method function getAuthorizedAddresses() view returns (address[])
   */
  getAuthorizedAddresses: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ZeroExV3Staking` contract call for the `getCurrentEpochEarliestEndTimeInSeconds` function.
   *
   * @contract ZeroExV3Staking
   * @signature getCurrentEpochEarliestEndTimeInSeconds()
   * @method function getCurrentEpochEarliestEndTimeInSeconds() view returns (uint256)
   */
  getCurrentEpochEarliestEndTimeInSeconds: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Staking` contract call for the `getGlobalStakeByStatus` function.
   *
   * @contract ZeroExV3Staking
   * @signature getGlobalStakeByStatus(uint8)
   * @method function getGlobalStakeByStatus(uint8) view returns (tuple(uint64,uint96,uint96))
   */
  getGlobalStakeByStatus: (
    stakeStatus: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    currentEpoch: ethers.BigNumber;
    currentEpochBalance: ethers.BigNumber;
    nextEpochBalance: ethers.BigNumber;
  }>;

  /**
   * `ZeroExV3Staking` contract call for the `getOwnerStakeByStatus` function.
   *
   * @contract ZeroExV3Staking
   * @signature getOwnerStakeByStatus(address,uint8)
   * @method function getOwnerStakeByStatus(address,uint8) view returns (tuple(uint64,uint96,uint96))
   */
  getOwnerStakeByStatus: (
    staker: string,
    stakeStatus: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    currentEpoch: ethers.BigNumber;
    currentEpochBalance: ethers.BigNumber;
    nextEpochBalance: ethers.BigNumber;
  }>;

  /**
   * `ZeroExV3Staking` contract call for the `getParams` function.
   *
   * @contract ZeroExV3Staking
   * @signature getParams()
   * @method function getParams() view returns (uint256, uint32, uint256, uint32, uint32)
   */
  getParams: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    _epochDurationInSeconds: ethers.BigNumber;
    _rewardDelegatedStakeWeight: number;
    _minimumPoolStake: ethers.BigNumber;
    _cobbDouglasAlphaNumerator: number;
    _cobbDouglasAlphaDenominator: number;
  }>;

  /**
   * `ZeroExV3Staking` contract call for the `getStakeDelegatedToPoolByOwner` function.
   *
   * @contract ZeroExV3Staking
   * @signature getStakeDelegatedToPoolByOwner(address,bytes32)
   * @method function getStakeDelegatedToPoolByOwner(address,bytes32) view returns (tuple(uint64,uint96,uint96))
   */
  getStakeDelegatedToPoolByOwner: (
    staker: string,
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    currentEpoch: ethers.BigNumber;
    currentEpochBalance: ethers.BigNumber;
    nextEpochBalance: ethers.BigNumber;
  }>;

  /**
   * `ZeroExV3Staking` contract call for the `getStakingPool` function.
   *
   * @contract ZeroExV3Staking
   * @signature getStakingPool(bytes32)
   * @method function getStakingPool(bytes32) view returns (tuple(address,uint32))
   */
  getStakingPool: (
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ operator: string; operatorShare: number }>;

  /**
   * `ZeroExV3Staking` contract call for the `getStakingPoolStatsThisEpoch` function.
   *
   * @contract ZeroExV3Staking
   * @signature getStakingPoolStatsThisEpoch(bytes32)
   * @method function getStakingPoolStatsThisEpoch(bytes32) view returns (tuple(uint256,uint256,uint256))
   */
  getStakingPoolStatsThisEpoch: (
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ feesCollected: ethers.BigNumber; weightedStake: ethers.BigNumber; membersStake: ethers.BigNumber }>;

  /**
   * `ZeroExV3Staking` contract call for the `getTotalStake` function.
   *
   * @contract ZeroExV3Staking
   * @signature getTotalStake(address)
   * @method function getTotalStake(address) view returns (uint256)
   */
  getTotalStake: (staker: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Staking` contract call for the `getTotalStakeDelegatedToPool` function.
   *
   * @contract ZeroExV3Staking
   * @signature getTotalStakeDelegatedToPool(bytes32)
   * @method function getTotalStakeDelegatedToPool(bytes32) view returns (tuple(uint64,uint96,uint96))
   */
  getTotalStakeDelegatedToPool: (
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    currentEpoch: ethers.BigNumber;
    currentEpochBalance: ethers.BigNumber;
    nextEpochBalance: ethers.BigNumber;
  }>;

  /**
   * `ZeroExV3Staking` contract call for the `getWethContract` function.
   *
   * @contract ZeroExV3Staking
   * @signature getWethContract()
   * @method function getWethContract() view returns (address)
   */
  getWethContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Staking` contract call for the `getZrxVault` function.
   *
   * @contract ZeroExV3Staking
   * @signature getZrxVault()
   * @method function getZrxVault() view returns (address)
   */
  getZrxVault: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Staking` contract call for the `lastPoolId` function.
   *
   * @contract ZeroExV3Staking
   * @signature lastPoolId()
   * @method function lastPoolId() view returns (bytes32)
   */
  lastPoolId: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Staking` contract call for the `minimumPoolStake` function.
   *
   * @contract ZeroExV3Staking
   * @signature minimumPoolStake()
   * @method function minimumPoolStake() view returns (uint256)
   */
  minimumPoolStake: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Staking` contract call for the `owner` function.
   *
   * @contract ZeroExV3Staking
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Staking` contract call for the `poolIdByMaker` function.
   *
   * @contract ZeroExV3Staking
   * @signature poolIdByMaker(address)
   * @method function poolIdByMaker(address) view returns (bytes32)
   */
  poolIdByMaker: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Staking` contract call for the `poolStatsByEpoch` function.
   *
   * @contract ZeroExV3Staking
   * @signature poolStatsByEpoch(bytes32,uint256)
   * @method function poolStatsByEpoch(bytes32,uint256) view returns (uint256, uint256, uint256)
   */
  poolStatsByEpoch: (
    $$0: string | ethers.utils.BytesLike,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ feesCollected: ethers.BigNumber; weightedStake: ethers.BigNumber; membersStake: ethers.BigNumber }>;

  /**
   * `ZeroExV3Staking` contract call for the `rewardDelegatedStakeWeight` function.
   *
   * @contract ZeroExV3Staking
   * @signature rewardDelegatedStakeWeight()
   * @method function rewardDelegatedStakeWeight() view returns (uint32)
   */
  rewardDelegatedStakeWeight: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `ZeroExV3Staking` contract call for the `rewardsByPoolId` function.
   *
   * @contract ZeroExV3Staking
   * @signature rewardsByPoolId(bytes32)
   * @method function rewardsByPoolId(bytes32) view returns (uint256)
   */
  rewardsByPoolId: (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Staking` contract call for the `stakingContract` function.
   *
   * @contract ZeroExV3Staking
   * @signature stakingContract()
   * @method function stakingContract() view returns (address)
   */
  stakingContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3Staking` contract call for the `validExchanges` function.
   *
   * @contract ZeroExV3Staking
   * @signature validExchanges(address)
   * @method function validExchanges(address) view returns (bool)
   */
  validExchanges: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3Staking` contract call for the `wethReservedForPoolRewards` function.
   *
   * @contract ZeroExV3Staking
   * @signature wethReservedForPoolRewards()
   * @method function wethReservedForPoolRewards() view returns (uint256)
   */
  wethReservedForPoolRewards: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3Staking` contract transaction for `addAuthorizedAddress` function.
   *
   * @contract ZeroExV3Staking
   * @signature addAuthorizedAddress(address)
   * @method function addAuthorizedAddress(address)
   */
  addAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `addExchangeAddress` function.
   *
   * @contract ZeroExV3Staking
   * @signature addExchangeAddress(address)
   * @method function addExchangeAddress(address)
   */
  addExchangeAddress: (addr: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `createStakingPool` function.
   *
   * @contract ZeroExV3Staking
   * @signature createStakingPool(uint32,bool)
   * @method function createStakingPool(uint32,bool) returns (bytes32)
   */
  createStakingPool: (
    operatorShare: ethers.BigNumberish,
    addOperatorAsMaker: boolean,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `decreaseStakingPoolOperatorShare` function.
   *
   * @contract ZeroExV3Staking
   * @signature decreaseStakingPoolOperatorShare(bytes32,uint32)
   * @method function decreaseStakingPoolOperatorShare(bytes32,uint32)
   */
  decreaseStakingPoolOperatorShare: (
    poolId: string | ethers.utils.BytesLike,
    newOperatorShare: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `endEpoch` function.
   *
   * @contract ZeroExV3Staking
   * @signature endEpoch()
   * @method function endEpoch() returns (uint256)
   */
  endEpoch: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `finalizePool` function.
   *
   * @contract ZeroExV3Staking
   * @signature finalizePool(bytes32)
   * @method function finalizePool(bytes32)
   */
  finalizePool: (poolId: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `init` function.
   *
   * @contract ZeroExV3Staking
   * @signature init()
   * @method function init()
   */
  init: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `joinStakingPoolAsMaker` function.
   *
   * @contract ZeroExV3Staking
   * @signature joinStakingPoolAsMaker(bytes32)
   * @method function joinStakingPoolAsMaker(bytes32)
   */
  joinStakingPoolAsMaker: (poolId: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `moveStake` function.
   *
   * @contract ZeroExV3Staking
   * @signature moveStake((uint8,bytes32),(uint8,bytes32),uint256)
   * @method function moveStake(tuple(uint8,bytes32),tuple(uint8,bytes32),uint256)
   */
  moveStake: (
    from: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
    to: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
    amount: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `payProtocolFee` function.
   *
   * @contract ZeroExV3Staking
   * @signature payProtocolFee(address,address,uint256)
   * @method function payProtocolFee(address,address,uint256) payable
   */
  payProtocolFee: (
    makerAddress: string,
    payerAddress: string,
    protocolFee: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `removeAuthorizedAddress` function.
   *
   * @contract ZeroExV3Staking
   * @signature removeAuthorizedAddress(address)
   * @method function removeAuthorizedAddress(address)
   */
  removeAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `removeAuthorizedAddressAtIndex` function.
   *
   * @contract ZeroExV3Staking
   * @signature removeAuthorizedAddressAtIndex(address,uint256)
   * @method function removeAuthorizedAddressAtIndex(address,uint256)
   */
  removeAuthorizedAddressAtIndex: (target: string, index: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `removeExchangeAddress` function.
   *
   * @contract ZeroExV3Staking
   * @signature removeExchangeAddress(address)
   * @method function removeExchangeAddress(address)
   */
  removeExchangeAddress: (addr: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `setParams` function.
   *
   * @contract ZeroExV3Staking
   * @signature setParams(uint256,uint32,uint256,uint32,uint32)
   * @method function setParams(uint256,uint32,uint256,uint32,uint32)
   */
  setParams: (
    _epochDurationInSeconds: ethers.BigNumberish,
    _rewardDelegatedStakeWeight: ethers.BigNumberish,
    _minimumPoolStake: ethers.BigNumberish,
    _cobbDouglasAlphaNumerator: ethers.BigNumberish,
    _cobbDouglasAlphaDenominator: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `stake` function.
   *
   * @contract ZeroExV3Staking
   * @signature stake(uint256)
   * @method function stake(uint256)
   */
  stake: (amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `transferOwnership` function.
   *
   * @contract ZeroExV3Staking
   * @signature transferOwnership(address)
   * @method function transferOwnership(address)
   */
  transferOwnership: (newOwner: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `unstake` function.
   *
   * @contract ZeroExV3Staking
   * @signature unstake(uint256)
   * @method function unstake(uint256)
   */
  unstake: (amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3Staking` contract transaction for `withdrawDelegatorRewards` function.
   *
   * @contract ZeroExV3Staking
   * @signature withdrawDelegatorRewards(bytes32)
   * @method function withdrawDelegatorRewards(bytes32)
   */
  withdrawDelegatorRewards: (poolId: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address wethAddress, address zrxVaultAddress)',
    'event AuthorizedAddressAdded(address indexed target, address indexed caller)',
    'event AuthorizedAddressRemoved(address indexed target, address indexed caller)',
    'event EpochEnded(uint256 indexed epoch, uint256 numPoolsToFinalize, uint256 rewardsAvailable, uint256 totalFeesCollected, uint256 totalWeightedStake)',
    'event EpochFinalized(uint256 indexed epoch, uint256 rewardsPaid, uint256 rewardsRemaining)',
    'event ExchangeAdded(address exchangeAddress)',
    'event ExchangeRemoved(address exchangeAddress)',
    'event MakerStakingPoolSet(address indexed makerAddress, bytes32 indexed poolId)',
    'event MoveStake(address indexed staker, uint256 amount, uint8 fromStatus, bytes32 indexed fromPool, uint8 toStatus, bytes32 indexed toPool)',
    'event OperatorShareDecreased(bytes32 indexed poolId, uint32 oldOperatorShare, uint32 newOperatorShare)',
    'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
    'event ParamsSet(uint256 epochDurationInSeconds, uint32 rewardDelegatedStakeWeight, uint256 minimumPoolStake, uint256 cobbDouglasAlphaNumerator, uint256 cobbDouglasAlphaDenominator)',
    'event RewardsPaid(uint256 indexed epoch, bytes32 indexed poolId, uint256 operatorReward, uint256 membersReward)',
    'event Stake(address indexed staker, uint256 amount)',
    'event StakingPoolCreated(bytes32 poolId, address operator, uint32 operatorShare)',
    'event StakingPoolEarnedRewardsInEpoch(uint256 indexed epoch, bytes32 indexed poolId)',
    'event Unstake(address indexed staker, uint256 amount)',
    'function addAuthorizedAddress(address target)',
    'function addExchangeAddress(address addr)',
    'function aggregatedStatsByEpoch(uint256) view returns (uint256 rewardsAvailable, uint256 numPoolsToFinalize, uint256 totalFeesCollected, uint256 totalWeightedStake, uint256 totalRewardsFinalized)',
    'function authorities(uint256) view returns (address)',
    'function authorized(address) view returns (bool)',
    'function cobbDouglasAlphaDenominator() view returns (uint32)',
    'function cobbDouglasAlphaNumerator() view returns (uint32)',
    'function computeRewardBalanceOfDelegator(bytes32 poolId, address member) view returns (uint256 reward)',
    'function computeRewardBalanceOfOperator(bytes32 poolId) view returns (uint256 reward)',
    'function createStakingPool(uint32 operatorShare, bool addOperatorAsMaker) returns (bytes32 poolId)',
    'function currentEpoch() view returns (uint256)',
    'function currentEpochStartTimeInSeconds() view returns (uint256)',
    'function decreaseStakingPoolOperatorShare(bytes32 poolId, uint32 newOperatorShare)',
    'function endEpoch() returns (uint256)',
    'function epochDurationInSeconds() view returns (uint256)',
    'function finalizePool(bytes32 poolId)',
    'function getAuthorizedAddresses() view returns (address[])',
    'function getCurrentEpochEarliestEndTimeInSeconds() view returns (uint256)',
    'function getGlobalStakeByStatus(uint8 stakeStatus) view returns (tuple(uint64 currentEpoch, uint96 currentEpochBalance, uint96 nextEpochBalance) balance)',
    'function getOwnerStakeByStatus(address staker, uint8 stakeStatus) view returns (tuple(uint64 currentEpoch, uint96 currentEpochBalance, uint96 nextEpochBalance) balance)',
    'function getParams() view returns (uint256 _epochDurationInSeconds, uint32 _rewardDelegatedStakeWeight, uint256 _minimumPoolStake, uint32 _cobbDouglasAlphaNumerator, uint32 _cobbDouglasAlphaDenominator)',
    'function getStakeDelegatedToPoolByOwner(address staker, bytes32 poolId) view returns (tuple(uint64 currentEpoch, uint96 currentEpochBalance, uint96 nextEpochBalance) balance)',
    'function getStakingPool(bytes32 poolId) view returns (tuple(address operator, uint32 operatorShare))',
    'function getStakingPoolStatsThisEpoch(bytes32 poolId) view returns (tuple(uint256 feesCollected, uint256 weightedStake, uint256 membersStake))',
    'function getTotalStake(address staker) view returns (uint256)',
    'function getTotalStakeDelegatedToPool(bytes32 poolId) view returns (tuple(uint64 currentEpoch, uint96 currentEpochBalance, uint96 nextEpochBalance) balance)',
    'function getWethContract() view returns (address wethContract)',
    'function getZrxVault() view returns (address zrxVault)',
    'function init()',
    'function joinStakingPoolAsMaker(bytes32 poolId)',
    'function lastPoolId() view returns (bytes32)',
    'function minimumPoolStake() view returns (uint256)',
    'function moveStake(tuple(uint8 status, bytes32 poolId) from, tuple(uint8 status, bytes32 poolId) to, uint256 amount)',
    'function owner() view returns (address)',
    'function payProtocolFee(address makerAddress, address payerAddress, uint256 protocolFee) payable',
    'function poolIdByMaker(address) view returns (bytes32)',
    'function poolStatsByEpoch(bytes32, uint256) view returns (uint256 feesCollected, uint256 weightedStake, uint256 membersStake)',
    'function removeAuthorizedAddress(address target)',
    'function removeAuthorizedAddressAtIndex(address target, uint256 index)',
    'function removeExchangeAddress(address addr)',
    'function rewardDelegatedStakeWeight() view returns (uint32)',
    'function rewardsByPoolId(bytes32) view returns (uint256)',
    'function setParams(uint256 _epochDurationInSeconds, uint32 _rewardDelegatedStakeWeight, uint256 _minimumPoolStake, uint32 _cobbDouglasAlphaNumerator, uint32 _cobbDouglasAlphaDenominator)',
    'function stake(uint256 amount)',
    'function stakingContract() view returns (address)',
    'function transferOwnership(address newOwner)',
    'function unstake(uint256 amount)',
    'function validExchanges(address) view returns (bool)',
    'function wethReservedForPoolRewards() view returns (uint256)',
    'function withdrawDelegatorRewards(bytes32 poolId)',
  ];
}

export interface ZeroExV3StakingEthersContract extends ethers.Contract {
  'aggregatedStatsByEpoch(uint256)': (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    rewardsAvailable: ethers.BigNumber;
    numPoolsToFinalize: ethers.BigNumber;
    totalFeesCollected: ethers.BigNumber;
    totalWeightedStake: ethers.BigNumber;
    totalRewardsFinalized: ethers.BigNumber;
  }>;
  'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'cobbDouglasAlphaDenominator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'cobbDouglasAlphaNumerator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'computeRewardBalanceOfDelegator(bytes32,address)': (
    poolId: string | ethers.utils.BytesLike,
    member: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'computeRewardBalanceOfOperator(bytes32)': (
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'currentEpoch()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'currentEpochStartTimeInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'epochDurationInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getCurrentEpochEarliestEndTimeInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getGlobalStakeByStatus(uint8)': (
    stakeStatus: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    currentEpoch: ethers.BigNumber;
    currentEpochBalance: ethers.BigNumber;
    nextEpochBalance: ethers.BigNumber;
  }>;
  'getOwnerStakeByStatus(address,uint8)': (
    staker: string,
    stakeStatus: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    currentEpoch: ethers.BigNumber;
    currentEpochBalance: ethers.BigNumber;
    nextEpochBalance: ethers.BigNumber;
  }>;
  'getParams()': (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    _epochDurationInSeconds: ethers.BigNumber;
    _rewardDelegatedStakeWeight: number;
    _minimumPoolStake: ethers.BigNumber;
    _cobbDouglasAlphaNumerator: number;
    _cobbDouglasAlphaDenominator: number;
  }>;
  'getStakeDelegatedToPoolByOwner(address,bytes32)': (
    staker: string,
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    currentEpoch: ethers.BigNumber;
    currentEpochBalance: ethers.BigNumber;
    nextEpochBalance: ethers.BigNumber;
  }>;
  'getStakingPool(bytes32)': (
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ operator: string; operatorShare: number }>;
  'getStakingPoolStatsThisEpoch(bytes32)': (
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ feesCollected: ethers.BigNumber; weightedStake: ethers.BigNumber; membersStake: ethers.BigNumber }>;
  'getTotalStake(address)': (staker: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getTotalStakeDelegatedToPool(bytes32)': (
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    currentEpoch: ethers.BigNumber;
    currentEpochBalance: ethers.BigNumber;
    nextEpochBalance: ethers.BigNumber;
  }>;
  'getWethContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getZrxVault()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'lastPoolId()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'minimumPoolStake()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'poolIdByMaker(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'poolStatsByEpoch(bytes32,uint256)': (
    $$0: string | ethers.utils.BytesLike,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ feesCollected: ethers.BigNumber; weightedStake: ethers.BigNumber; membersStake: ethers.BigNumber }>;
  'rewardDelegatedStakeWeight()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'rewardsByPoolId(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'stakingContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'validExchanges(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'wethReservedForPoolRewards()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'addAuthorizedAddress(address)': (
    target: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'addExchangeAddress(address)': (addr: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'createStakingPool(uint32,bool)': (
    operatorShare: ethers.BigNumberish,
    addOperatorAsMaker: boolean,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'decreaseStakingPoolOperatorShare(bytes32,uint32)': (
    poolId: string | ethers.utils.BytesLike,
    newOperatorShare: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'endEpoch()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'finalizePool(bytes32)': (
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'init()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'joinStakingPoolAsMaker(bytes32)': (
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'moveStake((uint8,bytes32),(uint8,bytes32),uint256)': (
    from: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
    to: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'payProtocolFee(address,address,uint256)': (
    makerAddress: string,
    payerAddress: string,
    protocolFee: ethers.BigNumberish,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'removeAuthorizedAddress(address)': (
    target: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'removeAuthorizedAddressAtIndex(address,uint256)': (
    target: string,
    index: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'removeExchangeAddress(address)': (
    addr: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setParams(uint256,uint32,uint256,uint32,uint32)': (
    _epochDurationInSeconds: ethers.BigNumberish,
    _rewardDelegatedStakeWeight: ethers.BigNumberish,
    _minimumPoolStake: ethers.BigNumberish,
    _cobbDouglasAlphaNumerator: ethers.BigNumberish,
    _cobbDouglasAlphaDenominator: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'stake(uint256)': (
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferOwnership(address)': (
    newOwner: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'unstake(uint256)': (
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'withdrawDelegatorRewards(bytes32)': (
    poolId: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'aggregatedStatsByEpoch(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      rewardsAvailable: ethers.BigNumber;
      numPoolsToFinalize: ethers.BigNumber;
      totalFeesCollected: ethers.BigNumber;
      totalWeightedStake: ethers.BigNumber;
      totalRewardsFinalized: ethers.BigNumber;
    }>;
    'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'cobbDouglasAlphaDenominator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'cobbDouglasAlphaNumerator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'computeRewardBalanceOfDelegator(bytes32,address)': (
      poolId: string | ethers.utils.BytesLike,
      member: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'computeRewardBalanceOfOperator(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'currentEpoch()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'currentEpochStartTimeInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'epochDurationInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getCurrentEpochEarliestEndTimeInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getGlobalStakeByStatus(uint8)': (
      stakeStatus: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      currentEpoch: ethers.BigNumber;
      currentEpochBalance: ethers.BigNumber;
      nextEpochBalance: ethers.BigNumber;
    }>;
    'getOwnerStakeByStatus(address,uint8)': (
      staker: string,
      stakeStatus: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      currentEpoch: ethers.BigNumber;
      currentEpochBalance: ethers.BigNumber;
      nextEpochBalance: ethers.BigNumber;
    }>;
    'getParams()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      _epochDurationInSeconds: ethers.BigNumber;
      _rewardDelegatedStakeWeight: number;
      _minimumPoolStake: ethers.BigNumber;
      _cobbDouglasAlphaNumerator: number;
      _cobbDouglasAlphaDenominator: number;
    }>;
    'getStakeDelegatedToPoolByOwner(address,bytes32)': (
      staker: string,
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      currentEpoch: ethers.BigNumber;
      currentEpochBalance: ethers.BigNumber;
      nextEpochBalance: ethers.BigNumber;
    }>;
    'getStakingPool(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ operator: string; operatorShare: number }>;
    'getStakingPoolStatsThisEpoch(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ feesCollected: ethers.BigNumber; weightedStake: ethers.BigNumber; membersStake: ethers.BigNumber }>;
    'getTotalStake(address)': (staker: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getTotalStakeDelegatedToPool(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      currentEpoch: ethers.BigNumber;
      currentEpochBalance: ethers.BigNumber;
      nextEpochBalance: ethers.BigNumber;
    }>;
    'getWethContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getZrxVault()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'lastPoolId()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'minimumPoolStake()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'poolIdByMaker(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'poolStatsByEpoch(bytes32,uint256)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ feesCollected: ethers.BigNumber; weightedStake: ethers.BigNumber; membersStake: ethers.BigNumber }>;
    'rewardDelegatedStakeWeight()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'rewardsByPoolId(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'stakingContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'validExchanges(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'wethReservedForPoolRewards()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'addAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'addExchangeAddress(address)': (
      addr: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'createStakingPool(uint32,bool)': (
      operatorShare: ethers.BigNumberish,
      addOperatorAsMaker: boolean,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'decreaseStakingPoolOperatorShare(bytes32,uint32)': (
      poolId: string | ethers.utils.BytesLike,
      newOperatorShare: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'endEpoch()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'finalizePool(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'init()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'joinStakingPoolAsMaker(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'moveStake((uint8,bytes32),(uint8,bytes32),uint256)': (
      from: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
      to: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'payProtocolFee(address,address,uint256)': (
      makerAddress: string,
      payerAddress: string,
      protocolFee: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => ethers.providers.TransactionResponse;
    'removeAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'removeExchangeAddress(address)': (
      addr: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setParams(uint256,uint32,uint256,uint32,uint32)': (
      _epochDurationInSeconds: ethers.BigNumberish,
      _rewardDelegatedStakeWeight: ethers.BigNumberish,
      _minimumPoolStake: ethers.BigNumberish,
      _cobbDouglasAlphaNumerator: ethers.BigNumberish,
      _cobbDouglasAlphaDenominator: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'stake(uint256)': (
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'transferOwnership(address)': (
      newOwner: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'unstake(uint256)': (
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'withdrawDelegatorRewards(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'aggregatedStatsByEpoch(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      rewardsAvailable: ethers.BigNumber;
      numPoolsToFinalize: ethers.BigNumber;
      totalFeesCollected: ethers.BigNumber;
      totalWeightedStake: ethers.BigNumber;
      totalRewardsFinalized: ethers.BigNumber;
    }>;
    'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'cobbDouglasAlphaDenominator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'cobbDouglasAlphaNumerator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'computeRewardBalanceOfDelegator(bytes32,address)': (
      poolId: string | ethers.utils.BytesLike,
      member: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'computeRewardBalanceOfOperator(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'currentEpoch()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'currentEpochStartTimeInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'epochDurationInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getCurrentEpochEarliestEndTimeInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getGlobalStakeByStatus(uint8)': (
      stakeStatus: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      currentEpoch: ethers.BigNumber;
      currentEpochBalance: ethers.BigNumber;
      nextEpochBalance: ethers.BigNumber;
    }>;
    'getOwnerStakeByStatus(address,uint8)': (
      staker: string,
      stakeStatus: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      currentEpoch: ethers.BigNumber;
      currentEpochBalance: ethers.BigNumber;
      nextEpochBalance: ethers.BigNumber;
    }>;
    'getParams()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      _epochDurationInSeconds: ethers.BigNumber;
      _rewardDelegatedStakeWeight: number;
      _minimumPoolStake: ethers.BigNumber;
      _cobbDouglasAlphaNumerator: number;
      _cobbDouglasAlphaDenominator: number;
    }>;
    'getStakeDelegatedToPoolByOwner(address,bytes32)': (
      staker: string,
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      currentEpoch: ethers.BigNumber;
      currentEpochBalance: ethers.BigNumber;
      nextEpochBalance: ethers.BigNumber;
    }>;
    'getStakingPool(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ operator: string; operatorShare: number }>;
    'getStakingPoolStatsThisEpoch(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ feesCollected: ethers.BigNumber; weightedStake: ethers.BigNumber; membersStake: ethers.BigNumber }>;
    'getTotalStake(address)': (staker: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getTotalStakeDelegatedToPool(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      currentEpoch: ethers.BigNumber;
      currentEpochBalance: ethers.BigNumber;
      nextEpochBalance: ethers.BigNumber;
    }>;
    'getWethContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getZrxVault()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'lastPoolId()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'minimumPoolStake()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'poolIdByMaker(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'poolStatsByEpoch(bytes32,uint256)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ feesCollected: ethers.BigNumber; weightedStake: ethers.BigNumber; membersStake: ethers.BigNumber }>;
    'rewardDelegatedStakeWeight()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'rewardsByPoolId(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'stakingContract()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'validExchanges(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'wethReservedForPoolRewards()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'addAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'addExchangeAddress(address)': (addr: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'createStakingPool(uint32,bool)': (
      operatorShare: ethers.BigNumberish,
      addOperatorAsMaker: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<string>;
    'decreaseStakingPoolOperatorShare(bytes32,uint32)': (
      poolId: string | ethers.utils.BytesLike,
      newOperatorShare: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'endEpoch()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'finalizePool(bytes32)': (poolId: string | ethers.utils.BytesLike, $$overrides?: ethers.Overrides) => Promise<void>;
    'init()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'joinStakingPoolAsMaker(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'moveStake((uint8,bytes32),(uint8,bytes32),uint256)': (
      from: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
      to: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'payProtocolFee(address,address,uint256)': (
      makerAddress: string,
      payerAddress: string,
      protocolFee: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<void>;
    'removeAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'removeExchangeAddress(address)': (addr: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setParams(uint256,uint32,uint256,uint32,uint32)': (
      _epochDurationInSeconds: ethers.BigNumberish,
      _rewardDelegatedStakeWeight: ethers.BigNumberish,
      _minimumPoolStake: ethers.BigNumberish,
      _cobbDouglasAlphaNumerator: ethers.BigNumberish,
      _cobbDouglasAlphaDenominator: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'stake(uint256)': (amount: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'unstake(uint256)': (amount: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdrawDelegatorRewards(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'addAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'addExchangeAddress(address)': (addr: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'createStakingPool(uint32,bool)': (
      operatorShare: ethers.BigNumberish,
      addOperatorAsMaker: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'decreaseStakingPoolOperatorShare(bytes32,uint32)': (
      poolId: string | ethers.utils.BytesLike,
      newOperatorShare: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'endEpoch()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'finalizePool(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'init()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'joinStakingPoolAsMaker(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'moveStake((uint8,bytes32),(uint8,bytes32),uint256)': (
      from: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
      to: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'payProtocolFee(address,address,uint256)': (
      makerAddress: string,
      payerAddress: string,
      protocolFee: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'removeAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'removeExchangeAddress(address)': (addr: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setParams(uint256,uint32,uint256,uint32,uint32)': (
      _epochDurationInSeconds: ethers.BigNumberish,
      _rewardDelegatedStakeWeight: ethers.BigNumberish,
      _minimumPoolStake: ethers.BigNumberish,
      _cobbDouglasAlphaNumerator: ethers.BigNumberish,
      _cobbDouglasAlphaDenominator: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'stake(uint256)': (amount: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'unstake(uint256)': (amount: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdrawDelegatorRewards(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'addAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'addExchangeAddress(address)': (
      addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'createStakingPool(uint32,bool)': (
      operatorShare: ethers.BigNumberish,
      addOperatorAsMaker: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'decreaseStakingPoolOperatorShare(bytes32,uint32)': (
      poolId: string | ethers.utils.BytesLike,
      newOperatorShare: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'endEpoch()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'finalizePool(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'init()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'joinStakingPoolAsMaker(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'moveStake((uint8,bytes32),(uint8,bytes32),uint256)': (
      from: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
      to: { status: ethers.BigNumberish; poolId: string | ethers.utils.BytesLike },
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'payProtocolFee(address,address,uint256)': (
      makerAddress: string,
      payerAddress: string,
      protocolFee: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeExchangeAddress(address)': (
      addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setParams(uint256,uint32,uint256,uint32,uint32)': (
      _epochDurationInSeconds: ethers.BigNumberish,
      _rewardDelegatedStakeWeight: ethers.BigNumberish,
      _minimumPoolStake: ethers.BigNumberish,
      _cobbDouglasAlphaNumerator: ethers.BigNumberish,
      _cobbDouglasAlphaDenominator: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'stake(uint256)': (
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferOwnership(address)': (
      newOwner: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'unstake(uint256)': (
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'withdrawDelegatorRewards(bytes32)': (
      poolId: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
