import { Contract } from '../../../Contract';
import { Contract as EthContract } from 'web3-eth-contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { SharesAbi } from '../../../abis/Shares.abi';
import { hexToString } from 'web3-utils';
import { Deployment } from '../../../Transaction';

export class Shares extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(environment, typeof address === 'string' ? new environment.client.Contract(SharesAbi, address) : address);
  }

  public static deploy(environment: Environment, data: string, from: Address, hub: Address) {
    const contract = new environment.client.Contract(SharesAbi);
    const transaction = contract.deploy({
      data,
      arguments: [hub],
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
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

export interface Shares extends Spoke {}
applyMixins(Shares, [Spoke]);
