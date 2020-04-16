import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../..';

export class SharesContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(address _hub)',
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function authority() view returns (address)',
    'function balanceOf(address _owner) view returns (uint256)',
    'function createFor(address who, uint256 amount)',
    'function decimals() view returns (uint8)',
    'function decreaseApproval(address spender, uint256 amount) returns (bool)',
    'function destroyFor(address who, uint256 amount)',
    'function engine() view returns (address)',
    'function hub() view returns (address)',
    'function increaseApproval(address spender, uint256 amount) returns (bool)',
    'function initialize(address[11] _spokes)',
    'function initialized() view returns (bool)',
    'function mlnToken() view returns (address)',
    'function name() view returns (string)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address to, uint256 amount) returns (bool)',
    'function transferFrom(address from, address to, uint256 amount) returns (bool)',
    'function version() view returns (address)',
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
   * Function to check the amount of tokens that an owner allowed to a spender.
   *
   * ```solidity
   * function allowance(address,address) view returns (uint256)
   * ```
   * @param _owner address The address which owns the funds.
   * @param _spender address The address which will spend the funds.
   * @returns A uint256 specifying the amount of tokens still available for the spender.
   *
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * Gets the balance of the specified address.
   *
   * ```solidity
   * function balanceOf(address) view returns (uint256)
   * ```
   * @param _owner The address to query the the balance of.
   * @returns An uint256 representing the amount owned by the passed address.
   *
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function decimals() view returns (uint8)
   * ```
   *
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;
  /**
   * ```solidity
   * function engine() view returns (address)
   * ```
   *
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function hub() view returns (address)
   * ```
   *
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function initialized() view returns (bool)
   * ```
   *
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   *
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;
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
   * function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
   * ```
   *
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
   * ```solidity
   * function symbol() view returns (string)
   * ```
   *
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * Total number of tokens in existence
   *
   * ```solidity
   * function totalSupply() view returns (uint256)
   * ```
   *
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function version() view returns (address)
   * ```
   *
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function approve(address,uint256) returns (bool)
   * ```
   *
   */
  approve: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function createFor(address,uint256)
   * ```
   *
   */
  createFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function decreaseApproval(address,uint256) returns (bool)
   * ```
   *
   */
  decreaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function destroyFor(address,uint256)
   * ```
   *
   */
  destroyFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function increaseApproval(address,uint256) returns (bool)
   * ```
   *
   */
  increaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function initialize(address[11])
   * ```
   *
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
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
   * function transfer(address,uint256) returns (bool)
   * ```
   *
   */
  transfer: (to: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function transferFrom(address,address,uint256) returns (bool)
   * ```
   *
   */
  transferFrom: (from: string, to: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
}
