import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../../Contract';

/**
 * `PolicyManager` contract
 */
export class PolicyManagerContract extends Contract {
  public readonly ethers: PolicyManagerEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `PolicyManager` contract call for `authority` function.
   *
   * ```solidity
   * function authority() view returns (address)
   * ```
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for `engine` function.
   *
   * ```solidity
   * function engine() view returns (address)
   * ```
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for `getPoliciesBySig` function.
   *
   * ```solidity
   * function getPoliciesBySig(bytes4) view returns (address[], address[])
   * ```
   */
  getPoliciesBySig: (sig: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `PolicyManager` contract call for `hub` function.
   *
   * ```solidity
   * function hub() view returns (address)
   * ```
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for `initialized` function.
   *
   * ```solidity
   * function initialized() view returns (bool)
   * ```
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `PolicyManager` contract call for `mlnToken` function.
   *
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for `owner` function.
   *
   * ```solidity
   * function owner() view returns (address)
   * ```
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for `priceSource` function.
   *
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for `registry` function.
   *
   * ```solidity
   * function registry() view returns (address)
   * ```
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for `routes` function.
   *
   * ```solidity
   * function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
   * ```
   */
  routes: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    participation: string;
    policyManager: string;
    shares: string;
    trading: string;
    vault: string;
    registry: string;
    version: string;
    engine: string;
    mlnToken: string;
  }>;

  /**
   * `PolicyManager` contract call for `version` function.
   *
   * ```solidity
   * function version() view returns (address)
   * ```
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for `batchRegister` function.
   *
   * ```solidity
   * function batchRegister(bytes4[],address[])
   * ```
   */
  batchRegister: (sig: string | ethers.utils.BytesLike, _policies: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract call for `initialize` function.
   *
   * ```solidity
   * function initialize(address[11])
   * ```
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract call for `postValidate` function.
   *
   * ```solidity
   * function postValidate(bytes4,address[5],uint256[3],bytes32)
   * ```
   */
  postValidate: (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract call for `preValidate` function.
   *
   * ```solidity
   * function preValidate(bytes4,address[5],uint256[3],bytes32)
   * ```
   */
  preValidate: (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract call for `register` function.
   *
   * ```solidity
   * function register(bytes4,address)
   * ```
   */
  register: (sig: string | ethers.utils.BytesLike, _policy: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract call for `setAuthority` function.
   *
   * ```solidity
   * function setAuthority(address)
   * ```
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract call for `setOwner` function.
   *
   * ```solidity
   * function setOwner(address)
   * ```
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event Registration(bytes4 indexed sig, uint8 position, address indexed policy)',
    'function authority() view returns (address)',
    'function batchRegister(bytes4[] sig, address[] _policies)',
    'function engine() view returns (address)',
    'function getPoliciesBySig(bytes4 sig) view returns (address[], address[])',
    'function hub() view returns (address)',
    'function initialize(address[11] _spokes)',
    'function initialized() view returns (bool)',
    'function mlnToken() view returns (address)',
    'function owner() view returns (address)',
    'function postValidate(bytes4 sig, address[5] addresses, uint256[3] values, bytes32 identifier)',
    'function preValidate(bytes4 sig, address[5] addresses, uint256[3] values, bytes32 identifier)',
    'function priceSource() view returns (address)',
    'function register(bytes4 sig, address _policy)',
    'function registry() view returns (address)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function version() view returns (address)',
  ];
}

export interface PolicyManagerEthersContract extends ethers.Contract {
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getPoliciesBySig(bytes4)': (
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;
  'hub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'routes()': (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    participation: string;
    policyManager: string;
    shares: string;
    trading: string;
    vault: string;
    registry: string;
    version: string;
    engine: string;
    mlnToken: string;
  }>;
  'version()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'batchRegister(bytes4[],address[])': (
    sig: string | ethers.utils.BytesLike,
    _policies: string[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'initialize(address[11])': (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'postValidate(bytes4,address[5],uint256[3],bytes32)': (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'preValidate(bytes4,address[5],uint256[3],bytes32)': (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'register(bytes4,address)': (
    sig: string | ethers.utils.BytesLike,
    _policy: string,
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
    'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getPoliciesBySig(bytes4)': (
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<any[]>;
    'hub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'routes()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      accounting: string;
      feeManager: string;
      participation: string;
      policyManager: string;
      shares: string;
      trading: string;
      vault: string;
      registry: string;
      version: string;
      engine: string;
      mlnToken: string;
    }>;
    'version()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'batchRegister(bytes4[],address[])': (
      sig: string | ethers.utils.BytesLike,
      _policies: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'initialize(address[11])': (
      _spokes: [string, string, string, string, string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'postValidate(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'preValidate(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'register(bytes4,address)': (
      sig: string | ethers.utils.BytesLike,
      _policy: string,
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
    'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getPoliciesBySig(bytes4)': (
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<any[]>;
    'hub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'routes()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      accounting: string;
      feeManager: string;
      participation: string;
      policyManager: string;
      shares: string;
      trading: string;
      vault: string;
      registry: string;
      version: string;
      engine: string;
      mlnToken: string;
    }>;
    'version()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'batchRegister(bytes4[],address[])': (
      sig: string | ethers.utils.BytesLike,
      _policies: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'initialize(address[11])': (
      _spokes: [string, string, string, string, string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'postValidate(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'preValidate(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'register(bytes4,address)': (
      sig: string | ethers.utils.BytesLike,
      _policy: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'batchRegister(bytes4[],address[])': (
      sig: string | ethers.utils.BytesLike,
      _policies: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'initialize(address[11])': (
      _spokes: [string, string, string, string, string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'postValidate(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'preValidate(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'register(bytes4,address)': (
      sig: string | ethers.utils.BytesLike,
      _policy: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'batchRegister(bytes4[],address[])': (
      sig: string | ethers.utils.BytesLike,
      _policies: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'initialize(address[11])': (
      _spokes: [string, string, string, string, string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'postValidate(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'preValidate(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'register(bytes4,address)': (
      sig: string | ethers.utils.BytesLike,
      _policy: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
