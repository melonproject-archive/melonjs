import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { Policy } from './Policy';

describe('Policy', () => {
  let environment: Environment;
  let policy: Policy;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    policy = new Policy(environment, '0x0a0ada038b2d4f29a9790a8c22903a1c654b9f8a');
  });

  it('should return the identifier of a policy', async () => {
    const result = await policy.getIdentifier();
    expect(result.length).toBeGreaterThan(0);
  });
});
