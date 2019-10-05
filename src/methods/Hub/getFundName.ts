import { toUtf8 } from 'web3-utils';
import { makeCall, BasicCallConfig } from '../../utils/makeCall';

export const getFundName = async (config: BasicCallConfig, address: string) => {
  const result = await makeCall<string>({
    ...config,
    address,
    contract: 'Hub',
    method: 'name',
  });

  return toUtf8(result);
};
