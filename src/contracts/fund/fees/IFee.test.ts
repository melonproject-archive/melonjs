import BigNumber from 'bignumber.js';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployManagementFee } from '../../../utils/tests/deployManagementFee';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { IFee, FeeAlreadyInitializedError } from './IFee';

describe('FeeManager', () => {
  let environment: TestEnvironment;
  let fee: IFee;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    fee = await deployManagementFee(environment, environment.accounts[0]);
  });

  it('should return the correct identifier', async () => {
    const result = await fee.identifier();
    expect(result).toBeGreaterThanOrEqual(0);
  });

  it('should initialize the fees for a user', async () => {
    {
      const tx = fee.initializeForUser(environment.accounts[0], {
        feeRate: new BigNumber(1000),
        feePeriod: 1000,
        denominationAsset: randomAddress(),
      });
      const txResult = await tx.send(await tx.prepare());
      expect(txResult.gasUsed).toBeGreaterThan(0);
    }

    {
      const tx = fee.updateState(environment.accounts[0]);
      const txResult = await tx.send(await tx.prepare());
      expect(txResult.gasUsed).toBeGreaterThan(0);
    }
  });

  it('should throw FeeAlreadyInitializedError', async () => {
    const tx = fee.initializeForUser('', {
      feeRate: new BigNumber(0),
      feePeriod: 0,
      denominationAsset: '',
    });

    jest.spyOn(fee, 'getLastPayoutTime').mockReturnValue(new Promise(resolve => resolve(new BigNumber(1))));

    await expect(tx.validate()).rejects.toThrowError(FeeAlreadyInitializedError);
  });
});
