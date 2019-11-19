import { PolicyManager } from './PolicyManager';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { PolicyManagerBytecode } from '../../../abis/PolicyManager.bin';
import { MaxPositionsBytecode } from '../../../abis/MaxPositions.bin';
import { MaxPositions } from './MaxPositions';
import { PermissiveAuthority } from '../../dependencies/authorization/PermissiveAuthority';
import { PermissiveAuthorityBytecode } from '../../../abis/PermissiveAuthority.bin';

describe('PolicyManager', () => {
  let environment: TestEnvironment;
  let policyManager: PolicyManager;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deployPermissiveAuthority = PermissiveAuthority.deploy(
      environment,
      PermissiveAuthorityBytecode,
      environment.accounts[0],
    );

    const permissiveAuthority = await deployPermissiveAuthority.send(await deployPermissiveAuthority.estimateGas());

    const deploy = PolicyManager.deploy(
      environment,
      PolicyManagerBytecode,
      environment.accounts[0],
      permissiveAuthority.contract.address, // instead of hub to prevent auth problems
    );

    policyManager = await deploy.send(await deploy.estimateGas());
  });

  it('should register a policy', async () => {
    const deploy = MaxPositions.deploy(environment, MaxPositionsBytecode, environment.accounts[0], 10);
    const maxPositions = await deploy.send(await deploy.estimateGas());

    const tx = policyManager.registerPolicy(environment.accounts[0], '0x61346679', maxPositions.contract.address);
    const txResult = await tx.send(await tx.estimateGas());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
  });

  it('should return the policies by signature', async () => {
    const result = await policyManager.getPoliciesBySignature('0x61346679');
    expect(result).toMatchObject({
      pre: expect.any(Array),
      post: expect.any(Array),
    });
  });
});
