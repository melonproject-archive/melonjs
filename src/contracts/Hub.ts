import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Hub extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Hub` contract call for the `ANY` function.
   *
   * @contract Hub
   * @signature function ANY() view returns (bytes32)
   */
  ANY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `accounting` function.
   *
   * @contract Hub
   * @signature function accounting() view returns (address)
   */
  accounting: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `authority` function.
   *
   * @contract Hub
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `canCall` function.
   *
   * @contract Hub
   * @signature function canCall(address,address,bytes4) view returns (bool)
   */
  canCall: (
    src_: string,
    dst_: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `Hub` contract call for the `creationTime` function.
   *
   * @contract Hub
   * @signature function creationTime() view returns (uint256)
   */
  creationTime: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Hub` contract call for the `creator` function.
   *
   * @contract Hub
   * @signature function creator() view returns (address)
   */
  creator: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `fundInitialized` function.
   *
   * @contract Hub
   * @signature function fundInitialized() view returns (bool)
   */
  fundInitialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Hub` contract call for the `isShutDown` function.
   *
   * @contract Hub
   * @signature function isShutDown() view returns (bool)
   */
  isShutDown: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Hub` contract call for the `isSpoke` function.
   *
   * @contract Hub
   * @signature function isSpoke(address) view returns (bool)
   */
  isSpoke: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Hub` contract call for the `manager` function.
   *
   * @contract Hub
   * @signature function manager() view returns (address)
   */
  manager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `name` function.
   *
   * @contract Hub
   * @signature function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `owner` function.
   *
   * @contract Hub
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `participation` function.
   *
   * @contract Hub
   * @signature function participation() view returns (address)
   */
  participation: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `policyManager` function.
   *
   * @contract Hub
   * @signature function policyManager() view returns (address)
   */
  policyManager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `priceSource` function.
   *
   * @contract Hub
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `registry` function.
   *
   * @contract Hub
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `routes` function.
   *
   * @contract Hub
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
   * `Hub` contract call for the `shares` function.
   *
   * @contract Hub
   * @signature function shares() view returns (address)
   */
  shares: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `trading` function.
   *
   * @contract Hub
   * @signature function trading() view returns (address)
   */
  trading: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `vault` function.
   *
   * @contract Hub
   * @signature function vault() view returns (address)
   */
  vault: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `version` function.
   *
   * @contract Hub
   * @signature function version() view returns (address)
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract transaction for `forbid` function.
   *
   * @contract Hub
   * @signature function forbid(address,address,bytes32)
   */
  forbid: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract transaction for `initializeAndSetPermissions` function.
   *
   * @contract Hub
   * @signature function initializeAndSetPermissions(address[11])
   */
  initializeAndSetPermissions: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract transaction for `permit` function.
   *
   * @contract Hub
   * @signature function permit(address,address,bytes32)
   */
  permit: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract transaction for `setAuthority` function.
   *
   * @contract Hub
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract transaction for `setOwner` function.
   *
   * @contract Hub
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract transaction for `shutDownFund` function.
   *
   * @contract Hub
   * @signature function shutDownFund()
   */
  shutDownFund: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
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
    'function forbid(address src, address dst, bytes32 sig)',
    'function forbid(bytes32 src, bytes32 dst, bytes32 sig)',
    'function fundInitialized() view returns (bool)',
    'function initializeAndSetPermissions(address[11] _spokes)',
    'function isShutDown() view returns (bool)',
    'function isSpoke(address) view returns (bool)',
    'function manager() view returns (address)',
    'function name() view returns (string)',
    'function owner() view returns (address)',
    'function participation() view returns (address)',
    'function permit(address src, address dst, bytes32 sig)',
    'function permit(bytes32 src, bytes32 dst, bytes32 sig)',
    'function policyManager() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function shares() view returns (address)',
    'function shutDownFund()',
    'function trading() view returns (address)',
    'function vault() view returns (address)',
    'function version() view returns (address)',
  ];
}
