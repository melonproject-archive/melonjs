import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { PerformanceFeeAbi } from '../../../abis/PerformanceFee.abi';
import { toBigNumber } from '../../../utils/toBigNumber';
import { IFee } from './IFee';
import { toDate } from '../../../utils/toDate';

export class PerformanceFee extends IFee {
  public static readonly abi = PerformanceFeeAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<PerformanceFee>(environment, bytecode, from);
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

  /**
   * Gets the current high water mark
   *
   * @param address The address of the fee manager contract
   * @param block The block number to execute the call on.
   */
  public async getHighWaterMark(address: Address, block?: number) {
    const result = await this.makeCall<string>('highWaterMark', [address], block);
    return toBigNumber(result);
  }

  /**
   * Gets the last payout time
   *
   * @param address The address of the fee manager contract
   * @param block The block number to execute the call on.
   */
  public async getLastPayoutTime(address: Address, block?: number) {
    const result = await this.makeCall<string>('lastPayoutTime', [address], block);
    return toBigNumber(result);
  }

  /**
   * Gets the initialize time
   *
   * @param address The address of the fee manager contract
   * @param block The block number to execute the call on.
   */
  public async getInitializeTime(address: Address, block?: number) {
    const result = await this.makeCall<string>('initializeTime', [address], block);
    return toDate(result);
  }

  /**
   * Checks wether the performance fee can be updated
   *
   * @param address The address of the fee manager contract
   * @param block The block number to execute the call on.
   */
  public canUpdate(address: Address, block?: number) {
    return this.makeCall<boolean>('canUpdate', [address], block);
  }

  /**
   * Gets the divisor.
   *
   * @param block The block number to execute the call on.
   */
  public async getDivisor(block?: number) {
    const result = await this.makeCall<string>('DIVISOR', undefined, block);
    return toBigNumber(result);
  }
}
