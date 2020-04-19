import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

/** Assets can be removed from but not added to whitelist */
export class AssetWhitelistContract extends Contract {
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
    'function authority() view returns (address)',
    'function getAssetIndex(address _asset) view returns (uint256)',
    'function getMemberCount() view returns (uint256)',
    'function getMembers() view returns (address[])',
    'function identifier() pure returns (string)',
    'function isMember(address _asset) view returns (bool)',
    'function owner() view returns (address)',
    'function position() pure returns (uint8)',
    'function removeFromWhitelist(address _asset)',
    'function rule(bytes4 sig, address[5] addresses, uint256[3] values, bytes32 identifier) returns (bool)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
  ];

  /**
   * Constructs a new contract instance.
   *
   * @param addressOrName The address or name of the contract.
   * @param signerOrProvider The ethers.js signer or provider instance to use.
   */
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
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
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getAssetIndex(address) view returns (uint256)
   * ```
   *
   */
  getAssetIndex: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
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
  getMembers: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
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
  isMember: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
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
   * function removeFromWhitelist(address)
   * ```
   *
   */
  removeFromWhitelist: (_asset: string) => TransactionWrapper<ethers.Overrides>;
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
