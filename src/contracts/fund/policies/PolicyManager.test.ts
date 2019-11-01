import { PolicyManager } from './PolicyManager';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { PolicyManagerBytecode } from '../../../abis/PolicyManager.bin';
import { deployHub } from '../../../utils/tests/deployHub';

describe('PolicyManager', () => {
  let environment: TestEnvironment;
  let policyManager: PolicyManager;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const hub = await deployHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'policyManager-test-fund',
    });

    const deploy = PolicyManager.deploy(
      environment,
      PolicyManagerBytecode,
      environment.accounts[0],
      hub.contract.address,
    );

    policyManager = await deploy.send(await deploy.estimateGas());
  });

  it('should return the policies by signature', async () => {
    const result = await policyManager.getPoliciesBySignature('0x61346679');
    expect(result).toMatchObject({
      pre: expect.any(Array),
      post: expect.any(Array),
    });
  });
});
