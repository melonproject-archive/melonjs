import { TestingPriceFeedAbi } from '../../abis/TestingPriceFeed.abi';
import { IPriceSource } from './IPriceSource';
import { Address } from '../../Address';
import BigNumber from 'bignumber.js';

export interface PriceUpdate {
  asset: Address;
  price: BigNumber;
}

export class TestingPriceFeed extends IPriceSource {
  public static readonly abi = TestingPriceFeedAbi;

  /**
   * Update the price feed.
   *
   * @param block The block number to execute the call on.
   */
  public update(from: Address, updates: PriceUpdate[]) {
    const prices = updates.map(item => item.price.toFixed(0));
    const assets = updates.map(item => item.asset);
    return this.createTransaction({ from, method: 'update', args: [assets, prices] });
  }
}
