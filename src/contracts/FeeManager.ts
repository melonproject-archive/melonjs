import BigNumber from 'bignumber.js';
import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { FeeManagerAbi } from '../abis/FeeManager.abi';
import { ManagementFee } from './ManagementFee';
import { PerformanceFee } from './PerformanceFee';
import { Spoke } from './Spoke';
import { applyMixins } from '../utils/applyMixins';
import { toBigNumber } from '../utils/toBigNumber';
import { Deployment } from '../Transaction';

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
  periods: BigNumber[];
  registry: Address;
}

export class FeeManager extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(environment, typeof address === 'string' ? new environment.client.Contract(FeeManagerAbi, address) : address);
  }

  public static deploy(environment: Environment, bytecode: string, from: Address, args: FeeManagerDeployArguments) {
    const contract = new environment.client.Contract(FeeManagerAbi);
    const transaction = contract.deploy({
      data: bytecode,
      arguments: [args.hub, args.denominationAsset, args.fees, args.rates, args.periods, args.registry],
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
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
    const mgmtFeeAddress = await this.getManagementFeeAddress(block);
    const mgmtFeeContract = new ManagementFee(this.environment, mgmtFeeAddress);
    const rate = await mgmtFeeContract.getManagementFeeRate(this.contract.address);
    return {
      rate: toBigNumber(rate),
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
}

export interface FeeManager extends Spoke {}
applyMixins(FeeManager, [Spoke]);
