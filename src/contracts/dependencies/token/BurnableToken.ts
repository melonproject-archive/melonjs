import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Contract } from '../../../Contract';
import { applyMixins } from '../../../utils/applyMixins';
import { PreminedToken, PreminedTokenDeployArguments } from './PreminedToken';
import { BigNumber } from 'bignumber.js';
import { BurnableTokenAbi } from '../../../abis/BurnableToken.abi';
import { sameAddress } from '../../../utils/sameAddress';
import { zeroAddress } from '../../../utils/zeroAddress';
import { OutOfBalanceError } from '../../../errors/OutOfBalanceError';
import { ValidationError } from '../../../errors/ValidationError';

export class AddressCannotBeZeroError extends ValidationError {
  public name = 'AddressCannotBeZeroError';

  constructor(public readonly address: Address, message: string = 'Sender cannot be zero address') {
    super(message);
  }
}

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
      if (sameAddress(from, zeroAddress)) {
        throw new AddressCannotBeZeroError(from);
      }

      const balance = await this.getBalanceOf(from);
      if (!amount.isLessThanOrEqualTo(balance)) {
        throw new OutOfBalanceError(amount.toNumber(), balance.toNumber());
      }
    };

    return this.createTransaction({ from, method: 'burn', args, validate });
  }
}

export interface BurnableToken extends PreminedToken {}
applyMixins(BurnableToken, [PreminedToken]);
