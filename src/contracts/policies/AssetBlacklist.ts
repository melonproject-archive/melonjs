import { ethers } from 'ethers';
import { Contract, TransactionWrapper, AddressLike, DeploymentTransactionWrapper } from './../..';

export class AssetBlacklist extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(address[] _assets)',
    'event ListAddition(address[] ones)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function MAKE_ORDER() view returns (bytes4)',
    'function TAKE_ORDER() view returns (bytes4)',
    'function addToBlacklist(address _asset)',
    'function authority() view returns (address)',
    'function getMemberCount() view returns (uint256)',
    'function getMembers() view returns (address[])',
    'function identifier() pure returns (string)',
    'function isMember(address _asset) view returns (bool)',
    'function owner() view returns (address)',
    'function position() pure returns (uint8)',
    'function rule(bytes4 sig, address[5] addresses, uint256[3] values, bytes32 identifier) returns (bool)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
  ];

  /**
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(bytecode: string, signer: ethers.Signer, _assets: AddressLike[]) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [_assets]);
  }

  /**
   * ```solidity
   * function MAKE_ORDER() view returns (bytes4)
   * ```
   *
   */
  MAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function TAKE_ORDER() view returns (bytes4)
   * ```
   *
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function getMemberCount() view returns (uint256)
   * ```
   *
   */
  getMemberCount: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function getMembers() view returns (address[])
   * ```
   *
   */
  getMembers: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike[]>;
  /**
   * ```solidity
   * function identifier() pure returns (string)
   * ```
   *
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function isMember(address) view returns (bool)
   * ```
   *
   */
  isMember: (_asset: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function owner() view returns (address)
   * ```
   *
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function position() pure returns (uint8)
   * ```
   *
   */
  position: ($$overrides?: ethers.CallOverrides) => Promise<number>;
  /**
   * ```solidity
   * function addToBlacklist(address)
   * ```
   *
   */
  addToBlacklist: (_asset: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function rule(bytes4,address[5],uint256[3],bytes32) returns (bool)
   * ```
   *
   */
  rule: (
    sig: string | ethers.utils.BytesLike,
    addresses: [AddressLike, AddressLike, AddressLike, AddressLike, AddressLike],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
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
}
