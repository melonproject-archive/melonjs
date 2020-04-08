import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class UserWhitelist extends Contract {
  public readonly ethers: UserWhitelistEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `UserWhitelist` contract call for the `authority` function.
   *
   * @contract UserWhitelist
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UserWhitelist` contract call for the `identifier` function.
   *
   * @contract UserWhitelist
   * @signature identifier()
   * @method function identifier() pure returns (string)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UserWhitelist` contract call for the `owner` function.
   *
   * @contract UserWhitelist
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `UserWhitelist` contract call for the `position` function.
   *
   * @contract UserWhitelist
   * @signature position()
   * @method function position() pure returns (uint8)
   */
  position: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `UserWhitelist` contract call for the `whitelisted` function.
   *
   * @contract UserWhitelist
   * @signature whitelisted(address)
   * @method function whitelisted(address) view returns (bool)
   */
  whitelisted: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `UserWhitelist` contract transaction for `addToWhitelist` function.
   *
   * @contract UserWhitelist
   * @signature addToWhitelist(address)
   * @method function addToWhitelist(address)
   */
  addToWhitelist: (_who: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UserWhitelist` contract transaction for `batchAddToWhitelist` function.
   *
   * @contract UserWhitelist
   * @signature batchAddToWhitelist(address[])
   * @method function batchAddToWhitelist(address[])
   */
  batchAddToWhitelist: (_members: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UserWhitelist` contract transaction for `batchRemoveFromWhitelist` function.
   *
   * @contract UserWhitelist
   * @signature batchRemoveFromWhitelist(address[])
   * @method function batchRemoveFromWhitelist(address[])
   */
  batchRemoveFromWhitelist: (_members: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UserWhitelist` contract transaction for `removeFromWhitelist` function.
   *
   * @contract UserWhitelist
   * @signature removeFromWhitelist(address)
   * @method function removeFromWhitelist(address)
   */
  removeFromWhitelist: (_who: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UserWhitelist` contract transaction for `rule` function.
   *
   * @contract UserWhitelist
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
   * `UserWhitelist` contract transaction for `setAuthority` function.
   *
   * @contract UserWhitelist
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `UserWhitelist` contract transaction for `setOwner` function.
   *
   * @contract UserWhitelist
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
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
}

export interface UserWhitelistEthersContract extends ethers.Contract {
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'whitelisted(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'addToWhitelist(address)': (
    _who: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'batchAddToWhitelist(address[])': (
    _members: string[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'batchRemoveFromWhitelist(address[])': (
    _members: string[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'removeFromWhitelist(address)': (
    _who: string,
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
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'whitelisted(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'addToWhitelist(address)': (
      _who: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'batchAddToWhitelist(address[])': (
      _members: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'batchRemoveFromWhitelist(address[])': (
      _members: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'removeFromWhitelist(address)': (
      _who: string,
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
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'whitelisted(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'addToWhitelist(address)': (_who: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'batchAddToWhitelist(address[])': (_members: string[], $$overrides?: ethers.Overrides) => Promise<void>;
    'batchRemoveFromWhitelist(address[])': (_members: string[], $$overrides?: ethers.Overrides) => Promise<void>;
    'removeFromWhitelist(address)': (_who: string, $$overrides?: ethers.Overrides) => Promise<void>;
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
    'addToWhitelist(address)': (_who: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'batchAddToWhitelist(address[])': (_members: string[], $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'batchRemoveFromWhitelist(address[])': (
      _members: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'removeFromWhitelist(address)': (_who: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
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
    'addToWhitelist(address)': (_who: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'batchAddToWhitelist(address[])': (
      _members: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'batchRemoveFromWhitelist(address[])': (
      _members: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'removeFromWhitelist(address)': (
      _who: string,
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
