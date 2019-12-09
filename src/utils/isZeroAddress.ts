import { Address } from '../Address';
import { sameAddress } from './sameAddress';

export function isZeroAddress(address: Address) {
  return sameAddress(address, '0x0000000000000000000000000000000000000000');
}
