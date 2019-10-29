import BigNumber from 'bignumber.js';
import { toBigNumber } from './toBigNumber';

export function toDate(timestamp: string | number | BigNumber) {
  const result = toBigNumber(`${timestamp}`)
    .multipliedBy(1000)
    .toNumber();
  return new Date(result);
}
