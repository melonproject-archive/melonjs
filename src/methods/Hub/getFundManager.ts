import { makeCall, BasicCallConfig } from '../../utils/makeCall';

export const getFundManager = (config: BasicCallConfig, hubAddress: string) => {
  const result = makeCall<string>({
    ...config,
    address: hubAddress,
    contract: 'Hub',
    method: 'manager',
  });

  return result;
};
