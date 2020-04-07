import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class SharesToken extends Contract {
  public readonly ethers: SharesTokenEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `SharesToken` contract call for the `allowance` function.
   *
   * @contract SharesToken
   * @signature allowance(address,address)
   * @method function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `SharesToken` contract call for the `authority` function.
   *
   * @contract SharesToken
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `SharesToken` contract call for the `balanceOf` function.
   *
   * @contract SharesToken
   * @signature balanceOf(address)
   * @method function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `SharesToken` contract call for the `decimals` function.
   *
   * @contract SharesToken
   * @signature decimals()
   * @method function decimals() view returns (uint8)
   */
  decimals: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `SharesToken` contract call for the `name` function.
   *
   * @contract SharesToken
   * @signature name()
   * @method function name() view returns (string)
   */
  name: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `SharesToken` contract call for the `owner` function.
   *
   * @contract SharesToken
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `SharesToken` contract call for the `symbol` function.
   *
   * @contract SharesToken
   * @signature symbol()
   * @method function symbol() view returns (string)
   */
  symbol: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `SharesToken` contract call for the `totalSupply` function.
   *
   * @contract SharesToken
   * @signature totalSupply()
   * @method function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `SharesToken` contract transaction for `approve` function.
   *
   * @contract SharesToken
   * @signature approve(address,uint256)
   * @method function approve(address,uint256) returns (bool)
   */
  approve: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `SharesToken` contract transaction for `createFor` function.
   *
   * @contract SharesToken
   * @signature createFor(address,uint256)
   * @method function createFor(address,uint256)
   */
  createFor: (who: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `SharesToken` contract transaction for `decreaseApproval` function.
   *
   * @contract SharesToken
   * @signature decreaseApproval(address,uint256)
   * @method function decreaseApproval(address,uint256) returns (bool)
   */
  decreaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `SharesToken` contract transaction for `increaseApproval` function.
   *
   * @contract SharesToken
   * @signature increaseApproval(address,uint256)
   * @method function increaseApproval(address,uint256) returns (bool)
   */
  increaseApproval: (spender: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `SharesToken` contract transaction for `setAuthority` function.
   *
   * @contract SharesToken
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `SharesToken` contract transaction for `setOwner` function.
   *
   * @contract SharesToken
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `SharesToken` contract transaction for `transfer` function.
   *
   * @contract SharesToken
   * @signature transfer(address,uint256)
   * @method function transfer(address,uint256) returns (bool)
   */
  transfer: (to: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `SharesToken` contract transaction for `transferFrom` function.
   *
   * @contract SharesToken
   * @signature transferFrom(address,address,uint256)
   * @method function transferFrom(address,address,uint256) returns (bool)
   */
  transferFrom: (from: string, to: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(string _name)',
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
    'function increaseApproval(address spender, uint256 amount) returns (bool)',
    'function name() view returns (string)',
    'function owner() view returns (address)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address to, uint256 amount) returns (bool)',
    'function transferFrom(address from, address to, uint256 amount) returns (bool)',
  ];
}

export interface SharesTokenEthersContract extends ethers.Contract {
  'allowance(address,address)': (
    _owner: string,
    _spender: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'approve(address,uint256)': (
    spender: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'createFor(address,uint256)': (
    who: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'decreaseApproval(address,uint256)': (
    spender: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'increaseApproval(address,uint256)': (
    spender: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'transfer(address,uint256)': (
    to: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferFrom(address,address,uint256)': (
    from: string,
    to: string,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  callStatic: {
    'allowance(address,address)': (
      _owner: string,
      _spender: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'decimals()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'name()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'symbol()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'approve(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'createFor(address,uint256)': (
      who: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'decreaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'increaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'transfer(address,uint256)': (
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'transferFrom(address,address,uint256)': (
      from: string,
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
  };

  estimateGas: {
    'approve(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'createFor(address,uint256)': (
      who: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'decreaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'increaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'transfer(address,uint256)': (
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferFrom(address,address,uint256)': (
      from: string,
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'approve(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'createFor(address,uint256)': (
      who: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'decreaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'increaseApproval(address,uint256)': (
      spender: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'transfer(address,uint256)': (
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferFrom(address,address,uint256)': (
      from: string,
      to: string,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
