import { EngineAbi } from '../abis/Engine.abi';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { toBigNumber } from '../utils/toBigNumber';

export class Engine extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(EngineAbi, address));
  }

  /**
   * Gets the amgu price.
   *
   * @param block The block number to execute the call on.
   */
  public async getAmguPrice(block?: number) {
    const result = await this.makeCall<string>('amguPrice', undefined, block);
    return new BigNumber(`${result}`);
  }

  /**
   * Gets the current engine price.
   *
   * @param block The block number to execute the call on.
   */
  public async getEnginePrice(block?: number) {
    const result = await this.makeCall<string>('enginePrice', undefined, block);
    return toBigNumber(result);
  }

  /**
   * Gets the frozen ether.
   *
   * @param block The block number to execute the call on.
   */
  public async getFrozenEther(block?: number) {
    const result = await this.makeCall<string>('frozenEther', undefined, block);
    return new BigNumber(`${result}`);
  }

  /**
   * Gets the liquid ether.
   *
   * @param block The block number to execute the call on.
   */
  public async getLiquidEther(block?: number) {
    const result = await this.makeCall<string>('liquidEther', undefined, block);
    return new BigNumber(`${result}`);
  }

  /**
   * Gets the percentage premium.
   *
   * @param block The block number to execute the call on.
   */
  public async getPremiumPercent(block?: number) {
    const result = await this.makeCall<string>('premiumPercent', undefined, block);
    return new BigNumber(`${result}`);
  }

  /**
   * Gets the address of the registry.
   *
   * @param block The block number to execute the call on.
   */
  public async getRegistry(block?: number) {
    return await this.makeCall<Address>('registry', undefined, block);
  }

  /**
   * Gets the total ether consumed.
   *
   * @param block The block number to execute the call on.
   */
  public async getTotalEtherConsumed(block?: number) {
    const result = await this.makeCall<string>('totalEtherConsumed', undefined, block);
    return new BigNumber(`${result}`);
  }

  /**
   * Gets the total amgu consumed.
   *
   * @param block The block number to execute the call on.
   */
  public async getTotalAmguConsumed(block?: number) {
    const result = await this.makeCall<string>('totalAmguConsumed', undefined, block);
    return new BigNumber(`${result}`);
  }

  /**
   * Gets the total MLN burned.
   *
   * @param block The block number to execute the call on.
   */
  public async getTotalMlnBurned(block?: number) {
    const result = await this.makeCall<string>('totalMlnBurned', undefined, block);
    return new BigNumber(`${result}`);
  }
}
