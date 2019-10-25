import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import { CanonicalPriceFeed, PriceInfo, PricesInfo } from './CanonicalPriceFeed';
import { Token } from './Token';
import deployment from '../deployments/mainnet';

describe('CanonicalPriceFeed', () => {
  let environment: Environment;
  let source: CanonicalPriceFeed;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    source = CanonicalPriceFeed.forDeployment(environment);
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
    const wethToken = Token.findDefinition(environment, 'WETH');
    expect(result).toEqual(wethToken);
  });

  it('should return the price of a token pair', async () => {
    const zrxToken = Token.findDefinition(environment, 'ZRX');
    const result: PriceInfo = await source.getPrice(zrxToken.address);

    expect(result.price.isGreaterThanOrEqualTo(0)).toBe(true);
    expect(result.quoteToken.symbol).toEqual('WETH');
    expect(result.baseToken.symbol).toEqual('ZRX');
  });

  it('should return the prices of token pairs', async () => {
    const zrxToken = Token.findDefinition(environment, 'ZRX');
    const mlnToken = Token.findDefinition(environment, 'MLN');
    const result: PricesInfo = await source.getPrices([zrxToken.address, mlnToken.address]);

    expect(Object.keys(result).length).toBe(2);
  });

  it('should return whether the price of a token is valid', async () => {
    const zrxToken = Token.findDefinition(environment, 'ZRX');
    const result = await source.hasValidPrice(zrxToken.address);
    expect(result == true || result == false).toBe(true);
  });
});
