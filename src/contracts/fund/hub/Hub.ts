import { toUtf8, toHex } from 'web3-utils';
import { Contract as EthContract } from 'web3-eth-contract';
import { HubAbi } from '../../../abis/Hub.abi';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Deployment } from '../../../Transaction';

export interface HubRoutes {
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

export interface HubDeployArguments {
  name: string;
  manager: string;
}

export class Hub extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(environment, typeof address === 'string' ? new environment.client.Contract(HubAbi, address) : address);
  }

  public static deploy(environment: Environment, bytecode: string, from: Address, args: HubDeployArguments) {
    const contract = new environment.client.Contract(HubAbi);
    const transaction = contract.deploy({
      data: bytecode,
      arguments: [args.manager, toHex(args.name)],
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
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
   * Gets the fund routes object as [[HubRoutes]].
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

  /**
   * Checks if a fund is shut down.
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

  /**
   * Checks if the spokes are set
   *
   * @param block The block number to execute the call on.
   */
  public async isSpokesSet(block?: number) {
    const result = await this.makeCall<boolean>('spokesSet', undefined, block);
    return result;
  }

  /**
   * Sets the spokes on the hub.
   *
   * @param from The sender address.
   * @param spokes The hub routes.
   */
  public setSpokes(from: Address, spokes: HubRoutes) {
    const args = [
      [
        spokes.accounting,
        spokes.feeManager,
        spokes.participation,
        spokes.policyManager,
        spokes.shares,
        spokes.trading,
        spokes.vault,
        spokes.priceSource,
        spokes.registry,
        spokes.version,
        spokes.engine,
        spokes.mlnToken,
      ],
    ];

    return this.createTransaction('setSpokes', from, args);
  }

  /**
   * Checks if the routing is set
   *
   * @param block The block number to execute the call on.
   */
  public async isRoutingSet(block?: number) {
    const result = await this.makeCall<boolean>('routingSet', undefined, block);
    return result;
  }

  /**
   * Sets the routing on the hub.
   *
   * @param from The sender address.
   */
  public setRouting(from: Address) {
    return this.createTransaction('setRouting', from);
  }

  /**
   * Sets the permissions on the hub.
   *
   * @param from The sender address.
   */
  public setPermissions(from: Address) {
    return this.createTransaction('setPermissions', from);
  }

  /**
   * Checks if the permissions are set
   *
   * @param block The block number to execute the call on.
   */
  public async isPermissionsSet(block?: number) {
    const result = await this.makeCall<boolean>('permissionsSet', undefined, block);
    return result;
  }
}
