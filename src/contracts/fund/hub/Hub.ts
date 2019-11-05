import { toUtf8, toHex } from 'web3-utils';
import { HubAbi } from '../../../abis/Hub.abi';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { toDate } from '../../../utils/toDate';
import { ValidationError } from '../../../errors/ValidationError';
import { sameAddress } from '../../../utils/sameAddress';

export class OnlyCreatorError extends ValidationError {
  constructor(public readonly sender: Address, public readonly creator: Address, message?: string) {
    super(message || `Only creator can do this. Sender: ${sender}, Creator: ${creator}`);
  }
}

export class SetupError extends ValidationError {
  constructor(public readonly isSetup: boolean, message?: string) {
    super(message);
  }
}

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
  public static readonly abi = HubAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: HubDeployArguments) {
    return super.createDeployment<Hub>(environment, bytecode, from, [args.manager, toHex(args.name)]);
  }

  private async validateCreator(from: Address) {
    const creator = await this.getCreator();
    if (!sameAddress(from, creator)) throw new OnlyCreatorError(from, creator);
  }

  /**
   * Gets the creation time .
   *
   * @param block The block number to execute the call on.
   */
  public async getCreationTime(block?: number) {
    const result = await this.makeCall<string>('creationTime', undefined, block);
    return toDate(result);
  }

  /**
   * Gets the creator (i.e. the version contract address).
   *
   * @param block The block number to execute the call on.
   */
  public getCreator(block?: number) {
    return this.makeCall<Address>('creator', undefined, block);
  }

  /**
   * Gets the fund manager.
   *
   * @param block The block number to execute the call on.
   */
  public getManager(block?: number) {
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
  public isShutDown(block?: number) {
    return this.makeCall<boolean>('isShutDown', undefined, block);
  }

  /**
   * Get the fund version
   *
   * @param block The block number to execute the call on.
   */
  public getFundVersion(block?: number) {
    return this.makeCall<Address>('version', undefined, block);
  }

  /**
   * Checks if the spokes are set
   *
   * @param block The block number to execute the call on.
   */
  public isSpokesSet(block?: number) {
    return this.makeCall<boolean>('spokesSet', undefined, block);
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

    return this.createTransaction('setSpokes', from, args, undefined, async () => {
      await this.validateCreator(from);

      const isSpokesSet = await this.isSpokesSet();
      if (isSpokesSet) {
        throw new SetupError(isSpokesSet, `Spokes are already set. isSpokesSet: ${isSpokesSet}`);
      }
    });
  }

  /**
   * Checks if the routing is set
   *
   * @param block The block number to execute the call on.
   */
  public isRoutingSet(block?: number) {
    return this.makeCall<boolean>('routingSet', undefined, block);
  }

  /**
   * Sets the routing on the hub.
   *
   * @param from The sender address.
   */
  public setRouting(from: Address) {
    return this.createTransaction('setRouting', from, undefined, undefined, async () => {
      await this.validateCreator(from);

      const isSpokesSet = await this.isSpokesSet();
      if (!isSpokesSet) {
        throw new SetupError(isSpokesSet, `Spokes must be set. isSpokesSet: ${isSpokesSet}`);
      }

      const isRoutingSet = await this.isRoutingSet();
      if (isRoutingSet) {
        throw new SetupError(isRoutingSet, `Routing is already set. isRoutingSet: ${isRoutingSet}`);
      }
    });
  }

  /**
   * Sets the permissions on the hub.
   *
   * @param from The sender address.
   */
  public setPermissions(from: Address) {
    return this.createTransaction('setPermissions', from, undefined, undefined, async () => {
      await this.validateCreator(from);

      const isSpokesSet = await this.isSpokesSet();
      if (!isSpokesSet) {
        throw new SetupError(isSpokesSet, `Spokes must be set. isSpokesSet: ${isSpokesSet}`);
      }

      const isRoutingSet = await this.isRoutingSet();
      if (!isRoutingSet) {
        throw new SetupError(isRoutingSet, `Routing must be set. isRoutingSet: ${isRoutingSet}`);
      }

      const isPermissionsSet = await this.isPermissionsSet();
      if (isPermissionsSet) {
        throw new SetupError(isPermissionsSet, `Permissions are already set. isPermissionsSet: ${isPermissionsSet}`);
      }
    });
  }

  /**
   * Checks if the permissions are set
   *
   * @param block The block number to execute the call on.
   */
  public isPermissionsSet(block?: number) {
    return this.makeCall<boolean>('permissionsSet', undefined, block);
  }
}
