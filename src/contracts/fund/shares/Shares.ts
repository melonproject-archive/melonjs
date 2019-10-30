import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { SharesAbi } from '../../../abis/Shares.abi';
import { hexToString } from 'web3-utils';
import { Token } from '../../dependencies/Token';

export class Shares extends Contract {
  public static readonly abi = SharesAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, hub: Address) {
    return super.createDeployment<Shares>(environment, bytecode, from, [hub]);
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

  /**
   * Gets the decimals of the shares.
   *
   * @param block The block number to execute the call on.
   */
  public async getDecimals(block?: number) {
    const result = await this.makeCall<string>('decimals', undefined, block);
    return parseInt(result, 10);
  }
}

export interface Shares extends Spoke, Token {}
applyMixins(Shares, [Spoke, Token]);
