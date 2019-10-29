import * as R from 'ramda';
import { Hub, HubRoutes } from './Hub';
import { HubBytecode } from '../abis/Hub.bin';
import { SpokeBytecode } from '../abis/Spoke.bin';
import { sameAddress } from '../utils/sameAddress';
import { createTestEnvironment, TestEnvironment } from '../utils/tests/createTestEnvironment';
import { randomAddress } from '../utils/tests/randomAddress';
import { Spoke } from './Spoke';

describe('Hub', () => {
  let hub: Hub;
  let environment: TestEnvironment;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const deploy = Hub.deploy(environment, HubBytecode, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'test-fund-1',
    });

    hub = await deploy.send(await deploy.estimate());
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

  it('should manage the hub routes properly', async () => {
    const spokes = await Promise.all(
      R.range(0, 7).map(async () => {
        const deploy = Spoke.deploy(environment, SpokeBytecode, environment.accounts[0], hub.contract.address);
        const spoke = await deploy.send(await deploy.estimate());
        return spoke.contract.address;
      }),
    );

    const routes: HubRoutes = {
      accounting: spokes[0],
      feeManager: spokes[1],
      participation: spokes[2],
      policyManager: spokes[3],
      shares: spokes[4],
      trading: spokes[5],
      vault: spokes[6],
      version: environment.accounts[0],
      engine: randomAddress(),
      registry: randomAddress(),
      mlnToken: randomAddress(),
      priceSource: randomAddress(),
    };

    {
      const tx = hub.setSpokes(environment.accounts[0], routes);
      const txResult = await tx.send(await tx.estimate());
      expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    }

    expect(await hub.isSpokesSet()).toBe(true);

    {
      const tx = hub.setRouting(environment.accounts[0]);
      const txResult = await tx.send(await tx.estimate());
      expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    }

    const output = await hub.getRoutes();
    expect(sameAddress(routes.accounting, output.accounting)).toBe(true);
    expect(sameAddress(routes.engine, output.engine)).toBe(true);
    expect(sameAddress(routes.feeManager, output.feeManager)).toBe(true);
    expect(sameAddress(routes.mlnToken, output.mlnToken)).toBe(true);
    expect(sameAddress(routes.participation, output.participation)).toBe(true);
    expect(sameAddress(routes.policyManager, output.policyManager)).toBe(true);
    expect(sameAddress(routes.priceSource, output.priceSource)).toBe(true);
    expect(sameAddress(routes.registry, output.registry)).toBe(true);
    expect(sameAddress(routes.shares, output.shares)).toBe(true);
    expect(sameAddress(routes.trading, output.trading)).toBe(true);
    expect(sameAddress(routes.vault, output.vault)).toBe(true);
    expect(sameAddress(routes.version, output.version)).toBe(true);

    {
      const tx = hub.setPermissions(environment.accounts[0]);
      const txResult = await tx.send(await tx.estimate());
      expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    }

    expect(await hub.isPermissionsSet()).toBe(true);
  });

  it('should return the address of the creator', async () => {
    const result = await hub.getCreator();
    expect(sameAddress(result, environment.accounts[0])).toBe(true);
  });

  it('should return whether or not a fund is shutdown', async () => {
    const result = await hub.isShutDown();
    expect(result === true || result === false).toBe(true);
  });

  it('should set the fund to shutdown', async () => {
    const tx = hub.setShutdown(environment.accounts[0]);
    const txResult = await tx.send(await tx.estimate());
    console.log(txResult);
  });
});
