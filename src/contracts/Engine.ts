import BigNumber from 'bignumber.js';
import { EngineAbi } from '../abis/Engine.abi';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';

export class Engine extends Contract {
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
