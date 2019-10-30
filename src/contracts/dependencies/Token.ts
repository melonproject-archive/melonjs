import { ERC20WithFieldsAbi } from '../../abis/ERC20WithFields.abi';
import { Environment } from '../../Environment';
import { Address } from '../../Address';
import { toBigNumber } from '../../utils/toBigNumber';
import { Contract } from '../../Contract';

export class Token extends Contract {
  public static readonly abi = ERC20WithFieldsAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<Token>(environment, bytecode, from);
  }

  /**
   * Gets the balance of an owner.
   *
   * @param who The address of the one we want to check the balance of.
   * @param block The block number to execute the call on.
   */
  public async getBalanceOf(who: Address, block?: number) {
    const result = await this.makeCall<string>('balanceOf', [who], block);
    return toBigNumber(result);
  }

  /**
   * Gets the ammount of token that an owner allows a spender to use.
   *
   * @param owner The owner address.
   * @param spender The spender address.
   * @param block The block number to execute the call on.
   */
  public async getAllowance(owner: Address, spender: Address, block?: number) {
    const result = await this.makeCall<string>('allowance', [owner, spender], block);
    return toBigNumber(result);
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

  public name(block?: number) {
    return this.makeCall('name', undefined, block);
  }

  public symbol(block?: number) {
    return this.makeCall('symbol', undefined, block);
  }

  public decimals(block?: number) {
    return this.makeCall('decimals', undefined, block);
  }
}
