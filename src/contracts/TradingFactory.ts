import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class TradingFactory extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `TradingFactory` contract call for the `childExists` function.
   *
   * @contract TradingFactory
   * @signature function childExists(address) view returns (bool)
   */
  childExists: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `TradingFactory` contract call for the `isInstance` function.
   *
   * @contract TradingFactory
   * @signature function isInstance(address) view returns (bool)
   */
  isInstance: (_child: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `TradingFactory` contract transaction for `createInstance` function.
   *
   * @contract TradingFactory
   * @signature function createInstance(address,address[],address[],address) returns (address)
   */
  createInstance: (
    _hub: string,
    _exchanges: string[],
    _adapters: string[],
    _registry: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event NewInstance(address indexed hub, address indexed instance, address[] exchanges, address[] adapters, address registry)',
    'event NewInstance(address indexed hub, address indexed instance)',
    'function childExists(address) view returns (bool)',
    'function createInstance(address _hub, address[] _exchanges, address[] _adapters, address _registry) returns (address)',
    'function isInstance(address _child) view returns (bool)',
  ];
}
