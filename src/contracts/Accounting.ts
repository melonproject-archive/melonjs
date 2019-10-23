import * as R from 'ramda';
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

export type FundHoldings = {
  [key: string]: BigNumber;
};

export class Accounting extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(AccountingAbi, address));
  }

  /**
   * Gets the length of the owned assets array.
   *
   * @param block The block number to execute the call on.
   */
  public async getOwnedAssetsLength(block?: number) {
    const result = await this.makeCall<string>('getOwnedAssetsLength', undefined, block);
    return parseInt(result, 10);
  }

  /**
   * Gets the address of an owned asset by its index.
   *
   * @param index The index in the ownedAssets array.
   * @param block The block number to execute the call on.
   */
  public async getOwnedAsset(index: number, block?: number) {
    const result = await this.makeCall<Address>('ownedAssets', [index], block);
    return result;
  }

  /**
   * Gets a list of all owned assets.
   *
   * @param block The block number to execute the call on.
   */
  public async getOwnedAssets(block?: number) {
    const length = await this.getOwnedAssetsLength(block);
    return Promise.all(R.range(0, length).map(index => this.getOwnedAsset(index, block)));
  }

  /**
   * Gets a list of all owned assets.
   *
   * @param block The block number to execute the call on.
   */
  public async getAssetHolding(asset: Address, block?: number) {
    const result = await this.makeCall<string>('assetHoldings', [asset], block);
    return new BigNumber(`${result}`);
  }

  /**
   * Gets the holdings of all owned assets.
   *
   * @param index The index in the ownedAssets array.
   * @param block The block number to execute the call on.
   */
  public async getFundHoldings(block?: number) {
    const { '0': quantities, '1': assets } = await this.makeCall<{
      '0': string[];
      '1': string[];
    }>('getFundHoldings', undefined, block);

    const output = assets.reduce((carry, key, index) => {
      const quantity = new BigNumber(`${quantities[index]}`);
      return { ...carry, [key]: quantity };
    }, {}) as FundHoldings;

    return output;
  }

  /**
   * Gets the default share price for a fund.
   *
   * @param block The block number to execute the call on.
   */
  public async getDefaultSharePrice(block?: number) {
    const result = await this.makeCall<string>('DEFAULT_SHARE_PRICE', undefined, block);
    return new BigNumber(`${result}`);
  }

  /**
   * Gets the address of the native asset.
   *
   * @param block The block number to execute the call on.
   */
  public async getNativeAsset(block?: number) {
    const result = await this.makeCall<Address>('NATIVE_ASSET', undefined, block);
    return result;
  }

  /**
   * Gets the GAV of a fund.
   *
   * @param block The block number to execute the call on.
   */
  public async getGAV(block?: number) {
    const result = await this.makeCall<string>('calcGav', undefined, block);
    return new BigNumber(`${result}`);
  }

  /**
   * Performs accounting calculations (GAV, NAV, share price, etc).
   *
   * @param block The block number to execute the call on.
   */
  public async getCalculationResults(block?: number) {
    const result = await this.makeCall<FundCalculations>('performCalculations', undefined, block);

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
