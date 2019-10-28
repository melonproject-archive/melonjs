import { Hub, HubRoutes } from './Hub';
import { HubBytecode } from '../abis/Hub.bin';
import { sameAddress } from '../utils/sameAddress';
import { createTestEnvironment, TestEnvironment } from '../utils/createTestEnvironment';
import { randomAddress } from '../utils/randomAddress';

describe('Hub', () => {
  let hub: Hub;
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
    const input: HubRoutes = {
      accounting: randomAddress(),
      engine: randomAddress(),
      feeManager: randomAddress(),
      mlnToken: randomAddress(),
      participation: randomAddress(),
      policyManager: randomAddress(),
      priceSource: randomAddress(),
      registry: randomAddress(),
      shares: randomAddress(),
      trading: randomAddress(),
      vault: randomAddress(),
      version: randomAddress(),
    };

    const tx = hub.setSpokes(environment.accounts[0], input);
    await tx.send(await tx.estimate());

    const output = await hub.getRoutes();
    expect(sameAddress(input.accounting, output.accounting)).toBe(true);
    expect(sameAddress(input.engine, output.engine)).toBe(true);
    expect(sameAddress(input.feeManager, output.feeManager)).toBe(true);
    expect(sameAddress(input.mlnToken, output.mlnToken)).toBe(true);
    expect(sameAddress(input.participation, output.participation)).toBe(true);
    expect(sameAddress(input.policyManager, output.policyManager)).toBe(true);
    expect(sameAddress(input.priceSource, output.priceSource)).toBe(true);
    expect(sameAddress(input.registry, output.registry)).toBe(true);
    expect(sameAddress(input.shares, output.shares)).toBe(true);
    expect(sameAddress(input.trading, output.trading)).toBe(true);
    expect(sameAddress(input.vault, output.vault)).toBe(true);
    expect(sameAddress(input.version, output.version)).toBe(true);
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
