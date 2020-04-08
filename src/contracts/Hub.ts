import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Hub extends Contract {
  public readonly ethers: HubEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Hub` contract call for the `ANY` function.
   *
   * @contract Hub
   * @signature ANY()
   * @method function ANY() view returns (bytes32)
   */
  ANY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `accounting` function.
   *
   * @contract Hub
   * @signature accounting()
   * @method function accounting() view returns (address)
   */
  accounting: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `authority` function.
   *
   * @contract Hub
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `canCall` function.
   *
   * @contract Hub
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
   * `Hub` contract call for the `creationTime` function.
   *
   * @contract Hub
   * @signature creationTime()
   * @method function creationTime() view returns (uint256)
   */
  creationTime: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Hub` contract call for the `creator` function.
   *
   * @contract Hub
   * @signature creator()
   * @method function creator() view returns (address)
   */
  creator: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `feeManager` function.
   *
   * @contract Hub
   * @signature feeManager()
   * @method function feeManager() view returns (address)
   */
  feeManager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `fundFactory` function.
   *
   * @contract Hub
   * @signature fundFactory()
   * @method function fundFactory() view returns (address)
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `fundInitialized` function.
   *
   * @contract Hub
   * @signature fundInitialized()
   * @method function fundInitialized() view returns (bool)
   */
  fundInitialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Hub` contract call for the `getName` function.
   *
   * @contract Hub
   * @signature getName()
   * @method function getName() view returns (string)
   */
  getName: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `isShutDown` function.
   *
   * @contract Hub
   * @signature isShutDown()
   * @method function isShutDown() view returns (bool)
   */
  isShutDown: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Hub` contract call for the `isSpoke` function.
   *
   * @contract Hub
   * @signature isSpoke(address)
   * @method function isSpoke(address) view returns (bool)
   */
  isSpoke: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Hub` contract call for the `manager` function.
   *
   * @contract Hub
   * @signature manager()
   * @method function manager() view returns (address)
   */
  manager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `name` function.
   *
   * @contract Hub
   * @signature name()
   * @method function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `owner` function.
   *
   * @contract Hub
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `policyManager` function.
   *
   * @contract Hub
   * @signature policyManager()
   * @method function policyManager() view returns (address)
   */
  policyManager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `priceSource` function.
   *
   * @contract Hub
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `registry` function.
   *
   * @contract Hub
   * @signature registry()
   * @method function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `routes` function.
   *
   * @contract Hub
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
   * `Hub` contract call for the `shares` function.
   *
   * @contract Hub
   * @signature shares()
   * @method function shares() view returns (address)
   */
  shares: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract call for the `vault` function.
   *
   * @contract Hub
   * @signature vault()
   * @method function vault() view returns (address)
   */
  vault: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Hub` contract transaction for `forbid` function.
   *
   * @contract Hub
   * @signature forbid(address,address,bytes32)
   * @method function forbid(address,address,bytes32)
   */
  forbid: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract transaction for `initializeAndSetPermissions` function.
   *
   * @contract Hub
   * @signature initializeAndSetPermissions(address[7])
   * @method function initializeAndSetPermissions(address[7])
   */
  initializeAndSetPermissions: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract transaction for `permit` function.
   *
   * @contract Hub
   * @signature permit(address,address,bytes32)
   * @method function permit(address,address,bytes32)
   */
  permit: (src: string, dst: string, sig: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract transaction for `setAuthority` function.
   *
   * @contract Hub
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract transaction for `setOwner` function.
   *
   * @contract Hub
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Hub` contract transaction for `shutDownFund` function.
   *
   * @contract Hub
   * @signature shutDownFund()
   * @method function shutDownFund()
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
}

export interface HubEthersContract extends ethers.Contract {
  'ANY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'accounting()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'canCall(address,address,bytes4)': (
    src_: string,
    dst_: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'creationTime()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'creator()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'feeManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'fundInitialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isSpoke(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
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
  ) => Promise<ethers.providers.TransactionResponse>;
  'initializeAndSetPermissions(address[7])': (
    _spokes: [string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'permit(address,address,bytes32)': (
    src: string,
    dst: string,
    sig: string | ethers.utils.BytesLike,
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
  'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;

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
    'creationTime()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'creator()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'feeManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundInitialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isSpoke(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
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
    ) => Promise<ethers.providers.TransactionResponse>;
    'initializeAndSetPermissions(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
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
    'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<ethers.providers.TransactionResponse>;
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
    'creationTime()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'creator()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'feeManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundInitialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isSpoke(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
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
    'initializeAndSetPermissions(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'initializeAndSetPermissions(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'forbid(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'initializeAndSetPermissions(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'permit(address,address,bytes32)': (
      src: string,
      dst: string,
      sig: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'shutDownFund()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
