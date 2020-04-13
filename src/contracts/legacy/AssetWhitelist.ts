import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../../Contract';

/**
 * `AssetWhitelist` contract
 *
 * Assets can be removed from but not added to whitelist
 */
export class AssetWhitelistContract extends Contract {
  public readonly ethers: AssetWhitelistEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `AssetWhitelist` contract call for `MAKE_ORDER` function.
   *
   * ```solidity
   * function MAKE_ORDER() view returns (bytes4)
   * ```
   */
  MAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AssetWhitelist` contract call for `TAKE_ORDER` function.
   *
   * ```solidity
   * function TAKE_ORDER() view returns (bytes4)
   * ```
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AssetWhitelist` contract call for `authority` function.
   *
   * ```solidity
   * function authority() view returns (address)
   * ```
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AssetWhitelist` contract call for `getAssetIndex` function.
   *
   * ```solidity
   * function getAssetIndex(address) view returns (uint256)
   * ```
   */
  getAssetIndex: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `AssetWhitelist` contract call for `getMemberCount` function.
   *
   * ```solidity
   * function getMemberCount() view returns (uint256)
   * ```
   */
  getMemberCount: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `AssetWhitelist` contract call for `getMembers` function.
   *
   * ```solidity
   * function getMembers() view returns (address[])
   * ```
   */
  getMembers: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `AssetWhitelist` contract call for `identifier` function.
   *
   * ```solidity
   * function identifier() pure returns (string)
   * ```
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AssetWhitelist` contract call for `isMember` function.
   *
   * ```solidity
   * function isMember(address) view returns (bool)
   * ```
   */
  isMember: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `AssetWhitelist` contract call for `owner` function.
   *
   * ```solidity
   * function owner() view returns (address)
   * ```
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AssetWhitelist` contract call for `position` function.
   *
   * ```solidity
   * function position() pure returns (uint8)
   * ```
   */
  position: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `AssetWhitelist` contract call for `removeFromWhitelist` function.
   *
   * ```solidity
   * function removeFromWhitelist(address)
   * ```
   */
  removeFromWhitelist: (_asset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `AssetWhitelist` contract call for `rule` function.
   *
   * ```solidity
   * function rule(bytes4,address[5],uint256[3],bytes32) returns (bool)
   * ```
   */
  rule: (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `AssetWhitelist` contract call for `setAuthority` function.
   *
   * ```solidity
   * function setAuthority(address)
   * ```
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `AssetWhitelist` contract call for `setOwner` function.
   *
   * ```solidity
   * function setOwner(address)
   * ```
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
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
}

export interface AssetWhitelistEthersContract extends ethers.Contract {
  'MAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getAssetIndex(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getMemberCount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getMembers()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'isMember(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'removeFromWhitelist(address)': (
    _asset: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'rule(bytes4,address[5],uint256[3],bytes32)': (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
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

  functions: {
    'MAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAssetIndex(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getMemberCount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getMembers()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isMember(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'removeFromWhitelist(address)': (
      _asset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
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
  };

  callStatic: {
    'MAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getAssetIndex(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getMemberCount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getMembers()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isMember(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'removeFromWhitelist(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'removeFromWhitelist(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'removeFromWhitelist(address)': (
      _asset: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
