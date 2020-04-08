import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockHub extends Contract {
  public readonly ethers: MockHubEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockHub` contract call for the `ANY` function.
   *
   * @contract MockHub
   * @signature ANY()
   * @method function ANY() view returns (bytes32)
   */
  ANY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `accounting` function.
   *
   * @contract MockHub
   * @signature accounting()
   * @method function accounting() view returns (address)
   */
  accounting: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `authority` function.
   *
   * @contract MockHub
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `canCall` function.
   *
   * @contract MockHub
   * @signature canCall(address,address,bytes4)
   * @method function canCall(address,address,bytes4) view returns (bool)
   */
  canCall: (
    src_: string,
    dst_: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `MockHub` contract call for the `getName` function.
   *
   * @contract MockHub
   * @signature getName()
   * @method function getName() view returns (string)
   */
  getName: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `isShutDown` function.
   *
   * @contract MockHub
   * @signature isShutDown()
   * @method function isShutDown() view returns (bool)
   */
  isShutDown: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockHub` contract call for the `manager` function.
   *
   * @contract MockHub
   * @signature manager()
   * @method function manager() view returns (address)
   */
  manager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `name` function.
   *
   * @contract MockHub
   * @signature name()
   * @method function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `owner` function.
   *
   * @contract MockHub
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `policyManager` function.
   *
   * @contract MockHub
   * @signature policyManager()
   * @method function policyManager() view returns (address)
   */
  policyManager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `priceSource` function.
   *
   * @contract MockHub
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `registry` function.
   *
   * @contract MockHub
   * @signature registry()
   * @method function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `routes` function.
   *
   * @contract MockHub
   * @signature routes()
   * @method function routes() view returns (address, address, address, address, address, address, address)
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
   * `MockHub` contract call for the `shares` function.
   *
   * @contract MockHub
   * @signature shares()
   * @method function shares() view returns (address)
   */
  shares: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract call for the `vault` function.
   *
   * @contract MockHub
   * @signature vault()
   * @method function vault() view returns (address)
   */
  vault: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockHub` contract transaction for `forbid` function.
   *
   * @contract MockHub
   * @signature forbid(address,address,bytes32)
   * @method function forbid(address,address,bytes32)
   */
  forbid: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `initializeSpoke` function.
   *
   * @contract MockHub
   * @signature initializeSpoke(address)
   * @method function initializeSpoke(address)
   */
  initializeSpoke: (_spoke: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `permit` function.
   *
   * @contract MockHub
   * @signature permit(address,address,bytes32)
   * @method function permit(address,address,bytes32)
   */
  permit: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `permitSomething` function.
   *
   * @contract MockHub
   * @signature permitSomething(address,address,bytes4)
   * @method function permitSomething(address,address,bytes4)
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
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setManager` function.
   *
   * @contract MockHub
   * @signature setManager(address)
   * @method function setManager(address)
   */
  setManager: (_manager: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setName` function.
   *
   * @contract MockHub
   * @signature setName(string)
   * @method function setName(string)
   */
  setName: (_name: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setOwner` function.
   *
   * @contract MockHub
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setPermissions` function.
   *
   * @contract MockHub
   * @signature setPermissions()
   * @method function setPermissions()
   */
  setPermissions: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setRouting` function.
   *
   * @contract MockHub
   * @signature setRouting()
   * @method function setRouting()
   */
  setRouting: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setShutDownState` function.
   *
   * @contract MockHub
   * @signature setShutDownState(bool)
   * @method function setShutDownState(bool)
   */
  setShutDownState: (_state: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `setSpokes` function.
   *
   * @contract MockHub
   * @signature setSpokes(address[7])
   * @method function setSpokes(address[7])
   */
  setSpokes: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockHub` contract transaction for `shutDownFund` function.
   *
   * @contract MockHub
   * @signature shutDownFund()
   * @method function shutDownFund()
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
    'function getName() view returns (string)',
    'function initializeSpoke(address _spoke)',
    'function isShutDown() view returns (bool)',
    'function manager() view returns (address)',
    'function name() view returns (string)',
    'function owner() view returns (address)',
    'function permit(address src, address dst, bytes32 sig)',
    'function permit(bytes32 src, bytes32 dst, bytes32 sig)',
    'function permitSomething(address _from, address _to, bytes4 _sig)',
    'function policyManager() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function routes() view returns (address accounting, address feeManager, address policyManager, address shares, address vault, address registry, address fundFactory)',
    'function setAuthority(address authority_)',
    'function setManager(address _manager)',
    'function setName(string _name)',
    'function setOwner(address owner_)',
    'function setPermissions()',
    'function setRouting()',
    'function setShutDownState(bool _state)',
    'function setSpokes(address[7] _spokes)',
    'function shares() view returns (address)',
    'function shutDownFund()',
    'function vault() view returns (address)',
  ];
}

export interface MockHubEthersContract extends ethers.Contract {
  'ANY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'accounting()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'canCall(address,address,bytes4)': (
    src_: string,
    dst_: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'manager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'policyManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'routes()': (
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
  'shares()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'vault()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'forbid(address,address,bytes32)': (
    src: string,
    dst: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'initializeSpoke(address)': (_spoke: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'permit(address,address,bytes32)': (
    src: string,
    dst: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'permitSomething(address,address,bytes4)': (
    _from: string,
    _to: string,
    _sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setManager(address)': (_manager: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setName(string)': (_name: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setPermissions()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setRouting()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setShutDownState(bool)': (_state: boolean, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setSpokes(address[7])': (
    _spokes: [string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'shutDownFund()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  functions: {
    'ANY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'accounting()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'canCall(address,address,bytes4)': (
      src_: string,
      dst_: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'manager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'policyManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'routes()': (
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
    'shares()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'vault()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'initializeSpoke(address)': (
      _spoke: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'permitSomething(address,address,bytes4)': (
      _from: string,
      _to: string,
      _sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setManager(address)': (_manager: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'setName(string)': (_name: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'setPermissions()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'setRouting()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'setShutDownState(bool)': (_state: boolean, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'setSpokes(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'shutDownFund()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'ANY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'accounting()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'canCall(address,address,bytes4)': (
      src_: string,
      dst_: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'manager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'policyManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registry()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'routes()': (
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
    'shares()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'vault()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'initializeSpoke(address)': (_spoke: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'permitSomething(address,address,bytes4)': (
      _from: string,
      _to: string,
      _sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setManager(address)': (_manager: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setName(string)': (_name: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setPermissions()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'setRouting()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'setShutDownState(bool)': (_state: boolean, $$overrides?: ethers.Overrides) => Promise<void>;
    'setSpokes(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'initializeSpoke(address)': (_spoke: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'permitSomething(address,address,bytes4)': (
      _from: string,
      _to: string,
      _sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setManager(address)': (_manager: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setName(string)': (_name: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setPermissions()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setRouting()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setShutDownState(bool)': (_state: boolean, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setSpokes(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'initializeSpoke(address)': (_spoke: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'permitSomething(address,address,bytes4)': (
      _from: string,
      _to: string,
      _sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setManager(address)': (_manager: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setName(string)': (_name: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setPermissions()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setRouting()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setShutDownState(bool)': (_state: boolean, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setSpokes(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
