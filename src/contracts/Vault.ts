import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Vault extends Contract {
  public readonly ethers: VaultEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Vault` contract call for the `TAKE_ORDER` function.
   *
   * @contract Vault
   * @signature TAKE_ORDER()
   * @method function TAKE_ORDER() view returns (bytes4)
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `adapterIsAdded` function.
   *
   * @contract Vault
   * @signature adapterIsAdded(address)
   * @method function adapterIsAdded(address) view returns (bool)
   */
  adapterIsAdded: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Vault` contract call for the `authority` function.
   *
   * @contract Vault
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `exchanges` function.
   *
   * @contract Vault
   * @signature exchanges(uint256)
   * @method function exchanges(uint256) view returns (address, address)
   */
  exchanges: (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exchange: string; adapter: string }>;

  /**
   * `Vault` contract call for the `fundFactory` function.
   *
   * @contract Vault
   * @signature fundFactory()
   * @method function fundFactory() view returns (address)
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `getExchangeInfo` function.
   *
   * @contract Vault
   * @signature getExchangeInfo()
   * @method function getExchangeInfo() view returns (address[], address[])
   */
  getExchangeInfo: ($$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `Vault` contract call for the `getHub` function.
   *
   * @contract Vault
   * @signature getHub()
   * @method function getHub() view returns (address)
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `getRoutes` function.
   *
   * @contract Vault
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
   * `Vault` contract call for the `initialized` function.
   *
   * @contract Vault
   * @signature initialized()
   * @method function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Vault` contract call for the `owner` function.
   *
   * @contract Vault
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `priceSource` function.
   *
   * @contract Vault
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract transaction for `addExchange` function.
   *
   * @contract Vault
   * @signature addExchange(address,address)
   * @method function addExchange(address,address)
   */
  addExchange: (_exchange: string, _adapter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Vault` contract transaction for `callOnExchange` function.
   *
   * @contract Vault
   * @signature callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)
   * @method function callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)
   */
  callOnExchange: (
    _exchangeIndex: ethers.BigNumberish,
    _methodSignature: string,
    _orderAddresses: [string, string, string, string, string, string, string, string],
    _orderValues: [
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
    ],
    _orderData: string | ethers.utils.BytesLike,
    _identifier: string | ethers.utils.BytesLike,
    _signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Vault` contract transaction for `initialize` function.
   *
   * @contract Vault
   * @signature initialize(address[7])
   * @method function initialize(address[7])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Vault` contract transaction for `setAuthority` function.
   *
   * @contract Vault
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Vault` contract transaction for `setOwner` function.
   *
   * @contract Vault
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Vault` contract transaction for `withdraw` function.
   *
   * @contract Vault
   * @signature withdraw(address,uint256)
   * @method function withdraw(address,uint256)
   */
  withdraw: (_token: string, _amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub, address[] _exchanges, address[] _adapters, address _registry)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function TAKE_ORDER() view returns (bytes4)',
    'function adapterIsAdded(address) view returns (bool)',
    'function addExchange(address _exchange, address _adapter)',
    'function authority() view returns (address)',
    'function callOnExchange(uint256 _exchangeIndex, string _methodSignature, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
    'function exchanges(uint256) view returns (address exchange, address adapter)',
    'function fundFactory() view returns (address)',
    'function getExchangeInfo() view returns (address[], address[])',
    'function getHub() view returns (address)',
    'function getRoutes() view returns (tuple(address accounting, address feeManager, address policyManager, address shares, address vault, address registry, address fundFactory))',
    'function initialize(address[7] _spokes)',
    'function initialized() view returns (bool)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function withdraw(address _token, uint256 _amount)',
  ];
}

export interface VaultEthersContract extends ethers.Contract {
  'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'adapterIsAdded(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'exchanges(uint256)': (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exchange: string; adapter: string }>;
  'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getExchangeInfo()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
  'addExchange(address,address)': (
    _exchange: string,
    _adapter: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)': (
    _exchangeIndex: ethers.BigNumberish,
    _methodSignature: string,
    _orderAddresses: [string, string, string, string, string, string, string, string],
    _orderValues: [
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
    ],
    _orderData: string | ethers.utils.BytesLike,
    _identifier: string | ethers.utils.BytesLike,
    _signature: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'initialize(address[7])': (
    _spokes: [string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'withdraw(address,uint256)': (
    _token: string,
    _amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'adapterIsAdded(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchanges(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exchange: string; adapter: string }>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getExchangeInfo()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
    'addExchange(address,address)': (
      _exchange: string,
      _adapter: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      _exchangeIndex: ethers.BigNumberish,
      _methodSignature: string,
      _orderAddresses: [string, string, string, string, string, string, string, string],
      _orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      _orderData: string | ethers.utils.BytesLike,
      _identifier: string | ethers.utils.BytesLike,
      _signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'withdraw(address,uint256)': (
      _token: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'adapterIsAdded(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchanges(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exchange: string; adapter: string }>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getExchangeInfo()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
    'addExchange(address,address)': (
      _exchange: string,
      _adapter: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      _exchangeIndex: ethers.BigNumberish,
      _methodSignature: string,
      _orderAddresses: [string, string, string, string, string, string, string, string],
      _orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      _orderData: string | ethers.utils.BytesLike,
      _identifier: string | ethers.utils.BytesLike,
      _signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'withdraw(address,uint256)': (
      _token: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'addExchange(address,address)': (
      _exchange: string,
      _adapter: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      _exchangeIndex: ethers.BigNumberish,
      _methodSignature: string,
      _orderAddresses: [string, string, string, string, string, string, string, string],
      _orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      _orderData: string | ethers.utils.BytesLike,
      _identifier: string | ethers.utils.BytesLike,
      _signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'withdraw(address,uint256)': (
      _token: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'addExchange(address,address)': (
      _exchange: string,
      _adapter: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)': (
      _exchangeIndex: ethers.BigNumberish,
      _methodSignature: string,
      _orderAddresses: [string, string, string, string, string, string, string, string],
      _orderValues: [
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
        ethers.BigNumber,
      ],
      _orderData: string | ethers.utils.BytesLike,
      _identifier: string | ethers.utils.BytesLike,
      _signature: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'withdraw(address,uint256)': (
      _token: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
