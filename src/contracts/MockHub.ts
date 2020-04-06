import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockHub extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockHub` contract call for the `ANY` function.
   *
   * @contract MockHub
   * @signature function ANY() view returns (bytes32)
   */
  ANY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `accounting` function.
   *
   * @contract MockHub
   * @signature function accounting() view returns (address)
   */
  accounting: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `authority` function.
   *
   * @contract MockHub
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `canCall` function.
   *
   * @contract MockHub
   * @signature function canCall(address,address,bytes4) view returns (bool)
   */
  canCall: (
    src_: string,
    dst_: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `MockHub` contract call for the `isShutDown` function.
   *
   * @contract MockHub
   * @signature function isShutDown() view returns (bool)
   */
  isShutDown: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockHub` contract call for the `manager` function.
   *
   * @contract MockHub
   * @signature function manager() view returns (address)
   */
  manager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `name` function.
   *
   * @contract MockHub
   * @signature function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `owner` function.
   *
   * @contract MockHub
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `participation` function.
   *
   * @contract MockHub
   * @signature function participation() view returns (address)
   */
  participation: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `policyManager` function.
   *
   * @contract MockHub
   * @signature function policyManager() view returns (address)
   */
  policyManager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `priceSource` function.
   *
   * @contract MockHub
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `registry` function.
   *
   * @contract MockHub
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `routes` function.
   *
   * @contract MockHub
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
    mlnAddress: string;
  }>;

  /**
   * `MockHub` contract call for the `shares` function.
   *
   * @contract MockHub
   * @signature function shares() view returns (address)
   */
  shares: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `trading` function.
   *
   * @contract MockHub
   * @signature function trading() view returns (address)
   */
  trading: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `vault` function.
   *
   * @contract MockHub
   * @signature function vault() view returns (address)
   */
  vault: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract transaction for `forbid` function.
   *
   * @contract MockHub
   * @signature function forbid(address,address,bytes32)
   */
  forbid: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `initializeSpoke` function.
   *
   * @contract MockHub
   * @signature function initializeSpoke(address)
   */
  initializeSpoke: (_spoke: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `permit` function.
   *
   * @contract MockHub
   * @signature function permit(address,address,bytes32)
   */
  permit: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `permitSomething` function.
   *
   * @contract MockHub
   * @signature function permitSomething(address,address,bytes4)
   */
  permitSomething: (
    _from: string,
    _to: string,
    _sig: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setAuthority` function.
   *
   * @contract MockHub
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setManager` function.
   *
   * @contract MockHub
   * @signature function setManager(address)
   */
  setManager: (_manager: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setName` function.
   *
   * @contract MockHub
   * @signature function setName(string)
   */
  setName: (_name: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setOwner` function.
   *
   * @contract MockHub
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setPermissions` function.
   *
   * @contract MockHub
   * @signature function setPermissions()
   */
  setPermissions: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setRouting` function.
   *
   * @contract MockHub
   * @signature function setRouting()
   */
  setRouting: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setShutDownState` function.
   *
   * @contract MockHub
   * @signature function setShutDownState(bool)
   */
  setShutDownState: (_state: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setSpokes` function.
   *
   * @contract MockHub
   * @signature function setSpokes(address[11])
   */
  setSpokes: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `shutDownFund` function.
   *
   * @contract MockHub
   * @signature function shutDownFund()
   */
  shutDownFund: () => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event LogForbid(bytes32 indexed src, bytes32 indexed dst, bytes32 indexed sig)',
    'event LogPermit(bytes32 indexed src, bytes32 indexed dst, bytes32 indexed sig)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function ANY() view returns (bytes32)',
    'function accounting() view returns (address)',
    'function authority() view returns (address)',
    'function canCall(address src_, address dst_, bytes4 sig) view returns (bool)',
    'function forbid(address src, address dst, bytes32 sig)',
    'function forbid(bytes32 src, bytes32 dst, bytes32 sig)',
    'function initializeSpoke(address _spoke)',
    'function isShutDown() view returns (bool)',
    'function manager() view returns (address)',
    'function name() view returns (string)',
    'function owner() view returns (address)',
    'function participation() view returns (address)',
    'function permit(address src, address dst, bytes32 sig)',
    'function permit(bytes32 src, bytes32 dst, bytes32 sig)',
    'function permitSomething(address _from, address _to, bytes4 _sig)',
    'function policyManager() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnAddress)',
    'function setAuthority(address authority_)',
    'function setManager(address _manager)',
    'function setName(string _name)',
    'function setOwner(address owner_)',
    'function setPermissions()',
    'function setRouting()',
    'function setShutDownState(bool _state)',
    'function setSpokes(address[11] _spokes)',
    'function shares() view returns (address)',
    'function shutDownFund()',
    'function trading() view returns (address)',
    'function vault() view returns (address)',
  ];
}
