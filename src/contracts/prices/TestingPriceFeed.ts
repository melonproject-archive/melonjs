import { Contract } from '../../Contract';
import { TestingPriceFeedAbi } from '../../abis/TestingPriceFeed.abi';
import { applyMixins } from '../../utils/applyMixins';
import { PriceSourceInterface } from './PriceSourceInterface';
import { UpdatablePriceFeedInterface } from './UpdateablePriceFeedInterface';

export class TestingPriceFeed extends Contract {
  public static readonly abi = TestingPriceFeedAbi;
}

export interface TestingPriceFeed extends PriceSourceInterface, UpdatablePriceFeedInterface {}
applyMixins(TestingPriceFeed, [UpdatablePriceFeedInterface, PriceSourceInterface]);
