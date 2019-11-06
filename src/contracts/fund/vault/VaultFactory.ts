import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { applyMixins } from '../../../utils/applyMixins';
import { Factory } from '../../factory/Factory';
import { VaultFactoryAbi } from '../../../abis/VaultFactory.abi';

export class VaultFactory extends Contract {
  public static readonly abi = VaultFactoryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<VaultFactory>(environment, bytecode, from);
  }

  /**
   * Creates a Vault instance.
   *
   * @param from The sender address.
   * @param hub The hub address.
   */
  public createInstance(from: Address, hub: Address) {
    const methodArgs = [hub];
    return this.createTransaction({ from, method: 'createInstance', methodArgs });
  }
}

export interface VaultFactory extends Factory {}
applyMixins(VaultFactory, [Factory]);
