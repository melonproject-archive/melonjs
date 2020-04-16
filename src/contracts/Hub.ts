import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '..';

/** Router for communication between componentsHas one or more Spokes */
export class HubContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(address _manager, string _name)',
    'event FundShutDown()',
    'event LogForbid(bytes32 indexed src, bytes32 indexed dst, bytes32 indexed sig)',
    'event LogPermit(bytes32 indexed src, bytes32 indexed dst, bytes32 indexed sig)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function ANY() view returns (bytes32)',
    'function accounting() view returns (address)',
    'function authority() view returns (address)',
    'function canCall(address src_, address dst_, bytes4 sig) view returns (bool)',
    'function creationTime() view returns (uint256)',
    'function creator() view returns (address)',
    'function feeManager() view returns (address)',
    'function forbid(address src, address dst, bytes32 sig)',
    'function forbid(bytes32 src, bytes32 dst, bytes32 sig)',
    'function fundFactory() view returns (address)',
    'function fundInitialized() view returns (bool)',
    'function getName() view returns (string)',
    'function initializeAndSetPermissions(address[7] _spokes)',
    'function isShutDown() view returns (bool)',
    'function isSpoke(address) view returns (bool)',
    'function manager() view returns (address)',
    'function name() view returns (string)',
    'function owner() view returns (address)',
    'function permit(address src, address dst, bytes32 sig)',
    'function permit(bytes32 src, bytes32 dst, bytes32 sig)',
    'function policyManager() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function routes() view returns (address accounting, address feeManager, address policyManager, address shares, address vault, address registry, address fundFactory)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function shares() view returns (address)',
    'function shutDownFund()',
    'function vault() view returns (address)',
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
   * function ANY() view returns (bytes32)
   * ```
   *
   */
  ANY: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function accounting() view returns (address)
   * ```
   *
   */
  accounting: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function canCall(address,address,bytes4) view returns (bool)
   * ```
   *
   */
  canCall: (
    src_: string,
    dst_: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  /**
   * ```solidity
   * function creationTime() view returns (uint256)
   * ```
   *
   */
  creationTime: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function creator() view returns (address)
   * ```
   *
   */
  creator: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function feeManager() view returns (address)
   * ```
   *
   */
  feeManager: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function fundFactory() view returns (address)
   * ```
   *
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function fundInitialized() view returns (bool)
   * ```
   *
   */
  fundInitialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function getName() view returns (string)
   * ```
   *
   */
  getName: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function isShutDown() view returns (bool)
   * ```
   *
   */
  isShutDown: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isSpoke(address) view returns (bool)
   * ```
   *
   */
  isSpoke: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function manager() view returns (address)
   * ```
   *
   */
  manager: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function name() view returns (string)
   * ```
   *
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function owner() view returns (address)
   * ```
   *
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function policyManager() view returns (address)
   * ```
   *
   */
  policyManager: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   *
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function registry() view returns (address)
   * ```
   *
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function routes() view returns (address, address, address, address, address, address, address)
   * ```
   *
   */
  routes: (
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
   * function shares() view returns (address)
   * ```
   *
   */
  shares: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function vault() view returns (address)
   * ```
   *
   */
  vault: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function forbid(address,address,bytes32)
   * ```
   *
   */
  forbid: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function initializeAndSetPermissions(address[7])
   * ```
   *
   */
  initializeAndSetPermissions: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function permit(address,address,bytes32)
   * ```
   *
   */
  permit: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;
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
  /**
   * ```solidity
   * function shutDownFund()
   * ```
   *
   */
  shutDownFund: () => TransactionWrapper<ethers.Overrides>;
}
