import BigNumber from 'bignumber.js';
import { fromWei } from 'web3-utils';
import { AccountingAbi } from '../abis/Accounting';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';

export interface FundCalculations {
  sharePrice: BigNumber;
  gav: BigNumber;
  nav: BigNumber;
  feesInDenominationAsset: BigNumber;
  feesInShares: BigNumber;
  gavPerShareNetManagementFee: BigNumber;
}

export class Accounting extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(AccountingAbi, address));
  }

  /**
   * Gets the list of assets owned by a fund
   *
   * @param {number} block The block number to execute the call on.
   * @returns {Promise<BigNumber>} A promise resolving to an array of asset addresses
   */
  public async ownedAssets(block?: number) {
    const result = await this.makeCall('ownedAssets', undefined, block);
    return result;
  }

  /**
   * Gets the default share price for a fund.
   *
   * @param {number} block The block number to execute the call on.
   * @returns {Promise<BigNumber>} A promise resolving to the default share price
   */
  public async defaultSharePrice(block?: number) {
    const result = await this.makeCall('DEFAULT_SHARE_PRICE', undefined, block);
    return new BigNumber(`${result}`);
  }

  /**
   * Gets the address of the native asset
   *
   * @param {number} block The block number to execute the call on.
   * @returns {Promise<Address>} A promise resolving to the address of the native asset
   */
  public async nativeAsset(block?: number) {
    const result = await this.makeCall<Address>('NATIVE_ASSET', undefined, block);
    return result;
  }

  /**
   * Performs accounting calculations (GAV, NAV, share price, etc)
   *
   * @param {number} block The block number to execute the call on.
   * @returns {Promise<FundCalculations>} A promise resolving to a [[FundCalculations]] object
   */
  public async performCalculations(block?: number) {
    const result = await this.makeCall('performCalculations', undefined, block);

    return {
      sharePrice: new BigNumber(fromWei(`${result.sharePrice}`)),
      gav: new BigNumber(fromWei(`${result.gav}`)),
      nav: new BigNumber(fromWei(`${result.nav}`)),
      feesInDenominationAsset: new BigNumber(fromWei(`${result.feesInDenominationAsset}`)),
      feesInShares: new BigNumber(fromWei(`${result.feesInShares}`)),
      gavPerShareNetManagementFee: new BigNumber(fromWei(`${result.gavPerShareNetManagementFee}`)),
    } as FundCalculations;
  }
}
