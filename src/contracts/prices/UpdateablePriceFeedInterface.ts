import BigNumber from 'bignumber.js';
import { Contract } from '../../Contract';
import { UpdatableFeedInterfaceAbi } from '../../abis/UpdatableFeedInterface.abi';
import { Address } from '../../Address';

export interface PriceUpdate {
  asset: Address;
  price: BigNumber;
}

export class UpdatablePriceFeedInterface extends Contract {
  public static readonly abi = UpdatableFeedInterfaceAbi;

  /**
   * Update the price feed.
   *
   * @param block The block number to execute the call on.
   */
  public update(from: Address, updates: PriceUpdate[]) {
    // TODO: Add validation.
    const prices = updates.map(item => item.price.toString());
    const assets = updates.map(item => item.asset);
    return this.createTransaction({ from, method: 'update', args: [assets, prices] });
  }
}
