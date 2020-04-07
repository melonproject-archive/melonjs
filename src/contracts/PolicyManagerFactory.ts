import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class PolicyManagerFactory extends Contract {
  public readonly ethers: PolicyManagerFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `PolicyManagerFactory` contract call for the `childExists` function.
   *
   * @contract PolicyManagerFactory
   * @signature childExists(address)
   * @method function childExists(address) view returns (bool)
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `PolicyManagerFactory` contract call for the `isInstance` function.
   *
   * @contract PolicyManagerFactory
   * @signature isInstance(address)
   * @method function isInstance(address) view returns (bool)
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `PolicyManagerFactory` contract transaction for `createInstance` function.
   *
   * @contract PolicyManagerFactory
   * @signature createInstance(address)
   * @method function createInstance(address) returns (address)
   */
  createInstance: (_hub: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event NewInstance(address indexed hub, address indexed instance)',
    'function childExists(address) view returns (bool)',
    'function createInstance(address _hub) returns (address)',
    'function isInstance(address _child) view returns (bool)',
  ];
}

export interface PolicyManagerFactoryEthersContract extends ethers.Contract {
  'childExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isInstance(address)': (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'createInstance(address)': (_hub: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'childExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isInstance(address)': (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'createInstance(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<string>;
  };

  estimateGas: {
    'createInstance(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'createInstance(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
