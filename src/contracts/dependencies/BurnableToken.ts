import { Environment } from '../../Environment';
import { Address } from '../../Address';
import { Contract } from '../../Contract';
import { PreminedTokenAbi } from '../../abis/PreminedToken.abi';
import { applyMixins } from '../../utils/applyMixins';
import { PreminedToken } from './PreminedToken';

export interface PreminedTokenDeployArguments {
  symbol: string;
  decimals: number;
  name: string;
}

export class BurnableToken extends Contract {
  public static readonly abi = PreminedTokenAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: PreminedTokenDeployArguments) {
    return super.createDeployment<BurnableToken>(environment, bytecode, from, [args.symbol, args.decimals, args.name]);
  }

  /**
   * Burn tokens
   *
   * @param owner The address to transfer from
   * @param spender The address to transfer to
   * @param amount The amount to transfer
   */
  public decreaseApproval(owner: Address, spender: Address, amount: BigNumber) {
    return this.createTransaction('decreaseApproval', owner, [spender, amount.toString()]);
  }
}

export interface BurnableToken extends PreminedToken {}
applyMixins(BurnableToken, [PreminedToken]);
