import BigNumber from 'bignumber.js';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { TradingAbi } from '../../../abis/Trading.abi';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { toBigNumber } from '../../../utils/toBigNumber';
import { Registry } from '../../version/Registry';
import { isZeroAddress } from '../../../utils/isZeroAddress';
import { hexToBytes, numberToHex, keccak256 } from 'web3-utils';
import { functionSignature } from '../../../utils/functionSignature';
import { ExchangeAdapterAbi } from '../../../abis/ExchangeAdapter.abi';
import {
  AdapterMethodNotAllowedError,
  InvalidExchangeIndexError,
  PreTradePolicyValidationError,
  SenderIsNotManagerOrContractError,
} from './Trading.errors';
import { PolicyManager } from '../policies/PolicyManager';
import { Policy } from '../policies/Policy';
import { toDate } from '../../../utils/toDate';
import { AssetNotRegisteredError } from '../../version/Registry.error';
import { sameAddress } from '../../../utils/sameAddress';
import { Hub } from '../hub/Hub';

export interface ExchangeInfo {
  exchange: Address;
  adapter: Address;
  takesCustody: boolean;
}

export interface OpenMakeOrder {
  id: BigNumber;
  expiresAt: Date;
  orderIndex: BigNumber;
  buyAsset: Address;
}

export interface OpenMakeOrderWithExchange extends OpenMakeOrder {
  exchange: Address;
}

export enum OrderUpdateType {
  make,
  take,
  cancel,
}

export interface Order {
  exchangeAddress: Address;
  orderId: number;
  updateType: OrderUpdateType;
  makerAsset: Address;
  takerAsset: Address;
  makerQuantity: BigNumber;
  takerQuantity: BigNumber;
  timestamp: Date;
  fillTakerQuantity: BigNumber;
}

export interface TradingDeployArguments {
  hub: Address;
  exchanges: Address[];
  adapters: Address[];
  registry: Address;
}

export interface CallOnExchangeArgs {
  exchangeIndex: number;
  methodSignature: string;
  orderAddresses: [Address, Address, Address, Address, Address, Address];
  orderValues: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
  identifier: string;
  makerAssetData: string;
  takerAssetData: string;
  signature: string;
}

