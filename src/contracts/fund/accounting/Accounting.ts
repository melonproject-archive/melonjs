import BigNumber from 'bignumber.js';
import { AccountingAbi } from '../../../abis/Accounting.abi';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { toBigNumber } from '../../../utils/toBigNumber';
import { AmguConsumer } from '../../engine/AmguConsumer';
import { range } from '../../../utils/range';
import { FeeManager } from '../fees/FeeManager';
import { PerformanceFee } from '../fees/PerformanceFee';
import { ValidationError } from '../../../errors/ValidationError';
import { Shares } from '../shares/Shares';
import { IPriceSource } from '../../prices/IPriceSource';
import { sameAddress } from '../../../utils/sameAddress';
import { Registry } from '../../version/Registry';

export class PerformanceFeeCannotBePaidError extends ValidationError {
  public readonly name = 'PerformanceFeeCannotBePaidError';
  constructor(message: string = 'Performance fee cannot be paid out.') {
    super(message);
  }
}

export interface FundCalculations {
  sharePrice: BigNumber;
  gav: BigNumber;
  nav: BigNumber;
  feesInDenominationAsset: BigNumber;
  feesInShares: BigNumber;
  gavPerShareNetManagementFee: BigNumber;
}

export type FundHolding = {
  address: Address;
  amount: BigNumber;
};

export interface AccountingDeployArguments {
  hub: Address;
  denominationAsset: Address;
  nativeAsset: Address;
}

