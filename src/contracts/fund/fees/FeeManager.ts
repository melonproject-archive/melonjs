import BigNumber from 'bignumber.js';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { FeeManagerAbi } from '../../../abis/FeeManager.abi';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { toBigNumber } from '../../../utils/toBigNumber';
import { ManagementFee } from './ManagementFee';
import { PerformanceFee } from './PerformanceFee';

export type ManagementFeeInformation = {
  rate: BigNumber;
};

export type PerformanceFeeInformation = {
  rate: BigNumber;
  period: number;
};

export interface FeeManagerDeployArguments {
  hub: Address;
  denominationAsset: Address;
  fees: Address[];
  rates: BigNumber[];
  periods: number[];
  registry: Address;
}

export class FeeManager extends Contract {
  public static readonly abi = FeeManagerAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: FeeManagerDeployArguments) {
    return super.createDeployment<FeeManager>(environment, bytecode, from, [
      args.hub,
      args.denominationAsset,
      args.fees,
      args.rates.map(fee => fee.toString()),
      args.periods,
      args.registry,
    ]);
  }

  /**
   * Gets the address of the management fee contract.
   *
   * @param block The block number to execute the call on.
   */
  public getManagementFeeAddress(block?: number) {
    return this.makeCall<Address>('fees', [0], block);
  }

  /**
   * Gets the management fee information (rate).
   *
   * @param block The block number to execute the call on.
   */
  public async getManagementFeeInformation(block?: number) {
    const mgmtFeeAddress = await this.getManagementFeeAddress(block);
    const mgmtFeeContract = new ManagementFee(this.environment, mgmtFeeAddress);
    const rate = await mgmtFeeContract.getManagementFeeRate(this.contract.address);
    return {
      rate: toBigNumber(rate),
    } as ManagementFeeInformation;
  }

  /**
   * Gets the amount of accrued and unpaid management fee.
   *
   * @param block The block number to execute the call on.
   */
  public async getManagementFeeAmount(block?: number) {
    const result = await this.makeCall<string>('managementFeeAmount', undefined, block);
    return toBigNumber(result);
  }

  /**
   * Gets the address of the performance fee contract.
   *
   * @param block The block number to execute the call on.
   */
  public getPerformanceFeeAddress(block?: number) {
    return this.makeCall<Address>('fees', [1], block);
  }

  /**
   * Gets the performance fee information (rate).
   *
   * @param block The block number to execute the call on.
   */
  public async getPerformanceFeeInformation(block?: number) {
    const perfFeeAddress = await this.getPerformanceFeeAddress(block);
    const perfFeeContract = new PerformanceFee(this.environment, perfFeeAddress);

    const [rate, period] = await Promise.all([
      perfFeeContract.getPerformanceFeeRate(this.contract.address),
      perfFeeContract.getPerformanceFeePeriod(this.contract.address),
    ]);

    return {
      rate: toBigNumber(rate),
      period,
    } as PerformanceFeeInformation;
  }

  /**
   * Gets the amount of accrued and unpaid performance fee.
   *
   * @param block The block number to execute the call on.
   */
  public async getPerformanceFeeAmount(block?: number) {
    const result = await this.makeCall<BigNumber>('performanceFeeAmount', undefined, block);
    return toBigNumber(result);
  }
}

export interface FeeManager extends Spoke {}
applyMixins(FeeManager, [Spoke]);
