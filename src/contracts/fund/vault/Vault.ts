import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { VaultAbi } from '../../../abis/Vault.abi';

export class Vault extends Contract {
  public static readonly abi = VaultAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, hub: Address) {
    return super.createDeployment<Vault>(environment, bytecode, from, [hub]);
  }
}

export interface Vault extends Spoke {}
applyMixins(Vault, [Spoke]);
