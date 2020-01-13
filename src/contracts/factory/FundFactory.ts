import { Contract } from '../../Contract';
import { Environment } from '../../Environment';
import { Address } from '../../Address';
import { FundFactoryAbi } from '../../abis/FundFactory.abi';
import { Factory } from './Factory';
import { applyMixins } from '../../utils/applyMixins';
import { BigNumber } from 'bignumber.js';
import { Registry } from '../version/Registry';
import { isZeroAddress } from '../../utils/isZeroAddress';
import { HubRoutes } from '../fund/hub/Hub';
import { stringToBytes } from '../../utils/stringToBytes';
import { AmguConsumer } from '../engine/AmguConsumer';
import {
  ComponentNotSetError,
  DenominationAssetNotRegisteredError,
  FundSetupAlreadyCompleteError,
  ComponentAlreadySetError,
} from './FundFactory.error';
import { CannotUseFundNameError, FeeNotRegisteredError } from '../version/Registry.error';
import { Fee } from '../fund/fees/Fee';
import { ManagementFeeMustBeAtIndexZeroError, PerformanceFeeMustBeAtIndexOneError } from '../fund/fees/FeeManager';

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

  private validateComponentSet(address: Address) {
    if (isZeroAddress(address)) {
      throw new ComponentNotSetError();
    }
  }

  private async validateComponentNotSet(manager: Address, component?: keyof HubRoutes) {
    if (!component) {
      const hub = await this.getManagersToHubs(manager);
      if (hub) {
        throw new ComponentAlreadySetError(hub);
      }
    }

    const routes = await this.getManagersToRoutes(manager);
    if (routes[component] && !isZeroAddress(routes[component])) {
      throw new ComponentAlreadySetError(routes[component]);
    }
  }

  /**
   * Get the hub address for manager
   *
   * @param manager The address of the manager
   * @param block The block number to execute the call on.
   */
  public getManagersToHubs(manager: Address, block?: number) {
    return this.makeCall<Address>('managersToHubs', [manager], block);
  }

  /**
   * Gets the routes for a manager
   *
   * @param manager The address of the manager
   * @param block The block number to execute the call on.
   */
  public async getManagersToRoutes(manager: Address, block?: number): Promise<HubRoutes> {
    const result = await this.makeCall<HubRoutes>('managersToRoutes', [manager], block);
    const keys = [
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
    ];

    return keys.reduce<HubRoutes>((carry, key: keyof HubRoutes) => {
      const address = result && result[key];
      // if (!address || isZeroAddress(address)) {
      //   return carry;
      // }

      return { ...carry, [key]: address };
    }, {});
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

  /**
   * Begin fund setup transaction
   *
   * @param from The address of the sender
   * @param settings The fund settings
   */
  public beginSetup(from: Address, settings: Settings) {
    const method = 'beginSetup';
    const args = [
      stringToBytes(settings.name, 32),
      settings.fees,
      settings.feeRates.map(rate => rate.toFixed(0)),
      settings.feePeriods.map(period => period.toFixed(0)),
      settings.exchanges,
      settings.adapters,
      settings.denominationAsset,
      settings.defaultAssets,
    ];

    const validate = async () => {
      const hub = await this.getManagersToHubs(from);

      this.validateComponentSet(hub);

      const registry = new Registry(this.environment, await this.getRegistry());
      const canUseFundName = registry.canUseFundName(from, settings.name);
      if (!canUseFundName) {
        throw new CannotUseFundNameError(settings.name);
      }

      if (!(await registry.isAssetRegistered(settings.denominationAsset))) {
        throw new DenominationAssetNotRegisteredError();
      }
    };

    return this.createTransaction({ from, method, args, validate });
  }

  /**
   * Create the Accounting contract
   *
   * @param from The address of the sender
   */
  public createAccounting(from: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet(from, 'accounting');
    };

    return this.createTransaction({ from, method: 'createAccounting', validate, amgu });
  }

  /**
   * Create the FeeManager contract
   *
   * @param from The address of the sender
   */
  public createFeeManager(from: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet(from, 'feeManager');

      const registry = new Registry(this.environment, await this.getRegistry());
      const settings = await this.getManagersToSettings(from);

      const feesRegistered = await Promise.all(settings.fees.map(fee => registry.isFeeRegistered(fee)));
      if (feesRegistered.some(registered => !registered)) {
        throw new FeeNotRegisteredError();
      }

      if (settings.fees.length > 0) {
        const fee = new Fee(this.environment, settings.fees[0]);
        const identifier = await fee.identifier();
        if (identifier !== 0) {
          throw new ManagementFeeMustBeAtIndexZeroError(settings.fees[0]);
        }
      }

      if (settings.fees.length > 0) {
        const fee = new Fee(this.environment, settings.fees[1]);
        const identifier = await fee.identifier();
        if (identifier !== 1) {
          throw new PerformanceFeeMustBeAtIndexOneError(settings.fees[1]);
        }
      }
    };

    return this.createTransaction({ from, method: 'createFeeManager', validate, amgu });
  }

  /**
   * Create the Participation contract
   *
   * @param from The address of the sender
   */
  public createParticipation(from: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet(from, 'participation');
    };

    return this.createTransaction({ from, method: 'createParticipation', validate, amgu });
  }

  /**
   * Create the PolicyManager contract
   *
   * @param from The address of the sender
   */
  public createPolicyManager(from: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet(from, 'policyManager');
    };

    return this.createTransaction({ from, method: 'createPolicyManager', validate, amgu });
  }

  /**
   * Create the Shares contract
   *
   * @param from The address of the sender
   */
  public createShares(from: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet(from, 'shares');
    };

    return this.createTransaction({ from, method: 'createShares', validate, amgu });
  }

  /**
   * Create the Trading contract
   *
   * @param from The address of the sender
   */
  public createTrading(from: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet(from, 'trading');
    };

    return this.createTransaction({ from, method: 'createTrading', validate, amgu });
  }

  /**
   * Create the Vault contract
   *
   * @param from The address of the sender
   */
  public createVault(from: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(from));
      this.validateComponentNotSet(from, 'vault');
    };

    return this.createTransaction({ from, method: 'createVault', validate, amgu });
  }

  /**
   * Complete the fund setup
   *
   * @param from The address of the sender
   */
  public completeSetup(from: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      const hub = await this.getManagersToHubs(from);
      if (await this.isInstance(hub)) {
        throw new FundSetupAlreadyCompleteError();
      }

      this.validateComponentSet(await this.getManagersToHubs(from));

      const routes = await this.getManagersToRoutes(from);
      Object.keys(routes).forEach((route: keyof HubRoutes) => {
        this.validateComponentSet(routes[route]);
      });
    };

    return this.createTransaction({ from, method: 'completeSetup', validate, amgu });
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

export interface FundFactory extends Factory, AmguConsumer {}
applyMixins(FundFactory, [Factory, AmguConsumer]);
