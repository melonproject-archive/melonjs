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
import { padLeft, stringToHex } from 'web3-utils';

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
    if (!isZeroAddress(routes[route])) {
      throw new RouteAlreadyCreatedError(`${routeName}AlreadyCreated`, `${routeName} has already been created.`);
    }
  }

  public getRegistry(block?: number) {
    return this.makeCall<Address>('registry', undefined, block);
  }

  public getManagersToHubs(manager: Address, block?: number) {
    return this.makeCall<Address>('managersToHubs', [manager], block);
  }

  public async getManagersToRoutes(manager: Address, block?: number): Promise<HubRoutes> {
    const result = await this.makeCall<HubRoutes>('managersToRoutes', [manager], block);
    return R.pick(
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
  }

  public beginSetup(from: Address, args: Settings) {
    const method = 'beginSetup';
    const methodArgs = [
      padLeft(stringToHex(args.name), 64),
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

  public createAccouting(from: Address) {
    const validate = async () => {
      this.validateFundSetupStarted(await this.getManagersToHubs(from));

      const routes = await this.getManagersToRoutes(from);
      this.validateRouteAlreadyCreated(routes, 'accounting');
    };

    return this.createTransaction({ from, method: 'createAccouting', validate });
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
}

export interface FundFactory extends Factory {}
applyMixins(FundFactory, [Factory]);
