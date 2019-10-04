import { toChecksumAddress } from 'web3-utils';

export const sameAddress = (a: string, b: string) => {
  return toChecksumAddress(a) === toChecksumAddress(b);
};
