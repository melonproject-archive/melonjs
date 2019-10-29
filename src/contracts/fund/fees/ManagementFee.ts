import { Contract as EthContract } from 'web3-eth-contract';
import { Fee } from './Fee';
import { applyMixins } from '../../../utils/applyMixins';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { ManagementFeeAbi } from '../../../abis/ManagementFee.abi';
import { Contract } from '../../../Contract';
import { Deployment } from '../../../Transaction';
import { toBigNumber } from '../../../utils/toBigNumber';

export class ManagementFee extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(
      environment,
      typeof address === 'string' ? new environment.client.Contract(ManagementFeeAbi, address) : address,
    );
  }

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    const contract = new environment.client.Contract(ManagementFeeAbi);
    const transaction = contract.deploy({
      data: bytecode,
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
  }

  /**
   * Gets the management fee rate.
   *
   * @param feeManagerAddress The address of the fee manager contract
   * @param block The block number to execute the call on.
   */
  public async getManagementFeeRate(feeManagerAddress: Address, block?: number) {
    const result = await this.makeCall<string>('managementFeeRate', [feeManagerAddress], block);
    return toBigNumber(result);
  }

  /**
   * Gets the last payout time.
   *
   * @param feeManagerAddress The address of the fee manager contract
   * @param block The block number to execute the call on.
   */
  public async getLastPayoutTime(feeManagerAddress: Address, block?: number) {
    const result = await this.makeCall<string>('lastPayoutTime', [feeManagerAddress], block);
    return toBigNumber(result);
  }
}

export interface ManagementFee extends Fee {}
applyMixins(ManagementFee, [Fee]);
