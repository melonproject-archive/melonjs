import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import { PriceSource } from '../contracts/PriceSource';
import deployment from '../deployments/mainnet';

describe('PriceSource', () => {
  let environment: Environment;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
  });

  it('should return the last price feed update as date object', async () => {
    const source = PriceSource.forDeployment(environment);
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
});
