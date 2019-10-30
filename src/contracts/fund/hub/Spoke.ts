import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { SpokeAbi } from '../../../abis/Spoke.abi';

export class Spoke extends Contract {
  public static readonly abi = SpokeAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, hub: Address) {
    return super.createDeployment<Spoke>(environment, bytecode, from, [hub]);
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
