import { toUtf8 } from 'web3-utils';
import { HubAbi } from '../abis/Hub';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';

export interface FundRoutes {
  accounting?: Address;
  engine?: Address;
  feeManager?: Address;
  mlnToken?: Address;
  participation?: Address;
  policyManager?: Address;
  priceSource?: Address;
  registry?: Address;
  shares?: Address;
  trading?: Address;
  vault?: Address;
  version?: Address;
}

export class Hub extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(HubAbi, address));
  }

  /**
   * Gets the creation time .
   *
   * @param block The block number to execute the call on.
   */
  public async getCreationTime(block?: number) {
    const result = await this.makeCall<string>('creationTime', undefined, block);
    return new Date(parseInt(`${result}`, 10) * 1000);
  }

  /**
   * Gets the creator (i.e. the version contract address).
   *
   * @param block The block number to execute the call on.
   */
  public async getCreator(block?: number) {
    return this.makeCall<Address>('creator', undefined, block);
  }

  /**
   * Gets the fund manager.
   *
   * @param block The block number to execute the call on.
   */
  public async getManager(block?: number) {
    return this.makeCall<Address>('manager', undefined, block);
  }

  /**
   * Gets the fund name.
   *
   * @param block The block number to execute the call on.
   */
  public async getName(block?: number) {
    const result = await this.makeCall<string>('name', undefined, block);
    return result && toUtf8(result);
  }

  /**
   * Gets the fund routes object as [[FundRoutes]].
   *
   * @param block The block number to execute the call on.
   */
  public async getRoutes(block?: number) {
    const result = await this.makeCall<FundRoutes>('routes', undefined, block);
    const routes: FundRoutes = {
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

  /**
<<<<<<< HEAD
   * Checks if a fund is shut down
=======
   * Is the fund shutdown, i.e. inactive?
>>>>>>> abb30d3f0adf22b2a7724eb7c9f15594120be981
   *
   * @param block The block number to execute the call on.
   */
  public async isShutDown(block?: number) {
    const result = await this.makeCall<boolean>('isShutDown', undefined, block);
    return result;
  }

  /**
   * Get the fund version
   *
   * @param block The block number to execute the call on.
   */
  public async getFundVersion(block?: number) {
    // const { registry, version } = await this.getRoutes(block);
    // needs registry contract methods (waiting for Luong)
  }
}
