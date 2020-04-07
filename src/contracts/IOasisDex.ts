import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IOasisDex extends Contract {
  public readonly ethers: IOasisDexEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IOasisDex` contract call for the `getBestOffer` function.
   *
   * @contract IOasisDex
   * @signature getBestOffer(address,address)
   * @method function getBestOffer(address,address) view returns (uint256)
   */
  getBestOffer: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IOasisDex` contract call for the `getFirstUnsortedOffer` function.
   *
   * @contract IOasisDex
   * @signature getFirstUnsortedOffer()
   * @method function getFirstUnsortedOffer() view returns (uint256)
   */
  getFirstUnsortedOffer: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IOasisDex` contract call for the `getNextUnsortedOffer` function.
   *
   * @contract IOasisDex
   * @signature getNextUnsortedOffer(uint256)
   * @method function getNextUnsortedOffer(uint256) view returns (uint256)
   */
  getNextUnsortedOffer: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IOasisDex` contract call for the `getOffer` function.
   *
   * @contract IOasisDex
   * @signature getOffer(uint256)
   * @method function getOffer(uint256) view returns (uint256, address, uint256, address)
   */
  getOffer: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `IOasisDex` contract call for the `getWorseOffer` function.
   *
   * @contract IOasisDex
   * @signature getWorseOffer(uint256)
   * @method function getWorseOffer(uint256) view returns (uint256)
   */
  getWorseOffer: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IOasisDex` contract call for the `isActive` function.
   *
   * @contract IOasisDex
   * @signature isActive(uint256)
   * @method function isActive(uint256) view returns (bool)
   */
  isActive: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IOasisDex` contract transaction for `buy` function.
   *
   * @contract IOasisDex
   * @signature buy(uint256,uint256)
   * @method function buy(uint256,uint256) returns (bool)
   */
  buy: ($$0: ethers.BigNumberish, $$1: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IOasisDex` contract transaction for `cancel` function.
   *
   * @contract IOasisDex
   * @signature cancel(uint256)
   * @method function cancel(uint256) returns (bool)
   */
  cancel: ($$0: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IOasisDex` contract transaction for `offer` function.
   *
   * @contract IOasisDex
   * @signature offer(uint256,address,uint256,address)
   * @method function offer(uint256,address,uint256,address) returns (uint256)
   */
  offer: (
    $$0: ethers.BigNumberish,
    $$1: string,
    $$2: ethers.BigNumberish,
    $$3: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function buy(uint256, uint256) returns (bool)',
    'function cancel(uint256) returns (bool)',
    'function getBestOffer(address, address) view returns (uint256)',
    'function getFirstUnsortedOffer() view returns (uint256)',
    'function getNextUnsortedOffer(uint256) view returns (uint256)',
    'function getOffer(uint256) view returns (uint256, address, uint256, address)',
    'function getWorseOffer(uint256) view returns (uint256)',
    'function isActive(uint256) view returns (bool)',
    'function offer(uint256, address, uint256, address) returns (uint256)',
  ];
}

export interface IOasisDexEthersContract extends ethers.Contract {
  'getBestOffer(address,address)': (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getFirstUnsortedOffer()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getNextUnsortedOffer(uint256)': (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getOffer(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getWorseOffer(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'isActive(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'buy(uint256,uint256)': (
    $$0: ethers.BigNumberish,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'cancel(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'offer(uint256,address,uint256,address)': (
    $$0: ethers.BigNumberish,
    $$1: string,
    $$2: ethers.BigNumberish,
    $$3: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  callStatic: {
    'getBestOffer(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getFirstUnsortedOffer()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getNextUnsortedOffer(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getOffer(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getWorseOffer(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'isActive(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'buy(uint256,uint256)': (
      $$0: ethers.BigNumberish,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'cancel(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<boolean>;
    'offer(uint256,address,uint256,address)': (
      $$0: ethers.BigNumberish,
      $$1: string,
      $$2: ethers.BigNumberish,
      $$3: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  estimateGas: {
    'buy(uint256,uint256)': (
      $$0: ethers.BigNumberish,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'cancel(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'offer(uint256,address,uint256,address)': (
      $$0: ethers.BigNumberish,
      $$1: string,
      $$2: ethers.BigNumberish,
      $$3: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'buy(uint256,uint256)': (
      $$0: ethers.BigNumberish,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'cancel(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'offer(uint256,address,uint256,address)': (
      $$0: ethers.BigNumberish,
      $$1: string,
      $$2: ethers.BigNumberish,
      $$3: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
