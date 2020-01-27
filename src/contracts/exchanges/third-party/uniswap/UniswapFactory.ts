import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';
import { Address } from '../../../../Address';
import { UniswapFactoryAbi } from '../../../../abis/UniswapFactory.abi';

export class UniswapFactory extends Contract {
  public static readonly abi = UniswapFactoryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<UniswapFactory>(environment, bytecode, from);
  }

  /**
   * Gets the exchange address
   *
   * @param token The maker asset address.
   * @param block The block number to execute the call on.
   */
  public getExchange(token: Address, block?: number) {
    return this.makeCall<Address>('getExchange', [token], block);
  }
}
