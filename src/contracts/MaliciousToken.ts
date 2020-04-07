import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MaliciousToken extends Contract {
  public readonly ethers: MaliciousTokenEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MaliciousToken` contract call for the `allowance` function.
   *
   * @contract MaliciousToken
   * @signature allowance(address,address)
   * @method function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MaliciousToken` contract call for the `balanceOf` function.
   *
   * @contract MaliciousToken
   * @signature balanceOf(address)
   * @method function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MaliciousToken` contract call for the `decimals` function.
   *
   * @contract MaliciousToken
   * @signature decimals()
   * @method function decimals() view returns (uint8)
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `MaliciousToken` contract call for the `isReverting` function.
   *
   * @contract MaliciousToken
   * @signature isReverting()
   * @method function isReverting() view returns (bool)
   */
  isReverting: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MaliciousToken` contract call for the `name` function.
   *
   * @contract MaliciousToken
   * @signature name()
   * @method function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MaliciousToken` contract call for the `symbol` function.
   *
   * @contract MaliciousToken
   * @signature symbol()
   * @method function symbol() view returns (string)
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MaliciousToken` contract call for the `totalSupply` function.
   *
   * @contract MaliciousToken
   * @signature totalSupply()
   * @method function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MaliciousToken` contract transaction for `approve` function.
   *
   * @contract MaliciousToken
   * @signature approve(address,uint256)
   * @method function approve(address,uint256) returns (bool)
   */
  approve: (_spender: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MaliciousToken` contract transaction for `decreaseApproval` function.
   *
   * @contract MaliciousToken
   * @signature decreaseApproval(address,uint256)
   * @method function decreaseApproval(address,uint256) returns (bool)
   */
  decreaseApproval: (_spender: string, _subtractedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MaliciousToken` contract transaction for `increaseApproval` function.
   *
   * @contract MaliciousToken
   * @signature increaseApproval(address,uint256)
   * @method function increaseApproval(address,uint256) returns (bool)
   */
  increaseApproval: (_spender: string, _addedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MaliciousToken` contract transaction for `startReverting` function.
   *
   * @contract MaliciousToken
   * @signature startReverting()
   * @method function startReverting()
   */
  startReverting: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MaliciousToken` contract transaction for `transfer` function.
   *
   * @contract MaliciousToken
   * @signature transfer(address,uint256)
   * @method function transfer(address,uint256) returns (bool)
   */
  transfer: (_to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MaliciousToken` contract transaction for `transferFrom` function.
   *
   * @contract MaliciousToken
   * @signature transferFrom(address,address,uint256)
   * @method function transferFrom(address,address,uint256) returns (bool)
   */
  transferFrom: (_from: string, _to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(string _symbol, uint8 _decimals, string _name)',
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function approve(address _spender, uint256 _value) returns (bool)',
    'function balanceOf(address _owner) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function decreaseApproval(address _spender, uint256 _subtractedValue) returns (bool)',
    'function increaseApproval(address _spender, uint256 _addedValue) returns (bool)',
    'function isReverting() view returns (bool)',
    'function name() view returns (string)',
    'function startReverting()',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address _to, uint256 _value) returns (bool)',
    'function transferFrom(address _from, address _to, uint256 _value) returns (bool)',
  ];
}

export interface MaliciousTokenEthersContract extends ethers.Contract {
  'allowance(address,address)': (
    _owner: string,
    _spender: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'isReverting()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'approve(address,uint256)': (
    _spender: string,
    _value: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'decreaseApproval(address,uint256)': (
    _spender: string,
    _subtractedValue: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'increaseApproval(address,uint256)': (
    _spender: string,
    _addedValue: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'startReverting()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'transfer(address,uint256)': (
    _to: string,
    _value: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferFrom(address,address,uint256)': (
    _from: string,
    _to: string,
    _value: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  callStatic: {
    'allowance(address,address)': (
      _owner: string,
      _spender: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'isReverting()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'approve(address,uint256)': (
      _spender: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'decreaseApproval(address,uint256)': (
      _spender: string,
      _subtractedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'increaseApproval(address,uint256)': (
      _spender: string,
      _addedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'startReverting()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'transfer(address,uint256)': (
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'transferFrom(address,address,uint256)': (
      _from: string,
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
  };

  estimateGas: {
    'approve(address,uint256)': (
      _spender: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'decreaseApproval(address,uint256)': (
      _spender: string,
      _subtractedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'increaseApproval(address,uint256)': (
      _spender: string,
      _addedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'startReverting()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'transfer(address,uint256)': (
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferFrom(address,address,uint256)': (
      _from: string,
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'approve(address,uint256)': (
      _spender: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'decreaseApproval(address,uint256)': (
      _spender: string,
      _subtractedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'increaseApproval(address,uint256)': (
      _spender: string,
      _addedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'startReverting()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'transfer(address,uint256)': (
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferFrom(address,address,uint256)': (
      _from: string,
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
