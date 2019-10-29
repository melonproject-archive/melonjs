import { TestEnvironment, createTestEnvironment } from '../utils/tests/createTestEnvironment';
import { deployManagementFee } from '../utils/tests/deployManagementFee';
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
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });
});
