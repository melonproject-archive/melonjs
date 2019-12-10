import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';
import { Address } from '../../../../Address';
import { SimpleMarketAbi } from '../../../../abis/SimpleMarket.abi';
import { toBigNumber } from '../../../../utils/toBigNumber';
import { toDate } from '../../../../utils/toDate';

export class MatchingMarket extends Contract {
  public static readonly abi = SimpleMarketAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<MatchingMarket>(environment, bytecode, from);
  }

  /**
   * Gets the details of an offer
   *
   * @param numShares The number of shares.
   * @param asset The requested asset.
   * @param block The block number to execute the call on.
   */
  public async getOffer(id: string, block?: number) {
    const {
      '0': makerQuantity,
      '1': makerAsset,
      '2': takerQuantity,
      '3': takerAsset,
      '4': owner,
      '5': timestamp,
    } = await this.makeCall<{
      '0': string;
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
    }>('offers', [id], block);

    return {
      makerQuantity: toBigNumber(makerQuantity),
      makerAsset,
      takerQuantity: toBigNumber(takerQuantity),
      takerAsset,
      owner,
      timestamp: toDate(timestamp),
    };
  }
}
