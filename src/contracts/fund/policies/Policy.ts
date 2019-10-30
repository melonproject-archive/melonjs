import { Contract } from '../../../Contract';
import { PolicyAbi } from '../../../abis/Policy.abi';

export class Policy extends Contract {
  public static readonly abi = PolicyAbi;

  /**
   * Gets the identifier of a policy.
   *
   * @param block The block number to execute the call on.
   */
  public async getIdentifier(block?: number) {
    return await this.makeCall<string>('identifier', undefined, block);
  }
}
