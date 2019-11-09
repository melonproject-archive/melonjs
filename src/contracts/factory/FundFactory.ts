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

export class DenominationAssetNotRegisteredError extends ValidationError {
  public readonly name = 'DenominationAssetNotRegisteredError';

  constructor(message: string = 'Denomination asset must be registered.') {
    super(message);
  }
}

export class ComponentNotSet extends ValidationError {
  public readonly name = 'ComponentNotSet';

  constructor(message: string = 'This step has already been run.') {
    super(message);
  }
}

export class ComponentSet extends ValidationError {
  public readonly name = 'ComponentSet';

  constructor(message: string = 'Component prerequisite not met.') {
    super(message);
  }
}

export class SetupAlreadyComplete extends ValidationError {
  public readonly name = 'SetupAlreadyComplete';

  constructor(message: string = 'Setup already complete.') {
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

  private componentExists(component: Address) {
    return !isZeroAddress(component);
  }

  private validateComponentNotSet(component: Address) {
    if (this.componentExists(component)) {
      throw new ComponentNotSet();
    }
  }

  private validateComponentSet(component: Address) {
    if (!this.componentExists(component)) {
      throw new ComponentSet();
    }
  }

  public getRegistry(block?: number) {
    return this.makeCall<Address>('registry', undefined, block);
  }

  public getManagersToHubs(manager: Address, block?: number) {
    return this.makeCall<Address>('managersToHubs', [manager], block);
  }

  public async getManagersToRoutes(manager: Address, block?: number) {
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
    );
  }

  public beginSetup(from: Address, args: Settings) {
    const method = 'beginSetup';
    const methodArgs = [
      args.name,
      args.fees,
      args.feeRates.map(rate => rate.toString()),
      args.feePeriods.map(period => Performance.toString()),
      args.exchanges,
      args.adapters,
      args.denominationAsset,
      args.defaultAssets,
    ];

    const validate = async () => {
      const hub = await this.getManagersToHubs(from);
      this.validateComponentNotSet(hub);

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
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet((await this.getManagersToRoutes(from)).accounting);
    };

    return this.createTransaction({ from, method: 'createAccouting', validate });
  }

  public createFeeManager(from: Address) {
    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet((await this.getManagersToRoutes(from)).accounting);
    };

    return this.createTransaction({ from, method: 'createFeeManager', validate });
  }

  public createParticipation(from: Address) {
    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet((await this.getManagersToRoutes(from)).participation);
    };

    return this.createTransaction({ from, method: 'createParticipation', validate });
  }

  public createPolicyManager(from: Address) {
    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet((await this.getManagersToRoutes(from)).policyManager);
    };

    return this.createTransaction({ from, method: 'createPolicyManager', validate });
  }

  public createShares(from: Address) {
    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet((await this.getManagersToRoutes(from)).shares);
    };

    return this.createTransaction({ from, method: 'createShares', validate });
  }

  public createTrading(from: Address) {
    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet((await this.getManagersToRoutes(from)).trading);
    };

    return this.createTransaction({ from, method: 'createTrading', validate });
  }

  public createVault(from: Address) {
    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet((await this.getManagersToRoutes(from)).vault);
    };

    return this.createTransaction({ from, method: 'createVault', validate });
  }

  public completeSetup(from: Address) {
    const validate = async () => {
      const hub = await this.getManagersToHubs(from);
      if (await this.isInstance(hub)) {
        throw new SetupAlreadyComplete();
      }

      const routes = await this.getManagersToRoutes(from);

      if (
        !this.componentExists(hub) ||
        !this.componentExists(routes.accounting) ||
        !this.componentExists(routes.participation) ||
        !this.componentExists(routes.feeManager) ||
        !this.componentExists(routes.policyManager) ||
        !this.componentExists(routes.shares) ||
        !this.componentExists(routes.trading) ||
        !this.componentExists(routes.vault)
      ) {
        throw new ComponentNotSet('Components must be set before completing setup.');
      }
    };

    return this.createTransaction({ from, method: 'completeSetup', validate });
  }
}

export interface FundFactory extends Factory {}
applyMixins(FundFactory, [Factory]);
