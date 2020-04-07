import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MaxPositions extends Contract {
  public readonly ethers: MaxPositionsEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MaxPositions` contract call for the `TAKE_ORDER` function.
   *
   * @contract MaxPositions
   * @signature TAKE_ORDER()
   * @method function TAKE_ORDER() view returns (bytes4)
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MaxPositions` contract call for the `identifier` function.
   *
   * @contract MaxPositions
   * @signature identifier()
   * @method function identifier() pure returns (string)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MaxPositions` contract call for the `maxPositions` function.
   *
   * @contract MaxPositions
   * @signature maxPositions()
   * @method function maxPositions() view returns (uint256)
   */
  maxPositions: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MaxPositions` contract call for the `position` function.
   *
   * @contract MaxPositions
   * @signature position()
   * @method function position() pure returns (uint8)
   */
  position: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `MaxPositions` contract transaction for `rule` function.
   *
   * @contract MaxPositions
   * @signature rule(bytes4,address[5],uint256[3],bytes32)
   * @method function rule(bytes4,address[5],uint256[3],bytes32) returns (bool)
   */
  rule: (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(uint256 _maxPositions)',
    'function TAKE_ORDER() view returns (bytes4)',
    'function identifier() pure returns (string)',
    'function maxPositions() view returns (uint256)',
    'function position() pure returns (uint8)',
    'function rule(bytes4 sig, address[5] addresses, uint256[3] values, bytes32 identifier) returns (bool)',
  ];
}

export interface MaxPositionsEthersContract extends ethers.Contract {
  'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'maxPositions()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'rule(bytes4,address[5],uint256[3],bytes32)': (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  callStatic: {
    'TAKE_ORDER()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'maxPositions()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
  };

  estimateGas: {
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      sig: string | ethers.utils.BytesLike,
      addresses: [string, string, string, string, string],
      values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      identifier: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
