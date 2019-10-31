import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { VaultAbi } from '../../../abis/Vault.abi';
import BigNumber from 'bignumber.js';

export class Vault extends Contract {
  public static readonly abi = VaultAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, hub: Address) {
    return super.createDeployment<Vault>(environment, bytecode, from, [hub]);
  }

  /**
   * Withdraw from Vault
   *
   * @param from The sender address.
   * @param token The address of the token to withdraw
   * @param amount The amount to withdraw
   */
  public withdraw(from: Address, token: Address, amount: BigNumber) {
    return this.createTransaction('withdraw', from, [token, amount.toString()]);
  }
}

export interface Vault extends Spoke {}
applyMixins(Vault, [Spoke]);
