import { DeploymentOutput } from '../Deployment';
import { availableExchanges } from './availableExchanges';
import { sameAddress } from './sameAddress';

export function findExchange(deployment: DeploymentOutput, which: string) {
  const exchanges = availableExchanges(deployment);
  const address = which.startsWith('0x');
  return exchanges.find(item => {
    if (address && sameAddress(which, item.exchange)) {
      return true;
    }

    if (which === item.name) {
      return true;
    }

    return false;
  });
}
