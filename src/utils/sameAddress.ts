import { toChecksumAddress } from 'web3-utils';
import { Address } from '../Address';

export function sameAddress(a?: Address, b?: Address) {
  if (a && b && a === b) {
    return true;
  }

  return a && b && toChecksumAddress(a) === toChecksumAddress(b);
}
