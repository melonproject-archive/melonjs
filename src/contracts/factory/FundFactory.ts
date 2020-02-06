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
  DifferentNumberOfExchangesAndAdaptersError,
} from './FundFactory.error';
import {
  CannotUseFundNameError,
  FeeNotRegisteredError,
  AssetNotRegisteredError,
  ExchangeAdapterNotRegisteredError,
  ExchangeAndAdapterDoNotMatchError,
  InvalidFundNameError,
} from '../version/Registry.error';
import { ManagementFeeMustBeAtIndexZeroError, PerformanceFeeMustBeAtIndexOneError } from '../fund/fees/FeeManager';
import { IFee } from '../fund/fees/IFee';
import { sameAddress } from '../../utils/sameAddress';

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

  private async validateHubNotSet(manager: Address) {
    const hub = await this.getManagersToHubs(manager);
    if (!isZeroAddress(hub)) {
      throw new ComponentAlreadySetError(hub);
    }
  }

  private async validateComponentNotSet(manager: Address, component: keyof HubRoutes) {
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
    const routes = await this.makeCall<HubRoutes>('managersToRoutes', [manager], block);
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
      this.validateHubNotSet(from);

      const registry = new Registry(this.environment, await this.getRegistry());

      // validation for beginSetup
      const [isValidFundName, canUseFundName, denominationAssetRegistered] = await Promise.all([
        registry.isValidFundName(settings.name),
        registry.canUseFundName(from, settings.name),
        registry.isAssetRegistered(settings.denominationAsset),
      ]);

      if (!isValidFundName) {
        throw new InvalidFundNameError(settings.name);
      }

      if (!canUseFundName) {
        throw new CannotUseFundNameError(settings.name);
      }

      if (!denominationAssetRegistered) {
        throw new DenominationAssetNotRegisteredError();
      }

      // validation for createFeeManager
      settings.fees.map(async fee => {
        if (!(await registry.isFeeRegistered(fee))) {
          throw new FeeNotRegisteredError(fee);
        }
      });

      if (settings.fees.length > 0) {
        const fee = new IFee(this.environment, settings.fees[0]);
        if ((await fee.identifier()) !== 0) {
          throw new ManagementFeeMustBeAtIndexZeroError(settings.fees[0]);
        }
      }

      if (settings.fees.length > 0) {
        const fee = new IFee(this.environment, settings.fees[1]);
        if ((await fee.identifier()) !== 1) {
          throw new PerformanceFeeMustBeAtIndexOneError(settings.fees[1]);
        }
      }

      // validation for createParticipation
      await Promise.all(
        settings.defaultAssets.map(async asset => {
          if (!(await registry.isAssetRegistered(asset))) {
            throw new AssetNotRegisteredError(asset);
          }
        }),
      );

      // validation for createTrading
      if (settings.exchanges.length !== settings.adapters.length) {
        throw new DifferentNumberOfExchangesAndAdaptersError();
      }

      await Promise.all(
        settings.adapters.map(async (adapter, index) => {
          if (!(await registry.isExchangeAdapterRegistered(adapter))) {
            throw new ExchangeAdapterNotRegisteredError(adapter);
          }

          const exchangeInformation = await registry.getExchangeInformation(adapter);
          if (!sameAddress(exchangeInformation.exchangeAddress, settings.exchanges[index])) {
            throw new ExchangeAndAdapterDoNotMatchError(settings.exchanges[index], adapter);
          }
        }),
      );
    };

    return this.createTransaction({ from, method, args, validate });
  }

  /**
   * Create the Accounting contract for someone else
   *
   * @param from The address of the sender
   * @param manager The address of the manager
   */
  public createAccountingFor(from: Address, manager: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(manager));
      this.validateComponentNotSet(manager, 'accounting');
    };

    return this.createTransaction({ from, args: [manager], method: 'createAccountingFor', validate, amgu });
  }

  /**
   * Create the Accounting contract
   *
   * @param from The address of the sender
   */
  public createAccounting(from: Address) {
    return this.createAccountingFor(from, from);
  }

  /**
   * Create the FeeManager contract for someone else
   *
   * @param from The address of the sender
   * @param manager The address of the manager
   */
  public createFeeManagerFor(from: Address, manager: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(manager));
      this.validateComponentNotSet(manager, 'feeManager');
    };

    return this.createTransaction({ from, args: [manager], method: 'createFeeManagerFor', validate, amgu });
  }

  /**
   * Create the FeeManager contract
   *
   * @param from The address of the sender
   */
  public createFeeManager(from: Address) {
    return this.createFeeManagerFor(from, from);
  }

  /**
   * Create the Participation contract for someone else
   *
   * @param from The address of the sender
   * @param manager The address of the manager
   */
  public createParticipationFor(from: Address, manager: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(manager));
      this.validateComponentNotSet(manager, 'participation');
    };

    return this.createTransaction({ from, args: [manager], method: 'createParticipationFor', validate, amgu });
  }

  /**
   * Create the Participation contract
   *
   * @param from The address of the sender
   */
  public createParticipation(from: Address) {
    return this.createParticipationFor(from, from);
  }

  /**
   * Create the PolicyManager contract for someone else
   *
   * @param from The address of the sender
   * @param manager The address of the manager
   */
  public createPolicyManagerFor(from: Address, manager: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(manager));
      this.validateComponentNotSet(manager, 'policyManager');
    };

    return this.createTransaction({ from, args: [manager], method: 'createPolicyManagerFor', validate, amgu });
  }

  /**
   * Create the PolicyManager contract
   *
   * @param from The address of the sender
   */
  public createPolicyManager(from: Address) {
    return this.createPolicyManagerFor(from, from);
  }

  /**
   * Create the Shares contract for someone else
   *
   * @param from The address of the sender
   * @param manager The address of the manager
   */
  public createSharesFor(from: Address, manager: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(manager));
      this.validateComponentNotSet(manager, 'shares');
    };

    return this.createTransaction({ from, args: [manager], method: 'createSharesFor', validate, amgu });
  }

  /**
   * Create the Shares contract
   *
   * @param from The address of the sender
   */
  public createShares(from: Address) {
    return this.createSharesFor(from, from);
  }

  /**
   * Create the Trading contract for someone else
   *
   * @param from The address of the sender
   * @param manager The address of the manager
   */
  public createTradingFor(from: Address, manager: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(manager));
      this.validateComponentNotSet(manager, 'trading');
    };

    return this.createTransaction({ from, args: [manager], method: 'createTradingFor', validate, amgu });
  }

  /**
   * Create the Trading contract
   *
   * @param from The address of the sender
   */
  public createTrading(from: Address) {
    return this.createTradingFor(from, from);
  }

  /**
   * Create the Vault contract for someone else
   *
   * @param from The address of the sender
   * @param manager The address of the manager
   */
  public createVaultFor(from: Address, manager: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      this.validateComponentSet(await this.getManagersToHubs(manager));
      this.validateComponentNotSet(manager, 'vault');
    };

    return this.createTransaction({ from, args: [manager], method: 'createVaultFor', validate, amgu });
  }

  /**
   * Create the Vault contract
   *
   * @param from The address of the sender
   */
  public createVault(from: Address) {
    return this.createVaultFor(from, from);
  }

  /**
   * Complete the fund setup for someone else
   *
   * @param from The address of the sender
   * @param manager The address of the manager
   */
  public completeSetupFor(from: Address, manager: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      const hub = await this.getManagersToHubs(manager);
      if (await this.isInstance(hub)) {
        throw new FundSetupAlreadyCompleteError();
      }

      this.validateComponentSet(await this.getManagersToHubs(manager));

      const routes = await this.getManagersToRoutes(manager);
      Object.keys(routes).forEach((route: keyof HubRoutes) => {
        this.validateComponentSet(routes[route]);
      });
    };

    return this.createTransaction({ from, args: [manager], method: 'completeSetup', validate, amgu });
  }

  /**
   * Complete the fund setup
   *
   * @param from The address of the sender
   */
  public completeSetup(from: Address) {
    return this.completeSetupFor(from, from);
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
}

export interface FundFactory extends Factory, AmguConsumer {}
applyMixins(FundFactory, [Factory, AmguConsumer]);
