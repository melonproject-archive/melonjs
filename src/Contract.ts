import { ethers } from 'ethers';

export interface TransactionWrapper<TOverrides extends ethers.Overrides = ethers.Overrides> {
  send: (overrides?: TOverrides) => Promise<ethers.providers.TransactionResponse>;
  call: (overrides?: TOverrides) => Promise<any>;
  estimate: (overrides?: TOverrides) => Promise<ethers.BigNumber>;
  populate: (overrides?: TOverrides) => ethers.UnsignedTransaction;
}

export class Contract {
  public readonly ethers: ethers.Contract;

  constructor(
    contract: ethers.ContractInterface,
    addressOrName: string,
    signerOrProvider: ethers.Signer | ethers.providers.Provider,
  ) {
    this.ethers = new ethers.Contract(ethers.utils.getAddress(addressOrName), contract, signerOrProvider);

    const uniques = Object.keys(this.ethers.interface.functions).filter((signature, index, array) => {
      const fragment = this.ethers.interface.functions[signature];
      return index === array.findIndex((item) => this.ethers.interface.functions[item].name === fragment.name);
    });

    const calls = uniques.filter((signature) => {
      const fragment = this.ethers.interface.functions[signature];
      return fragment.constant;
    });

    const transactions = uniques.filter((signature) => {
      const fragment = this.ethers.interface.functions[signature];
      return !fragment.constant;
    });

    calls.forEach((signature) => {
      const fragment = this.ethers.interface.functions[signature];
      (this as any)[fragment.name] = this.ethers.functions[signature];
    });

    transactions.forEach((signature) => {
      const fragment = this.ethers.interface.functions[signature];
      (this as any)[fragment.name] = (...args: any[]) => {
        return {
          send: (overrides?: ethers.Overrides) => {
            return this.ethers.functions[signature](...args, (overrides = {}));
          },
          call: (overrides?: ethers.Overrides) => {
            return this.ethers.callStatic[signature](...args, (overrides = {}));
          },
          estimate: (overrides?: ethers.Overrides) => {
            return this.ethers.estimateGas[signature](...args, (overrides = {}));
          },
          populate: (overrides?: ethers.Overrides) => {
            return this.ethers.populateTransaction[signature](...args, (overrides = {}));
          },
        };
      };
    });
  }
}
