import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { PolicyManagerAbi } from '../../../abis/PolicyManager.abi';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';

export type Policies = {
  pre: Address[];
  post: Address[];
};

export class PolicyManager extends Contract {
  public static readonly abi = PolicyManagerAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, hub: Address) {
    return super.createDeployment<PolicyManager>(environment, bytecode, from, [hub]);
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
