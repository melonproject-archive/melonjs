import { Address } from '../../../../Address';
import { Environment } from '../../../../Environment';
import { FundIsShutDownError } from '../Trading.errors';
import { Hub } from '../../hub/Hub';

export const checkFundIsNotShutdown = async (environment: Environment, hubAddress: Address) => {
  const hub = new Hub(environment, hubAddress);

  const isShutDown = await hub.isShutDown();
  if (isShutDown) {
    throw new FundIsShutDownError(hub.contract.address);
  }
};
