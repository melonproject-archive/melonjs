import BigNumber from 'bignumber.js';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployManagementFee } from '../../../utils/tests/deployManagementFee';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { Fee } from './Fee';

describe('FeeManager', () => {
  let environment: TestEnvironment;
  let fee: Fee;

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
      const txResult = await tx.send(await tx.estimate());
      expect(txResult.gasUsed).toBeGreaterThan(0);
    }

    {
      const tx = fee.updateState(environment.accounts[0]);
      const txResult = await tx.send(await tx.estimate());
      expect(txResult.gasUsed).toBeGreaterThan(0);
    }
  });
});
