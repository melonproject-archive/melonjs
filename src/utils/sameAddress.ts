import { toChecksumAddress } from 'web3-utils';
import { Address } from '../Address';

export function sameAddress(a: Address, b: Address) {
  return toChecksumAddress(a) === toChecksumAddress(b);
}
