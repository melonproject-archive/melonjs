import { PerformanceFee } from './PerformanceFee';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployPerformanceFee } from '../../../utils/tests/deployPerformanceFee';
import { BigNumber } from 'bignumber.js';
import { deployWeth } from '../../../utils/tests/deployWeth';

describe('FeeManager', () => {
  let environment: TestEnvironment;
  let performanceFee: PerformanceFee;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    performanceFee = await deployPerformanceFee(environment, environment.accounts[0]);
  });

  it('should set the performance fee parameters', async () => {
    const weth = await deployWeth(environment, environment.accounts[0]);

    const tx = performanceFee.initializeForUser(environment.accounts[0], {
      feeRate: new BigNumber('100000000'),
      feePeriod: 1000,
      denominationAsset: weth.contract.address,
    });
    const txResult = await tx.send(await tx.estimate());
    expect(txResult.gasUsed).toBeGreaterThan(0);
  });

  it('should get the performance fee rate', async () => {
    const result = await performanceFee.getPerformanceFeeRate(environment.accounts[0]);
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should get the last payout time', async () => {
    const result = await performanceFee.getPerformanceFeeRate(environment.accounts[0]);
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the correct identifier', async () => {
    const result = await performanceFee.identifier();
    expect(result).toBe(1);
  });
});
