import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import { CanonicalPriceFeed } from './CanonicalPriceFeed';
import { sameAddress } from '../utils/sameAddress';

describe('CanonicalPriceFeed', () => {
  let environment: Environment;
  let source: CanonicalPriceFeed;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    source = new CanonicalPriceFeed(environment, '0x4559DDD9E0a567bD8AB071ac106C1bC2d0C0b6Ef');
  });

  it('should return the last price feed update as date object', async () => {
    const result = await source.getLastUpdate();
    expect(result).toBeInstanceOf(Date);

    // We can't actually check the correctness of the concrete value because
    // currently we are not using a local test fixture setup based on ganache
    // but the actual mainnet deployment.
    //
    // NOTE: For other calls like e.g. Hub.name() we can actually check for
    // correctness because we can assume that the name of a fund at a given
    // address does not change.
    expect(result.getTime()).toBeLessThan(Date.now());
  });

  it('should return the quote token', async () => {
    const result = await source.getQuoteToken();
    const weth = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

    expect(sameAddress(weth, result)).toBe(true);
  });

  it('should return the price of a token pair', async () => {
    const zrx = '0xe41d2489571d322189246dafa5ebde1f4699f498';
    const result = await source.getPrice(zrx);

    expect(result.price.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the prices of token pairs', async () => {
    const zrx = '0xe41d2489571d322189246dafa5ebde1f4699f498';
    const mln = '0xec67005c4e498ec7f55e092bd1d35cbc47c91892';
    const result = await source.getPrices([zrx, mln]);

    expect(Object.keys(result).length).toBe(2);
  });

  it('should return whether the price of a token is valid', async () => {
    const zrx = '0xe41d2489571d322189246dafa5ebde1f4699f498';
    const result = await source.hasValidPrice(zrx);

    expect(result === true || result === false).toBe(true);
  });
});
