import { Contract as EthContract } from 'web3-eth-contract';
import BigNumber from 'bignumber.js';
import { CanonicalPriceFeedAbi } from '../../abis/CanonicalPriceFeed.abi';
import { Contract } from '../../Contract';
import { Environment } from '../../Environment';
import { Address } from '../../Address';

export interface PriceInfo {
  token: Address;
  price: BigNumber;
  timestamp: BigNumber;
}

export interface PricesInfo {
  [index: number]: {
    price: BigNumber;
    timestamp: BigNumber;
  };
}

export class CanonicalPriceFeed extends Contract {
  /**
   * Constructs a [CanonicalPriceFeed] instance.
   *
   * @param environment The environment to construct the [CanonicalPriceFeed] in.
   * @param address The address of the deployed [CanonicalPriceFeed] contract.
   */
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(
      environment,
      typeof address === 'string' ? new environment.client.Contract(CanonicalPriceFeedAbi, address) : address,
    );
  }

  /**
   * Gets the quote token of the price feed.
   *
   * @param block The block number to execute the call on.
   */
  public getQuoteToken(block?: number) {
    return this.makeCall<Address>('getQuoteAsset', undefined, block);
  }

  /**
   * Gets the price of a token.
   *
   * @param token The address of the base token.
   * @param block The block number to execute the call on.
   */
  public async getPrice(token: Address, block?: number) {
    const { '0': price, '1': timestamp } = await this.makeCall<{
      '0': string;
      '1': string;
    }>('getPrice', [token], block);

    return {
      token,
      price: new BigNumber(price),
      timestamp: new BigNumber(timestamp),
    } as PriceInfo;
  }

  /**
   * Gets the prices of multiple tokens.
   *
   * @param tokens The addresses of the base tokens.
   * @param block The block number to execute the call on.
   */
  public async getPrices(tokens: Address[], block?: number) {
    const { '0': prices, '1': timestamps } = await this.makeCall<{
      '0': string[];
      '1': string[];
    }>('getPrices', [tokens], block);
    return tokens.reduce((carry, token, index) => {
      const item: PriceInfo = {
        token,
        price: new BigNumber(prices[index]),
        timestamp: new BigNumber(timestamps[index]),
      };

      return [...carry, item];
    }, []) as PriceInfo[];
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
