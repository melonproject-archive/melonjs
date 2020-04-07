import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class SharesFactory extends Contract {
  public readonly ethers: SharesFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `SharesFactory` contract call for the `childExists` function.
   *
   * @contract SharesFactory
   * @signature childExists(address)
   * @method function childExists(address) view returns (bool)
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `SharesFactory` contract call for the `isInstance` function.
   *
   * @contract SharesFactory
   * @signature isInstance(address)
   * @method function isInstance(address) view returns (bool)
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `SharesFactory` contract transaction for `createInstance` function.
   *
   * @contract SharesFactory
   * @signature createInstance(address,address[],address)
   * @method function createInstance(address,address[],address) returns (address)
   */
  createInstance: (_hub: string, _defaultAssets: string[], _registry: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event NewInstance(address indexed hub, address indexed instance, address[] defaultAssets, address registry)',
    'event NewInstance(address indexed hub, address indexed instance)',
    'function childExists(address) view returns (bool)',
    'function createInstance(address _hub, address[] _defaultAssets, address _registry) returns (address)',
    'function isInstance(address _child) view returns (bool)',
  ];
}

export interface SharesFactoryEthersContract extends ethers.Contract {
  'childExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isInstance(address)': (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'createInstance(address,address[],address)': (
    _hub: string,
    _defaultAssets: string[],
    _registry: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  callStatic: {
    'childExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isInstance(address)': (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'createInstance(address,address[],address)': (
      _hub: string,
      _defaultAssets: string[],
      _registry: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<string>;
  };

  estimateGas: {
    'createInstance(address,address[],address)': (
      _hub: string,
      _defaultAssets: string[],
      _registry: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'createInstance(address,address[],address)': (
      _hub: string,
      _defaultAssets: string[],
      _registry: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
