import { padLeft, stringToHex } from 'web3-utils';

export function stringToBytes(str: string, bytes: number) {
  return padLeft(stringToHex(str), bytes * 2);
}
