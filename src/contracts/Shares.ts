import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { Spoke } from './Spoke';
import { applyMixins } from '../utils/applyMixins';
import { SharesAbi } from '../abis/Shares.abi';
import { hexToString } from 'web3-utils';

export class Shares extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(SharesAbi, address));
  }

  /**
   * Gets the name of the shares.
   *
   * @param block The block number to execute the call on.
   */
  public async getName(block?: number) {
    const result = await this.makeCall<string>('name', undefined, block);
    return hexToString(result);
  }

  /**
   * Gets the symbol of the shares.
   *
   * @param block The block number to execute the call on.
   */
  public async getSymbol(block?: number) {
    const result = await this.makeCall<string>('symbol', undefined, block);
    return result;
  }
}

export interface Shares extends Spoke {}
applyMixins(Shares, [Spoke]);
