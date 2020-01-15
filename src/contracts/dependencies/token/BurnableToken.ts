import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Contract } from '../../../Contract';
import { applyMixins } from '../../../utils/applyMixins';
import { PreminedToken, PreminedTokenDeployArguments } from './PreminedToken';
import { BigNumber } from 'bignumber.js';
import { BurnableTokenAbi } from '../../../abis/BurnableToken.abi';
import { OutOfBalanceError } from '../../../errors/OutOfBalanceError';
import { isZeroAddress } from '../../../utils/isZeroAddress';
import { ZeroAddressError } from '../../../errors/ZeroAddressError';

export class BurnableToken extends Contract {
  public static readonly abi = BurnableTokenAbi;

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
    const args = [amount.toFixed(0)];

    const validate = async () => {
      if (isZeroAddress(from)) throw new ZeroAddressError();

      const balance = await this.getBalanceOf(from);
      if (balance.isLessThan(amount)) {
        throw new OutOfBalanceError(amount, balance);
      }
    };

    return this.createTransaction({ from, method: 'burn', args, validate });
  }
}

export interface BurnableToken extends PreminedToken {}
applyMixins(BurnableToken, [PreminedToken]);
