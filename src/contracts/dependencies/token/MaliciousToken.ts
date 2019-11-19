import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Contract } from '../../../Contract';
import { PreminedTokenAbi } from '../../../abis/PreminedToken.abi';
import { applyMixins } from '../../../utils/applyMixins';
import { PreminedToken } from './PreminedToken';

export interface PreminedTokenDeployArguments {
  symbol: string;
  decimals: number;
  name: string;
}

export class MaliciousToken extends Contract {
  public static readonly abi = PreminedTokenAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: PreminedTokenDeployArguments) {
    return super.createDeployment<MaliciousToken>(environment, bytecode, from, [args.symbol, args.decimals, args.name]);
  }
}

export interface MaliciousToken extends PreminedToken {}
applyMixins(PreminedToken, [PreminedToken]);
