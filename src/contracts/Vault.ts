import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { Spoke } from './Spoke';
import { applyMixins } from '../utils/applyMixins';
import { VaultAbi } from '../abis/Vault.abi';

export class Vault extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(VaultAbi, address));
  }
}

export interface Vault extends Spoke {}
applyMixins(Vault, [Spoke]);
