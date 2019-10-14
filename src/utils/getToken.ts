import { Environment } from '..';
import { sameAddress } from './sameAddress';

export const getToken = (environment: Environment, which: string) => {
  const tokens = environment.deployment.thirdPartyContracts.tokens;
  return tokens.find(token => {
    if (token.symbol === which) {
      return true;
    }

    if (which.startsWith('0x') && sameAddress(which, token.address)) {
      return true;
    }

    return false;
  });
};
