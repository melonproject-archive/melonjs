import { ERC20Abi } from '../abis/ERC20.abi';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { AbstractToken } from './AbstractToken';

export class Token extends AbstractToken {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(ERC20Abi, address));
  }
}
