import { createTestEnvironment, TestEnvironment } from '../utils/tests/createTestEnvironment';
import { Hub } from './Hub';
import { Vault } from './Vault';
import { deployHub } from '../utils/tests/deployHub';
import { deployVault } from '../utils/tests/deployVault';

describe('Vault', () => {
  let environment: TestEnvironment;
  let vault: Vault;
  let hub: Hub;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    hub = await deployHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'vault-test-fund-1',
    });

    vault = await deployVault(environment, environment.accounts[0], hub.contract.address);
  });

  it('should return the version contract address', async () => {
    const result = await vault.getVersion();
    expect(result.startsWith('0x')).toBe(true);
  });
});
