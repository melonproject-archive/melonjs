import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import BigNumber from 'bignumber.js';
import { PerformanceFeeAbi } from '../abis/PerformanceFee';

export class PerformanceFee extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(PerformanceFeeAbi, address));
  }

  /**
   * Gets the address of the management fee contract.
   *
   * @param address The address of the performance fee contract
   * @param block The block number to execute the call on.
   */
  public async getPerformanceFeeRate(address: Address, block?: number) {
    const result = await this.makeCall<Address>('performanceFeeRate', [address], block);
    return new BigNumber(`${result}`);
  }
}
