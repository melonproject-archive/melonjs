import { CanonicalPriceFeedAbi } from '../../abis/CanonicalPriceFeed.abi';
import { Contract } from '../../Contract';
import { applyMixins } from '../../utils/applyMixins';
import { PriceSourceInterface } from './PriceSourceInterface';

export class CanonicalPriceFeed extends Contract {
  public static readonly abi = CanonicalPriceFeedAbi;
}

export interface CanonicalPriceFeed extends PriceSourceInterface {}
applyMixins(CanonicalPriceFeed, [PriceSourceInterface]);
