import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { PerformanceFeeAbi } from '../abis/PerformanceFee.abi';
import { toBigNumber } from '../utils/toBigNumber';

export class PerformanceFee extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(
      environment,
      typeof address === 'string' ? new environment.client.Contract(PerformanceFeeAbi, address) : address,
    );
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
