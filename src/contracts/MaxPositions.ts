import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import BigNumber from 'bignumber.js';
import { MaxPositionsAbi } from '../abis/MaxPositions';

export class MaxPositions extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(MaxPositionsAbi, address));
  }

  /**
   * Gets the maximum number of positions
   *
   * @param block The block number to execute the call on.
   */
  public async getMaxPositions(block?: number) {
    const result = await this.makeCall<string>('maxPositions', undefined, block);
    return new BigNumber(`${result}`);
  }
}
