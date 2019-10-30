import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { toBigNumber } from '../../../utils/toBigNumber';
import { FeeAbi } from '../../../abis/Fee.abi';
import BigNumber from 'bignumber.js';

export interface FeeInitializationArguments {
  feeRate: BigNumber;
  feePeriod: number;
  denominationAsset: Address;
}

export class Fee extends Contract {
  public static readonly abi = FeeAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<Fee>(environment, bytecode, from);
  }

  /**
   * Gets the identifier.
   *
   * @param block The block number to execute the call on.
   */
  public async identifier(block?: number) {
    const result = await this.makeCall<string>('identifier', undefined, block);
    return parseInt(result, 10);
  }

  /**
   * Gets the fee amount.
   *
   * @param block The block number to execute the call on.
   */
  public async feeAmount(block?: number) {
    const result = await this.makeCall<number>('feeAmount', undefined, block);
    return toBigNumber(result);
  }

  /**
   * Initializes a fee for a user (e.g. sets the parameters for a fund)
   *
   * @param from The sender address
   * @param fee The fee rate, period and denomination asset
   */
  public initializeForUser(from: Address, fee: FeeInitializationArguments) {
    return this.createTransaction('initializeForUser', from, [
      fee.feeRate.toString(),
      fee.feePeriod,
      fee.denominationAsset,
    ]);
  }

  /**
   * Updates the state for a fee
   */
  public updateState(from: Address) {
    return this.createTransaction('updateState', from);
  }
}
