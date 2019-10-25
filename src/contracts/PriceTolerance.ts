import BigNumber from 'bignumber.js';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { PriceToleranceAbi } from '../abis/PriceTolerance.abi';
import { applyMixins } from '../utils/applyMixins';
import { Policy } from './Policy';

export class PriceTolerance extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(PriceToleranceAbi, address));
  }

  /**
   * Gets the price tolerance
   *
   * @param block The block number to execute the call on.
   */
  public async getPriceTolerance(block?: number) {
    const result = await this.makeCall<string>('tolerance', undefined, block);
    return new BigNumber(`${result}`);
  }
}

export interface PriceTolerance extends Policy {}
applyMixins(PriceTolerance, [Policy]);
