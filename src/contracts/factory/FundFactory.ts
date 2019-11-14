import * as R from 'ramda';
import { Contract } from '../../Contract';
import { Environment } from '../../Environment';
import { Address } from '../../Address';
import { FundFactoryAbi } from '../../abis/FundFactory.abi';
import { Factory } from './Factory';
import { applyMixins } from '../../utils/applyMixins';
import { BigNumber } from 'bignumber.js';
import { Registry } from '../version/Registry';
import { isZeroAddress } from '../../utils/isZeroAddress';
import { ValidationError } from '../../errors/ValidationError';
import { HubRoutes } from '../fund/hub/Hub';
import { stringToBytes } from '../../utils/tests/stringToBytes';

export class DenominationAssetNotRegisteredError extends ValidationError {
  public readonly name = 'DenominationAssetNotRegisteredError';

  constructor(message: string = 'Denomination asset must be registered.') {
    super(message);
  }
}

export class FundSetupAlreadyCompleteError extends ValidationError {
  public readonly name = 'FundSetupAlreadyCompleteError';

  constructor(message: string = 'Setup already complete.') {
    super(message);
  }
}

export class FundSetupNotStartedError extends ValidationError {
  public readonly name = 'FundSetupNotStartedError';

  constructor(message: string = 'Fund setup has not been started yet.') {
    super(message);
  }
}

export class FundSetupAlreadyStartedError extends ValidationError {
  public readonly name = 'FundSetupAlreadyStartedError';

  constructor(message: string = 'Fund setup has already been started.') {
    super(message);
  }
}

export class RouteNotCreatedError extends ValidationError {
  constructor(public readonly name: string, message: string = 'Route has not been created.') {
    super(message);
  }
}

export class RouteAlreadyCreatedError extends ValidationError {
  constructor(public readonly name: string, message: string = 'Route has already been created.') {
    super(message);
  }
}

export interface FundFactoryDeployArguments {
  accountingFactory: Address;
  feeManagerFactory: Address;
  participationFactory: Address;
  sharesFactory: Address;
  tradingFactory: Address;
  vaultFactory: Address;
  policyManagerFactory: Address;
  version: Address;
}

export interface Settings {
  name: string;
  fees: Address[];
  feeRates: BigNumber[];
  feePeriods: BigNumber[];
  exchanges: Address[];
  adapters: Address[];
  denominationAsset: Address;
  defaultAssets: Address[];
}

