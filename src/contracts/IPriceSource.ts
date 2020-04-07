import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IPriceSource extends Contract {
  public readonly ethers: IPriceSourceEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IPriceSource` contract call for the `convertQuantity` function.
   *
   * @contract IPriceSource
   * @signature convertQuantity(uint256,address,address)
   * @method function convertQuantity(uint256,address,address) view returns (uint256)
   */
  convertQuantity: (
    $$0: ethers.BigNumberish,
    $$1: string,
    $$2: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `IPriceSource` contract call for the `getOrderPriceInfo` function.
   *
   * @contract IPriceSource
   * @signature getOrderPriceInfo(address,uint256,uint256)
   * @method function getOrderPriceInfo(address,uint256,uint256) view returns (uint256)
   */
  getOrderPriceInfo: (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$2: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `IPriceSource` contract call for the `getPrice` function.
   *
   * @contract IPriceSource
   * @signature getPrice(address)
   * @method function getPrice(address) view returns (uint256, uint256)
   */
  getPrice: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `IPriceSource` contract call for the `getPrices` function.
   *
   * @contract IPriceSource
   * @signature getPrices(address[])
   * @method function getPrices(address[]) view returns (uint256[], uint256[])
   */
  getPrices: ($$0: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `IPriceSource` contract call for the `getReferencePriceInfo` function.
   *
   * @contract IPriceSource
   * @signature getReferencePriceInfo(address,address)
   * @method function getReferencePriceInfo(address,address) view returns (uint256, uint256)
   */
  getReferencePriceInfo: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `IPriceSource` contract call for the `hasValidPrice` function.
   *
   * @contract IPriceSource
   * @signature hasValidPrice(address)
   * @method function hasValidPrice(address) view returns (bool)
   */
  hasValidPrice: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IPriceSource` contract call for the `hasValidPrices` function.
   *
   * @contract IPriceSource
   * @signature hasValidPrices(address[])
   * @method function hasValidPrices(address[]) view returns (bool)
   */
  hasValidPrices: ($$0: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IPriceSource` contract call for the `lastUpdate` function.
   *
   * @contract IPriceSource
   * @signature lastUpdate()
   * @method function lastUpdate() view returns (uint256)
   */
  lastUpdate: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  static abi: string[] = [
    'function convertQuantity(uint256, address, address) view returns (uint256)',
    'function getOrderPriceInfo(address, uint256, uint256) view returns (uint256)',
    'function getPrice(address) view returns (uint256, uint256)',
    'function getPrices(address[]) view returns (uint256[], uint256[])',
    'function getReferencePriceInfo(address, address) view returns (uint256, uint256)',
    'function hasValidPrice(address) view returns (bool)',
    'function hasValidPrices(address[]) view returns (bool)',
    'function lastUpdate() view returns (uint256)',
  ];
}

export interface IPriceSourceEthersContract extends ethers.Contract {
  'convertQuantity(uint256,address,address)': (
    $$0: ethers.BigNumberish,
    $$1: string,
    $$2: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getOrderPriceInfo(address,uint256,uint256)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$2: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getPrice(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getPrices(address[])': ($$0: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getReferencePriceInfo(address,address)': (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;
  'hasValidPrice(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'hasValidPrices(address[])': ($$0: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'lastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  callStatic: {
    'convertQuantity(uint256,address,address)': (
      $$0: ethers.BigNumberish,
      $$1: string,
      $$2: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getOrderPriceInfo(address,uint256,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getPrice(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getPrices(address[])': ($$0: string[], $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getReferencePriceInfo(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<any[]>;
    'hasValidPrice(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'hasValidPrices(address[])': ($$0: string[], $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'lastUpdate()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  };

  estimateGas: {};

  populateTransaction: {};
}
