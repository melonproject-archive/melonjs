import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { UserWhitelistAbi } from '../abis/UserWhitelist';

export class UserWhitelist extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(UserWhitelistAbi, address));
  }

  /**
   * Checks if an address is whitelisted
   *
   * @param address The address to check
   * @param block The block number to execute the call on.
   */
  public async isWhitelisted(address: Address, block?: number) {
    return await this.makeCall<boolean>('whitelisted', [address], block);
  }
}
