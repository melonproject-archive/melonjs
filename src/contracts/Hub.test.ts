import { Hub, HubRoutes } from './Hub';
import { HubBytecode } from '../abis/Hub.bin';
import { sameAddress } from '../utils/sameAddress';
import { createTestEnvironment, TestEnvironment } from '../utils/createTestEnvironment';

describe('Hub', () => {
  let hub: Hub;
  let routes: HubRoutes;
  let environment: TestEnvironment;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const contract = Hub.deploy(environment, HubBytecode, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'test-fund-1',
    });

    hub = await contract.send(await contract.estimate());
  });

  it('should return the correct fund name', async () => {
    const result = await hub.getName();
    expect(result).toBe('test-fund-1');
  });

  it('should return the correct manager address', async () => {
    const result = await hub.getManager();
    expect(sameAddress(result, environment.accounts[1])).toBe(true);
  });

  it('should return the creation time', async () => {
    const result = await hub.getCreationTime();
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeLessThan(Date.now());
  });

  it('should return the routes', async () => {
    routes = await hub.getRoutes();
    expect(routes).toMatchObject<HubRoutes>({
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

  it('should return the address of the creator', async () => {
    const result = await hub.getCreator();
    expect(sameAddress(result, environment.accounts[0])).toBe(true);
  });

  it('should return whether or not a fund is shutdown', async () => {
    const result = await hub.isShutDown();
    expect(result === true || result === false).toBe(true);
  });
});
