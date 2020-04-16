import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../..';

export class UserWhitelistContract extends Contract {
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
   * Constructs a new contract instance.
   *
   * @param contract The contract interface.
   * @param addressOrName The address or name of the contract.
   * @param signerOrProvider The ethers.js signer or provider instance to use.
   */
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
  whitelisted: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function addToWhitelist(address)
   * ```
   *
   */
  addToWhitelist: (_who: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function batchAddToWhitelist(address[])
   * ```
   *
   */
  batchAddToWhitelist: (_members: string[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function batchRemoveFromWhitelist(address[])
   * ```
   *
   */
  batchRemoveFromWhitelist: (_members: string[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function removeFromWhitelist(address)
   * ```
   *
   */
  removeFromWhitelist: (_who: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function rule(bytes4,address[5],uint256[3],bytes32) returns (bool)
   * ```
   *
   */
  rule: (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setAuthority(address)
   * ```
   *
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setOwner(address)
   * ```
   *
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;
}
