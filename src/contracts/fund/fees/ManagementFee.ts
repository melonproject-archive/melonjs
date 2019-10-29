import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { ManagementFeeAbi } from '../../../abis/ManagementFee.abi';
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
