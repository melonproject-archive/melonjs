import { Environment } from '../../Environment';
import { Address } from '../../Address';
import { toBigNumber } from '../../utils/toBigNumber';
import { Contract } from '../../Contract';
import { StandardTokenAbi } from '../../abis/StandardToken.abi';

export class StandardToken extends Contract {
  public static readonly abi = StandardTokenAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<StandardToken>(environment, bytecode, from);
  }

  /**
   * Gets the total supply of the token.
   *
   * @param block The block number to execute the call on.
   */
  public async getTotalSupply(block?: number) {
    const result = await this.makeCall<string>('totalSupply', undefined, block);
    return toBigNumber(result);
  }
}
