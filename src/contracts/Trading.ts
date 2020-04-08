import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Trading extends Contract {
  public readonly ethers: TradingEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Trading` contract call for the `TAKE_ORDER` function.
   *
   * @contract Trading
   * @signature TAKE_ORDER()
   * @method function TAKE_ORDER() view returns (bytes4)
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Trading` contract call for the `adapterIsAdded` function.
   *
   * @contract Trading
   * @signature adapterIsAdded(address)
   * @method function adapterIsAdded(address) view returns (bool)
   */
  adapterIsAdded: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Trading` contract call for the `authority` function.
   *
   * @contract Trading
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Trading` contract call for the `exchanges` function.
   *
   * @contract Trading
   * @signature exchanges(uint256)
   * @method function exchanges(uint256) view returns (address, address)
   */
  exchanges: (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exchange: string; adapter: string }>;

  /**
   * `Trading` contract call for the `getExchangeInfo` function.
   *
   * @contract Trading
   * @signature getExchangeInfo()
   * @method function getExchangeInfo() view returns (address[], address[])
   */
  getExchangeInfo: ($$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `Trading` contract call for the `owner` function.
   *
   * @contract Trading
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Trading` contract transaction for `addExchange` function.
   *
   * @contract Trading
   * @signature addExchange(address,address)
   * @method function addExchange(address,address)
   */
  addExchange: (_exchange: string, _adapter: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Trading` contract transaction for `callOnExchange` function.
   *
   * @contract Trading
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
   * `Trading` contract transaction for `setAuthority` function.
   *
   * @contract Trading
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Trading` contract transaction for `setOwner` function.
   *
   * @contract Trading
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address[] _exchanges, address[] _adapters, address _registry)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function TAKE_ORDER() view returns (bytes4)',
    'function adapterIsAdded(address) view returns (bool)',
    'function addExchange(address _exchange, address _adapter)',
    'function authority() view returns (address)',
    'function callOnExchange(uint256 _exchangeIndex, string _methodSignature, address[8] _orderAddresses, uint256[8] _orderValues, bytes[4] _orderData, bytes32 _identifier, bytes _signature)',
    'function exchanges(uint256) view returns (address exchange, address adapter)',
    'function getExchangeInfo() view returns (address[], address[])',
    'function owner() view returns (address)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
  ];
}

export interface TradingEthersContract extends ethers.Contract {
  'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'adapterIsAdded(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'exchanges(uint256)': (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exchange: string; adapter: string }>;
  'getExchangeInfo()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  functions: {
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'adapterIsAdded(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchanges(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exchange: string; adapter: string }>;
    'getExchangeInfo()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'adapterIsAdded(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'exchanges(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ exchange: string; adapter: string }>;
    'getExchangeInfo()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
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
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
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
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
