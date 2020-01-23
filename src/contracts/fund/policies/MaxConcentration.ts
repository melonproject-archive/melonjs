import { MaxConcentrationAbi } from '../../../abis/MaxConcentration.abi';
import { IPolicy } from './IPolicy';
import { toBigNumber } from '../../../utils/toBigNumber';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import BigNumber from 'bignumber.js';

export class MaxConcentration extends IPolicy {
  public static readonly abi = MaxConcentrationAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, maxConcentration: BigNumber) {
    return super.createDeployment<MaxConcentration>(environment, bytecode, from, [maxConcentration.toFixed(0)]);
  }

  /**
   * Gets the maximum concentration of an asset in the portfolio.
   *
   * @param block The block number to execute the call on.
   */
  public async getMaxConcentration(block?: number) {
    const result = await this.makeCall<string>('maxConcentration', undefined, block);
    return toBigNumber(result);
  }
}
