import { Contract } from '../../Contract';
import { KyberPriceFeedAbi } from '../../abis/KyberPriceFeed.abi';
import { applyMixins } from '../../utils/applyMixins';
import { PriceSourceInterface } from './PriceSourceInterface';
import { Address } from '../../Address';

export class KyberPriceFeed extends Contract {
  public static readonly abi = KyberPriceFeedAbi;

  /**
   * Update the price feed.
   *
   * @param block The block number to execute the call on.
   */
  public update(from: Address) {
    // TODO: Add validation.
    return this.createTransaction({ from, method: 'update' });
  }
}

export interface KyberPriceFeed extends PriceSourceInterface {}
applyMixins(KyberPriceFeed, [PriceSourceInterface]);
