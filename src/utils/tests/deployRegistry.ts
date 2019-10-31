import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';
import { RegistryBytecode } from '../../abis/Registry.bin';
import { Registry } from '../../contracts/version/Registry';

export async function deployRegistry(environment: TestEnvironment, creator: Address, owner: Address) {
  const deploy = Registry.deploy(environment, RegistryBytecode, creator, owner);
  return await deploy.send(await deploy.estimate());
}
