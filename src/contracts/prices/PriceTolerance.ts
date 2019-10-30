import { Contract } from '../../Contract';
import { PriceToleranceAbi } from '../../abis/PriceTolerance.abi';
import { applyMixins } from '../../utils/applyMixins';
import { toBigNumber } from '../../utils/toBigNumber';
import { Policy } from '../fund/policies/Policy';

export class PriceTolerance extends Contract {
  public static readonly abi = PriceToleranceAbi;

  /**
   * Gets the price tolerance
   *
   * @param block The block number to execute the call on.
   */
  public async getPriceTolerance(block?: number) {
    const result = await this.makeCall<string>('tolerance', undefined, block);
    return toBigNumber(result);
  }
}

export interface PriceTolerance extends Policy {}
applyMixins(PriceTolerance, [Policy]);
