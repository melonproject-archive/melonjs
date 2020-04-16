import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../..';

/** @title Standard ERC20 token */
export class StandardTokenContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function approve(address _spender, uint256 _value) returns (bool)',
    'function balanceOf(address _owner) view returns (uint256)',
    'function decreaseApproval(address _spender, uint256 _subtractedValue) returns (bool)',
    'function increaseApproval(address _spender, uint256 _addedValue) returns (bool)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address _to, uint256 _value) returns (bool)',
    'function transferFrom(address _from, address _to, uint256 _value) returns (bool)',
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
   * Total number of tokens in existence
   *
   * ```solidity
   * function totalSupply() view returns (uint256)
   * ```
   *
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * Approve the passed address to spend the specified amount of tokens on behalf of msg.sender. Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
   *
   * ```solidity
   * function approve(address,uint256) returns (bool)
   * ```
   * @param _spender The address which will spend the funds.
   * @param _value The amount of tokens to be spent.
   */
  approve: (_spender: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * Decrease the amount of tokens that an owner allowed to a spender. approve should be called when allowed[_spender] == 0. To decrement allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol
   *
   * ```solidity
   * function decreaseApproval(address,uint256) returns (bool)
   * ```
   * @param _spender The address which will spend the funds.
   * @param _subtractedValue The amount of tokens to decrease the allowance by.
   */
  decreaseApproval: (_spender: string, _subtractedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * Increase the amount of tokens that an owner allowed to a spender. approve should be called when allowed[_spender] == 0. To increment allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol
   *
   * ```solidity
   * function increaseApproval(address,uint256) returns (bool)
   * ```
   * @param _addedValue The amount of tokens to increase the allowance by.
   * @param _spender The address which will spend the funds.
   */
  increaseApproval: (_spender: string, _addedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * Transfer token for a specified address
   *
   * ```solidity
   * function transfer(address,uint256) returns (bool)
   * ```
   * @param _to The address to transfer to.
   * @param _value The amount to be transferred.
   */
  transfer: (_to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
  /**
   * Transfer tokens from one address to another
   *
   * ```solidity
   * function transferFrom(address,address,uint256) returns (bool)
   * ```
   * @param _from address The address which you want to send tokens from
   * @param _to address The address which you want to transfer to
   * @param _value uint256 the amount of tokens to be transferred
   */
  transferFrom: (_from: string, _to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
}
