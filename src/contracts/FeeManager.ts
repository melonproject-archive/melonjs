import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { FeeManagerAbi } from '../abis/FeeManager';
import BigNumber from 'bignumber.js';
import { ManagementFee } from './ManagementFee';
import { PerformanceFee } from './PerformanceFee';

export type ManagementFeeInformation = {
  rate: BigNumber;
};

export type PerformanceFeeInformation = {
  rate: BigNumber;
};

export class FeeManager extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(FeeManagerAbi, address));
  }

  /**
   * Gets the address of the management fee contract.
   *
   * @param block The block number to execute the call on.
   */
  public async getManagementFeeAddress(block?: number) {
    return await this.makeCall<Address>('fees', [0], block);
  }

  /**
   * Gets the management fee information (rate).
   *
   * @param block The block number to execute the call on.
   */
  public async getManagementFeeInformation(block?: number) {
    const mgmtFeeAddress = await this.makeCall<Address>('fees', [0], block);
    const mgmtFeeContract = new ManagementFee(
      this.environment,
      this.environment.deployment.melonContracts.fees.managementFee,
    );
    const rate = mgmtFeeContract.getManagementFeeRate(mgmtFeeAddress);
    return {
      rate: new BigNumber(`${rate}`),
    } as ManagementFeeInformation;
  }

  /**
   * Gets the address of the performance fee contract.
   *
   * @param block The block number to execute the call on.
   */
  public async getPerformanceFeeAddress(block?: number) {
    return await this.makeCall<Address>('fees', [1], block);
  }

  /**
   * Gets the performance fee information (rate).
   *
   * @param block The block number to execute the call on.
   */
  public async getPerformanceFeeInformation(block?: number) {
    const perfFeeAddress = await this.makeCall<Address>('fees', [1], block);
    const perfFeeContract = new PerformanceFee(
      this.environment,
      this.environment.deployment.melonContracts.fees.performanceFee,
    );
    const rate = perfFeeContract.getPerformanceFeeRate(perfFeeAddress);
    return {
      rate: new BigNumber(`${rate}`),
    } as PerformanceFeeInformation;
  }
}
