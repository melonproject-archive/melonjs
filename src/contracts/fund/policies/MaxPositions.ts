import { Contract } from '../../../Contract';
import { MaxPositionsAbi } from '../../../abis/MaxPositions.abi';
import { applyMixins } from '../../../utils/applyMixins';
import { Policy } from './Policy';
import { toBigNumber } from '../../../utils/toBigNumber';

export class MaxPositions extends Contract {
  public static readonly abi = MaxPositionsAbi;

  /**
   * Gets the maximum number of positions.
   *
   * @param block The block number to execute the call on.
   */
  public async getMaxPositions(block?: number) {
    const result = await this.makeCall<string>('maxPositions', undefined, block);
    return toBigNumber(result);
  }
}

export interface MaxPositions extends Policy {}
applyMixins(MaxPositions, [Policy]);
