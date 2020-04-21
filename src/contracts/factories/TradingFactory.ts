import { ethers } from 'ethers';
import { Contract, TransactionWrapper, DeploymentTransactionWrapper, AddressLike } from './../..';

export class TradingFactory extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'event NewInstance(address indexed hub, address indexed instance, address[] exchanges, address[] adapters, address registry)',
    'event NewInstance(address indexed hub, address indexed instance)',
    'function childExists(address) view returns (bool)',
    'function createInstance(address _hub, address[] _exchanges, address[] _adapters, address _registry) returns (address)',
    'function isInstance(address _child) view returns (bool)',
  ];

  /**
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(bytecode: string, signer: ethers.Signer) {
    return new DeploymentTransactionWrapper(this, bytecode, signer);
  }

  /**
   * ```solidity
   * function childExists(address) view returns (bool)
   * ```
   *
   */
  childExists: ($$0: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function isInstance(address) view returns (bool)
   * ```
   *
   */
  isInstance: (_child: AddressLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function createInstance(address,address[],address[],address) returns (address)
   * ```
   *
   */
  createInstance: (
    _hub: AddressLike,
    _exchanges: AddressLike[],
    _adapters: AddressLike[],
    _registry: AddressLike,
  ) => TransactionWrapper<ethers.Overrides>;
}
