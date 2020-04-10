import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

/**
 * `Vault` contract
 */
export class Vault extends Contract {
  public readonly ethers: VaultEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Vault` contract call for `TAKE_ORDER` function.
   *
   * ```solidity
   * function TAKE_ORDER() view returns (bytes4)
   * ```
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for `adapterIsAdded` function.
   *
   * ```solidity
   * function adapterIsAdded(address) view returns (bool)
   * ```
   */
  adapterIsAdded: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Vault` contract call for `authority` function.
   *
   * ```solidity
   * function authority() view returns (address)
   * ```
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for `exchanges` function.
   *
   * ```solidity
   * function exchanges(uint256) view returns (address, address)
   * ```
   */
  exchanges: (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exchange: string; adapter: string }>;

  /**
   * `Vault` contract call for `fundFactory` function.
   *
   * ```solidity
   * function fundFactory() view returns (address)
   * ```
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for `getExchangeInfo` function.
   *
   * ```solidity
   * function getExchangeInfo() view returns (address[], address[])
   * ```
   */
  getExchangeInfo: ($$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `Vault` contract call for `getHub` function.
   *
   * ```solidity
   * function getHub() view returns (address)
   * ```
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for `getRoutes` function.
   *
   * ```solidity
   * function getRoutes() view returns (tuple(address,address,address,address,address,address,address))
   * ```
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
   * `Vault` contract call for `initialized` function.
   *
   * ```solidity
   * function initialized() view returns (bool)
   * ```
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Vault` contract call for `owner` function.
   *
   * ```solidity
   * function owner() view returns (address)
   * ```
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for `priceSource` function.
   *
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for `addExchange` function.
   *
   * ```solidity
   * function addExchange(address,address)
   * ```
   */
  addExchange: (_exchange: string, _adapter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * Universal method for calling exchange functions through adaptersSee adapter contracts for parameters needed for each exchange
   *
   * ```solidity
   * function callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
   *
   * @param _exchangeIndex Index of the exchange in the "exchanges" array
   * @param _identifier Order identifier
   * @param _orderAddresses [7] taker fee asset
   * @param _orderData [3] Encoded data specific to taker asset fee
   * @param _orderValues [7] Dexy signature mode
   * @param _signature Signature of order maker
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
   * `Vault` contract call for `initialize` function.
   *
   * ```solidity
   * function initialize(address[7])
   * ```
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Vault` contract call for `setAuthority` function.
   *
   * ```solidity
   * function setAuthority(address)
   * ```
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Vault` contract call for `setOwner` function.
   *
   * ```solidity
   * function setOwner(address)
   * ```
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Vault` contract call for `withdraw` function.
   *
   * ```solidity
   * function withdraw(address,uint256)
   * ```
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
  ) => Promise<ethers.providers.TransactionResponse>;
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
  ) => Promise<ethers.providers.TransactionResponse>;
  'initialize(address[7])': (
    _spokes: [string, string, string, string, string, string, string],
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
  'withdraw(address,uint256)': (
    _token: string,
    _amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

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
    ) => Promise<ethers.providers.TransactionResponse>;
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
    ) => Promise<ethers.providers.TransactionResponse>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
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
    'withdraw(address,uint256)': (
      _token: string,
      _amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
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
