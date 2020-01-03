import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';
import { Address } from '../../../../Address';
import { MatchingMarketAccessorAbi } from '../../../../abis/MatchingMarketAccessor.abi';
import { toBigNumber } from '../../../../utils/toBigNumber';
import BigNumber from 'bignumber.js';

export interface MatchingMarketOrder {
  id: BigNumber;
  sellQuantity: BigNumber;
  buyQuantity: BigNumber;
}

export class MatchingMarketAccessor extends Contract {
  public static readonly abi = MatchingMarketAccessorAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<MatchingMarketAccessor>(environment, bytecode, from);
  }

  /**
   * Gets current market orders for a given asset pair.
   *
   * @param targetExchange The address of the exchange.
   * @param sellAsset The sell asset address.
   * @param buyAsset The buy asset address.
   * @param block The block number to execute the call on.
   */
  public async getOrders(
    targetExchange: Address,
    sellAsset: Address,
    buyAsset: Address,
    block?: number,
  ): Promise<MatchingMarketOrder[]> {
    const { '0': ids, '1': sellQtys, '2': buyQtys } = await this.makeCall<{
      '0': string[];
      '1': string[];
      '2': string[];
    }>('getOrders', [targetExchange, sellAsset, buyAsset], block);

    return (ids || []).map<MatchingMarketOrder>((id, index) => ({
      id: toBigNumber(id),
      sellQuantity: toBigNumber(sellQtys[index]),
      buyQuantity: toBigNumber(buyQtys[index]),
    }));
  }
}
