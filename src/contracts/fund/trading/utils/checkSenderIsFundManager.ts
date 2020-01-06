import { Address } from '../../../../Address';
import { Environment } from '../../../../Environment';
import { Hub } from '../../hub/Hub';
import { sameAddress } from '../../../../utils/sameAddress';
import { SenderIsNotFundManagerError } from '../Trading.errors';

export const checkSenderIsFundManager = async (environment: Environment, sender: Address, hubAddress: Address) => {
  const hub = new Hub(environment, hubAddress);
  const manager = await hub.getManager();

  if (!sameAddress(sender, manager)) {
    throw new SenderIsNotFundManagerError(sender);
  }
};
