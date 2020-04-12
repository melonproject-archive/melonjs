import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../../Contract';

/**
 * `PriceTolerance` contract
 */
export class PriceTolerance extends Contract {
  public readonly ethers: PriceToleranceEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `PriceTolerance` contract call for `MAKE_ORDER` function.
   *
   * ```solidity
   * function MAKE_ORDER() view returns (bytes4)
   * ```
   */
  MAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PriceTolerance` contract call for `TAKE_ORDER` function.
   *
   * ```solidity
   * function TAKE_ORDER() view returns (bytes4)
   * ```
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PriceTolerance` contract call for `identifier` function.
   *
   * ```solidity
   * function identifier() pure returns (string)
   * ```
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `PriceTolerance` contract call for `makeOrder` function.
   *
   * ```solidity
   * function makeOrder(address[5],uint256[3],bytes32) view returns (bool)
   * ```
   */
  makeOrder: (
    _addresses: [string, string, string, string, string],
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    _identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `PriceTolerance` contract call for `position` function.
   *
   * ```solidity
   * function position() pure returns (uint8)
   * ```
   */
  position: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `PriceTolerance` contract call for `takeGenericOrder` function.
   *
   * ```solidity
   * function takeGenericOrder(address,address,uint256[3]) view returns (bool)
   * ```
   */
  takeGenericOrder: (
    _makerAsset: string,
    _takerAsset: string,
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `PriceTolerance` contract call for `takeOasisDex` function.
   *
   * ```solidity
   * function takeOasisDex(address,bytes32,uint256) view returns (bool)
   * ```
   */
  takeOasisDex: (
    _exchange: string,
    _identifier: string | ethers.utils.BytesLike,
    _fillTakerQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `PriceTolerance` contract call for `takeOrder` function.
   *
   * ```solidity
   * function takeOrder(address[5],uint256[3],bytes32) view returns (bool)
   * ```
   */
  takeOrder: (
    _addresses: [string, string, string, string, string],
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    _identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `PriceTolerance` contract call for `tolerance` function.
   *
   * ```solidity
   * function tolerance() view returns (uint256)
   * ```
   */
  tolerance: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `PriceTolerance` contract call for `rule` function.
   *
   * ```solidity
   * function rule(bytes4,address[5],uint256[3],bytes32) returns (bool)
   * ```
   */
  rule: (
    _sig: string | ethers.utils.BytesLike,
    _addresses: [string, string, string, string, string],
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    _identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
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
}

export interface PriceToleranceEthersContract extends ethers.Contract {
  'MAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'makeOrder(address[5],uint256[3],bytes32)': (
    _addresses: [string, string, string, string, string],
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    _identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'takeGenericOrder(address,address,uint256[3])': (
    _makerAsset: string,
    _takerAsset: string,
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'takeOasisDex(address,bytes32,uint256)': (
    _exchange: string,
    _identifier: string | ethers.utils.BytesLike,
    _fillTakerQuantity: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'takeOrder(address[5],uint256[3],bytes32)': (
    _addresses: [string, string, string, string, string],
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    _identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'tolerance()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'rule(bytes4,address[5],uint256[3],bytes32)': (
    _sig: string | ethers.utils.BytesLike,
    _addresses: [string, string, string, string, string],
    _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    _identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'MAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'makeOrder(address[5],uint256[3],bytes32)': (
      _addresses: [string, string, string, string, string],
      _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      _identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'takeGenericOrder(address,address,uint256[3])': (
      _makerAsset: string,
      _takerAsset: string,
      _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'takeOasisDex(address,bytes32,uint256)': (
      _exchange: string,
      _identifier: string | ethers.utils.BytesLike,
      _fillTakerQuantity: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'takeOrder(address[5],uint256[3],bytes32)': (
      _addresses: [string, string, string, string, string],
      _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      _identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'tolerance()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      _sig: string | ethers.utils.BytesLike,
      _addresses: [string, string, string, string, string],
      _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      _identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'MAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'makeOrder(address[5],uint256[3],bytes32)': (
      _addresses: [string, string, string, string, string],
      _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      _identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'takeGenericOrder(address,address,uint256[3])': (
      _makerAsset: string,
      _takerAsset: string,
      _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'takeOasisDex(address,bytes32,uint256)': (
      _exchange: string,
      _identifier: string | ethers.utils.BytesLike,
      _fillTakerQuantity: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'takeOrder(address[5],uint256[3],bytes32)': (
      _addresses: [string, string, string, string, string],
      _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      _identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'tolerance()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      _sig: string | ethers.utils.BytesLike,
      _addresses: [string, string, string, string, string],
      _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      _identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
  };

  estimateGas: {
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      _sig: string | ethers.utils.BytesLike,
      _addresses: [string, string, string, string, string],
      _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      _identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      _sig: string | ethers.utils.BytesLike,
      _addresses: [string, string, string, string, string],
      _values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      _identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
