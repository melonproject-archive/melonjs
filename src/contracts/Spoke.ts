import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { Deployment } from '../Transaction';
import { SpokeAbi } from '../abis/Spoke.abi';

export class Spoke extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(environment, typeof address === 'string' ? new environment.client.Contract(SpokeAbi, address) : address);
  }

  public static deploy(environment: Environment, data: string, from: Address, hub: Address) {
    const contract = new environment.client.Contract(SpokeAbi);
    const transaction = contract.deploy({
      data,
      arguments: [hub],
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
  }

  /**
   * Gets the address of the engine contract.
   *
   * @param block The block number to execute the call on.
   */
  public async getEngine(block?: number) {
    const result = await this.makeCall<string>('engine', undefined, block);
    return result;
  }

  /**
   * Gets the address of the MLN token contract.
   *
   * @param block The block number to execute the call on.
   */
  public async getMlnToken(block?: number) {
    const result = await this.makeCall<string>('mlnToken', undefined, block);
    return result;
  }

  /**
   * Gets the address of the price source contract.
   *
   * @param block The block number to execute the call on.
   */
  public async getPriceSource(block?: number) {
    const result = await this.makeCall<string>('priceSource', undefined, block);
    return result;
  }

  /**
   * Gets the address of the version contract.
   *
   * @param block The block number to execute the call on.
   */
  public async getVersion(block?: number) {
    const result = await this.makeCall<string>('version', undefined, block);
    return result;
  }

  /**
   * Gets the address of the registry contract.
   *
   * @param block The block number to execute the call on.
   */
  public async getRegistry(block?: number) {
    const result = await this.makeCall<string>('registry', undefined, block);
    return result;
  }
}
