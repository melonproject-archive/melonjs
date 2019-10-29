import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { PriceToleranceAbi } from '../abis/PriceTolerance.abi';
import { applyMixins } from '../utils/applyMixins';
import { toBigNumber } from '../utils/toBigNumber';
import { Policy } from './Policy';

export class PriceTolerance extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(
      environment,
      typeof address === 'string' ? new environment.client.Contract(PriceToleranceAbi, address) : address,
    );
  }

  /**
   * Gets the price tolerance
   *
   * @param block The block number to execute the call on.
   */
  public async getPriceTolerance(block?: number) {
    const result = await this.makeCall<string>('tolerance', undefined, block);
    return toBigNumber(result);
  }
}

export interface PriceTolerance extends Policy {}
applyMixins(PriceTolerance, [Policy]);
