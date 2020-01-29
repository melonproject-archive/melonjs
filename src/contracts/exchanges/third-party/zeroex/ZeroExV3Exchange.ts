import BigNumber from 'bignumber.js';
import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';
import { Address } from '../../../../Address';
import { Order } from '@0x/order-utils';
import { ZeroExV3ExchangeAbi } from '../../../../abis/ZeroExV3Exchange.abi';

export interface ZeroExV3Order extends Order {}

export enum ZeroExV3OrderStatus {
  INVALID,
  INVALID_MAKER_ASSET_AMOUNT,
  INVALID_TAKER_ASSET_AMOUNT,
  FILLABLE,
  EXPIRED,
  FULLY_FILLED,
  CANCELLED,
}

export interface ZeroExV3OrderInfo {
  orderStatus: ZeroExV3OrderStatus;
  orderHash: string;
  orderTakerAssetFilledAmount: BigNumber;
}

export class ZeroExV3Exchange extends Contract {
  public static readonly abi = ZeroExV3ExchangeAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, closetime: BigNumber) {
    return super.createDeployment<ZeroExV3Exchange>(environment, bytecode, from, [closetime.toFixed(0)]);
  }

  /**
   * Gets the order info.
   *
   * @param order The order object.
   * @param block The block number to execute the call on.
   */
  public async getOrderInfo(order: ZeroExV3Order, block?: number) {
    return await this.makeCall('getOrderInfo', [order], block);
  }
}
