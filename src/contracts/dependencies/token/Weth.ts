import BigNumber from 'bignumber.js';
import { WETHAbi } from '../../../abis/WETH.abi';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { ERC20WithFields } from './ERC20WithFields';
import { Contract } from '../../../Contract';
import { applyMixins } from '../../../utils/applyMixins';
import { OutOfBalanceError } from '../../../errors/OutOfBalanceError';

export class Weth extends Contract {
  public static readonly abi = WETHAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<Weth>(environment, bytecode, from);
  }

  /**
   * Deposit WETH in the senders account
   *
   * @param from The address of the sender
   * @param amount The amount to deposit
   */
  public deposit(from: Address, amount: BigNumber) {
    return this.createTransaction({ from, method: 'deposit', args: undefined, value: amount });
  }

  /**
   * Withdraw WETH from the senders account
   *
   * @param from The address of the sender
   * @param amount The amount to withdraw
   */
  public withdraw(from: Address, amount: BigNumber) {
    const args = [amount.toFixed(0)];

    const validate = async () => {
      const balance = await this.getBalanceOf(from);
      if (!amount.isLessThan(balance)) {
        throw new OutOfBalanceError(amount.toNumber(), balance.toNumber());
      }
    };

    return this.createTransaction({ from, method: 'withdraw', args, validate });
  }
}

export interface Weth extends ERC20WithFields {}
applyMixins(Weth, [ERC20WithFields]);
