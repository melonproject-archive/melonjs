import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IPolicy extends Contract {
  public readonly ethers: IPolicyEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IPolicy` contract call for the `identifier` function.
   *
   * @contract IPolicy
   * @signature identifier()
   * @method function identifier() view returns (string)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IPolicy` contract call for the `position` function.
   *
   * @contract IPolicy
   * @signature position()
   * @method function position() view returns (uint8)
   */
  position: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `IPolicy` contract transaction for `rule` function.
   *
   * @contract IPolicy
   * @signature rule(bytes4,address[5],uint256[3],bytes32)
   * @method function rule(bytes4,address[5],uint256[3],bytes32) returns (bool)
   */
  rule: (
    $$0: string | ethers.utils.BytesLike,
    $$1: [string, string, string, string, string],
    $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    $$3: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function identifier() view returns (string)',
    'function position() view returns (uint8)',
    'function rule(bytes4, address[5], uint256[3], bytes32) returns (bool)',
  ];
}

export interface IPolicyEthersContract extends ethers.Contract {
  'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
  'rule(bytes4,address[5],uint256[3],bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$1: [string, string, string, string, string],
    $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    $$3: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'identifier()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'position()': ($$overrides?: ethers.CallOverrides) => Promise<number>;
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
  };

  estimateGas: {
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'rule(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
