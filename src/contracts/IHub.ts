import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IHub extends Contract {
  public readonly ethers: IHubEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IHub` contract call for the `accounting` function.
   *
   * @contract IHub
   * @signature accounting()
   * @method function accounting() view returns (address)
   */
  accounting: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IHub` contract call for the `feeManager` function.
   *
   * @contract IHub
   * @signature feeManager()
   * @method function feeManager() view returns (address)
   */
  feeManager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IHub` contract call for the `fundInitialized` function.
   *
   * @contract IHub
   * @signature fundInitialized()
   * @method function fundInitialized() view returns (bool)
   */
  fundInitialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IHub` contract call for the `getName` function.
   *
   * @contract IHub
   * @signature getName()
   * @method function getName() view returns (string)
   */
  getName: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IHub` contract call for the `isShutDown` function.
   *
   * @contract IHub
   * @signature isShutDown()
   * @method function isShutDown() view returns (bool)
   */
  isShutDown: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IHub` contract call for the `isSpoke` function.
   *
   * @contract IHub
   * @signature isSpoke(address)
   * @method function isSpoke(address) view returns (bool)
   */
  isSpoke: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IHub` contract call for the `manager` function.
   *
   * @contract IHub
   * @signature manager()
   * @method function manager() view returns (address)
   */
  manager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IHub` contract call for the `policyManager` function.
   *
   * @contract IHub
   * @signature policyManager()
   * @method function policyManager() view returns (address)
   */
  policyManager: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IHub` contract call for the `shares` function.
   *
   * @contract IHub
   * @signature shares()
   * @method function shares() view returns (address)
   */
  shares: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  static abi: string[] = [
    'function accounting() view returns (address)',
    'function feeManager() view returns (address)',
    'function fundInitialized() view returns (bool)',
    'function getName() view returns (string)',
    'function isShutDown() view returns (bool)',
    'function isSpoke(address) view returns (bool)',
    'function manager() view returns (address)',
    'function policyManager() view returns (address)',
    'function shares() view returns (address)',
  ];
}

export interface IHubEthersContract extends ethers.Contract {
  'accounting()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'feeManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'fundInitialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isSpoke(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'manager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'policyManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'shares()': ($$overrides?: ethers.CallOverrides) => Promise<string>;

  functions: {
    'accounting()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'feeManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundInitialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isSpoke(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'manager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'policyManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'shares()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  };

  callStatic: {
    'accounting()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'feeManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'fundInitialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'getName()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isSpoke(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'manager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'policyManager()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'shares()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  };

  estimateGas: {};

  populateTransaction: {};
}
