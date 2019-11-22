import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { AmguConsumerAbi } from '../../abis/AmguConsumer.abi';
import { Engine } from './Engine';
import { CanonicalPriceFeed } from '../prices/CanonicalPriceFeed';
import BigNumber from 'bignumber.js';
import { ERC20WithFields } from '../dependencies/token/ERC20WithFields';

export class AmguConsumer extends Contract {
  public static readonly abi = AmguConsumerAbi;

  /**
   * Gets the amgu token.
   *
   * @param block The block number to execute the call on.
   */
  public getAmguToken(block?: number) {
    return this.makeCall<Address>('mlnToken', undefined, block);
  }

  /**
   * Gets the engine address.
   *
   * @param block The block number to execute the call on.
   */
  public getEngine(block?: number) {
    return this.makeCall<Address>('engine', undefined, block);
  }

  /**
   * Gets the price source address.
   *
   * @param block The block number to execute the call on.
   */
  public getPriceSource(block?: number) {
    return this.makeCall<Address>('priceSource', undefined, block);
  }

  /**
   * Gets the version address.
   *
   * @param block The block number to execute the call on.
   */
  public getVersion(block?: number) {
    return this.makeCall<Address>('version', undefined, block);
  }

  protected async calculateAmgu(gasEstimation: number, block?: number) {
    const [amguTokenAddress, engineAddress, priceSourceAddress] = await Promise.all([
      this.getAmguToken(block),
      this.getEngine(block),
      this.getPriceSource(block),
    ]);

    // TODO: Can we derive the price feed type somehow or create a lightweight, common denominator just based
    // on the interface for cases like this?
    const prices = new CanonicalPriceFeed(this.environment, priceSourceAddress);
    const engine = new Engine(this.environment, engineAddress);
    const token = new ERC20WithFields(this.environment, amguTokenAddress);

    const [mlnPerAmgu, ethPerMln, decimals] = await Promise.all([
      engine.getAmguPrice(block),
      prices.getPrice(amguTokenAddress, block),
      token.getDecimals(),
    ]);

    // TODO: Calculate the AMGU.
    console.log(mlnPerAmgu, ethPerMln, decimals, gasEstimation);

    // return createQuantity(
    //   'ETH',
    //   multiply(
    //     new BigInteger(toAtomic(ethPerMln[0])),
    //     new BigInteger(mlnPerAmgu.quantity),
    //     new BigInteger(gasEstimation),
    //   ).slice(0, -18),
    // );

    return new BigNumber(0);
  }
}
