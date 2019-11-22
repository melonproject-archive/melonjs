import { Vault } from '../../contracts/fund/vault/Vault';
import { VaultBytecode } from '../../abis/Vault.bin';
import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';

export async function deployVault(environment: TestEnvironment, creator: Address, hub: Address) {
  const deploy = Vault.deploy(environment, VaultBytecode, creator, hub);
  return await deploy.send(await deploy.prepare());
}
