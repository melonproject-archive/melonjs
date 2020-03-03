import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { SpokeAbi } from '../../../abis/Spoke.abi';
import { HubRoutes } from './Hub';
import { isZeroAddress } from '../../../utils/isZeroAddress';

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
   * Gets the address of the pricesource contract.
   *
   * @param block The block number to execute the call on.
   */
  public getPriceSource(block?: number) {
    return this.makeCall<string>('pricesource', undefined, block);
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
   * @returns A boolean where True indicates the spoke has been initialized.
   */
  public isInitialized(block?: number) {
    return this.makeCall<boolean>('initialized', undefined, block);
  }

  /**
   * Gets the routes of the hub
   *
   * @param block The block number to execute the call on.
   */
  public async getRoutes(block?: number) {
    const routes = await this.makeCall<HubRoutes>('routes', undefined, block);
    const output: HubRoutes = {
      ...(routes.accounting && !isZeroAddress(routes.accounting) && { accounting: routes.accounting }),
      ...(routes.participation && !isZeroAddress(routes.participation) && { participation: routes.participation }),
      ...(routes.shares && !isZeroAddress(routes.shares) && { shares: routes.shares }),
      ...(routes.trading && !isZeroAddress(routes.trading) && { trading: routes.trading }),
      ...(routes.vault && !isZeroAddress(routes.vault) && { vault: routes.vault }),
      ...(routes.feeManager && !isZeroAddress(routes.feeManager) && { feeManager: routes.feeManager }),
      ...(routes.policyManager && !isZeroAddress(routes.policyManager) && { policyManager: routes.policyManager }),
    };

    return output;
  }
}
