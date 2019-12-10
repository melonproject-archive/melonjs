import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';
import { Address } from '../../../../Address';
import { toBigNumber } from '../../../../utils/toBigNumber';
import { toDate } from '../../../../utils/toDate';
import BigNumber from 'bignumber.js';
import { MatchingMarketAbi } from '../../../../abis/MatchingMarket.abi';

export class MatchingMarket extends Contract {
  public static readonly abi = MatchingMarketAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, closetime: BigNumber) {
    return super.createDeployment<MatchingMarket>(environment, bytecode, from, [closetime.toString()]);
  }

  /**
   * Gets the details of an offer
   *
   * @param numShares The number of shares.
   * @param asset The requested asset.
   * @param block The block number to execute the call on.
   */
  public async getOffer(id: BigNumber, block?: number) {
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
    }>('offers', [id.toString()], block);

    return {
      makerQuantity: toBigNumber(makerQuantity),
      makerAsset,
      takerQuantity: toBigNumber(takerQuantity),
      takerAsset,
      owner,
      timestamp: toDate(timestamp),
    };
  }

  /**
   * Checks whether an offer is active
   *
   * @param block The block number to execute the call on.
   */
  public async isActive(id: BigNumber, block?: number) {
    return this.makeCall<boolean>('isActive', [id.toString()], block);
  }

  /**
   * Gets the owner of an offer
   *
   * @param id The id of the offer
   * @param block The block number to execute the call on.
   */
  public async getOwner(id: BigNumber, block?: number) {
    return this.makeCall<Address>('getOwner', [id.toString()], block);
  }
}
