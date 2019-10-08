import BigNumber from 'bignumber.js';
import { makeCall, BasicCallConfig } from '../../utils/makeCall';

export const getLastFundId = async (config: BasicCallConfig) => {
  const version = config.environment.deployment.melonContracts.version;
  const result = await makeCall<string>({
    ...config,
    address: version,
    contract: 'Version',
    method: 'getLastFundId',
  });

  return new BigNumber(`${result}`);
};
