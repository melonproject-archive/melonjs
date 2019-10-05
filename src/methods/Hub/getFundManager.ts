import { makeCall, BasicCallConfig } from '../../utils/makeCall';

export const getFundManager = (config: BasicCallConfig, address: string) => {
  const result = makeCall<string>({
    ...config,
    address,
    contract: 'Hub',
    method: 'manager',
  });

  return result;
};
