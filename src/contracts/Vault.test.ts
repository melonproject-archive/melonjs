import { createTestEnvironment, TestEnvironment } from '../utils/createTestEnvironment';
import { Vault } from './Vault';
import { VaultBytecode } from '../abis/Vault.bin';
import { randomAddress } from '../utils/randomAddress';

describe('Vault', () => {
  let environment: TestEnvironment;
  let vault: Vault;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const deploy = Vault.deploy(environment, VaultBytecode, environment.accounts[0], {
      hub: randomAddress(),
    });

    vault = await deploy.send(await deploy.estimate());
  });

  it('should return the native asset', async () => {
    const result = await vault.getVersion();
    expect(result.startsWith('0x')).toBe(true);
  });
});
