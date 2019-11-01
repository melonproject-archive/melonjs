import { Contract } from '../../../Contract';
import { Address } from '../../../Address';
import { AddressListAbi } from '../../../abis/AddressList.abi';
import { Environment } from '../../../Environment';

export class AddressList extends Contract {
  public static readonly abi = AddressListAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, members: Address[]) {
    return super.createDeployment<AddressList>(environment, bytecode, from, [members]);
  }

  /**
   * Checks if an address is part of an address list.
   *
   * @param address The address to check
   * @param block The block number to execute the call on.
   */
  public isMember(address: Address, block?: number) {
    return this.makeCall<boolean>('isMember', [address], block);
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
