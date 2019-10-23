import BigNumber from 'bignumber.js';
import { EngineAbi } from '../abis/Engine';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';

export class Engine extends Contract {
  public static forDeployment(environment: Environment) {
    const address = environment.getAddress('melonContracts.engine');
    if (!address) {
      throw new Error('Missing deployment for engine contract.');
    }

    return new this(environment, address);
  }

  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(EngineAbi, address));
  }

  /**
   * Gets the current engine price.
   *
   * @param block The block number to execute the call on.
   */
  public async getEnginePrice(block?: number) {
    const result = await this.makeCall<string>('enginePrice', undefined, block);
    return new BigNumber(`${result}`);
  }
}
