import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Shares extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Shares` contract call for the `allowance` function.
   *
   * @contract Shares
   * @signature function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Shares` contract call for the `authority` function.
   *
   * @contract Shares
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `balanceOf` function.
   *
   * @contract Shares
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Shares` contract call for the `decimals` function.
   *
   * @contract Shares
   * @signature function decimals() view returns (uint8)
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `Shares` contract call for the `engine` function.
   *
   * @contract Shares
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `hub` function.
   *
   * @contract Shares
   * @signature function hub() view returns (address)
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `initialized` function.
   *
   * @contract Shares
   * @signature function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Shares` contract call for the `mlnToken` function.
   *
   * @contract Shares
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `name` function.
   *
   * @contract Shares
   * @signature function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `owner` function.
   *
   * @contract Shares
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `priceSource` function.
   *
   * @contract Shares
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `registry` function.
   *
   * @contract Shares
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `routes` function.
   *
   * @contract Shares
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
   * `Shares` contract call for the `symbol` function.
   *
   * @contract Shares
   * @signature function symbol() view returns (string)
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract call for the `totalSupply` function.
   *
   * @contract Shares
   * @signature function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `Shares` contract call for the `version` function.
   *
   * @contract Shares
   * @signature function version() view returns (address)
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Shares` contract transaction for `approve` function.
   *
   * @contract Shares
   * @signature function approve(address,uint256) returns (bool)
   */
  approve: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `createFor` function.
   *
   * @contract Shares
   * @signature function createFor(address,uint256)
   */
  createFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `decreaseApproval` function.
   *
   * @contract Shares
   * @signature function decreaseApproval(address,uint256) returns (bool)
   */
  decreaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `destroyFor` function.
   *
   * @contract Shares
   * @signature function destroyFor(address,uint256)
   */
  destroyFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `increaseApproval` function.
   *
   * @contract Shares
   * @signature function increaseApproval(address,uint256) returns (bool)
   */
  increaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `initialize` function.
   *
   * @contract Shares
   * @signature function initialize(address[11])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `setAuthority` function.
   *
   * @contract Shares
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `setOwner` function.
   *
   * @contract Shares
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `transfer` function.
   *
   * @contract Shares
   * @signature function transfer(address,uint256) returns (bool)
   */
  transfer: (to: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Shares` contract transaction for `transferFrom` function.
   *
   * @contract Shares
   * @signature function transferFrom(address,address,uint256) returns (bool)
   */
  transferFrom: (from: string, to: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
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
}
