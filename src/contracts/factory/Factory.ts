import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { FactoryAbi } from '../../abis/Factory.abi';

export class Factory extends Contract {
  public static readonly abi = FactoryAbi;

  /**
   * Checks if an address is an instance of the factory
   *
   * @param address The address of the contract to check
   * @param block The block number to execute the call on.
   */
  public async isInstance(address: Address, block?: number) {
    const result = await this.makeCall<boolean>('isInstance', [address], block);
    return result;
  }
}
