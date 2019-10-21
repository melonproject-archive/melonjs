import { toChecksumAddress } from 'web3-utils';

export function sameAddress(a: string, b: string) {
  return toChecksumAddress(a) === toChecksumAddress(b);
}
