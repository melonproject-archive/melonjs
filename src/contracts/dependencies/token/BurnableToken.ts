import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Contract } from '../../../Contract';
import { PreminedTokenAbi } from '../../../abis/PreminedToken.abi';
import { applyMixins } from '../../../utils/applyMixins';
import { PreminedToken, PreminedTokenDeployArguments } from './PreminedToken';
import { BigNumber } from 'bignumber.js';

export class BurnableToken extends Contract {
  public static readonly abi = PreminedTokenAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: PreminedTokenDeployArguments) {
    return super.createDeployment<BurnableToken>(environment, bytecode, from, [args.symbol, args.decimals, args.name]);
  }

  /**
   * Burn tokens
   *
   * @param from The address to burn
   * @param amount The amount to transfer
   */
  public burn(from: Address, amount: BigNumber) {
    const args = [amount.toFixed()];
    return this.createTransaction({ from, method: 'decreaseApproval', args });
  }
}

export interface BurnableToken extends PreminedToken {}
applyMixins(BurnableToken, [PreminedToken]);
