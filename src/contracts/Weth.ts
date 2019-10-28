import { WETHAbi } from '../abis/WETH.abi';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { AbstractToken } from './AbstractToken';

export class Weth extends AbstractToken {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(WETHAbi, address));
  }
}
