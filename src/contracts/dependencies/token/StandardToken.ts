import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { toBigNumber } from '../../../utils/toBigNumber';
import { Contract } from '../../../Contract';
import { StandardTokenAbi } from '../../../abis/StandardToken.abi';
import BigNumber from 'bignumber.js';
import { ERC20WithFields } from './ERC20WithFields';
import { applyMixins } from '../../../utils/applyMixins';
import { OutOfBalanceError } from '../../../errors/OutOfBalanceError';
import { isZeroAddress } from '../../../utils/isZeroAddress';
import { ZeroAddressError } from '../../../errors/ZeroAddressError';

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

  /**
   * Gets the balance of the specified address.
   *
   * @param owner The address of the owner
   * @param block The block number to execute the call on.
   */
  public async getBalanceOf(owner: Address, block?: number) {
    const result = await this.makeCall<string>('balanceOf', [owner], block);
    return toBigNumber(result);
  }

  /**
   * Gets the amount of tokens that an owner allowed to a spender.
   *
   * @param owner The address of the owner
   * @param spender The address of the spender
   * @param block The block number to execute the call on.
   */
  public async getAllowance(owner: Address, spender: Address, block?: number) {
    const result = await this.makeCall<string>('allowance', [owner, spender], block);
    return toBigNumber(result);
  }

  /**
   * Transfer tokens to a specified address
   *
   * @param from The address to transfer from
   * @param to The address to transfer to
   * @param amount The amount to transfer
   */
  public transfer(from: Address, to: Address, amount: BigNumber) {
    const method = 'transfer';
    const args = [to, amount.toFixed()];

    const validate = async () => {
      const balance = await this.getBalanceOf(from);
      if (!amount.isLessThanOrEqualTo(balance)) {
        throw new OutOfBalanceError(amount.toNumber(), balance.toNumber());
      }
      if (isZeroAddress(to)) throw new ZeroAddressError();
    };

    return this.createTransaction({ from, method, args, validate });
  }

  /**
   * Approve the spender address to spend the specified amount of tokens on behalf of the owner address
   *
   * @param owner The address to transfer from
   * @param spender The address to transfer to
   * @param amount The amount to transfer
   */
  public approve(owner: Address, spender: Address, amount: BigNumber) {
    const args = [spender, amount.toFixed()];
    return this.createTransaction({ from: owner, method: 'approve', args });
  }

  /**
   * Increase the approved amount of tokens that a spender can spend
   *
   * @param owner The address to transfer from
   * @param spender The address to transfer to
   * @param amount The amount to transfer
   */
  public increaseApproval(owner: Address, spender: Address, amount: BigNumber) {
    const method = 'increaseApproval';
    const args = [spender, amount.toFixed()];
    return this.createTransaction({ from: owner, method, args });
  }

  /**
   * Decrease the approved amount of tokens that a spender can spend
   *
   * @param owner The address to transfer from
   * @param spender The address to transfer to
   * @param amount The amount to transfer
   */
  public decreaseApproval(owner: Address, spender: Address, amount: BigNumber) {
    const method = 'decreaseApproval';
    const args = [spender, amount.toFixed()];
    return this.createTransaction({ from: owner, method, args });
  }
}

export interface StandardToken extends ERC20WithFields {}
applyMixins(StandardToken, [ERC20WithFields]);
