import { toChecksumAddress } from 'web3-utils';

export function includesAddress(list: string[], address: string) {
  const checksums = list.map(item => toChecksumAddress(item));
  return checksums.includes(toChecksumAddress(address));
}
