import BigNumber from 'bignumber.js';

export function toBigNumber(value: any) {
  if (BigNumber.isBigNumber(value)) {
    return value;
  }

  if (!value) {
    return new BigNumber(0);
  }

  const stringified = `${value}`;
  if (!isNaN(parseFloat(stringified))) {
    return new BigNumber(`${value}`);
  }

  throw new Error(`Can't convert ${stringified} to BigNumber.`);
}
