import { ManagementFee } from './ManagementFee';
import { TestEnvironment, createTestEnvironment } from '../utils/tests/createTestEnvironment';
import { deployManagementFee } from '../utils/tests/deployManagementFee';

describe('FeeManager', () => {
  let environment: TestEnvironment;
  let managementFee: ManagementFee;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    managementFee = await deployManagementFee(environment, environment.accounts[0]);
  });

  // it('should return management fee rate', async () => {
  //   const result = await managementFee.getManagementFeeRate('0x0a98adcc2e15ae6b77c1bfa30a1048597142d66c');
  //   expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  // });

  it('should return the correct identifier', async () => {
    const result = await managementFee.identifier();
    expect(result.isEqualTo(0)).toBe(true);
  });
});
