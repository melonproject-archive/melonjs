import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { ManagementFeeAbi } from '../abis/ManagementFee.abi';
import { toBigNumber } from '../utils/toBigNumber';

export class ManagementFee extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(ManagementFeeAbi, address));
  }

  /**
   * Gets the management fee rate.
   *
   * @param feeManagerAddress The address of the fee manager contract
   * @param block The block number to execute the call on.
   */
  public async getManagementFeeRate(feeManagerAddress: Address, block?: number) {
    const result = await this.makeCall<Address>('managementFeeRate', [feeManagerAddress], block);
    return toBigNumber(result);
  }
}
