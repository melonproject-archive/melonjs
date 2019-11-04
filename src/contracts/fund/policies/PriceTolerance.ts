import { Contract } from '../../../Contract';
import { PriceToleranceAbi } from '../../../abis/PriceTolerance.abi';
import { applyMixins } from '../../../utils/applyMixins';
import { toBigNumber } from '../../../utils/toBigNumber';
import { Policy } from './Policy';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';

export class PriceTolerance extends Contract {
  public static readonly abi = PriceToleranceAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, tolerance: number) {
    return super.createDeployment<PriceTolerance>(environment, bytecode, from, [tolerance]);
  }

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
