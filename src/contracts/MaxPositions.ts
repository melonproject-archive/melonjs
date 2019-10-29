import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { MaxPositionsAbi } from '../abis/MaxPositions.abi';
import { applyMixins } from '../utils/applyMixins';
import { Policy } from './Policy';
import { toBigNumber } from '../utils/toBigNumber';

export class MaxPositions extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(MaxPositionsAbi, address));
  }

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
