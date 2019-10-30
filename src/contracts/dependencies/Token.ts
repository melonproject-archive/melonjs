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

  public async getBalanceOf(who: Address, block?: number) {
    const result = await this.makeCall<string>('balanceOf', [who], block);
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
