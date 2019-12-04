import * as R from 'ramda';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { TradingAbi } from '../../../abis/Trading.abi';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { toBigNumber } from '../../../utils/toBigNumber';
import BigNumber from 'bignumber.js';
import { Registry } from '../../version/Registry';
import { isZeroAddress } from '../../../utils/isZeroAddress';
import { stringToBytes } from '../../../utils/tests/stringToBytes';
import { hexToBytes } from 'web3-utils';

export interface ExchangeInfo {
  exchange: Address;
  adapter: Address;
  takesCustody: boolean;
}

export type ExchangeInfoMap = {
  [key: string]: ExchangeInfo;
};

export interface OpenMakeOrder {
  id: BigNumber;
  expiresAt: Date;
  orderIndex: BigNumber;
  buyAsset: Address;
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
  exchangeIndex: BigNumber;
  methodSignature: string;
  orderAddresses: [Address, Address, Address, Address, Address, Address]; // 6
  orderValues: [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]; //8
  identifier: string; //bytes32
  makerAssetData: string; // bytes
  takerAssetData: string; // bytes
  signature: string; // bytes
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

  /**
   * Gets information on all exchanges.
   *
   * @param block The block number to execute the call on.
   */
  public async getExchangeInfo(block?: number) {
    const { '0': ofExchanges, '1': ofAdapters, '2': takesCustody } = await this.makeCall<{
      '0': string[];
      '1': string[];
      '2': string[];
    }>('getExchangeInfo', undefined, block);

    const output = ofExchanges.reduce((carry, ofExchange, index) => {
      const item = {
        exchange: ofExchange,
        adapter: ofAdapters[index],
        takesCustody: takesCustody[index],
      };

      return { ...carry, [ofExchange]: item };
    }, {}) as ExchangeInfoMap;

    return output;
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
    };
  }

  /**
   * Get all open make orders.
   *
   * @param block The block number to execute the call on.
   */
  public async getOpenMakeOrders(block?: number) {
    const exchanges = await this.getExchangeInfo(block);

    const registry = new Registry(this.environment, await this.getRegistry(block));
    const assets = await registry.getRegisteredAssets(block);

    const exchangesXtokens = R.xprod(Object.keys(exchanges), assets);

    const openOrders = await Promise.all(
      exchangesXtokens.map(async ([exchange, asset]: [string, string]) => {
        const order = await this.getOpenMakeOrder(exchange, asset, block);
        return { ...order, exchange };
      }),
    );

    return openOrders.filter(o => !isZeroAddress(o.buyAsset));
  }

  /**
   * Get the details of an order.
   *
   * @param id The id of the order
   * @param block The block number to execute the call on.
   */
  public async getOrderDetails(id: BigNumber, block?: number) {
    const { '0': makerAsset, '1': takerAsset, '2': makerQuantity, '3': takerQuantity } = await this.makeCall<{
      0: string;
      1: string;
      2: string;
      3: string;
    }>('getOrderDetails', [id.toFixed(0)], block);

    return {
      makerAsset: makerAsset,
      takerAsset: takerAsset,
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

  /**
   * Call on exchange (the main).
   *
   * @param from The address of the sender
   * @param args The arguments as [[CallOnExchangeArgs]]
   */
  public callOnExchange(from: Address, args: CallOnExchangeArgs) {
    const methodArgs = [
      args.exchangeIndex.toString(),
      args.methodSignature,
      args.orderAddresses,
      args.orderValues.map(orderValue => orderValue.toString()),
      stringToBytes(args.identifier, 32),
      hexToBytes(args.makerAssetData),
      hexToBytes(args.takerAssetData),
      hexToBytes(args.signature),
    ];

    const validate = async () => {
      // TODO
    };

    return this.createTransaction({ from, method: 'callOnExchange', args: methodArgs, validate });
  }
}

export interface Trading extends Spoke {}
applyMixins(Trading, [Spoke]);
