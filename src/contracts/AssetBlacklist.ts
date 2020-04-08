import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class AssetBlacklist extends Contract {
  public readonly ethers: AssetBlacklistEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `AssetBlacklist` contract call for the `TAKE_ORDER` function.
   *
   * @contract AssetBlacklist
   * @signature TAKE_ORDER()
   * @method function TAKE_ORDER() view returns (bytes4)
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AssetBlacklist` contract call for the `authority` function.
   *
   * @contract AssetBlacklist
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AssetBlacklist` contract call for the `getMemberCount` function.
   *
   * @contract AssetBlacklist
   * @signature getMemberCount()
   * @method function getMemberCount() view returns (uint256)
   */
  getMemberCount: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `AssetBlacklist` contract call for the `getMembers` function.
   *
   * @contract AssetBlacklist
   * @signature getMembers()
   * @method function getMembers() view returns (address[])
   */
  getMembers: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `AssetBlacklist` contract call for the `identifier` function.
   *
   * @contract AssetBlacklist
   * @signature identifier()
   * @method function identifier() pure returns (string)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AssetBlacklist` contract call for the `isMember` function.
   *
   * @contract AssetBlacklist
   * @signature isMember(address)
   * @method function isMember(address) view returns (bool)
   */
  isMember: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `AssetBlacklist` contract call for the `owner` function.
   *
   * @contract AssetBlacklist
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AssetBlacklist` contract call for the `position` function.
   *
   * @contract AssetBlacklist
   * @signature position()
   * @method function position() pure returns (uint8)
   */
  position: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `AssetBlacklist` contract transaction for `addToBlacklist` function.
   *
   * @contract AssetBlacklist
   * @signature addToBlacklist(address)
   * @method function addToBlacklist(address)
   */
  addToBlacklist: (_asset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `AssetBlacklist` contract transaction for `rule` function.
   *
   * @contract AssetBlacklist
   * @signature rule(bytes4,address[5],uint256[3],bytes32)
   * @method function rule(bytes4,address[5],uint256[3],bytes32) returns (bool)
   */
  rule: (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `AssetBlacklist` contract transaction for `setAuthority` function.
   *
   * @contract AssetBlacklist
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `AssetBlacklist` contract transaction for `setOwner` function.
   *
   * @contract AssetBlacklist
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address[] _assets)',
    'event ListAddition(address[] ones)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
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
}

export interface AssetBlacklistEthersContract extends ethers.Contract {
  'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getMemberCount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getMembers()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'isMember(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'addToBlacklist(address)': (
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
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getMemberCount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getMembers()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isMember(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'addToBlacklist(address)': (
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
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getMemberCount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getMembers()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isMember(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'addToBlacklist(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<void>;
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
    'addToBlacklist(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
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
    'addToBlacklist(address)': (_asset: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
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
