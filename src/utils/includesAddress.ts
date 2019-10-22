import { toChecksumAddress } from 'web3-utils';
import { Address } from '../Address';

export function includesAddress(list: Address[], address: Address) {
  const checksums = list.map(item => toChecksumAddress(item));
  return checksums.includes(toChecksumAddress(address));
}
