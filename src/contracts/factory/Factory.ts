import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { FactoryAbi } from '../../abis/Factory.abi';
import { Environment } from '../../Environment';

export class Factory extends Contract {
  public static readonly abi = FactoryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<Factory>(environment, bytecode, from);
  }

  /**
   * Checks if an address is an instance of the factory
   *
   * @param address The address of the contract to check
   * @param block The block number to execute the call on.
   */
  public async isInstance(address: Address, block?: number) {
    return this.makeCall<boolean>('isInstance', [address], block);
  }
}
