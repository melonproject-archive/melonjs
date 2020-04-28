import { toBigNumber } from './toBigNumber';

export function toDate(timestamp: any) {
  const result = toBigNumber(timestamp).multipliedBy(1000).toNumber();
  return new Date(result);
}
