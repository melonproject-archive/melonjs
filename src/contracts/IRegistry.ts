import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IRegistry extends Contract {
  public readonly ethers: IRegistryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IRegistry` contract call for the `MGM` function.
   *
   * @contract IRegistry
   * @signature MGM()
   * @method function MGM() view returns (address)
   */
  MGM: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IRegistry` contract call for the `adapterMethodIsAllowed` function.
   *
   * @contract IRegistry
   * @signature adapterMethodIsAllowed(address,bytes4)
   * @method function adapterMethodIsAllowed(address,bytes4) view returns (bool)
   */
  adapterMethodIsAllowed: (
    $$0: string,
    $$1: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `IRegistry` contract call for the `assetIsRegistered` function.
   *
   * @contract IRegistry
   * @signature assetIsRegistered(address)
   * @method function assetIsRegistered(address) view returns (bool)
   */
  assetIsRegistered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IRegistry` contract call for the `engine` function.
   *
   * @contract IRegistry
   * @signature engine()
   * @method function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IRegistry` contract call for the `exchangeAdapterIsRegistered` function.
   *
   * @contract IRegistry
   * @signature exchangeAdapterIsRegistered(address)
   * @method function exchangeAdapterIsRegistered(address) view returns (bool)
   */
  exchangeAdapterIsRegistered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IRegistry` contract call for the `exchangeForAdapter` function.
   *
   * @contract IRegistry
   * @signature exchangeForAdapter(address)
   * @method function exchangeForAdapter(address) view returns (address)
   */
  exchangeForAdapter: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IRegistry` contract call for the `getRegisteredAssets` function.
   *
   * @contract IRegistry
   * @signature getRegisteredAssets()
   * @method function getRegisteredAssets() view returns (address[])
   */
  getRegisteredAssets: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `IRegistry` contract call for the `getReserveMin` function.
   *
   * @contract IRegistry
   * @signature getReserveMin(address)
   * @method function getReserveMin(address) view returns (uint256)
   */
  getReserveMin: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IRegistry` contract call for the `incentive` function.
   *
   * @contract IRegistry
   * @signature incentive()
   * @method function incentive() view returns (uint256)
   */
  incentive: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IRegistry` contract call for the `isFeeRegistered` function.
   *
   * @contract IRegistry
   * @signature isFeeRegistered(address)
   * @method function isFeeRegistered(address) view returns (bool)
   */
  isFeeRegistered: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IRegistry` contract call for the `isFund` function.
   *
   * @contract IRegistry
   * @signature isFund(address)
   * @method function isFund(address) view returns (bool)
   */
  isFund: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IRegistry` contract call for the `isFundFactory` function.
   *
   * @contract IRegistry
   * @signature isFundFactory(address)
   * @method function isFundFactory(address) view returns (bool)
   */
  isFundFactory: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IRegistry` contract call for the `isHub` function.
   *
   * @contract IRegistry
   * @signature isHub(address)
   * @method function isHub(address) view returns (bool)
   */
  isHub: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IRegistry` contract call for the `mlnToken` function.
   *
   * @contract IRegistry
   * @signature mlnToken()
   * @method function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IRegistry` contract call for the `nativeAsset` function.
   *
   * @contract IRegistry
   * @signature nativeAsset()
   * @method function nativeAsset() view returns (address)
   */
  nativeAsset: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IRegistry` contract call for the `owner` function.
   *
   * @contract IRegistry
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IRegistry` contract call for the `priceSource` function.
   *
   * @contract IRegistry
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IRegistry` contract call for the `sharesRequestor` function.
   *
   * @contract IRegistry
   * @signature sharesRequestor()
   * @method function sharesRequestor() view returns (address)
   */
  sharesRequestor: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IRegistry` contract transaction for `registerFund` function.
   *
   * @contract IRegistry
   * @signature registerFund(address,address,string)
   * @method function registerFund(address,address,string)
   */
  registerFund: (_fund: string, _owner: string, _name: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IRegistry` contract transaction for `reserveFundName` function.
   *
   * @contract IRegistry
   * @signature reserveFundName(address,string)
   * @method function reserveFundName(address,string)
   */
  reserveFundName: (_owner: string, _name: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function MGM() view returns (address)',
    'function adapterMethodIsAllowed(address, bytes4) view returns (bool)',
    'function assetIsRegistered(address) view returns (bool)',
    'function engine() view returns (address)',
    'function exchangeAdapterIsRegistered(address) view returns (bool)',
    'function exchangeForAdapter(address) view returns (address)',
    'function getRegisteredAssets() view returns (address[])',
    'function getReserveMin(address) view returns (uint256)',
    'function incentive() view returns (uint256)',
    'function isFeeRegistered(address) view returns (bool)',
    'function isFund(address) view returns (bool)',
    'function isFundFactory(address) view returns (bool)',
    'function isHub(address) view returns (bool)',
    'function mlnToken() view returns (address)',
    'function nativeAsset() view returns (address)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function registerFund(address _fund, address _owner, string _name)',
    'function reserveFundName(address _owner, string _name)',
    'function sharesRequestor() view returns (address)',
  ];
}

export interface IRegistryEthersContract extends ethers.Contract {
  'MGM()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'adapterMethodIsAllowed(address,bytes4)': (
    $$0: string,
    $$1: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'assetIsRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'exchangeAdapterIsRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'exchangeForAdapter(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'getRegisteredAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'getReserveMin(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'incentive()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'isFeeRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isFund(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isFundFactory(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isHub(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'nativeAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'sharesRequestor()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'registerFund(address,address,string)': (
    _fund: string,
    _owner: string,
    _name: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'reserveFundName(address,string)': (
    _owner: string,
    _name: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'MGM()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'adapterMethodIsAllowed(address,bytes4)': (
      $$0: string,
      $$1: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'assetIsRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchangeAdapterIsRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'exchangeForAdapter(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getRegisteredAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getReserveMin(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'incentive()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'isFeeRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFund(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFundFactory(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isHub(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'nativeAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'sharesRequestor()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registerFund(address,address,string)': (
      _fund: string,
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'reserveFundName(address,string)': (
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'MGM()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'adapterMethodIsAllowed(address,bytes4)': (
      $$0: string,
      $$1: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'assetIsRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'engine()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchangeAdapterIsRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'exchangeForAdapter(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getRegisteredAssets()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'getReserveMin(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'incentive()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'isFeeRegistered(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFund(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isFundFactory(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isHub(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mlnToken()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'nativeAsset()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'sharesRequestor()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'registerFund(address,address,string)': (
      _fund: string,
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'reserveFundName(address,string)': (_owner: string, _name: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'registerFund(address,address,string)': (
      _fund: string,
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'reserveFundName(address,string)': (
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'registerFund(address,address,string)': (
      _fund: string,
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'reserveFundName(address,string)': (
      _owner: string,
      _name: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
