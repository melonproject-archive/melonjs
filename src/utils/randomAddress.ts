import { randomHex } from 'web3-utils';
import { Address } from '../Address';

export function randomAddress(): Address {
  return randomHex(20);
}
