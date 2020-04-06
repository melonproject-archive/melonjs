import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockShares extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockShares` contract call for the `allowance` function.
   *
   * @contract MockShares
   * @signature function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockShares` contract call for the `authority` function.
   *
   * @contract MockShares
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockShares` contract call for the `balanceOf` function.
   *
   * @contract MockShares
   * @signature function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockShares` contract call for the `decimals` function.
   *
   * @contract MockShares
   * @signature function decimals() view returns (uint8)
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `MockShares` contract call for the `engine` function.
   *
   * @contract MockShares
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockShares` contract call for the `hub` function.
   *
   * @contract MockShares
   * @signature function hub() view returns (address)
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockShares` contract call for the `initialized` function.
   *
   * @contract MockShares
   * @signature function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockShares` contract call for the `mlnToken` function.
   *
   * @contract MockShares
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockShares` contract call for the `name` function.
   *
   * @contract MockShares
   * @signature function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockShares` contract call for the `owner` function.
   *
   * @contract MockShares
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockShares` contract call for the `priceSource` function.
   *
   * @contract MockShares
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockShares` contract call for the `registry` function.
   *
   * @contract MockShares
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockShares` contract call for the `routes` function.
   *
   * @contract MockShares
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
   * `MockShares` contract call for the `symbol` function.
   *
   * @contract MockShares
   * @signature function symbol() view returns (string)
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockShares` contract call for the `totalSupply` function.
   *
   * @contract MockShares
   * @signature function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockShares` contract call for the `version` function.
   *
   * @contract MockShares
   * @signature function version() view returns (address)
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockShares` contract transaction for `approve` function.
   *
   * @contract MockShares
   * @signature function approve(address,uint256) returns (bool)
   */
  approve: (_spender: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockShares` contract transaction for `createFor` function.
   *
   * @contract MockShares
   * @signature function createFor(address,uint256)
   */
  createFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockShares` contract transaction for `decreaseApproval` function.
   *
   * @contract MockShares
   * @signature function decreaseApproval(address,uint256) returns (bool)
   */
  decreaseApproval: (_spender: string, _subtractedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockShares` contract transaction for `destroyFor` function.
   *
   * @contract MockShares
   * @signature function destroyFor(address,uint256)
   */
  destroyFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockShares` contract transaction for `increaseApproval` function.
   *
   * @contract MockShares
   * @signature function increaseApproval(address,uint256) returns (bool)
   */
  increaseApproval: (_spender: string, _addedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockShares` contract transaction for `initialize` function.
   *
   * @contract MockShares
   * @signature function initialize(address[11])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockShares` contract transaction for `setAuthority` function.
   *
   * @contract MockShares
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockShares` contract transaction for `setBalanceFor` function.
   *
   * @contract MockShares
   * @signature function setBalanceFor(address,uint256)
   */
  setBalanceFor: (who: string, newBalance: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockShares` contract transaction for `setOwner` function.
   *
   * @contract MockShares
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockShares` contract transaction for `transfer` function.
   *
   * @contract MockShares
   * @signature function transfer(address,uint256) returns (bool)
   */
  transfer: (_to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockShares` contract transaction for `transferFrom` function.
   *
   * @contract MockShares
   * @signature function transferFrom(address,address,uint256) returns (bool)
   */
  transferFrom: (_from: string, _to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub)',
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function approve(address _spender, uint256 _value) returns (bool)',
    'function authority() view returns (address)',
    'function balanceOf(address _owner) view returns (uint256)',
    'function createFor(address who, uint256 amount)',
    'function decimals() view returns (uint8)',
    'function decreaseApproval(address _spender, uint256 _subtractedValue) returns (bool)',
    'function destroyFor(address who, uint256 amount)',
    'function engine() view returns (address)',
    'function hub() view returns (address)',
    'function increaseApproval(address _spender, uint256 _addedValue) returns (bool)',
    'function initialize(address[11] _spokes)',
    'function initialized() view returns (bool)',
    'function mlnToken() view returns (address)',
    'function name() view returns (string)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setBalanceFor(address who, uint256 newBalance)',
    'function setOwner(address owner_)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address _to, uint256 _value) returns (bool)',
    'function transferFrom(address _from, address _to, uint256 _value) returns (bool)',
    'function version() view returns (address)',
  ];
}
