import { makeCall, BasicCallConfig } from '../../utils/makeCall';

export const getFundCreator = async (config: BasicCallConfig, hubAddress: string) => {
  const result = await makeCall<string>({
    ...config,
    address: hubAddress,
    contract: 'Hub',
    method: 'creator',
  });

  return result;
};
