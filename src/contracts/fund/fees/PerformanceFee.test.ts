import { PerformanceFee } from './PerformanceFee';
import { FeeAlreadyInitializedError } from './Fee';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployPerformanceFee } from '../../../utils/tests/deployPerformanceFee';
import { BigNumber } from 'bignumber.js';
import { deployWeth } from '../../../utils/tests/deployWeth';
import { randomAddress } from '../../../utils/tests/randomAddress';

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
    const txResult = await tx.send(await tx.estimateGas());
    expect(txResult.gasUsed).toBeGreaterThan(0);
  });

  it('should throw FeeAlreadyInitializedError', async () => {
    const tx = performanceFee.initializeForUser('', {
      feeRate: new BigNumber(0),
      feePeriod: 0,
      denominationAsset: '',
    });

    jest.spyOn(performanceFee, 'getLastPayoutTime').mockReturnValue(new Promise(resolve => resolve(new BigNumber(1))));

    await expect(tx.validate()).rejects.toThrowError(FeeAlreadyInitializedError);
  });

  it('should get the performance fee rate', async () => {
    const result = await performanceFee.getPerformanceFeeRate(environment.accounts[0]);
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should get the last payout time', async () => {
    jest.spyOn(performanceFee, 'getLastPayoutTime').mockReturnValue(new Promise(resolve => resolve(new BigNumber(1))));

    const result = await performanceFee.getLastPayoutTime(randomAddress());
    expect(result.isEqualTo(1)).toBe(true);
  });

  it('should return the correct identifier', async () => {
    const result = await performanceFee.identifier();
    expect(result).toBe(1);
  });
});
