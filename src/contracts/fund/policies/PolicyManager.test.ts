import { PolicyManager } from './PolicyManager';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { PolicyManagerBytecode } from '../../../abis/PolicyManager.bin';
import { deployHub } from '../../../utils/tests/deployHub';

import { Hub } from '../hub/Hub';

describe('PolicyManager', () => {
  let environment: TestEnvironment;
  let policyManager: PolicyManager;
  let hub: Hub;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    hub = await deployHub(environment, environment.accounts[0], {
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

  // it('should register a policy', async () => {
  //   const deploy = MaxPositions.deploy(environment, MaxPositionsBytecode, environment.accounts[0], 10);
  //   const maxPositions = await deploy.send(await deploy.estimateGas());

  //   need to call `setPermissions` on Hub to permit calling `registerPolicy` as the manager
  //   const tx = policyManager.registerPolicy(environment.accounts[1], '0x61346679', maxPositions.contract.address);
  //   const txResult = await tx.send(await tx.estimateGas());
  //   expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
  // });

  it('should return the policies by signature', async () => {
    const result = await policyManager.getPoliciesBySignature('0x61346679');
    expect(result).toMatchObject({
      pre: expect.any(Array),
      post: expect.any(Array),
    });
  });
});
