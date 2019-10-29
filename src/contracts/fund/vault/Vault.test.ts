import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { Hub } from '../hub/Hub';
import { Vault } from './Vault';
import { createHub } from '../../../utils/tests/createHub';
import { createVault } from '../../../utils/tests/createVault';

describe('Vault', () => {
  let environment: TestEnvironment;
  let vault: Vault;
  let hub: Hub;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    hub = await createHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'vault-test-fund-1',
    });

    vault = await createVault(environment, environment.accounts[0], hub.contract.address);
  });

  it('should return the version contract address', async () => {
    const result = await vault.getVersion();
    expect(result.startsWith('0x')).toBe(true);
  });
});
