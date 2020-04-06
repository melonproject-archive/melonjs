import { utils, constants } from 'ethers';

export function isAddress(address: string | Address): address is Address {
  return address instanceof Address || (typeof address === 'string' && !!address.match(/^(0x)?[0-9a-fA-F]{40}$/));
}

export function sameAddress(a?: Address, b?: Address) {
  if (a && b && a === b) {
    return true;
  }

  return isAddress(a) && isAddress(b) && utils.getAddress(a as string) === utils.getAddress(b as string);
}

export function isZeroAddress(address: Address) {
  return sameAddress(address, constants.AddressZero);
}

export function includesAddress(list: Address[], address: Address) {
  const checksums = list.map((item) => utils.getAddress(item as string));
  return checksums.includes(utils.getAddress(address as string));
}

export class Address extends String {
  constructor(address: string) {
    if (!isAddress(address)) {
      throw new TypeError(`Invalid address ${address}.`);
    }

    super(utils.getAddress(address));
  }
}
