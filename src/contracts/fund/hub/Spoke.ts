import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { SpokeAbi } from '../../../abis/Spoke.abi';
import { HubRoutes } from './Hub';

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

  /**
   * Gets the address of the hub.
   *
   * @param block The block number to execute the call on.
   */
  public getHub(block?: number) {
    return this.makeCall<string>('hub', undefined, block);
  }

  /**
   * Checks if the contract is initialized.
   *
   * @param block The block number to execute the call on.
   */
  public isInitialized(block?: number) {
    return this.makeCall<string>('initialized', undefined, block);
  }

  /**
   * Gets the routes of the hub
   *
   * @param block The block number to execute the call on.
   */
  public async getRoutes(block?: number) {
    const result = await this.makeCall<HubRoutes>('routes', undefined, block);
    const routes: HubRoutes = {
      accounting: result.accounting,
      engine: result.engine,
      feeManager: result.feeManager,
      mlnToken: result.mlnToken,
      participation: result.participation,
      policyManager: result.policyManager,
      priceSource: result.priceSource,
      registry: result.registry,
      shares: result.shares,
      trading: result.trading,
      vault: result.vault,
      version: result.version,
    };

    return routes;
  }
}
