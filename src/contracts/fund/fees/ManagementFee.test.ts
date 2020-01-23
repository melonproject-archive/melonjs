import BigNumber from 'bignumber.js';
import { ManagementFee } from './ManagementFee';
import { FeeAlreadyInitializedError } from './IFee';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployManagementFee } from '../../../utils/tests/deployManagementFee';
import { randomAddress } from '../../../utils/tests/randomAddress';

describe('FeeManager', () => {
  let environment: TestEnvironment;
  let managementFee: ManagementFee;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    managementFee = await deployManagementFee(environment, environment.accounts[0]);
  });

  it('should set the management fee parameters', async () => {
    const tx = managementFee.initializeForUser(environment.accounts[0], {
      feeRate: new BigNumber('100000000'),
      feePeriod: 1000,
      denominationAsset: randomAddress(),
    });
    const txResult = await tx.send(await tx.prepare());
    expect(txResult.gasUsed).toBeGreaterThan(0);
  });

  it('should throw FeeAlreadyInitializedError', async () => {
    const tx = managementFee.initializeForUser('', {
      feeRate: new BigNumber(0),
      feePeriod: 0,
      denominationAsset: '',
    });

    jest.spyOn(managementFee, 'getLastPayoutTime').mockReturnValue(new Promise(resolve => resolve(new BigNumber(1))));

    await expect(tx.validate()).rejects.toThrowError(FeeAlreadyInitializedError);
  });

  it('should get the management fee rate', async () => {
    const result = await managementFee.getManagementFeeRate(environment.accounts[0]);
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should get the last payout time', async () => {
    const result = await managementFee.getLastPayoutTime(environment.accounts[0]);
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the correct identifier', async () => {
    const result = await managementFee.identifier();
    expect(result).toBe(0);
  });
});
