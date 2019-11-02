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
  public getEngine(block?: number) {
    return this.makeCall<string>('engine', undefined, block);
  }

  /**
   * Gets the address of the MLN token contract.
   *
   * @param block The block number to execute the call on.
   */
  public getMlnToken(block?: number) {
    return this.makeCall<string>('mlnToken', undefined, block);
  }

  /**
   * Gets the address of the price source contract.
   *
   * @param block The block number to execute the call on.
   */
  public getPriceSource(block?: number) {
    return this.makeCall<string>('priceSource', undefined, block);
  }

  /**
   * Gets the address of the version contract.
   *
   * @param block The block number to execute the call on.
   */
  public getVersion(block?: number) {
    return this.makeCall<string>('version', undefined, block);
  }

  /**
   * Gets the address of the registry contract.
   *
   * @param block The block number to execute the call on.
   */
  public getRegistry(block?: number) {
    return this.makeCall<string>('registry', undefined, block);
  }
}
