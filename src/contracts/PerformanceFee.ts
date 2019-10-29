import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { PerformanceFeeAbi } from '../abis/PerformanceFee.abi';
import { toBigNumber } from '../utils/toBigNumber';

export class PerformanceFee extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(PerformanceFeeAbi, address));
  }

  /**
   * Gets the performance fee rate.
   *
   * @param address The address of the fee manager contract
   * @param block The block number to execute the call on.
   */
  public async getPerformanceFeeRate(address: Address, block?: number) {
    const result = await this.makeCall<string>('performanceFeeRate', [address], block);
    return toBigNumber(result);
  }

  /**
   * Gets the performance fee period.
   *
   * @param address The address of the fee manager contract
   * @param block The block number to execute the call on.
   */
  public async getPerformanceFeePeriod(address: Address, block?: number) {
    const result = await this.makeCall<string>('performanceFeePeriod', [address], block);
    return parseInt(result, 10);
  }
}
