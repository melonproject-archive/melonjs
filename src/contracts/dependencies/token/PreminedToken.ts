import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Contract } from '../../../Contract';
import { PreminedTokenAbi } from '../../../abis/PreminedToken.abi';
import { StandardToken } from './StandardToken';
import { applyMixins } from '../../../utils/applyMixins';

export interface PreminedTokenDeployArguments {
  symbol: string;
  decimals: number;
  name: string;
}

export class PreminedToken extends Contract {
  public static readonly abi = PreminedTokenAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: PreminedTokenDeployArguments) {
    return super.createDeployment<PreminedToken>(environment, bytecode, from, [args.symbol, args.decimals, args.name]);
  }
}

export interface PreminedToken extends StandardToken {}
applyMixins(PreminedToken, [StandardToken]);
