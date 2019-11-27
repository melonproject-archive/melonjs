import BigNumber from 'bignumber.js';
import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { toDate } from '../../utils/toDate';
import { toBigNumber } from '../../utils/toBigNumber';
import { CallError } from '../../errors/CallError';
import { PriceSourceInterfaceAbi } from '../../abis/PriceSourceInterface.abi';

export interface PriceInfo {
  price: BigNumber;
  timestamp: Date;
  decimals: number;
}

export interface PricesInfo {
  [index: number]: {
    price: BigNumber;
    timestamp: Date;
  };
}

export class InvalidPriceError extends CallError {
  name = 'InvalidPriceError';

  constructor(public readonly token: Address, message = 'Invalid price.') {
    super(message);
  }
}

export class PriceSourceInterface extends Contract {
  public static readonly abi = PriceSourceInterfaceAbi;

  /**
   * Gets the quote asset of the price feed.
   *
   * @param block The block number to execute the call on.
   */
  public getQuoteAsset(block?: number) {
    return this.makeCall<Address>('getQuoteAsset', undefined, block);
  }

  /**
   * Gets the last update of the price feed.
   *
   * @param block The block number to execute the call on.
   */
  public async getLastUpdate(block?: number) {
    const result = await this.makeCall<string>('getLastUpdate', undefined, block);
    return result && toDate(result);
  }

  /**
   * Checks if the price of a token is valid.
   *
   * @param tokenAddress The address of the token.
   * @param block The block number to execute the call on.
   */
  public hasValidPrice(tokenAddress: Address, block?: number) {
    return this.makeCall<boolean>('hasValidPrice', [tokenAddress], block);
  }

  /**
   * Checks if the prices of an array of tokens is valid.
   *
   * @param tokenAddresses The addresses of the tokens.
   * @param block The block number to execute the call on.
   */
  public hasValidPrices(tokenAddresses: Address[], block?: number) {
    return this.makeCall<boolean>('hasValidPrices', [tokenAddresses], block);
  }

  /**
   * Gets the price of a token.
   *
   * @param token The address of the base token.
   * @param block The block number to execute the call on.
   */
  public async getPrice(token: Address, block?: number): Promise<Omit<PriceInfo, 'decimals'>> {
    const result = await this.makeCall<{
      '0': string;
      '1': string;
    }>('getPrice', [token], block);

    if (!result) {
      throw new InvalidPriceError(token);
    }

    const { '0': price, '1': timestamp } = result;
    const output: Omit<PriceInfo, 'decimals'> = {
      price: toBigNumber(price),
      timestamp: toDate(timestamp),
    };

    return output;
  }

  /**
   * Gets the prices of multiple tokens.
   *
   * @param tokens The addresses of the base tokens.
   * @param block The block number to execute the call on.
   */
  public async getPrices(tokens: Address[], block?: number) {
    const result = await this.makeCall<{
      '0': string[];
      '1': string[];
    }>('getPrices', [tokens], block);

    const { '0': prices, '1': timestamps } = result;
    return tokens.reduce((carry, token, index) => {
      const item: Omit<PriceInfo, 'decimals'> = {
        price: toBigNumber(prices[index]),
        timestamp: toDate(timestamps[index]),
      };

      return [...carry, item];
    }, []) as PriceInfo[];
  }

  /**
   * Gets the price info of a token
   *
   * @param token The addresses of the base tokens.
   * @param block The block number to execute the call on.
   */
  public async getPriceInfo(token: Address, block?: number) {
    const result = await this.makeCall<{
      '0': string;
      '1': string;
    }>('getPriceInfo', [token], block);

    const { '0': price, '1': decimals } = result;

    return {
      price: toBigNumber(price),
      decimals: parseInt(decimals, 10),
    } as Omit<PriceInfo, 'timestamp'>;
  }

  /**
   * Gets the inverted price info of a token
   *
   * @param token The addresses of the base tokens.
   * @param block The block number to execute the call on.
   */
  public async getInvertedPriceInfo(token: Address, block?: number) {
    const result = await this.makeCall<{
      '0': string;
      '1': string;
    }>('getInvertedPriceInfo', [token], block);

    const { '0': price, '1': decimals } = result;

    return {
      price: toBigNumber(price),
      decimals: parseInt(decimals, 10),
    } as Omit<PriceInfo, 'timestamp'>;
  }

  /**
   * Gets the reference price information
   *
   * @param base The address of the base token.
   * @param quote The address of the quote token
   * @param block The block number to execute the call on.
   */
  public async getReferencePriceInfo(base: Address, quote: Address, block?: number) {
    const result = await this.makeCall<{
      '0': string;
      '1': string;
    }>('getReferencePriceInfo', [base, quote], block);

    const { '0': price, '1': decimals } = result;

    return {
      price: toBigNumber(price),
      decimals: parseInt(decimals, 10),
    } as Omit<PriceInfo, 'timestamp'>;
  }

  /**
   * Gets the order price information
   *
   * @param sellAsset The address of the sell asset.
   * @param buyAsset The address of the buy asset
   * @param sellQuantity The quantity of the sell asset
   * @param buyQuantity The quantity of the buy asset
   * @param block The block number to execute the call on.
   */
  public async getOrderPriceInfo(
    sellAsset: Address,
    buyAsset: Address,
    sellQuantity: BigNumber,
    buyQuantity: BigNumber,
    block?: number,
  ) {
    const result = await this.makeCall<string>(
      'getOrderPriceInfo',
      [sellAsset, buyAsset, sellQuantity, buyQuantity],
      block,
    );
    return toBigNumber(result);
  }

  /**
   * Checks whether a price exists on an asset pair
   *
   * @param sellAsset The address of the sell asset.
   * @param buyAsset The address of the buy asset
   * @param block The block number to execute the call on.
   */
  public existsPriceOnAssetPair(sellAsset: Address, buyAsset: Address, block?: number) {
    return this.makeCall<boolean>('existsPriceOnAssetPair', [sellAsset, buyAsset], block);
  }

  /**
   * Checks whether a price exists on an asset pair
   *
   * @param sellAsset The address of the sell asset.
   * @param buyAsset The address of the buy asset
   * @param block The block number to execute the call on.
   */
  public async convertQuantity(fromAssetQuantity: BigNumber, fromAsset: Address, toAsset: Address, block?: number) {
    const result = await this.makeCall<string>('convertQuantity', [fromAssetQuantity, fromAsset, toAsset], block);
    return toBigNumber(result);
  }
}
