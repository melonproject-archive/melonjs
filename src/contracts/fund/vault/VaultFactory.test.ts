import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';

import { randomAddress } from '../../../utils/tests/randomAddress';
import { deployHub } from '../../../utils/tests/deployHub';
import { VaultFactory } from './VaultFactory';
import { VaultFactoryBytecode } from '../../../abis/VaultFactory.bin';

describe('VaultFactory', () => {
  let environment: TestEnvironment;
  let vaultFactory: VaultFactory;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = VaultFactory.deploy(environment, VaultFactoryBytecode, environment.accounts[0]);
    vaultFactory = await deploy.send(await deploy.estimate());
  });

  it('should check if a contract is an instance of the VaultFactory', async () => {
    const result = await vaultFactory.isInstance(randomAddress());
    expect(typeof result).toBe('boolean');
  });

  it('should create an instance of a Vault contract', async () => {
    const hub = await deployHub(environment, environment.accounts[0], {
      name: 'vault-test-fund',
      manager: environment.accounts[0],
    });

    const tx = vaultFactory.createInstance(environment.accounts[0], hub.contract.address);

    const txResult = await tx.send(await tx.estimate());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    expect(txResult.status).toBe(true);
  });
});
