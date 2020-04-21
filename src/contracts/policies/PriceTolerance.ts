import { ethers } from 'ethers';
import { Contract, TransactionWrapper, DeploymentTransactionWrapper, AddressLike } from './../..';

export class PriceTolerance extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(uint256 _tolerancePercent)',
    'function MAKE_ORDER() view returns (bytes4)',
    'function TAKE_ORDER() view returns (bytes4)',
    'function identifier() pure returns (string)',
    'function makeOrder(address[5] _addresses, uint256[3] _values, bytes32 _identifier) view returns (bool)',
    'function position() pure returns (uint8)',
    'function rule(bytes4 _sig, address[5] _addresses, uint256[3] _values, bytes32 _identifier) returns (bool)',
    'function takeGenericOrder(address _makerAsset, address _takerAsset, uint256[3] _values) view returns (bool)',
    'function takeOasisDex(address _exchange, bytes32 _identifier, uint256 _fillTakerQuantity) view returns (bool)',
    'function takeOrder(address[5] _addresses, uint256[3] _values, bytes32 _identifier) view returns (bool)',
    'function tolerance() view returns (uint256)',
  ];

  /**
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(bytecode: string, signer: ethers.Signer, _tolerancePercent: ethers.BigNumber) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [_tolerancePercent]);
  }

  /**
   * ```solidity
   * function MAKE_ORDER() view returns (bytes4)
   * ```
   *
   */
  MAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function TAKE_ORDER() view returns (bytes4)
   * ```
   *
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function identifier() pure returns (string)
   * ```
   *
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function makeOrder(address[5],uint256[3],bytes32) view returns (bool)
   * ```
   *
   */
  makeOrder: (
    _addresses: [AddressLike, AddressLike, AddressLike, AddressLike, AddressLike],
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    _identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  /**
   * ```solidity
   * function position() pure returns (uint8)
   * ```
   *
   */
  position: ($$overrides?: ethers.CallOverrides) => Promise<number>;
  /**
   * ```solidity
   * function takeGenericOrder(address,address,uint256[3]) view returns (bool)
   * ```
   *
   */
  takeGenericOrder: (
    _makerAsset: AddressLike,
    _takerAsset: AddressLike,
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  /**
   * ```solidity
   * function takeOasisDex(address,bytes32,uint256) view returns (bool)
   * ```
   *
   */
  takeOasisDex: (
    _exchange: AddressLike,
    _identifier: string | ethers.utils.BytesLike,
    _fillTakerQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  /**
   * ```solidity
   * function takeOrder(address[5],uint256[3],bytes32) view returns (bool)
   * ```
   *
   */
  takeOrder: (
    _addresses: [AddressLike, AddressLike, AddressLike, AddressLike, AddressLike],
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    _identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  /**
   * ```solidity
   * function tolerance() view returns (uint256)
   * ```
   *
   */
  tolerance: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function rule(bytes4,address[5],uint256[3],bytes32) returns (bool)
   * ```
   *
   */
  rule: (
    _sig: string | ethers.utils.BytesLike,
    _addresses: [AddressLike, AddressLike, AddressLike, AddressLike, AddressLike],
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    _identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
}
