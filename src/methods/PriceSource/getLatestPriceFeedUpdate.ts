import BigNumber from 'bignumber.js';
import { makeCall, BasicCallConfig } from '../../utils/makeCall';

export const getLatestPriceFeedUpdate = async (config: BasicCallConfig) => {
  const source = config.environment.deployment.melonContracts.priceSource;
  const result = await makeCall({
    ...config,
    address: source,
    contract: 'PriceSourceInterface',
    method: 'getLastUpdate',
  });

  const timestamp = new BigNumber(result.toString()).multipliedBy(1000).toNumber();
  return new Date(timestamp);
};
