import { PriceToleranceAbi } from '../../../abis/PriceTolerance.abi';
import { toBigNumber } from '../../../utils/toBigNumber';
import { IPolicy } from './IPolicy';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';

export class PriceTolerance extends IPolicy {
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
