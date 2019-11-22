import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { toBigNumber } from '../../../utils/toBigNumber';
import { FeeAbi } from '../../../abis/Fee.abi';
import BigNumber from 'bignumber.js';
import { ValidationError } from '../../../errors/ValidationError';

export interface FeeInitializationArguments {
  feeRate: BigNumber;
  feePeriod: number;
  denominationAsset: Address;
}

export class FeeAlreadyInitializedError extends ValidationError {
  public readonly name = 'FeeAlreadyInitializedError';

  constructor(message: string = 'Fee is already initialized for user.') {
    super(message);
  }
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
    const result = await this.makeCall<string>('feeAmount', undefined, block);
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

  /**
   * Initializes a fee for a user (e.g. sets the parameters for a fund)
   *
   * @param from The sender address
   * @param fee The fee rate, period and denomination asset
   */
  public initializeForUser(from: Address, fee: FeeInitializationArguments) {
    const method = 'initializeForUser';
    const args = [fee.feeRate.toString(), fee.feePeriod, fee.denominationAsset];

    const validate = async () => {
      const lastPayoutTime = await this.getLastPayoutTime(from);
      if (!lastPayoutTime.isZero()) throw new FeeAlreadyInitializedError();
    };

    return this.createTransaction({ from, method, args, validate });
  }

  /**
   * Updates the state for a fee
   */
  public updateState(from: Address) {
    return this.createTransaction({ from, method: 'updateState' });
  }
}
