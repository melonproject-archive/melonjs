import { sameAddress } from '../utils/sameAddress';
import { Address } from '../Address';
import { Contract } from '../Contract';
import { Environment } from '../Environment';

export abstract class AbstractToken extends Contract {
  public static findDefinition(environment: Environment, which: Address | string) {
    const deployment = environment.deployment.thirdPartyContracts.tokens;
    const address = which.startsWith('0x');
    const token = deployment.find(token => {
      if (token.symbol === which) {
        return true;
      }

      if (address && sameAddress(which, token.address)) {
        return true;
      }

      return false;
    });

    if (!token) {
      throw new Error(`Could not instantiate token class for unknown token ${token}.`);
    }

    return token;
  }
}
