import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '..';

export class PolicyManagerContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
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
   * function fundFactory() view returns (address)
   * ```
   *
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getHub() view returns (address)
   * ```
   *
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getPoliciesBySig(bytes4) view returns (address[], address[])
   * ```
   *
   */
  getPoliciesBySig: (sig: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getRoutes() view returns (tuple(address,address,address,address,address,address,address))
   * ```
   *
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
   * ```solidity
   * function initialized() view returns (bool)
   * ```
   *
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function owner() view returns (address)
   * ```
   *
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   *
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function batchRegister(bytes4[],address[])
   * ```
   *
   */
  batchRegister: (sig: string | ethers.utils.BytesLike, _policies: string[]) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function initialize(address[7])
   * ```
   *
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function postValidate(bytes4,address[5],uint256[3],bytes32)
   * ```
   *
   */
  postValidate: (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function preValidate(bytes4,address[5],uint256[3],bytes32)
   * ```
   *
   */
  preValidate: (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function register(bytes4,address)
   * ```
   *
   */
  register: (sig: string | ethers.utils.BytesLike, _policy: string) => TransactionWrapper<ethers.Overrides>;
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
