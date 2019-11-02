import { Contract } from '../../../Contract';
import { PolicyAbi } from '../../../abis/Policy.abi';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { BigNumber } from 'bignumber.js';

export interface PolicyRule {
  sig: string;
  addresses: Address[];
  values: BigNumber[];
  identifier: string;
}

export class Policy extends Contract {
  public static readonly abi = PolicyAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<Policy>(environment, bytecode, from);
  }

  /**
   * Gets the identifier of a policy.
   *
   * @param block The block number to execute the call on.
   */
  public getIdentifier(block?: number) {
    return this.makeCall<string>('identifier', undefined, block);
  }

  /**
   * Gets the position of a policy (0: pre, 1: post).
   *
   * @param block The block number to execute the call on.
   */
  public getPosition(block?: number) {
    return this.makeCall<number>('position', undefined, block);
  }

  /**
   * Checks wheter a rule is true or false
   *
   * @param input The input for the rule
   * @param block The block number to execute the call on.
   */
  public rule(input: PolicyRule, block?: number) {
    return this.makeCall<number>('position', undefined, block);
  }
}
