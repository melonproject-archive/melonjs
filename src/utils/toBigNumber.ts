import BigNumber from 'bignumber.js';

export function toBigNumber(value: any) {
  if (!value) {
    return new BigNumber(0);
  }

  if (BigNumber.isBigNumber(value)) {
    return value;
  }

  const bigNumberFromValue = new BigNumber(`${value}`);

  if (bigNumberFromValue.isNaN()) {
    return new BigNumber(0);
  }

  if (bigNumberFromValue.isEqualTo('3963877391197344453575983046348115674221700746820753546331534351508065746944')) {
    return new BigNumber(0);
  }

  return bigNumberFromValue;
}
