import BigNumber from 'bignumber.js';
import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';
import { Address } from '../../../../Address';
import { ZeroExV2ExchangeAbi } from '../../../../abis/ZeroExV2Exchange.abi';
import { Order } from '@0x/types';

export interface ZeroExV2Order extends Order {}

export enum ZeroExV2OrderStatus {
  INVALID,
  INVALID_MAKER_ASSET_AMOUNT,
  INVALID_TAKER_ASSET_AMOUNT,
  FILLABLE,
  EXPIRED,
  FULLY_FILLED,
  CANCELLED,
}

export interface ZeroExV2OrderInfo {
  orderStatus: ZeroExV2OrderStatus;
  orderHash: string;
  orderTakerAssetFilledAmount: BigNumber;
}

export class ZeroExV2Exchange extends Contract {
  public static readonly abi = ZeroExV2ExchangeAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, closetime: BigNumber) {
    return super.createDeployment<ZeroExV2Exchange>(environment, bytecode, from, [closetime.toFixed(0)]);
  }

  /**
   * Gets the order info.
   *
   * @param order The order object.
   * @param block The block number to execute the call on.
   */
  public async getOrderInfo(order: ZeroExV2Order, block?: number) {
    return await this.makeCall('getOrderInfo', [order], block);
  }
}
