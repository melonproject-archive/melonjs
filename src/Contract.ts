import { ethers } from 'ethers';

export class TransactionWrapper<TOverrides extends ethers.Overrides = ethers.Overrides> {
  constructor(public readonly contract: Contract, public readonly signature: string, public readonly args: any[]) {}

  public call(overrides?: ethers.CallOverrides): Promise<any> {
    return this.contract.$$ethers.callStatic[this.signature](...this.args, overrides || {});
  }

  public estimate(overrides?: TOverrides): Promise<ethers.BigNumber> {
    return this.contract.$$ethers.estimateGas[this.signature](...this.args, overrides || {});
  }

  public populate(overrides?: TOverrides): Promise<ethers.UnsignedTransaction> {
    return this.contract.$$ethers.populateTransaction[this.signature](...this.args, overrides || {});
  }

  public async send(overrides?: TOverrides): Promise<ethers.providers.TransactionResponse> {
    return this.contract.$$ethers.functions[this.signature](...this.args, overrides || {});
  }
}

export class Contract {
  public readonly $$ethers: ethers.Contract;

  constructor(
    contract: ethers.ContractInterface,
    addressOrName: string,
    signerOrProvider: ethers.Signer | ethers.providers.Provider,
  ) {
    this.$$ethers = new ethers.Contract(ethers.utils.getAddress(addressOrName), contract, signerOrProvider);

    const uniques = Object.keys(this.$$ethers.interface.functions).filter((signature, index, array) => {
      const fragment = this.$$ethers.interface.functions[signature];
      return index === array.findIndex((item) => this.$$ethers.interface.functions[item].name === fragment.name);
    });

    const calls = uniques.filter((signature) => {
      const fragment = this.$$ethers.interface.functions[signature];
      return fragment.constant;
    });

    const transactions = uniques.filter((signature) => {
      const fragment = this.$$ethers.interface.functions[signature];
      return !fragment.constant;
    });

    calls.forEach((signature) => {
      const fragment = this.$$ethers.interface.functions[signature];
      (this as any)[fragment.name] = this.$$ethers.functions[signature];
    });

    transactions.forEach((signature) => {
      const fragment = this.$$ethers.interface.functions[signature];
      (this as any)[fragment.name] = (...args: any[]) => new TransactionWrapper(this, signature, args);
    });
  }
}
