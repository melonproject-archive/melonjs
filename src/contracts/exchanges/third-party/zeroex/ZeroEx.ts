import BigNumber from 'bignumber.js';
import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';
import { Address } from '../../../../Address';
import { ExchangeAbi } from '../../../../abis/Exchange.abi';
import { Order } from '@0x/types';

export interface ZeroExOrder extends Order {}

export enum ZeroExOrderStatus {
  INVALID,
  INVALID_MAKER_ASSET_AMOUNT,
  INVALID_TAKER_ASSET_AMOUNT,
  FILLABLE,
  EXPIRED,
  FULLY_FILLED,
  CANCELLED,
}

export interface ZeroExOrderInfo {
  orderStatus: ZeroExOrderStatus;
  orderHash: string;
  orderTakerAssetFilledAmount: BigNumber;
}

export class ZeroEx extends Contract {
  public static readonly abi = ExchangeAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, closetime: BigNumber) {
    return super.createDeployment<ZeroEx>(environment, bytecode, from, [closetime.toString()]);
  }

  /**
   * Gets the order info.
   *
   * @param order The order object.
   * @param block The block number to execute the call on.
   */
  public async getOrderInfo(order: ZeroExOrder, block?: number) {
    return await this.makeCall('getOrderInfo', [order], block);
  }
}
