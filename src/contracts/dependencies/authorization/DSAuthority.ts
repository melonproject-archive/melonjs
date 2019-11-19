import { Address } from '../../../Address';
import { Contract } from '../../../Contract';
import { DSAuthorityAbi } from '../../../abis/DSAuthority.abi';

export class DSAuthority extends Contract {
  public static readonly abi = DSAuthorityAbi;

  /**
   * Checks whether source (account/contract) can call a function with
   * a certain signature on the destination contract
   *
   * @param source The address of the source account/contract
   * @param destination The address of the contract
   * @param signature The signature of the function to be called
   * @param block The block number to execute the call on.
   */
  public canCall(source: Address, destination: Address, signature: string, block?: number) {
    return this.makeCall<boolean>('canCall', [source, destination, signature], block);
  }
}
