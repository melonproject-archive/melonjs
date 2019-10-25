import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { AddressListAbi } from '../abis/AddressList.abi';

export class AddressList extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(AddressListAbi, address));
  }

  /**
   * Checks if an address is part of an address list.
   *
   * @param address The address to check
   * @param block The block number to execute the call on.
   */
  public async isMember(address: Address, block?: number) {
    return await this.makeCall<boolean>('isMember', [address], block);
  }

  /**
   * Gets all members of an address list.
   *
   * @param address The address to check
   * @param block The block number to execute the call on.
   */
  public async getMembers(block?: number) {
    return await this.makeCall<Address[]>('getMembers', undefined, block);
  }
}
