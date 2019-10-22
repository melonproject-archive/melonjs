import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { Hub, FundRoutes } from './Hub';
import { toChecksumAddress } from 'web3-utils';

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
    expect(toChecksumAddress(result)).toBe(toChecksumAddress('0x1e1c1ba503cc84b1bcf0151c68a8b5ddc90e4a2e'));
  });

  it('should return the creation time', async () => {
    const result = await hub.creationTime();
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeLessThan(Date.now());
  });

  it('should return the routes', async () => {
    routes = await hub.routes();
    expect(routes).toHaveProperty('accounting');
    expect(routes).toHaveProperty('engine');
    expect(routes).toHaveProperty('feeManager');
    expect(routes).toHaveProperty('mlnToken');
    expect(routes).toHaveProperty('participation');
    expect(routes).toHaveProperty('policyManager');
    expect(routes).toHaveProperty('priceSource');
    expect(routes).toHaveProperty('registry');
    expect(routes).toHaveProperty('shares');
    expect(routes).toHaveProperty('trading');
    expect(routes).toHaveProperty('vault');
    expect(routes).toHaveProperty('version');
  });

  it('should return the version address as the creator', async () => {
    const result = await hub.creator();
    expect(result).toBe(routes.version);
  });
});
