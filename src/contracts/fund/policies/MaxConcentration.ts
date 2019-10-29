import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { MaxConcentrationAbi } from '../../../abis/MaxConcentration.abi';
import { applyMixins } from '../../../utils/applyMixins';
import { Policy } from './Policy';
import { toBigNumber } from '../../../utils/toBigNumber';

export class MaxConcentration extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(
      environment,
      typeof address === 'string' ? new environment.client.Contract(MaxConcentrationAbi, address) : address,
    );
  }

  /**
   * Gets the maximum concentration of an asset in the portfolio.
   *
   * @param block The block number to execute the call on.
   */
  public async getMaxConcentration(block?: number) {
    const result = await this.makeCall<string>('maxConcentration', undefined, block);
    return toBigNumber(result);
  }
}

export interface MaxConcentration extends Policy {}
applyMixins(MaxConcentration, [Policy]);
