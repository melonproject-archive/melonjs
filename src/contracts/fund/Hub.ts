import { ethers } from 'ethers';
import { Contract, TransactionWrapper, AddressLike, DeploymentTransactionWrapper } from './../..';

export class Hub extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
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
    'function forbid(address src, address dst, bytes32 sig)',
    'function forbid(bytes32 src, bytes32 dst, bytes32 sig)',
    'function fundInitialized() view returns (bool)',
    'function initializeAndSetPermissions(address[11] _spokes)',
    'function isShutDown() view returns (bool)',
    'function isSpoke(address) view returns (bool)',
    'function manager() view returns (address)',
    'function name() view returns (string)',
    'function owner() view returns (address)',
    'function participation() view returns (address)',
    'function permit(address src, address dst, bytes32 sig)',
    'function permit(bytes32 src, bytes32 dst, bytes32 sig)',
    'function policyManager() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function shares() view returns (address)',
    'function shutDownFund()',
    'function trading() view returns (address)',
    'function vault() view returns (address)',
    'function version() view returns (address)',
  ];

  /**
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(bytecode: string, signer: ethers.Signer, _manager: AddressLike, _name: string) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [_manager, _name]);
  }

  /**
   * ```solidity
   * function ANY() view returns (bytes32)
   * ```
   *
   */
  ANY: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function accounting() view returns (address)
   * ```
   *
   */
  accounting: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function canCall(address,address,bytes4) view returns (bool)
   * ```
   *
   */
  canCall: (
    src_: AddressLike,
    dst_: AddressLike,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  /**
   * ```solidity
   * function creationTime() view returns (uint256)
   * ```
   *
   */
  creationTime: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function creator() view returns (address)
   * ```
   *
   */
  creator: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function fundInitialized() view returns (bool)
   * ```
   *
   */
  fundInitialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isShutDown() view returns (bool)
   * ```
   *
   */
  isShutDown: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isSpoke(address) view returns (bool)
   * ```
   *
   */
  isSpoke: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function manager() view returns (address)
   * ```
   *
   */
  manager: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function name() view returns (string)
   * ```
   *
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function owner() view returns (address)
   * ```
   *
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function participation() view returns (address)
   * ```
   *
   */
  participation: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function policyManager() view returns (address)
   * ```
   *
   */
  policyManager: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   *
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function registry() view returns (address)
   * ```
   *
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
   * ```
   *
   */
  routes: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: AddressLike;
    feeManager: AddressLike;
    participation: AddressLike;
    policyManager: AddressLike;
    shares: AddressLike;
    trading: AddressLike;
    vault: AddressLike;
    registry: AddressLike;
    version: AddressLike;
    engine: AddressLike;
    mlnToken: AddressLike;
  }>;
  /**
   * ```solidity
   * function shares() view returns (address)
   * ```
   *
   */
  shares: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function trading() view returns (address)
   * ```
   *
   */
  trading: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function vault() view returns (address)
   * ```
   *
   */
  vault: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function version() view returns (address)
   * ```
   *
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function forbid(address,address,bytes32)
   * ```
   *
   */
  forbid: (
    src: AddressLike,
    dst: AddressLike,
    sig: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function initializeAndSetPermissions(address[11])
   * ```
   *
   */
  initializeAndSetPermissions: (
    _spokes: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
    ],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function permit(address,address,bytes32)
   * ```
   *
   */
  permit: (
    src: AddressLike,
    dst: AddressLike,
    sig: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setAuthority(address)
   * ```
   *
   */
  setAuthority: (authority_: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setOwner(address)
   * ```
   *
   */
  setOwner: (owner_: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function shutDownFund()
   * ```
   *
   */
  shutDownFund: () => TransactionWrapper<ethers.Overrides>;
}