export class Trading extends Contract {
  public static readonly abi = TradingAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: TradingDeployArguments) {
    return super.createDeployment<Trading>(environment, bytecode, from, [
      args.hub,
      args.exchanges,
      args.adapters,
      args.registry,
    ]);
  }

  public returnBatchToVault(from: Address, assets: Address[]) {
    const validate = async () => {
      const hub = new Hub(this.environment, await this.getHub());
      if (
        !(
          sameAddress(from, this.contract.address) ||
          sameAddress(from, await hub.getManager()) ||
          (await hub.isShutDown())
        )
      ) {
        throw new SenderIsNotManagerOrContractError(from);
      }
    };

    return this.createTransaction({ from, method: 'returnBatchToVault', args: [assets], validate });
  }

  /**
   * Gets information on all exchanges.
   *
   * @param block The block number to execute the call on.
   */
  public async getExchangeInfo(block?: number) {
    const { '0': ofExchanges, '1': ofAdapters, '2': takesCustody } = await this.makeCall<{
      '0': string[];
      '1': string[];
      '2': boolean[];
    }>('getExchangeInfo', undefined, block);

    const output = ofExchanges.map((_, index) => ({
      exchange: ofExchanges[index],
      adapter: ofAdapters[index],
      takesCustody: takesCustody[index],
    }));

    return output as ExchangeInfo[];
  }

  /**
   * Gets information for a single exchange
   *
   * @param index The index of the exchange
   * @param block The block number to execute the call on.
   */
  public async getExchange(index: number, block?: number) {
    const { '0': exchange, '1': adapter, '2': takesCustody } = await this.makeCall<{
      '0': string;
      '1': string;
      '2': boolean;
    }>('exchanges', [index], block);

    return { exchange, adapter, takesCustody } as ExchangeInfo;
  }

  /**
   * Get the details of an open make order.
   *
   * @param exchange The address of the exchange
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public async getOpenMakeOrder(exchange: Address, asset: Address, block?: number) {
    const result = await this.makeCall<OpenMakeOrder>('exchangesToOpenMakeOrders', [exchange, asset], block);

    return {
      id: toBigNumber(result.id),
      expiresAt: new Date(parseInt(`${result.expiresAt}`, 10) * 1000),
      orderIndex: toBigNumber(result.orderIndex),
      buyAsset: result.buyAsset,
    } as OpenMakeOrder;
  }

  /**
   * Get all open make orders.
   *
   * @param block The block number to execute the call on.
   */
  public async getOpenMakeOrders(block?: number) {
    const [exchangeInfo, registryAddress] = await Promise.all([this.getExchangeInfo(block), this.getRegistry(block)]);
    const registry = new Registry(this.environment, registryAddress);
    const assets = await registry.getRegisteredAssets(block);
    const exchanges = exchangeInfo.map(exchange => exchange.exchange);
    const possibilities = [].concat.apply(
      [],
      exchanges.map(exchange => assets.map(asset => [exchange, asset])),
    ) as [string, string][];

    const openOrders = await Promise.all(
      possibilities.map(async ([exchange, asset]) => {
        const order = await this.getOpenMakeOrder(exchange, asset, block);
        return { ...order, exchange };
      }),
    );

    return openOrders.filter(o => !isZeroAddress(o.buyAsset));
  }

  /**
   * Get the details of an order.
   *
   * @param index The index of the order
   * @param block The block number to execute the call on.
   */
  public async getOrderDetails(index: BigNumber, block?: number) {
    const details = await this.makeCall<{
      0: string;
      1: string;
      2: string;
      3: string;
    }>('getOrderDetails', [index.toFixed(0)], block);

    if (!details) {
      return null;
    }

    const { '0': makerAsset, '1': takerAsset, '2': makerQuantity, '3': takerQuantity } = details;
    return {
      makerAsset,
      takerAsset,
      makerQuantity: toBigNumber(makerQuantity),
      takerQuantity: toBigNumber(takerQuantity),
    };
  }

  /**
   * Checks if an order is expired.
   *
   * @param exchange The address of the exchange
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public isOrderExpired(exchange: Address, asset: Address, block?: number) {
    return this.makeCall<boolean>('isOrderExpired', [exchange, asset], block);
  }

  /**
   * Gets the order lifespan.
   *
   * @param block The block number to execute the call on.
   */
  public async getOrderLifespan(block?: number) {
    const result = await this.makeCall<string>('ORDER_LIFESPAN', undefined, block);
    return toBigNumber(result);
  }

  private async validateCallOnExchange(args: CallOnExchangeArgs) {
    const registry = new Registry(this.environment, await this.getRegistry());
    const exchange = await this.getExchange(args.exchangeIndex);
    if (!exchange) {
      throw new InvalidExchangeIndexError(args.exchangeIndex);
    }

    const encodedSignature = keccak256(args.methodSignature).substr(0, 10);
    const adapterMethodIsAllowed = await registry.isAdapterMethodAllowed(exchange.adapter, encodedSignature);
    if (!adapterMethodIsAllowed) {
      throw new AdapterMethodNotAllowedError(exchange.adapter, encodedSignature);
    }

    const policyManagerAddress = (await this.getRoutes()).policyManager;
    const policyManager = new PolicyManager(this.environment, policyManagerAddress);
    const exchangeAddress = (await this.getExchange(args.exchangeIndex)).exchange;

    const policies = await policyManager.getPoliciesBySignature(encodedSignature);
    const prePolicies = policies.pre;

    const rulesRespected = await Promise.all(
      prePolicies.map(policyAddress => {
        const policy = new Policy(this.environment, policyAddress);
        return policy.rule({
          signature: encodedSignature,
          addresses: [
            args.orderAddresses[0],
            args.orderAddresses[1],
            args.orderAddresses[2],
            args.orderAddresses[3],
            exchangeAddress,
          ],
          values: [args.orderValues[0], args.orderValues[1], args.orderValues[6]],
          identifier: args.identifier,
        });
      }),
    );
    if (rulesRespected.some(respected => respected === false)) {
      throw new PreTradePolicyValidationError(encodedSignature);
    }
    const makeOrderSignature = functionSignature(ExchangeAdapterAbi, 'makeOrder');
    const takeOrderSignature = functionSignature(ExchangeAdapterAbi, 'takeOrder');

    if (args.methodSignature === makeOrderSignature || args.methodSignature === takeOrderSignature) {
      const makerAssetIsRegistered = await registry.isAssetRegistered(args.orderAddresses[2]);
      if (!makerAssetIsRegistered) {
        throw new AssetNotRegisteredError(args.orderAddresses[2]);
      }

      const takerAssetIsRegistered = await registry.isAssetRegistered(args.orderAddresses[3]);
      if (!takerAssetIsRegistered) {
        throw new AssetNotRegisteredError(args.orderAddresses[3]);
      }
    }
  }

  /**
   * Call on exchange (all trading transactions go through this).
   *
   * @param from The address of the sender
   * @param args The arguments as [[CallOnExchangeArgs]]
   * @param validation An additional async validation function
   */
  public callOnExchange(from: Address, args: CallOnExchangeArgs, validationFunction?: () => Promise<void>) {
    const methodArgs = [
      args.exchangeIndex.toFixed(0),
      args.methodSignature,
      args.orderAddresses,
      args.orderValues.map(orderValue => orderValue.toFixed(0)),
      args.identifier,
      hexToBytes(args.makerAssetData),
      hexToBytes(args.takerAssetData),
      hexToBytes(args.signature),
    ];

    const validate = async () => {
      await this.validateCallOnExchange(args);
      if (typeof validationFunction === 'function') {
        await validationFunction();
      }
    };

    return this.createTransaction({ from, method: 'callOnExchange', args: methodArgs, validate });
  }

  /**
   * Update and get quantity being traded
   *
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public async updateAndGetQuantityBeingTraded(asset: Address, block?: number) {
    const result = await this.makeCall<string>('updateAndGetQuantityBeingTraded', [asset], block);
    return toBigNumber(result);
  }

  /**
   * Update and get quantity being traded
   *
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public sendUpdateAndGetQuantityBeingTraded(from: Address, asset: Address, block?: number) {
    return this.createTransaction({ from, method: 'updateAndGetQuantityBeingTraded', args: [asset] });
  }

  /**
   * Update and get quantity held in exchanges
   *
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public async updateAndGetQuantityHeldInExchange(asset: Address, block?: number) {
    const result = await this.makeCall<string>('updateAndGetQuantityHeldInExchange', [asset], block);
    return toBigNumber(result);
  }

  /**
   * Update and get quantity held in exchanges
   *
   * @param identifier The identifier of the order
   * @param block The block number to execute the call on.
   */
  public getZeroExOrderDetails(identifier: BigNumber, block?: number) {
    return this.makeCall('getZeroExOrderDetails', [numberToHex(identifier.toFixed(0))], block);
  }

  /**
   * Check if there is an open make order for a certain asset
   *
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public checkOpenMakeOrder(asset: Address, block?: number) {
    return this.makeCall<boolean>('isInOpenMakeOrder', [asset], block);
  }

  /**
   * Get maker asset cooldown time
   *
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public async getMakerAssetCooldown(asset: Address, block?: number): Promise<Date | void> {
    const result = await this.makeCall<string>('makerAssetCooldown', [asset], block);
    if (toBigNumber(result).isZero()) {
      return;
    }

    return toDate(result);
  }
}

export interface Trading extends Spoke {}
applyMixins(Trading, [Spoke]);
