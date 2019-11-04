import { Contract } from '../../../Contract';
import { MaxPositionsAbi } from '../../../abis/MaxPositions.abi';
import { applyMixins } from '../../../utils/applyMixins';
import { Policy } from './Policy';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { hexToNumber } from 'web3-utils';

export class MaxPositions extends Contract {
  public static readonly abi = MaxPositionsAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, maxPositions: number) {
    return super.createDeployment<MaxPositions>(environment, bytecode, from, [maxPositions]);
  }

  /**
   * Gets the maximum number of positions.
   *
   * @param block The block number to execute the call on.
   */
  public async getMaxPositions(block?: number) {
    const result = await this.makeCall<number>('maxPositions', undefined, block);
    return hexToNumber(result);
  }
}

export interface MaxPositions extends Policy {}
applyMixins(MaxPositions, [Policy]);
