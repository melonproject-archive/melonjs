import { toHex, toUtf8, isHexStrict } from 'web3-utils';
import { HubAbi } from '../../../abis/Hub.abi';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { toDate } from '../../../utils/toDate';
import { DSGuard } from '../../dependencies/authorization/DSGuard';
import { applyMixins } from '../../../utils/applyMixins';

export interface HubRoutes {
  accounting?: Address;
  participation?: Address;
  shares?: Address;
  trading?: Address;
  vault?: Address;
  feeManager?: Address;
  policyManager?: Address;
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
    if (result && isHexStrict(result)) {
      return toUtf8(result);
    }

    return result;
  }

  /**
   * Gets the fund routes object as [[HubRoutes]].
   *
   * @param block The block number to execute the call on.
   */
  public async getRoutes(block?: number) {
    const routes = await this.makeCall<HubRoutes>('routes', undefined, block);
    const output: HubRoutes = {
      ...(routes.accounting && { accounting: routes.accounting }),
      ...(routes.participation && { participation: routes.participation }),
      ...(routes.shares && { shares: routes.shares }),
      ...(routes.trading && { trading: routes.trading }),
      ...(routes.vault && { vault: routes.vault }),
      ...(routes.feeManager && { feeManager: routes.feeManager }),
      ...(routes.policyManager && { policyManager: routes.policyManager }),
    };

    return output;
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
  public getVersion(block?: number) {
    return this.makeCall<Address>('version', undefined, block);
  }

  public getRegistry(block?: number) {
    return this.makeCall<Address>('registry', undefined, block);
  }

  public getVault(block?: number) {
    return this.makeCall<Address>('vault', undefined, block);
  }

  public getAccounting(block?: number) {
    return this.makeCall<Address>('accounting', undefined, block);
  }

  public getPriceSource(block?: number) {
    return this.makeCall<Address>('priceSource', undefined, block);
  }

  public getParticipation(block?: number) {
    return this.makeCall<Address>('participation', undefined, block);
  }

  public getTrading(block?: number) {
    return this.makeCall<Address>('trading', undefined, block);
  }

  public getShares(block?: number) {
    return this.makeCall<Address>('shares', undefined, block);
  }

  public getPolicyManager(block?: number) {
    return this.makeCall<Address>('policyManager', undefined, block);
  }
}

export interface Hub extends DSGuard {}
applyMixins(Hub, [DSGuard]);
