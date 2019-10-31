import { Registry } from './Registry';
import { TestEnvironment, createTestEnvironment } from '../../utils/tests/createTestEnvironment';
import { deployRegistry } from '../../utils/tests/deployRegistry';
import { randomAddress } from '../../utils/tests/randomAddress';

describe('Registry', () => {
  let environment: TestEnvironment;
  let registry: Registry;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);
  });

  it('should return the registered versions', async () => {
    const result = await registry.getRegisteredVersions();
    expect(result.length).toBeGreaterThanOrEqual(0);
  });

  it('should register fees and check if they were indeed registered', async () => {
    const [managementFeeAdress, performanceFeeAddress] = [randomAddress(), randomAddress()];

    const tx = await registry.registerFees(environment.accounts[0], [managementFeeAdress, performanceFeeAddress]);
    await tx.send(await tx.estimate());

    {
      const result = await registry.isFeeRegistered(managementFeeAdress);
      expect(result).toBe(true);
    }

    {
      const result = await registry.isFeeRegistered(performanceFeeAddress);
      expect(result).toBe(true);
    }
  });
});
