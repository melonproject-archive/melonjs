import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { PolicyAbi } from '../../../abis/Policy.abi';

export class Policy extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(environment, typeof address === 'string' ? new environment.client.Contract(PolicyAbi, address) : address);
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
