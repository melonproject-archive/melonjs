import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { Hub, FundRoutes } from './Hub';
import { sameAddress } from '../utils/sameAddress';

describe('Hub', () => {
  let environment: Environment;
  let hub: Hub;
  let routes: FundRoutes;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    hub = new Hub(environment, '0x7362d4dd194cf5174748317da1e960723b78f28c');
  });

  it('should return the name as "miFund"', async () => {
    const result = await hub.name();
    expect(result).toBe('miFund');
  });

  it('should return the managers as "0x1e1c1ba503cc84b1bcf0151c68a8b5ddc90e4a2e"', async () => {
    const result = await hub.manager();
    expect(sameAddress(result, '0x1e1c1ba503cc84b1bcf0151c68a8b5ddc90e4a2e')).toBe(true);
  });

  it('should return the creation time', async () => {
    const result = await hub.creationTime();
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeLessThan(Date.now());
  });

  it('should return the routes', async () => {
    routes = await hub.routes();
    expect(routes).toMatchObject<FundRoutes>({
      accounting: expect.any(String),
      engine: expect.any(String),
      feeManager: expect.any(String),
      mlnToken: expect.any(String),
      participation: expect.any(String),
      policyManager: expect.any(String),
      priceSource: expect.any(String),
      registry: expect.any(String),
      shares: expect.any(String),
      trading: expect.any(String),
      vault: expect.any(String),
      version: expect.any(String),
    });
  });

  it('should return the version address as the creator', async () => {
    const result = await hub.creator();
    expect(result).toBe(routes.version);
  });
});
