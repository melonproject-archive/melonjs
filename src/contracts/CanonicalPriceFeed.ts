import * as R from 'ramda';
import BigNumber from 'bignumber.js';
import { CanonicalPriceFeedAbi } from '../abis/CanonicalPriceFeed.abi';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { Token } from './Token';
import { TokenInfo } from './AbstractToken';

export interface PriceInfo {
  quoteToken: TokenInfo;
  baseToken: TokenInfo;
  price: BigNumber;
  timestamp: BigNumber;
}

export interface PricesInfo {
  [index: number]: {
    quoteToken: TokenInfo;
    baseToken: TokenInfo;
    price: BigNumber;
    timestamp: BigNumber;
  };
}

export class CanonicalPriceFeed extends Contract {
  /**
   * Creates a [CanonicalPriceFeed] instance for the address specified in the given environment's deployment.
   *
   * Automatically resolves the address by looking it up in the address book of the deployment.
   *
   * @param environment The environment for which to create the [CanonicalPriceFeed].
   */
  public static forDeployment(environment: Environment) {
    const address = environment.getAddress('melonContracts.priceSource');
    if (!address) {
      throw new Error('Missing deployment for price source contract.');
    }

    return new this(environment, address);
  }

  /**
   * Constructs a [CanonicalPriceFeed] instance.
   *
   * @param environment The environment to construct the [CanonicalPriceFeed] in.
   * @param address The address of the deployed [CanonicalPriceFeed] contract.
   */
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(CanonicalPriceFeedAbi, address));
  }

  /**
   * Gets the quote token of the price feed.
   *
   * @param block The block number to execute the call on.
   */
  public async getQuoteToken(block?: number) {
    const result = await this.makeCall<Address>('getQuoteAsset', undefined, block);
    const token = Token.findDefinition(this.environment, result);
    return token;
  }

  /**
   * Gets the price of a token pair.
   *
   * @param tokenAddress The address of the base token.
   * @param block The block number to execute the call on.
   */
  public async getPrice(tokenAddress: Address, block?: number) {
    const { '0': price, '1': timestamp } = await this.makeCall<{
      '0': string;
      '1': string;
    }>('getPrice', [tokenAddress], block);
    const quoteToken = await this.getQuoteToken();
    const baseToken = Token.findDefinition(this.environment, tokenAddress);

    return {
      price: new BigNumber(price),
      timestamp: new BigNumber(timestamp),
      quoteToken,
      baseToken,
    } as PriceInfo;
  }

  /**
   * Gets the prices of token pairs.
   *
   * @param  The addresses of base tokens.
   * @param block The block number to execute the call on.
   */
  public async getPrices(tokenAddresses: Address[], block?: number) {
    const { '0': prices, '1': timestamps } = await this.makeCall<{
      '0': string[];
      '1': string[];
    }>('getPrices', [tokenAddresses], block);
    const getToken = (tokenAddress: Address) => Token.findDefinition(this.environment, tokenAddress);
    const baseTokens = R.map(getToken, tokenAddresses);
    const quoteToken = await this.getQuoteToken();

    const merge = (price: string, timestamp: string) => ({ price, timestamp });
    const priceTimestampPairs = R.zipWith(merge, prices, timestamps);

    const merge1 = (baseToken: TokenInfo, priceTimestampPair: { price: string; timestamp: string }) => {
      return {
        price: new BigNumber(priceTimestampPair.price),
        timestamp: new BigNumber(priceTimestampPair.timestamp),
        baseToken,
        quoteToken,
      };
    };

    return R.zipWith(merge1, baseTokens, priceTimestampPairs) as PricesInfo;
  }

  /**
   * Checks if the price of a token is valid.
   *
   * @param tokenAddress The address of the token.
   * @param block The block number to execute the call on.
   */
  public async hasValidPrice(tokenAddress: Address, block?: number) {
    return await this.makeCall<boolean>('hasValidPrice', [tokenAddress], block);
  }

  /**
   * Gets the last update of the price feed.
   *
   * @param block The block number to execute the call on.
   */
  public async getLastUpdate(block?: number) {
    const result = await this.makeCall<string>('getLastUpdate', undefined, block);
    const timestamp = new BigNumber(result.toString()).multipliedBy(1000).toNumber();
    return new Date(timestamp);
  }
}
