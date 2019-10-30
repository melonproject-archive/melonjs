import { Address } from '../../Address';
import { Contract } from '../../Contract';
import { toBigNumber } from '../../utils/toBigNumber';

export abstract class AbstractToken extends Contract {
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
}
