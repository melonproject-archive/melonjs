import { ethers } from 'ethers';
import { Contract, TransactionWrapper, AddressLike, DeploymentTransactionWrapper } from './../..';

export class UserWhitelist extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(address[] _preApproved)',
    'event ListAddition(address indexed who)',
    'event ListRemoval(address indexed who)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function addToWhitelist(address _who)',
    'function authority() view returns (address)',
    'function batchAddToWhitelist(address[] _members)',
    'function batchRemoveFromWhitelist(address[] _members)',
    'function identifier() pure returns (string)',
    'function owner() view returns (address)',
    'function position() pure returns (uint8)',
    'function removeFromWhitelist(address _who)',
    'function rule(bytes4 sig, address[5] addresses, uint256[3] values, bytes32 identifier) returns (bool)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function whitelisted(address) view returns (bool)',
  ];

  /**
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(bytecode: string, signer: ethers.Signer, _preApproved: AddressLike[]) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [_preApproved]);
  }

  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<AddressLike>;
  /**
   * ```solidity
   * function identifier() pure returns (string)
   * ```
   *
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
   * function whitelisted(address) view returns (bool)
   * ```
   *
   */
  whitelisted: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function addToWhitelist(address)
   * ```
   *
   */
  addToWhitelist: (_who: AddressLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function batchAddToWhitelist(address[])
   * ```
   *
   */
  batchAddToWhitelist: (_members: AddressLike[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function batchRemoveFromWhitelist(address[])
   * ```
   *
   */
  batchRemoveFromWhitelist: (_members: AddressLike[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function removeFromWhitelist(address)
   * ```
   *
   */
  removeFromWhitelist: (_who: AddressLike) => TransactionWrapper<ethers.Overrides>;
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
