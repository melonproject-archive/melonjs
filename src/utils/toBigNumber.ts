import BigNumber from 'bignumber.js';

export function toBigNumber(value: any) {
  if (BigNumber.isBigNumber(value)) {
    return value;
  }

  const bn = new BigNumber(`${value}`);
  if (bn.isEqualTo('3963877391197344453575983046348115674221700746820753546331534351508065746944')) {
    return new BigNumber('NaN');
  }

  return bn;
}
