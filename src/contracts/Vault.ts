import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '..';

export class VaultContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
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
   * function TAKE_ORDER() view returns (bytes4)
   * ```
   *
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function adapterIsAdded(address) view returns (bool)
   * ```
   *
   */
  adapterIsAdded: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function exchanges(uint256) view returns (address, address)
   * ```
   *
   */
  exchanges: (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ exchange: string; adapter: string }>;
  /**
   * ```solidity
   * function fundFactory() view returns (address)
   * ```
   *
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function getExchangeInfo() view returns (address[], address[])
   * ```
   *
   */
  getExchangeInfo: ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
  /**
   * ```solidity
   * function getHub() view returns (address)
   * ```
   *
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
   * function addExchange(address,address)
   * ```
   *
   */
  addExchange: (_exchange: string, _adapter: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * Universal method for calling exchange functions through adaptersSee adapter contracts for parameters needed for each exchange
   *
   * ```solidity
   * function callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)
   * ```
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
   * function withdraw(address,uint256)
   * ```
   *
   */
  withdraw: (_token: string, _amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
}