export class Accounting extends Contract {
  public static readonly abi = AccountingAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: AccountingDeployArguments) {
    return super.createDeployment<Accounting>(environment, bytecode, from, [
      args.hub,
      args.denominationAsset,
      args.nativeAsset,
    ]);
  }

  /**
   * Gets the max number of owned assets.
   *
   * @param block The block number to execute the call on.
   */
  public async getMaxOwnedAssets(block?: number) {
    const result = await this.makeCall<string>('MAX_OWNED_ASSETS', undefined, block);
    return parseInt(result, 10);
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
  public getOwnedAsset(index: number, block?: number) {
    return this.makeCall<Address>('ownedAssets', [index], block);
  }

  /**
   * Gets a list of all owned assets.
   *
   * @param block The block number to execute the call on.
   */
  public async getOwnedAssets(block?: number) {
    const length = await this.getOwnedAssetsLength(block);
    return Promise.all(range(length).map((_, index) => this.getOwnedAsset(index, block)));
  }

  /**
   * Gets the holding of a specific asset.
   *
   * @param asset The address of the asset.
   * @param block The block number to execute the call on.
   */
  public async getAssetHolding(asset: Address, block?: number) {
    const result = await this.makeCall<string>('assetHoldings', [asset], block);
    return toBigNumber(result);
  }

  /**
   * Gets the holdings of all owned assets.
   *
   * @param block The block number to execute the call on.
   */
  public async getFundHoldings(block?: number) {
    const { '0': quantities, '1': assets } = await this.makeCall<{
      '0': string[];
      '1': string[];
    }>('getFundHoldings', undefined, block);

    const output = assets.reduce((carry, key, index) => {
      const amount = toBigNumber(quantities[index]);
      return [...carry, { address: key, amount }];
    }, []) as FundHolding[];

    return output;
  }

  /**
   * Gets the default share price.
   *
   * @param block The block number to execute the call on.
   */
  public async getDefaultSharePrice(block?: number) {
    const result = await this.makeCall<string>('DEFAULT_SHARE_PRICE', undefined, block);
    return toBigNumber(result);
  }

  /**
   * Gets the address of the denomination asset.
   *
   * @param block The block number to execute the call on.
   */
  public getDenominationAsset(block?: number) {
    return this.makeCall<Address>('DENOMINATION_ASSET', undefined, block);
  }

  /**
   * Gets the address of the native asset (address only).
   *
   * @param block The block number to execute the call on.
   */
  public getNativeAsset(block?: number) {
    return this.makeCall<Address>('NATIVE_ASSET', undefined, block);
  }

  /**
   * Gets the GAV.
   *
   * @param block The block number to execute the call on.
   */
  public async getGAV(block?: number) {
    const result = await this.makeCall<string>('calcGav', undefined, block);
    return toBigNumber(result);
  }

  /**
   * Performs accounting calculations (GAV, NAV, share price, etc).
   *
   * @param block The block number to execute the call on.
   */
  public async getCalculationResults(block?: number) {
    const result = await this.makeCall<FundCalculations>('performCalculations', undefined, block);

    return {
      sharePrice: toBigNumber(result.sharePrice),
      gav: toBigNumber(result.gav),
      nav: toBigNumber(result.nav),
      feesInDenominationAsset: toBigNumber(result.feesInDenominationAsset),
      feesInShares: toBigNumber(result.feesInShares),
      gavPerShareNetManagementFee: toBigNumber(result.gavPerShareNetManagementFee),
    } as FundCalculations;
  }

  /**
   * Manually performs accounting calculations (GAV, NAV, share price, etc).
   *
   * @param block The block number to execute the call on.
   */
  public async getManualCalculationResults(block?: number) {
    const [routes, gavFromAssets] = await Promise.all([this.getRoutes(block), this.getGavFromAssets(block)]);

    const shares = new Shares(this.environment, routes.shares);
    const feeManager = new FeeManager(this.environment, routes.feeManager);

    const [mgtmFeeAmount, performanceFeeAddress, totalSupply] = await Promise.all([
      feeManager.getManagementFeeAmount(block),
      feeManager.getFee(1, block),
      shares.getTotalSupply(block),
    ]);

    const performanceFee = new PerformanceFee(this.environment, performanceFeeAddress);
    const divisor = await performanceFee.getDivisor(block);

    const [highWaterMark, perfFeeRate, gavPerShare] = await Promise.all([
      performanceFee.getHighWaterMark(routes.feeManager, block),
      performanceFee.getPerformanceFeeRate(routes.feeManager, block),
      totalSupply.isZero()
        ? this.getDefaultSharePrice(block)
        : this.getValuePerShare(gavFromAssets, totalSupply, block),
    ]);

    let perfFeeAmount = new BigNumber(0);
    if (gavPerShare.isGreaterThan(highWaterMark) && !totalSupply.isZero() && !gavFromAssets.isZero()) {
      const sharePriceGain = gavPerShare.minus(highWaterMark);
      const totalGain = sharePriceGain.multipliedBy(totalSupply).dividedBy(divisor);
      const feeInAsset = totalGain.multipliedBy(perfFeeRate).dividedBy(divisor);
      const preDilutionFee = totalSupply.multipliedBy(feeInAsset).dividedBy(gavFromAssets);
      perfFeeAmount = preDilutionFee.multipliedBy(totalSupply).dividedBy(totalSupply.minus(preDilutionFee));
    }
    const feesInShares = mgtmFeeAmount.plus(perfFeeAmount);

    const feesInDenominationAsset = totalSupply.isZero()
      ? new BigNumber(0)
      : feesInShares.multipliedBy(gavFromAssets).dividedBy(totalSupply.plus(feesInShares));

    const nav = gavFromAssets.minus(feesInDenominationAsset);
    const totalSupplyAccountingForFees = totalSupply.plus(feesInShares);

    const [sharePrice, gavPerShareNetManagementFee] = totalSupply.isZero()
      ? await Promise.all([this.getDefaultSharePrice(block), this.getDefaultSharePrice(block)])
      : await Promise.all([
          this.getValuePerShare(gavFromAssets, totalSupplyAccountingForFees, block),
          this.getValuePerShare(gavFromAssets, totalSupply.plus(mgtmFeeAmount), block),
        ]);

    return {
      sharePrice: sharePrice.integerValue(),
      gav: gavFromAssets.integerValue(),
      nav: nav.integerValue(),
      feesInDenominationAsset: feesInDenominationAsset.integerValue(),
      feesInShares: feesInShares.integerValue(),
      gavPerShareNetManagementFee: gavPerShareNetManagementFee.integerValue(),
    } as FundCalculations;
  }

  /**
   * Gets the asset GAV manually.
   *
   * @param block The block number to execute the call on.
   */
  public async getGavFromAssets(block?: number) {
    const [holdings, denominationAsset, registryAddress] = await Promise.all([
      this.getFundHoldings(block),
      this.getDenominationAsset(block),
      this.getRegistry(),
    ]);

    const registry = new Registry(this.environment, registryAddress);
    const priceSource = new IPriceSource(this.environment, await registry.getPriceSource(block));

    const assetGavs = await Promise.all(
      holdings.map((holding) => {
        return !sameAddress(holding.address, denominationAsset)
          ? priceSource.convertQuantity(holding.amount, holding.address, denominationAsset, block)
          : holding.amount;
      }),
    );

    const assetGav = assetGavs.reduce((acc, current) => {
      return acc.plus(current);
    }, new BigNumber(0));

    return assetGav;
  }

  /**
   * Gets the share costs in a certain asset.
   *
   * @param numShares The number of shares.
   * @param asset The requested asset.
   * @param block The block number to execute the call on.
   */
  public async getShareCostInAsset(numShares: BigNumber, asset: Address, block?: number) {
    const result = await this.makeCall<string>('getShareCostInAsset', [numShares.toFixed(0), asset], block);
    return toBigNumber(result);
  }

  /**
   * Triggers the reward all fees function (and performs some accounting updates)
   *
   * @param from The address of the sender.
   */
  public triggerRewardAllFees(from: Address) {
    const amgu = this.calculateAmgu.bind(this);

    const validate = async () => {
      const feeManager = new FeeManager(this.environment, (await this.getRoutes()).feeManager);
      const performanceFee = new PerformanceFee(this.environment, await feeManager.getPerformanceFeeAddress());

      const performanceFeeCanBePaid = await performanceFee.canUpdate(feeManager.contract.address);
      if (!performanceFeeCanBePaid) {
        throw new PerformanceFeeCannotBePaidError();
      }
    };

    return this.createTransaction({ from, method: 'triggerRewardAllFees', amgu, validate });
  }

  /**
   * Gets the value per share.
   *
   * @param totalValue The total asset value
   * @param numShares The number of shares.
   * @param block The block number to execute the call on.
   */
  public async getValuePerShare(totalValue: BigNumber, numShares: BigNumber, block?: number) {
    const result = await this.makeCall<string>('valuePerShare', [totalValue.toFixed(0), numShares.toFixed(0)], block);
    return toBigNumber(result);
  }
}

export interface Accounting extends Spoke, AmguConsumer {}
applyMixins(Accounting, [Spoke, AmguConsumer]);
