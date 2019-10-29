import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import { PerformanceFee } from './PerformanceFee';

describe('FeeManager', () => {
  let environment: Environment;
  let performanceFee: PerformanceFee;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    performanceFee = new PerformanceFee(environment, '0xcc44FcFE13d4AeC61F1835Fb5F8ae7eBE06d42cD');
  });

  it('should return performance fee rate', async () => {
    const result = await performanceFee.getPerformanceFeeRate('0x0a98adcc2e15ae6b77c1bfa30a1048597142d66c');
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return performance fee period', async () => {
    const result = await performanceFee.getPerformanceFeePeriod('0x0a98adcc2e15ae6b77c1bfa30a1048597142d66c');
    expect(result).toBeGreaterThanOrEqual(0);
  });
});
