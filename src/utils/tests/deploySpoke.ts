import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';
import { Spoke } from '../../contracts/fund/hub/Spoke';
import { SpokeBytecode } from '../../abis/Spoke.bin';

export async function deploySpoke(environment: TestEnvironment, creator: Address, hub: Address) {
  const deploy = Spoke.deploy(environment, SpokeBytecode, creator, hub);
  return await deploy.send(await deploy.prepare());
}
