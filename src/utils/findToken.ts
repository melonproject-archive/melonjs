import { DeploymentOutput } from '../Deployment';
import { availableTokens } from './availableTokens';
import { sameAddress } from './sameAddress';

export function findToken(deployment: DeploymentOutput, which: string) {
  const tokens = availableTokens(deployment);
  const address = which.startsWith('0x');
  return tokens.find(token => {
    if (address && sameAddress(which, token.address)) {
      return true;
    }

    if (token.symbol === which) {
      return true;
    }

    return false;
  });
}
