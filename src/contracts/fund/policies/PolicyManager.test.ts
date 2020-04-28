import { PolicyManager } from './PolicyManager';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { PolicyManagerBytecode } from '../../../abis/PolicyManager.bin';
import { MaxPositionsBytecode } from '../../../abis/MaxPositions.bin';
import { MaxPositions } from './MaxPositions';
import { PermissiveAuthority } from '../../dependencies/authorization/PermissiveAuthority';
import { PermissiveAuthorityBytecode } from '../../../abis/PermissiveAuthority.bin';
import { MaxConcentration } from './MaxConcentration';
import { MaxConcentrationBytecode } from '../../../abis/MaxConcentration.bin';
import BigNumber from 'bignumber.js';
import { availablePolicies } from '../../../utils/availablePolicies';

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

    const permissiveAuthority = await deployPermissiveAuthority.send(await deployPermissiveAuthority.prepare());

    const deploy = PolicyManager.deploy(
      environment,
      PolicyManagerBytecode,
      environment.accounts[0],
      permissiveAuthority.contract.address, // instead of hub to prevent auth problems
    );

    policyManager = await deploy.send(await deploy.prepare());
  });

  it('should register a policy', async () => {
    const deploy = MaxPositions.deploy(environment, MaxPositionsBytecode, environment.accounts[0], 10);
    const maxPositions = await deploy.send(await deploy.prepare());

    const tx = policyManager.registerPolicy(environment.accounts[0], '0x61346679', maxPositions.contract.address);
    const txResult = await tx.send(await tx.prepare());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
  });

  it('should return the policies by signature', async () => {
    const result = await policyManager.getPoliciesBySignature('0x61346679');
    expect(result).toMatchObject({
      pre: expect.any(Array),
      post: expect.any(Array),
    });
  });

  it('should batch register several policies', async () => {
    const deployMaxPositions = MaxPositions.deploy(environment, MaxPositionsBytecode, environment.accounts[0], 10);
    const maxPositions = await deployMaxPositions.send(await deployMaxPositions.prepare());

    const deployMaxConcentration = MaxConcentration.deploy(
      environment,
      MaxConcentrationBytecode,
      environment.accounts[0],
      new BigNumber('100000000000000000'),
    );
    const maxConcentration = await deployMaxConcentration.send(await deployMaxConcentration.prepare());

    const tx = policyManager.batchRegisterPolicies(
      environment.accounts[0],
      ['0x61346679', '0x61346679'],
      [maxPositions.contract.address, maxConcentration.contract.address],
    );
    const txResult = await tx.send(await tx.prepare());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
  });

  it.only('should load the available policies', async () => {
    const policies = availablePolicies();

    policies.forEach((policy) =>
      expect(policy).toMatchObject({
        id: expect.any(String),
        name: expect.any(String),
        signatures: expect.any(Array),
        historic: expect.any(Boolean),
      }),
    );
  });
});
