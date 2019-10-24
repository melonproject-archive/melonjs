import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { PolicyAbi } from '../abis/Policy';

export class Policy extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(PolicyAbi, address));
  }

  /**
   * Gets the identifier of a policy.
   *
   * @param block The block number to execute the call on.
   */
  public async getIdentifier(block?: number) {
    return await this.makeCall<string>('identifier', undefined, block);
  }
}
