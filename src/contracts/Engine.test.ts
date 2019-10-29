import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import { Engine } from './Engine';
import { sameAddress } from '../utils/sameAddress';

describe('Engine', () => {
  let environment: Environment;
  let engine: Engine;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    engine = new Engine(environment, '0x7CaEc96607c5c7190d63B5A650E7CE34472352f5');
  });

  it('should return the amgu price', async () => {
    const result = await engine.getAmguPrice();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the engine price', async () => {
    const result = await engine.getEnginePrice();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

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
    expect(sameAddress(result, '0x1Bfd21f7db126a5966d2C09492676807a68859Ba')).toBe(true);
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
