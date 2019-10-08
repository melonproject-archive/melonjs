import { makeCall, BasicCallConfig } from '../../utils/makeCall';

export const getFundCreationTime = async (config: BasicCallConfig, hubAddress: string) => {
  const result = await makeCall<string>({
    ...config,
    address: hubAddress,
    contract: 'Hub',
    method: 'creationTime',
  });

  return new Date(parseInt(`${result}`, 10) * 1000);
};
