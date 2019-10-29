import { Hub, HubRoutes } from './Hub';
import { HubBytecode } from '../abis/Hub.bin';
import { sameAddress } from '../utils/sameAddress';
import { createTestEnvironment, TestEnvironment } from '../utils/createTestEnvironment';
import { randomAddress } from '../utils/randomAddress';

describe('Hub', () => {
  let hub: Hub;
  let environment: TestEnvironment;
  let hubRoutes: HubRoutes;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    hubRoutes = {
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

  it('should check that the spokes are not yet set', async () => {
    const result = await hub.isSpokesSet();
    expect(result).toBe(false);
  });

  it('should set the spokes', async () => {
    const tx = hub.setSpokes(environment.accounts[0], hubRoutes);
    const txResult = await tx.send(await tx.estimate());

    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
  });

  it('should check that the spokes are set', async () => {
    const result = await hub.isSpokesSet();
    expect(result).toBe(true);
  });

  it('should set the routing', async () => {
    const tx = hub.setRouting(environment.accounts[0]);
    const txResult = await tx.send(await tx.estimate());

    console.log(txResult);
  });

  it('should return the routes', async () => {
    const output = await hub.getRoutes();
    expect(sameAddress(hubRoutes.accounting, output.accounting)).toBe(true);
    expect(sameAddress(hubRoutes.engine, output.engine)).toBe(true);
    expect(sameAddress(hubRoutes.feeManager, output.feeManager)).toBe(true);
    expect(sameAddress(hubRoutes.mlnToken, output.mlnToken)).toBe(true);
    expect(sameAddress(hubRoutes.participation, output.participation)).toBe(true);
    expect(sameAddress(hubRoutes.policyManager, output.policyManager)).toBe(true);
    expect(sameAddress(hubRoutes.priceSource, output.priceSource)).toBe(true);
    expect(sameAddress(hubRoutes.registry, output.registry)).toBe(true);
    expect(sameAddress(hubRoutes.shares, output.shares)).toBe(true);
    expect(sameAddress(hubRoutes.trading, output.trading)).toBe(true);
    expect(sameAddress(hubRoutes.vault, output.vault)).toBe(true);
    expect(sameAddress(hubRoutes.version, output.version)).toBe(true);
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
