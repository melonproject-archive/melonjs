import { ethers } from 'ethers';

export function isAddress(address: any): address is string {
  return typeof address === 'string' && !!address.match(/^(0x)?[0-9a-fA-F]{40}$/);
}

export function sameAddress(a?: string, b?: string) {
  if (a && b && a === b) {
    return true;
  }

  return isAddress(a) && isAddress(b) && ethers.utils.getAddress(a as string) === ethers.utils.getAddress(b as string);
}

export function isZeroAddress(address: string) {
  return sameAddress(address, ethers.constants.AddressZero);
}

export function includesAddress(list: string[], address: string) {
  const checksums = list.map((item) => ethers.utils.getAddress(item as string));
  return checksums.includes(ethers.utils.getAddress(address as string));
}
