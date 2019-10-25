import { WETHAbi } from '../abis/WETH.abi';
import { TokenDefinition } from '../Deployment';
import { Environment } from '../Environment';
import { AbstractToken } from './AbstractToken';

export class Weth extends AbstractToken {
  public static forDeployment(environment: Environment) {
    return new this(environment, this.findDefinition(environment, 'WETH'));
  }

  constructor(environment: Environment, public readonly token: TokenDefinition) {
    super(environment, new environment.client.Contract(WETHAbi, token.address));
  }
}
