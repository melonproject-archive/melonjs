import { Engine } from './Engine';
import { sameAddress } from '../../utils/sameAddress';
import { TestEnvironment, createTestEnvironment } from '../../utils/tests/createTestEnvironment';
import { deployRegistry } from '../../utils/tests/deployRegistry';
import { deployEngine } from '../../utils/tests/deployEngine';
import BigNumber from 'bignumber.js';
import { Registry } from '../version/Registry';

describe('Engine', () => {
  let environment: TestEnvironment;
  let engine: Engine;
  let registry: Registry;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);
    engine = await deployEngine(environment, environment.accounts[0], {
      delay: new BigNumber(1000000),
      registry: registry.contract.address,
    });
  });

  it('should return the amgu price', async () => {
    const result = await engine.getAmguPrice();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  // needs price source, so skipping for the moment

  // it('should set and return the engine price', async () => {
  //   const result = await engine.getEnginePrice();
  //   console.log(result);
  //   expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  // });

  it('should return the frozen ether', async () => {
    const result = await engine.getFrozenEther();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the liquid ether', async () => {
    const result = await engine.getLiquidEther();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the percentage premium', async () => {
    const result = await engine.getPremiumPercent();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the address of the registry', async () => {
    const result = await engine.getRegistry();
    expect(sameAddress(result, registry.contract.address)).toBe(true);
  });

  it('should return the total ether consumed', async () => {
    const result = await engine.getTotalEtherConsumed();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the total amgu consumed', async () => {
    const result = await engine.getTotalAmguConsumed();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the total MLN burned', async () => {
    const result = await engine.getTotalMlnBurned();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });
});
