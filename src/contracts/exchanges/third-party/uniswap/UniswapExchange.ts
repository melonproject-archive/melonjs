import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';
import { Address } from '../../../../Address';
import { UniswapExchangeAbi } from '../../../../abis/UniswapExchange.abi';
import BigNumber from 'bignumber.js';
import { toBigNumber } from '../../../../utils/toBigNumber';

export class UniswapExchange extends Contract {
  public static readonly abi = UniswapExchangeAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<UniswapExchange>(environment, bytecode, from);
  }

  /**
   * Gets the input price for a swap from ETH to token
   *
   * @param ethSold The amount of ETH sold (in wei)
   * @param block The block number to execute the call on.
   */
  public async getEthToTokenInputPrice(ethSold: BigNumber, block?: number) {
    const result = await this.makeCall<string>('getEthToTokenInputPrice', [ethSold.toFixed(0)], block);
    return toBigNumber(result);
  }

  /**
   * Gets the input price for a swap from token to ETH
   *
   * @param tokensBought The amount of token sold (in base unit)
   * @param block The block number to execute the call on.
   */
  public async getTokenToEthInputPrice(tokensBought: BigNumber, block?: number) {
    const result = await this.makeCall<string>('getTokenToEthInputPrice', [tokensBought.toFixed(0)], block);
    return toBigNumber(result);
  }
}
