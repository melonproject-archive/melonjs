import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { UserWhitelistAbi } from '../../../abis/UserWhitelist.abi';
import { IPolicy } from './IPolicy';

export class UserWhitelist extends IPolicy {
  public static readonly abi = UserWhitelistAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, approved: Address[]) {
    return super.createDeployment<UserWhitelist>(environment, bytecode, from, [approved]);
  }

  /**
   * Add a user address to a UserWhitelist.
   *
   * @param from The address of the sender
   * @param user The address of the user to be added to the UserWhitelist
   */
  public addToWhitelist(from: Address, user: Address) {
    return this.createTransaction({ from, method: 'addToWhitelist', args: [user] });
  }

  /**
   * Remove a user address from a UserWhitelist.
   *
   * @param from The address of the sender
   * @param user The address of the user to be removed from the UserWhitelist
   */
  public removeFromWhitelist(from: Address, user: Address) {
    return this.createTransaction({ from, method: 'removeFromWhitelist', args: [user] });
  }

  /**
   * Add a list of user addresses to a UserWhitelist.
   *
   * @param from The address of the sender
   * @param users The addresses of the users to be added to the UserWhitelist
   */
  public batchAddToWhitelist(from: Address, users: Address[]) {
    return this.createTransaction({ from, method: 'batchAddToWhitelist', args: [users] });
  }

  /**
   * Remove a list of user addresses from a UserWhitelist.
   *
   * @param from The address of the sender
   * @param users The addresses of the users to be removed from the UserWhitelist
   */
  public batchRemoveFromWhitelist(from: Address, users: Address[]) {
    return this.createTransaction({ from, method: 'batchRemoveFromWhitelist', args: [users] });
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
