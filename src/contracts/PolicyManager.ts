import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class PolicyManager extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `PolicyManager` contract call for the `authority` function.
   *
   * @contract PolicyManager
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for the `engine` function.
   *
   * @contract PolicyManager
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for the `getPoliciesBySig` function.
   *
   * @contract PolicyManager
   * @signature function getPoliciesBySig(bytes4) view returns (address[], address[])
   */
  getPoliciesBySig: (sig: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `PolicyManager` contract call for the `hub` function.
   *
   * @contract PolicyManager
   * @signature function hub() view returns (address)
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for the `initialized` function.
   *
   * @contract PolicyManager
   * @signature function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `PolicyManager` contract call for the `mlnToken` function.
   *
   * @contract PolicyManager
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for the `owner` function.
   *
   * @contract PolicyManager
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for the `priceSource` function.
   *
   * @contract PolicyManager
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for the `registry` function.
   *
   * @contract PolicyManager
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract call for the `routes` function.
   *
   * @contract PolicyManager
   * @signature function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
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
   * `PolicyManager` contract call for the `version` function.
   *
   * @contract PolicyManager
   * @signature function version() view returns (address)
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PolicyManager` contract transaction for `batchRegister` function.
   *
   * @contract PolicyManager
   * @signature function batchRegister(bytes4[],address[])
   */
  batchRegister: (sig: string | ethers.utils.BytesLike, _policies: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract transaction for `initialize` function.
   *
   * @contract PolicyManager
   * @signature function initialize(address[11])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract transaction for `postValidate` function.
   *
   * @contract PolicyManager
   * @signature function postValidate(bytes4,address[5],uint256[3],bytes32)
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
   * @signature function preValidate(bytes4,address[5],uint256[3],bytes32)
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
   * @signature function register(bytes4,address)
   */
  register: (sig: string | ethers.utils.BytesLike, _policy: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract transaction for `setAuthority` function.
   *
   * @contract PolicyManager
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `PolicyManager` contract transaction for `setOwner` function.
   *
   * @contract PolicyManager
   * @signature function setOwner(address)
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
