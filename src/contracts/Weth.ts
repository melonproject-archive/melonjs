import BigNumber from 'bignumber.js';
import { Contract as EthContract } from 'web3-eth-contract';
import { WETHAbi } from '../abis/WETH.abi';
import { Environment } from '../Environment';
import { Deployment } from '../Transaction';
import { Address } from '../Address';
import { AbstractToken } from './AbstractToken';

export class Weth extends AbstractToken {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(environment, typeof address === 'string' ? new environment.client.Contract(WETHAbi, address) : address);
  }

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    const contract = new environment.client.Contract(WETHAbi);
    const transaction = contract.deploy({
      data: bytecode,
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
  }

  public deposit(amount: BigNumber, from: Address) {
    return this.createTransaction('deposit', from, undefined, amount.toFixed());
  }

  public withdraw(amount: BigNumber, from: Address) {
    return this.createTransaction('withdraw', from, [amount.toFixed()]);
  }

  public name(block?: number) {
    return this.makeCall('name', undefined, block);
  }

  public symbol(block?: number) {
    return this.makeCall('symbol', undefined, block);
  }

  public decimals(block?: number) {
    return this.makeCall('decimals', undefined, block);
  }
}
