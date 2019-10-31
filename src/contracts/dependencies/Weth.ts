import BigNumber from 'bignumber.js';
import { WETHAbi } from '../../abis/WETH.abi';
import { Environment } from '../../Environment';
import { Address } from '../../Address';
import { ERC20WithFields } from './ERC20WithFields';

export class Weth extends ERC20WithFields {
  public static readonly abi = WETHAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<Weth>(environment, bytecode, from);
  }

  public deposit(amount: BigNumber, from: Address) {
    return this.createTransaction('deposit', from, undefined, amount.toFixed());
  }

  public withdraw(amount: BigNumber, from: Address) {
    return this.createTransaction('withdraw', from, [amount.toFixed()]);
  }
}
