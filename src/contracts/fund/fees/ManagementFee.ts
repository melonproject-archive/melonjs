import { Fee } from './Fee';
import { applyMixins } from '../../../utils/applyMixins';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { ManagementFeeAbi } from '../../../abis/ManagementFee.abi';
import { Contract } from '../../../Contract';
import { toBigNumber } from '../../../utils/toBigNumber';

export class ManagementFee extends Contract {
  public static readonly abi = ManagementFeeAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<ManagementFee>(environment, bytecode, from);
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
}

export interface ManagementFee extends Fee {}
applyMixins(ManagementFee, [Fee]);
