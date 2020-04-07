import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class PolicyManager extends Contract {
  public readonly ethers: PolicyManagerEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `PolicyManager` contract call for the `authority` function.
   *
   * @contract PolicyManager
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for the `fundFactory` function.
   *
   * @contract PolicyManager
   * @signature fundFactory()
   * @method function fundFactory() view returns (address)
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for the `getHub` function.
   *
   * @contract PolicyManager
   * @signature getHub()
   * @method function getHub() view returns (address)
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for the `getPoliciesBySig` function.
   *
   * @contract PolicyManager
   * @signature getPoliciesBySig(bytes4)
   * @method function getPoliciesBySig(bytes4) view returns (address[], address[])
   */
  getPoliciesBySig: (sig: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `PolicyManager` contract call for the `getRoutes` function.
   *
   * @contract PolicyManager
   * @signature getRoutes()
   * @method function getRoutes() view returns (tuple(address,address,address,address,address,address,address))
   */
  getRoutes: (
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
   * `PolicyManager` contract call for the `initialized` function.
   *
   * @contract PolicyManager
   * @signature initialized()
   * @method function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `PolicyManager` contract call for the `owner` function.
   *
   * @contract PolicyManager
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for the `priceSource` function.
   *
   * @contract PolicyManager
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract transaction for `batchRegister` function.
   *
   * @contract PolicyManager
   * @signature batchRegister(bytes4[],address[])
   * @method function batchRegister(bytes4[],address[])
   */
  batchRegister: (sig: string | ethers.utils.BytesLike, _policies: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract transaction for `initialize` function.
   *
   * @contract PolicyManager
   * @signature initialize(address[7])
   * @method function initialize(address[7])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract transaction for `postValidate` function.
   *
   * @contract PolicyManager
   * @signature postValidate(bytes4,address[5],uint256[3],bytes32)
   * @method function postValidate(bytes4,address[5],uint256[3],bytes32)
   */
  postValidate: (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract transaction for `preValidate` function.
   *
   * @contract PolicyManager
   * @signature preValidate(bytes4,address[5],uint256[3],bytes32)
   * @method function preValidate(bytes4,address[5],uint256[3],bytes32)
   */
  preValidate: (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract transaction for `register` function.
   *
   * @contract PolicyManager
   * @signature register(bytes4,address)
   * @method function register(bytes4,address)
   */
  register: (sig: string | ethers.utils.BytesLike, _policy: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract transaction for `setAuthority` function.
   *
   * @contract PolicyManager
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract transaction for `setOwner` function.
   *
   * @contract PolicyManager
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event Registration(bytes4 indexed sig, uint8 position, address indexed policy)',
    'function authority() view returns (address)',
    'function batchRegister(bytes4[] sig, address[] _policies)',
    'function fundFactory() view returns (address)',
    'function getHub() view returns (address)',
    'function getPoliciesBySig(bytes4 sig) view returns (address[], address[])',
    'function getRoutes() view returns (tuple(address accounting, address feeManager, address policyManager, address shares, address vault, address registry, address fundFactory))',
    'function initialize(address[7] _spokes)',
    'function initialized() view returns (bool)',
    'function owner() view returns (address)',
    'function postValidate(bytes4 sig, address[5] addresses, uint256[3] values, bytes32 identifier)',
    'function preValidate(bytes4 sig, address[5] addresses, uint256[3] values, bytes32 identifier)',
    'function priceSource() view returns (address)',
    'function register(bytes4 sig, address _policy)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
  ];
}

export interface PolicyManagerEthersContract extends ethers.Contract {
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getPoliciesBySig(bytes4)': (
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;
  'getRoutes()': (
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
  'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'batchRegister(bytes4[],address[])': (
    sig: string | ethers.utils.BytesLike,
    _policies: string[],
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'initialize(address[7])': (
    _spokes: [string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'postValidate(bytes4,address[5],uint256[3],bytes32)': (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'preValidate(bytes4,address[5],uint256[3],bytes32)': (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'register(bytes4,address)': (
    sig: string | ethers.utils.BytesLike,
    _policy: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getPoliciesBySig(bytes4)': (
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<any[]>;
    'getRoutes()': (
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
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'batchRegister(bytes4[],address[])': (
      sig: string | ethers.utils.BytesLike,
      _policies: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
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
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
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
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
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
