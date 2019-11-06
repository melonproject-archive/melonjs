import { Address } from '../Address';
import { toBigNumber } from './toBigNumber';

export function isZeroAddress(address: Address) {
  return toBigNumber(address).isEqualTo(0);
}
