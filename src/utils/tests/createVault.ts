import { Vault } from '../../contracts/Vault';
import { VaultBytecode } from '../../abis/Vault.bin';
import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';

export async function createVault(environment: TestEnvironment, creator: Address, hub: Address) {
  const deploy = Vault.deploy(environment, VaultBytecode, creator, hub);
  return await deploy.send(await deploy.estimate());
}
