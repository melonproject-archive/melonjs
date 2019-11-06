import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { applyMixins } from '../../../utils/applyMixins';
import { Factory } from '../../factory/Factory';
import { PolicyManagerFactoryAbi } from '../../../abis/PolicyManagerFactory.abi';

export class PolicyManagerFactory extends Contract {
  public static readonly abi = PolicyManagerFactoryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<PolicyManagerFactory>(environment, bytecode, from);
  }

  /**
   * Creates a PolicyManager instance.
   *
   * @param from The sender address.
   * @param hub The hub address.
   */
  public createInstance(from: Address, hub: Address) {
    const methodArgs = [hub];
    return this.createTransaction({ from, method: 'createInstance', methodArgs });
  }
}

export interface PolicyManagerFactory extends Factory {}
applyMixins(PolicyManagerFactory, [Factory]);
