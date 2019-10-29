import BigNumber from 'bignumber.js';

export function toBigNumber(value: any) {
  if (BigNumber.isBigNumber(value)) {
    return value;
  }

  const stringified = `${value}`;
  if (!isNaN(parseFloat(stringified))) {
    return new BigNumber(`${value}`);
  }

  throw new Error(`Can't convert ${stringified} to BigNumber.`);
}
