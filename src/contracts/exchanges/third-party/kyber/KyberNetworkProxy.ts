import BigNumber from 'bignumber.js';
import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';
import { Address } from '../../../../Address';
import { KyberNetworkProxyAbi } from '../../../../abis/KyberNetworkProxy.abi';

export interface KyberExpectedRate {
  expectedRate: BigNumber;
  slippageRate: BigNumber;
}

export class KyberNetworkProxy extends Contract {
  public static readonly abi = KyberNetworkProxyAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<KyberNetworkProxy>(environment, bytecode, from);
  }

  /**
   * Gets the expected rate for a given asset pair.
   *
   * @param srcToken The maker asset address.
   * @param destToken The taker asset address.
   * @param srcQty The maker asset amount.
   * @param block The block number to execute the call on.
   */
  public async getExpectedRate(
    srcToken: Address,
    destToken: Address,
    srcQty: BigNumber,
    block?: number,
  ): Promise<KyberExpectedRate> {
    const { '0': expectedRate, '1': slippageRate } = await this.makeCall<{
      '0': string;
      '1': string;
    }>('getExpectedRate', [srcToken, destToken, srcQty.toFixed(0)], block);

    return {
      expectedRate: new BigNumber(expectedRate),
      slippageRate: new BigNumber(slippageRate),
    } as KyberExpectedRate;
  }
}
