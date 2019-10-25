import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { PolicyManagerAbi } from '../abis/PolicyManager.abi';
import { Spoke } from './Spoke';
import { applyMixins } from '../utils/applyMixins';

export type Policies = {
  pre: Address[];
  post: Address[];
};

export class PolicyManager extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(PolicyManagerAbi, address));
  }

  /**
   * Gets the policies by their signature.
   *
   * @param block The block number to execute the call on.
   */
  public async getPoliciesBySignature(signature: string, block?: number) {
    const result = await this.makeCall<{ '0': string[]; '1': string[] }>('getPoliciesBySig', [signature], block);
    const policies = {
      pre: result['0'],
      post: result['1'],
    };
    return policies as Policies;
  }
}

export interface PolicyManager extends Spoke {}
applyMixins(PolicyManager, [Spoke]);
