import BigNumber from 'bignumber.js';
import { WETHAbi } from '../../abis/WETH.abi';
import { Environment } from '../../Environment';
import { Address } from '../../Address';
import { ERC20WithFields } from './ERC20WithFields';
import { Contract } from '../../Contract';
import { applyMixins } from '../../utils/applyMixins';
import { OutOfBalanceError } from '../../errors/OutOfBalanceError';

export class Weth extends Contract {
  public static readonly abi = WETHAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<Weth>(environment, bytecode, from);
  }

  public deposit(amount: BigNumber, from: Address) {
    const method = 'deposit';
    const value = amount.toFixed();
    return this.createTransaction({ from, method, value });
  }

  public withdraw(amount: BigNumber, from: Address) {
    const method = 'withdraw';
    const methodArgs = [amount.toFixed()];
    const validate = async () => {
      const balance = await this.getBalanceOf(from);
      if (!amount.isLessThanOrEqualTo(balance)) {
        throw new OutOfBalanceError(amount.toNumber(), balance.toNumber());
      }
    };
    return this.createTransaction({ from, method, methodArgs, validate });
  }
}

export interface Weth extends ERC20WithFields {}
applyMixins(Weth, [ERC20WithFields]);
