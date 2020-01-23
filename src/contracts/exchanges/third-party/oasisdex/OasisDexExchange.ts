import { Contract } from '../../../../Contract';
import { Environment } from '../../../../Environment';
import { Address } from '../../../../Address';
import { toBigNumber } from '../../../../utils/toBigNumber';
import { toDate } from '../../../../utils/toDate';
import { OasisDexExchangeAbi } from '../../../../abis/OasisDexExchange.abi';
import BigNumber from 'bignumber.js';

export interface OasisDexOffer {
  makerQuantity: BigNumber;
  makerAsset: Address;
  takerQuantity: BigNumber;
  takerAsset: Address;
  owner: Address;
  timestamp: Date;
}

export class OasisDexExchange extends Contract {
  public static readonly abi = OasisDexExchangeAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, closetime: BigNumber) {
    return super.createDeployment<OasisDexExchange>(environment, bytecode, from, [closetime.toFixed(0)]);
  }

  /**
   * Gets the details of an offer
   *
   * @param id The id of the offer
   * @param block The block number to execute the call on.
   */
  public async getOffer(id: BigNumber, block?: number): Promise<OasisDexOffer> {
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
    }>('offers', [id.toFixed(0)], block);

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
   * @param id The id of the offer
   * @param block The block number to execute the call on.
   */
  public async isActive(id: BigNumber, block?: number) {
    return this.makeCall<boolean>('isActive', [id.toFixed(0)], block);
  }

  /**
   * Gets the owner of an offer
   *
   * @param id The id of the offer
   * @param block The block number to execute the call on.
   */
  public async getOwner(id: BigNumber, block?: number) {
    return this.makeCall<Address>('getOwner', [id.toFixed(0)], block);
  }

  /**
   * Checks whether an offer is closed
   *
   * @param block The block number to execute the call on.
   */
  public async isClosed(block?: number) {
    return this.makeCall<boolean>('isClosed', undefined, block);
  }
}
