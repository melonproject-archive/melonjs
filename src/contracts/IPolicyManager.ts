import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IPolicyManager extends Contract {
  public readonly ethers: IPolicyManagerEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IPolicyManager` contract transaction for `postValidate` function.
   *
   * @contract IPolicyManager
   * @signature postValidate(bytes4,address[5],uint256[3],bytes32)
   * @method function postValidate(bytes4,address[5],uint256[3],bytes32)
   */
  postValidate: (
    $$0: string | ethers.utils.BytesLike,
    $$1: [string, string, string, string, string],
    $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    $$3: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IPolicyManager` contract transaction for `preValidate` function.
   *
   * @contract IPolicyManager
   * @signature preValidate(bytes4,address[5],uint256[3],bytes32)
   * @method function preValidate(bytes4,address[5],uint256[3],bytes32)
   */
  preValidate: (
    $$0: string | ethers.utils.BytesLike,
    $$1: [string, string, string, string, string],
    $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    $$3: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function postValidate(bytes4, address[5], uint256[3], bytes32)',
    'function preValidate(bytes4, address[5], uint256[3], bytes32)',
  ];
}

export interface IPolicyManagerEthersContract extends ethers.Contract {
  'postValidate(bytes4,address[5],uint256[3],bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$1: [string, string, string, string, string],
    $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    $$3: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'preValidate(bytes4,address[5],uint256[3],bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$1: [string, string, string, string, string],
    $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    $$3: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'postValidate(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'preValidate(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'postValidate(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'preValidate(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'postValidate(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'preValidate(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'postValidate(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'preValidate(bytes4,address[5],uint256[3],bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: [string, string, string, string, string],
      $$2: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
      $$3: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
