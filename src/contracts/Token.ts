import { ERC20Abi } from '../abis/ERC20';
import { Address } from '../Address';
import { TokenDefinition } from '../Deployment';
import { Environment } from '../Environment';
import { AbstractToken } from './AbstractToken';

export class Token extends AbstractToken {
  public static forDeployment(environment: Environment, which: Address): Token;
  public static forDeployment(environment: Environment, which: string): Token;
  public static forDeployment(environment: Environment, which: Address | string) {
    return new this(environment, this.findDefinition(environment, which));
  }

  constructor(environment: Environment, public readonly token: TokenDefinition) {
    super(environment, new environment.client.Contract(ERC20Abi, token.address));
  }
}
