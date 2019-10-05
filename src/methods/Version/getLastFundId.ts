import { makeCall, BasicCallConfig } from '../../utils/makeCall';

export const getLastFundId = (config: BasicCallConfig) => {
  const version = config.environment.deployment.melonContracts.version;
  const result = makeCall<string>({
    ...config,
    address: version,
    contract: 'Version',
    method: 'getLastFundId',
  });

  return parseInt(result.toString(), 10);
};
