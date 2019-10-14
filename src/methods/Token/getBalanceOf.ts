import BigNumber from 'bignumber.js';
import { makeCall, BasicCallConfig } from '../../utils/makeCall';
import { getToken } from '../../utils/getToken';
import { fromWei } from 'web3-utils';

export const getBalanceOf = async (config: BasicCallConfig, token: string, address: string) => {
  const tokenObject = getToken(config.environment, token);
  if (!tokenObject) {
    throw new Error(`Unknown token ${token}.`);
  }

  const result = await makeCall(
    {
      ...config,
      address: tokenObject.address,
      contract: 'ERC20',
      method: 'balanceOf',
    },
    [address],
  );

  return new BigNumber(fromWei(`${result}`));
};
