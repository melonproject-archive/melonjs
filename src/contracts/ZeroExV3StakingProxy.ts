import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ZeroExV3StakingProxy extends Contract {
  public readonly ethers: ZeroExV3StakingProxyEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ZeroExV3StakingProxy` contract call for the `aggregatedStatsByEpoch` function.
   *
   * @contract ZeroExV3StakingProxy
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
   * `ZeroExV3StakingProxy` contract call for the `assertValidStorageParams` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature assertValidStorageParams()
   * @method function assertValidStorageParams() view
   */
  assertValidStorageParams: ($$overrides?: ethers.CallOverrides) => Promise<void>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `authorities` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature authorities(uint256)
   * @method function authorities(uint256) view returns (address)
   */
  authorities: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `authorized` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature authorized(address)
   * @method function authorized(address) view returns (bool)
   */
  authorized: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `cobbDouglasAlphaDenominator` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature cobbDouglasAlphaDenominator()
   * @method function cobbDouglasAlphaDenominator() view returns (uint32)
   */
  cobbDouglasAlphaDenominator: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `cobbDouglasAlphaNumerator` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature cobbDouglasAlphaNumerator()
   * @method function cobbDouglasAlphaNumerator() view returns (uint32)
   */
  cobbDouglasAlphaNumerator: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `currentEpoch` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature currentEpoch()
   * @method function currentEpoch() view returns (uint256)
   */
  currentEpoch: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `currentEpochStartTimeInSeconds` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature currentEpochStartTimeInSeconds()
   * @method function currentEpochStartTimeInSeconds() view returns (uint256)
   */
  currentEpochStartTimeInSeconds: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `epochDurationInSeconds` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature epochDurationInSeconds()
   * @method function epochDurationInSeconds() view returns (uint256)
   */
  epochDurationInSeconds: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `getAuthorizedAddresses` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature getAuthorizedAddresses()
   * @method function getAuthorizedAddresses() view returns (address[])
   */
  getAuthorizedAddresses: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `lastPoolId` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature lastPoolId()
   * @method function lastPoolId() view returns (bytes32)
   */
  lastPoolId: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `minimumPoolStake` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature minimumPoolStake()
   * @method function minimumPoolStake() view returns (uint256)
   */
  minimumPoolStake: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `owner` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `poolIdByMaker` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature poolIdByMaker(address)
   * @method function poolIdByMaker(address) view returns (bytes32)
   */
  poolIdByMaker: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `poolStatsByEpoch` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature poolStatsByEpoch(bytes32,uint256)
   * @method function poolStatsByEpoch(bytes32,uint256) view returns (uint256, uint256, uint256)
   */
  poolStatsByEpoch: (
    $$0: string | ethers.utils.BytesLike,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ feesCollected: ethers.BigNumber; weightedStake: ethers.BigNumber; membersStake: ethers.BigNumber }>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `rewardDelegatedStakeWeight` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature rewardDelegatedStakeWeight()
   * @method function rewardDelegatedStakeWeight() view returns (uint32)
   */
  rewardDelegatedStakeWeight: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `rewardsByPoolId` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature rewardsByPoolId(bytes32)
   * @method function rewardsByPoolId(bytes32) view returns (uint256)
   */
  rewardsByPoolId: (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `stakingContract` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature stakingContract()
   * @method function stakingContract() view returns (address)
   */
  stakingContract: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `validExchanges` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature validExchanges(address)
   * @method function validExchanges(address) view returns (bool)
   */
  validExchanges: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `ZeroExV3StakingProxy` contract call for the `wethReservedForPoolRewards` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature wethReservedForPoolRewards()
   * @method function wethReservedForPoolRewards() view returns (uint256)
   */
  wethReservedForPoolRewards: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ZeroExV3StakingProxy` contract transaction for `addAuthorizedAddress` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature addAuthorizedAddress(address)
   * @method function addAuthorizedAddress(address)
   */
  addAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3StakingProxy` contract transaction for `attachStakingContract` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature attachStakingContract(address)
   * @method function attachStakingContract(address)
   */
  attachStakingContract: (_stakingContract: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3StakingProxy` contract transaction for `batchExecute` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature batchExecute(bytes[])
   * @method function batchExecute(bytes[]) returns (bytes[])
   */
  batchExecute: (data: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3StakingProxy` contract transaction for `detachStakingContract` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature detachStakingContract()
   * @method function detachStakingContract()
   */
  detachStakingContract: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3StakingProxy` contract transaction for `removeAuthorizedAddress` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature removeAuthorizedAddress(address)
   * @method function removeAuthorizedAddress(address)
   */
  removeAuthorizedAddress: (target: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3StakingProxy` contract transaction for `removeAuthorizedAddressAtIndex` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature removeAuthorizedAddressAtIndex(address,uint256)
   * @method function removeAuthorizedAddressAtIndex(address,uint256)
   */
  removeAuthorizedAddressAtIndex: (target: string, index: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ZeroExV3StakingProxy` contract transaction for `transferOwnership` function.
   *
   * @contract ZeroExV3StakingProxy
   * @signature transferOwnership(address)
   * @method function transferOwnership(address)
   */
  transferOwnership: (newOwner: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _stakingContract)',
    'event AuthorizedAddressAdded(address indexed target, address indexed caller)',
    'event AuthorizedAddressRemoved(address indexed target, address indexed caller)',
    'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
    'event StakingContractAttachedToProxy(address newStakingContractAddress)',
    'event StakingContractDetachedFromProxy()',
    'function addAuthorizedAddress(address target)',
    'function aggregatedStatsByEpoch(uint256) view returns (uint256 rewardsAvailable, uint256 numPoolsToFinalize, uint256 totalFeesCollected, uint256 totalWeightedStake, uint256 totalRewardsFinalized)',
    'function assertValidStorageParams() view',
    'function attachStakingContract(address _stakingContract)',
    'function authorities(uint256) view returns (address)',
    'function authorized(address) view returns (bool)',
    'function batchExecute(bytes[] data) returns (bytes[] batchReturnData)',
    'function cobbDouglasAlphaDenominator() view returns (uint32)',
    'function cobbDouglasAlphaNumerator() view returns (uint32)',
    'function currentEpoch() view returns (uint256)',
    'function currentEpochStartTimeInSeconds() view returns (uint256)',
    'function detachStakingContract()',
    'function epochDurationInSeconds() view returns (uint256)',
    'function getAuthorizedAddresses() view returns (address[])',
    'function lastPoolId() view returns (bytes32)',
    'function minimumPoolStake() view returns (uint256)',
    'function owner() view returns (address)',
    'function poolIdByMaker(address) view returns (bytes32)',
    'function poolStatsByEpoch(bytes32, uint256) view returns (uint256 feesCollected, uint256 weightedStake, uint256 membersStake)',
    'function removeAuthorizedAddress(address target)',
    'function removeAuthorizedAddressAtIndex(address target, uint256 index)',
    'function rewardDelegatedStakeWeight() view returns (uint32)',
    'function rewardsByPoolId(bytes32) view returns (uint256)',
    'function stakingContract() view returns (address)',
    'function transferOwnership(address newOwner)',
    'function validExchanges(address) view returns (bool)',
    'function wethReservedForPoolRewards() view returns (uint256)',
  ];
}

export interface ZeroExV3StakingProxyEthersContract extends ethers.Contract {
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
  'assertValidStorageParams()': ($$overrides?: ethers.CallOverrides) => Promise<void>;
  'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'cobbDouglasAlphaDenominator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'cobbDouglasAlphaNumerator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'currentEpoch()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'currentEpochStartTimeInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'epochDurationInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
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
  'attachStakingContract(address)': (
    _stakingContract: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'batchExecute(bytes[])': (
    data: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'detachStakingContract()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'removeAuthorizedAddress(address)': (
    target: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'removeAuthorizedAddressAtIndex(address,uint256)': (
    target: string,
    index: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferOwnership(address)': (
    newOwner: string,
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
    'assertValidStorageParams()': ($$overrides?: ethers.CallOverrides) => Promise<void>;
    'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'cobbDouglasAlphaDenominator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'cobbDouglasAlphaNumerator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'currentEpoch()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'currentEpochStartTimeInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'epochDurationInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
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
    'attachStakingContract(address)': (
      _stakingContract: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'batchExecute(bytes[])': (
      data: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'detachStakingContract()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'removeAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'transferOwnership(address)': (
      newOwner: string,
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
    'assertValidStorageParams()': ($$overrides?: ethers.CallOverrides) => Promise<void>;
    'authorities(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'authorized(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'cobbDouglasAlphaDenominator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'cobbDouglasAlphaNumerator()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'currentEpoch()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'currentEpochStartTimeInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'epochDurationInSeconds()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAuthorizedAddresses()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
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
    'attachStakingContract(address)': (_stakingContract: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'batchExecute(bytes[])': (data: string | ethers.utils.BytesLike, $$overrides?: ethers.Overrides) => Promise<string>;
    'detachStakingContract()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'removeAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'addAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'attachStakingContract(address)': (
      _stakingContract: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'batchExecute(bytes[])': (
      data: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'detachStakingContract()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeAuthorizedAddress(address)': (target: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferOwnership(address)': (newOwner: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'addAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'attachStakingContract(address)': (
      _stakingContract: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'batchExecute(bytes[])': (
      data: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'detachStakingContract()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'removeAuthorizedAddress(address)': (
      target: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeAuthorizedAddressAtIndex(address,uint256)': (
      target: string,
      index: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferOwnership(address)': (
      newOwner: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
