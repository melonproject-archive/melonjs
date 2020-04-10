import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

/**
 * `Hub` contract
 *
 * Router for communication between componentsHas one or more Spokes
 */
export class Hub extends Contract {
  public readonly ethers: HubEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Hub` contract call for `ANY` function.
   *
   * ```solidity
   * function ANY() view returns (bytes32)
   * ```
   */
  ANY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `accounting` function.
   *
   * ```solidity
   * function accounting() view returns (address)
   * ```
   */
  accounting: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `authority` function.
   *
   * ```solidity
   * function authority() view returns (address)
   * ```
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `canCall` function.
   *
   * ```solidity
   * function canCall(address,address,bytes4) view returns (bool)
   * ```
   */
  canCall: (
    src_: string,
    dst_: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `Hub` contract call for `creationTime` function.
   *
   * ```solidity
   * function creationTime() view returns (uint256)
   * ```
   */
  creationTime: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Hub` contract call for `creator` function.
   *
   * ```solidity
   * function creator() view returns (address)
   * ```
   */
  creator: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `feeManager` function.
   *
   * ```solidity
   * function feeManager() view returns (address)
   * ```
   */
  feeManager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `fundFactory` function.
   *
   * ```solidity
   * function fundFactory() view returns (address)
   * ```
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `fundInitialized` function.
   *
   * ```solidity
   * function fundInitialized() view returns (bool)
   * ```
   */
  fundInitialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Hub` contract call for `getName` function.
   *
   * ```solidity
   * function getName() view returns (string)
   * ```
   */
  getName: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `isShutDown` function.
   *
   * ```solidity
   * function isShutDown() view returns (bool)
   * ```
   */
  isShutDown: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Hub` contract call for `isSpoke` function.
   *
   * ```solidity
   * function isSpoke(address) view returns (bool)
   * ```
   */
  isSpoke: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Hub` contract call for `manager` function.
   *
   * ```solidity
   * function manager() view returns (address)
   * ```
   */
  manager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `name` function.
   *
   * ```solidity
   * function name() view returns (string)
   * ```
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `owner` function.
   *
   * ```solidity
   * function owner() view returns (address)
   * ```
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `policyManager` function.
   *
   * ```solidity
   * function policyManager() view returns (address)
   * ```
   */
  policyManager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `priceSource` function.
   *
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `registry` function.
   *
   * ```solidity
   * function registry() view returns (address)
   * ```
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `routes` function.
   *
   * ```solidity
   * function routes() view returns (address, address, address, address, address, address, address)
   * ```
   */
  routes: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    policyManager: string;
    shares: string;
    vault: string;
    registry: string;
    fundFactory: string;
  }>;

  /**
   * `Hub` contract call for `shares` function.
   *
   * ```solidity
   * function shares() view returns (address)
   * ```
   */
  shares: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `vault` function.
   *
   * ```solidity
   * function vault() view returns (address)
   * ```
   */
  vault: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for `forbid` function.
   *
   * ```solidity
   * function forbid(address,address,bytes32)
   * ```
   */
  forbid: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract call for `initializeAndSetPermissions` function.
   *
   * ```solidity
   * function initializeAndSetPermissions(address[7])
   * ```
   */
  initializeAndSetPermissions: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract call for `permit` function.
   *
   * ```solidity
   * function permit(address,address,bytes32)
   * ```
   */
  permit: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract call for `setAuthority` function.
   *
   * ```solidity
   * function setAuthority(address)
   * ```
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract call for `setOwner` function.
   *
   * ```solidity
   * function setOwner(address)
   * ```
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract call for `shutDownFund` function.
   *
   * ```solidity
   * function shutDownFund()
   * ```
   */
  shutDownFund: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _manager, string _name)',
    'event FundShutDown()',
    'event LogForbid(bytes32 indexed src, bytes32 indexed dst, bytes32 indexed sig)',
    'event LogPermit(bytes32 indexed src, bytes32 indexed dst, bytes32 indexed sig)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function ANY() view returns (bytes32)',
    'function accounting() view returns (address)',
    'function authority() view returns (address)',
    'function canCall(address src_, address dst_, bytes4 sig) view returns (bool)',
    'function creationTime() view returns (uint256)',
    'function creator() view returns (address)',
    'function feeManager() view returns (address)',
    'function forbid(address src, address dst, bytes32 sig)',
    'function forbid(bytes32 src, bytes32 dst, bytes32 sig)',
    'function fundFactory() view returns (address)',
    'function fundInitialized() view returns (bool)',
    'function getName() view returns (string)',
    'function initializeAndSetPermissions(address[7] _spokes)',
    'function isShutDown() view returns (bool)',
    'function isSpoke(address) view returns (bool)',
    'function manager() view returns (address)',
    'function name() view returns (string)',
    'function owner() view returns (address)',
    'function permit(address src, address dst, bytes32 sig)',
    'function permit(bytes32 src, bytes32 dst, bytes32 sig)',
    'function policyManager() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function routes() view returns (address accounting, address feeManager, address policyManager, address shares, address vault, address registry, address fundFactory)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function shares() view returns (address)',
    'function shutDownFund()',
    'function vault() view returns (address)',
  ];
}

export interface HubEthersContract extends ethers.Contract {
  'ANY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'accounting()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'canCall(address,address,bytes4)': (
    src_: string,
    dst_: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'creationTime()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'creator()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'feeManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'fundInitialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isSpoke(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'manager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'policyManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'routes()': (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    policyManager: string;
    shares: string;
    vault: string;
    registry: string;
    fundFactory: string;
  }>;
  'shares()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'vault()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'forbid(address,address,bytes32)': (
    src: string,
    dst: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'initializeAndSetPermissions(address[7])': (
    _spokes: [string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'permit(address,address,bytes32)': (
    src: string,
    dst: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setAuthority(address)': (
    authority_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setOwner(address)': (
    owner_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'ANY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'accounting()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'canCall(address,address,bytes4)': (
      src_: string,
      dst_: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'creationTime()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'creator()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'feeManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundInitialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isSpoke(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'manager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'policyManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'routes()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      accounting: string;
      feeManager: string;
      policyManager: string;
      shares: string;
      vault: string;
      registry: string;
      fundFactory: string;
    }>;
    'shares()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'vault()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'initializeAndSetPermissions(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setOwner(address)': (
      owner_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'ANY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'accounting()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'canCall(address,address,bytes4)': (
      src_: string,
      dst_: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'creationTime()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'creator()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'feeManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundInitialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isSpoke(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'manager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'policyManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'routes()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      accounting: string;
      feeManager: string;
      policyManager: string;
      shares: string;
      vault: string;
      registry: string;
      fundFactory: string;
    }>;
    'shares()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'vault()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'initializeAndSetPermissions(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'initializeAndSetPermissions(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'initializeAndSetPermissions(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
