import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class FeeManagerFactory extends Contract {
  public readonly ethers: FeeManagerFactoryEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `FeeManagerFactory` contract call for the `childExists` function.
   *
   * @contract FeeManagerFactory
   * @signature childExists(address)
   * @method function childExists(address) view returns (bool)
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `FeeManagerFactory` contract call for the `isInstance` function.
   *
   * @contract FeeManagerFactory
   * @signature isInstance(address)
   * @method function isInstance(address) view returns (bool)
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `FeeManagerFactory` contract transaction for `createInstance` function.
   *
   * @contract FeeManagerFactory
   * @signature createInstance(address,address,address[],uint256[],uint256[],address)
   * @method function createInstance(address,address,address[],uint256[],uint256[],address) returns (address)
   */
  createInstance: (
    _hub: string,
    _denominationAsset: string,
    _fees: string[],
    _feeRates: ethers.BigNumber[],
    _feePeriods: ethers.BigNumber[],
    _registry: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event NewInstance(address indexed hub, address indexed instance)',
    'function childExists(address) view returns (bool)',
    'function createInstance(address _hub, address _denominationAsset, address[] _fees, uint256[] _feeRates, uint256[] _feePeriods, address _registry) returns (address)',
    'function isInstance(address _child) view returns (bool)',
  ];
}

export interface FeeManagerFactoryEthersContract extends ethers.Contract {
  'childExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isInstance(address)': (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'createInstance(address,address,address[],uint256[],uint256[],address)': (
    _hub: string,
    _denominationAsset: string,
    _fees: string[],
    _feeRates: ethers.BigNumber[],
    _feePeriods: ethers.BigNumber[],
    _registry: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'childExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isInstance(address)': (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'createInstance(address,address,address[],uint256[],uint256[],address)': (
      _hub: string,
      _denominationAsset: string,
      _fees: string[],
      _feeRates: ethers.BigNumber[],
      _feePeriods: ethers.BigNumber[],
      _registry: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'childExists(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isInstance(address)': (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'createInstance(address,address,address[],uint256[],uint256[],address)': (
      _hub: string,
      _denominationAsset: string,
      _fees: string[],
      _feeRates: ethers.BigNumber[],
      _feePeriods: ethers.BigNumber[],
      _registry: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<string>;
  };

  estimateGas: {
    'createInstance(address,address,address[],uint256[],uint256[],address)': (
      _hub: string,
      _denominationAsset: string,
      _fees: string[],
      _feeRates: ethers.BigNumber[],
      _feePeriods: ethers.BigNumber[],
      _registry: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'createInstance(address,address,address[],uint256[],uint256[],address)': (
      _hub: string,
      _denominationAsset: string,
      _fees: string[],
      _feeRates: ethers.BigNumber[],
      _feePeriods: ethers.BigNumber[],
      _registry: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
