import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { toBigNumber } from '../utils/toBigNumber';
import { Deployment } from '../Transaction';
import { FeeAbi } from '../abis/Fee.abi';
import BigNumber from 'bignumber.js';

export interface FeeInitializationArguments {
  feeRate: BigNumber;
  feePeriod: number;
  denominationAsset: Address;
}

export class Fee extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(environment, typeof address === 'string' ? new environment.client.Contract(FeeAbi, address) : address);
  }

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    const contract = new environment.client.Contract(FeeAbi);
    const transaction = contract.deploy({
      data: bytecode,
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
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
