import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';
import { Address } from '../../../../Address';
import { OasisDexAccessorAbi } from '../../../../abis/OasisDexAccessor.abi';
import { toBigNumber } from '../../../../utils/toBigNumber';
import BigNumber from 'bignumber.js';

export interface OasisDexOrder {
  id: BigNumber;
  sellQuantity: BigNumber;
  buyQuantity: BigNumber;
}

export class OasisDexAccessor extends Contract {
  public static readonly abi = OasisDexAccessorAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<OasisDexAccessor>(environment, bytecode, from);
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
  ): Promise<OasisDexOrder[]> {
    const { '0': ids, '1': sellQtys, '2': buyQtys } = await this.makeCall<{
      '0': string[];
      '1': string[];
      '2': string[];
    }>('getOrders', [targetExchange, sellAsset, buyAsset], block);

    return (ids || []).map<OasisDexOrder>((id, index) => ({
      id: toBigNumber(id),
      sellQuantity: toBigNumber(sellQtys[index]),
      buyQuantity: toBigNumber(buyQtys[index]),
    }));
  }
}