export class FundFactory extends Contract {
  public static readonly abi = FundFactoryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: FundFactoryDeployArguments) {
    return super.createDeployment<FundFactory>(environment, bytecode, from, [
      args.accountingFactory,
      args.feeManagerFactory,
      args.participationFactory,
      args.sharesFactory,
      args.tradingFactory,
      args.vaultFactory,
      args.policyManagerFactory,
      args.version,
    ]);
  }

  private validateFundSetupStarted(hub: Address) {
    if (isZeroAddress(hub)) {
      throw new FundSetupNotStartedError();
    }
  }

  private validateRouteNotCreated(routes: HubRoutes, route: keyof HubRoutes) {
    const routeName = route.charAt(0).toUpperCase() + route.substring(1);
    if (isZeroAddress(routes[route])) {
      throw new RouteNotCreatedError(`${routeName}NotCreatedError`, `${routeName} has not been created.`);
    }
  }

  private validateRouteAlreadyCreated(routes: HubRoutes, route: keyof HubRoutes) {
    const routeName = route.charAt(0).toUpperCase() + route.substring(1);
    if (routes[route] && !isZeroAddress(routes[route])) {
      throw new RouteAlreadyCreatedError(`${routeName}AlreadyCreated`, `${routeName} has already been created.`);
    }
  }

  public getManagersToHubs(manager: Address, block?: number) {
    return this.makeCall<Address>('managersToHubs', [manager], block);
  }

  public async getManagersToRoutes(manager: Address, block?: number): Promise<HubRoutes> {
    const result = await this.makeCall<HubRoutes>('managersToRoutes', [manager], block);
    const addresses = R.pick(
      [
        'accounting',
        'engine',
        'feeManager',
        'mlnToken',
        'participation',
        'policyManager',
        'priceSource',
        'registry',
        'shares',
        'trading',
        'vault',
        'version',
      ],
      result,
    ) as HubRoutes;

    return Object.keys(addresses).reduce(
      (carry, key: keyof typeof addresses) => {
        const address = addresses[key];
        if (isZeroAddress(address)) {
          return carry;
        }

        return { ...carry, [key]: address };
      },
      {} as HubRoutes,
    );
  }

  /**
   * Gets the settings for a manager
   *
   * @param manager The address of the manager
   * @param block The block number to execute the call on.
   */
  public async getManagersToSettings(manager: Address, block?: number) {
    return this.makeCall<Settings>('managersToSettings', [manager], block);
  }

  public beginSetup(from: Address, args: Settings) {
    const method = 'beginSetup';
    const methodArgs = [
      stringToBytes(args.name, 32),
      args.fees,
      args.feeRates.map(rate => rate.toString()),
      args.feePeriods.map(period => period.toString()),
      args.exchanges,
      args.adapters,
      args.denominationAsset,
      args.defaultAssets,
    ];

    const validate = async () => {
      const hub = await this.getManagersToHubs(from);
      if (!isZeroAddress(hub)) {
        throw new FundSetupAlreadyStartedError();
      }

      const registryAddress = await this.getRegistry();
      const registry = new Registry(this.environment, registryAddress);
      if (!(await registry.isAssetRegistered(args.denominationAsset))) {
        throw new DenominationAssetNotRegisteredError();
      }
    };

    return this.createTransaction({ from, method, methodArgs, validate });
  }

  public createAccounting(from: Address) {
    const validate = async () => {
      this.validateFundSetupStarted(await this.getManagersToHubs(from));

      const routes = await this.getManagersToRoutes(from);
      this.validateRouteAlreadyCreated(routes, 'accounting');
    };

    return this.createTransaction({ from, method: 'createAccounting', validate });
  }

  public createFeeManager(from: Address) {
    const validate = async () => {
      this.validateFundSetupStarted(await this.getManagersToHubs(from));

      const routes = await this.getManagersToRoutes(from);
      this.validateRouteAlreadyCreated(routes, 'feeManager');
    };

    return this.createTransaction({ from, method: 'createFeeManager', validate });
  }

  public createParticipation(from: Address) {
    const validate = async () => {
      this.validateFundSetupStarted(await this.getManagersToHubs(from));

      const routes = await this.getManagersToRoutes(from);
      this.validateRouteAlreadyCreated(routes, 'participation');
    };

    return this.createTransaction({ from, method: 'createParticipation', validate });
  }

  public createPolicyManager(from: Address) {
    const validate = async () => {
      this.validateFundSetupStarted(await this.getManagersToHubs(from));

      const routes = await this.getManagersToRoutes(from);
      this.validateRouteAlreadyCreated(routes, 'policyManager');
    };

    return this.createTransaction({ from, method: 'createPolicyManager', validate });
  }

  public createShares(from: Address) {
    const validate = async () => {
      this.validateFundSetupStarted(await this.getManagersToHubs(from));

      const routes = await this.getManagersToRoutes(from);
      this.validateRouteAlreadyCreated(routes, 'shares');
    };

    return this.createTransaction({ from, method: 'createShares', validate });
  }

  public createTrading(from: Address) {
    const validate = async () => {
      this.validateFundSetupStarted(await this.getManagersToHubs(from));

      const routes = await this.getManagersToRoutes(from);
      this.validateRouteAlreadyCreated(routes, 'trading');
    };

    return this.createTransaction({ from, method: 'createTrading', validate });
  }

  public createVault(from: Address) {
    const validate = async () => {
      this.validateFundSetupStarted(await this.getManagersToHubs(from));

      const routes = await this.getManagersToRoutes(from);
      this.validateRouteAlreadyCreated(routes, 'vault');
    };

    return this.createTransaction({ from, method: 'createVault', validate });
  }

  public completeSetup(from: Address) {
    const validate = async () => {
      const hub = await this.getManagersToHubs(from);
      if (await this.isInstance(hub)) {
        throw new FundSetupAlreadyCompleteError();
      }

      if (isZeroAddress(hub)) {
        throw new FundSetupNotStartedError();
      }

      const routes = await this.getManagersToRoutes(from);

      Object.keys(routes).forEach((route: keyof HubRoutes) => {
        this.validateRouteNotCreated(routes, route);
      });
    };

    return this.createTransaction({ from, method: 'completeSetup', validate });
  }

  /**
   * Gets the funds address based on the fund id (position in funds array)
   *
   * @param id The id of the fund
   * @param block The block number to execute the call on.
   */
  public getFundById(id: number, block?: number) {
    return this.makeCall<Address>('getFundById', [id], block);
  }

  /**
   * Gets the last fund id
   *
   * @param block The block number to execute the call on.
   */
  public async getLastFundId(block?: number) {
    const result = await this.makeCall<string>('getLastFundId', undefined, block);
    return parseInt(result, 10);
  }

  /**
   * Gets the address of the MLN token
   *
   * @param block The block number to execute the call on.
   */
  public getMlnToken(block?: number) {
    return this.makeCall<Address>('mlnToken', undefined, block);
  }

  /**
   * Gets the address of the engine
   *
   * @param block The block number to execute the call on.
   */
  public getEngine(block?: number) {
    return this.makeCall<Address>('engine', undefined, block);
  }

  /**
   * Gets the address of the price source contract
   *
   * @param block The block number to execute the call on.
   */
  public getPriceSource(block?: number) {
    return this.makeCall<Address>('priceSource', undefined, block);
  }

  /**
   * Gets the address of the version contract
   *
   * @param block The block number to execute the call on.
   */
  public getVersion(block?: number) {
    return this.makeCall<Address>('version', undefined, block);
  }

  /**
   * Gets the address of the registry contract
   *
   * @param block The block number to execute the call on.
   */
  public getRegistry(block?: number) {
    return this.makeCall<Address>('registry', undefined, block);
  }

  public getAccountingFactory(block?: number) {
    return this.makeCall<any>('accountingFactory', undefined, block);
  }
}

export interface FundFactory extends Factory {}
applyMixins(FundFactory, [Factory]);
