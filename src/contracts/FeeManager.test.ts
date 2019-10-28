import BigNumber from 'bignumber.js';
import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import { FeeManager, ManagementFeeInformation, PerformanceFeeInformation } from './FeeManager';

describe('FeeManager', () => {
  let environment: Environment;
  let feeManager: FeeManager;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    feeManager = new FeeManager(environment, '0x0a98adcc2e15ae6b77c1bfa30a1048597142d66c');
  });

  it('should return management fee contract address', async () => {
    const result = await feeManager.getManagementFeeAddress();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return management fee information', async () => {
    const result = await feeManager.getManagementFeeInformation();
    expect(result).toMatchObject<ManagementFeeInformation>({
      rate: expect.any(BigNumber),
    });
  });

  it('should return performance fee contract address', async () => {
    const result = await feeManager.getPerformanceFeeAddress();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return performance fee information', async () => {
    const result = await feeManager.getPerformanceFeeInformation();
    expect(result).toMatchObject<PerformanceFeeInformation>({
      rate: expect.any(BigNumber),
      period: expect.any(Number),
    });
  });
});
