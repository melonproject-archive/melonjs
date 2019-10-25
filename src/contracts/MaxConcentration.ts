import BigNumber from 'bignumber.js';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { MaxConcentrationAbi } from '../abis/MaxConcentration.abi';
import { applyMixins } from '../utils/applyMixins';
import { Policy } from './Policy';

export class MaxConcentration extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(MaxConcentrationAbi, address));
  }

  /**
   * Gets the maximum concentration of an asset in the portfolio.
   *
   * @param block The block number to execute the call on.
   */
  public async getMaxConcentration(block?: number) {
    const result = await this.makeCall<string>('maxConcentration', undefined, block);
    return new BigNumber(`${result}`);
  }
}

export interface MaxConcentration extends Policy {}
applyMixins(MaxConcentration, [Policy]);
