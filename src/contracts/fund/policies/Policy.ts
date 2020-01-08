import { Contract } from '../../../Contract';
import { PolicyAbi } from '../../../abis/Policy.abi';
import BigNumber from 'bignumber.js';
import { Address } from '../../../Address';
import { hexToBytes } from 'web3-utils';

export interface PolicyArgs {
  signature: string;
  addresses: [Address, Address, Address, Address, Address];
  values: [BigNumber, BigNumber, BigNumber];
  identifier: string;
}

export class Policy extends Contract {
  public static readonly abi = PolicyAbi;

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
   * @param args The arguments for the rule
   * @param block The block number to execute the call on.
   */
  public rule(args: PolicyArgs, block?: number) {
    return this.makeCall<boolean>(
      'rule',
      [
        hexToBytes(args.signature),
        args.addresses,
        args.values.map(value => value.toFixed(0)),
        hexToBytes(args.identifier),
      ],
      block,
    );
  }
}
