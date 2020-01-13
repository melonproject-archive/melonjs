import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Contract } from '../../../Contract';
import { DSAuthAbi } from '../../../abis/DSAuth.abi';

export class DSAuth extends Contract {
  public static readonly abi = DSAuthAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<DSAuth>(environment, bytecode, from);
  }

  /**
   * Gets the address of the owner
   *
   * @param block The block number to execute the call on.
   */
  public getOwner(block?: number) {
    return this.makeCall<Address>('owner', [undefined], block);
  }
}
