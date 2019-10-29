import { Hub, HubDeployArguments } from '../../contracts/Hub';
import { Address } from '../../Address';
import { HubBytecode } from '../../abis/Hub.bin';
import { TestEnvironment } from './createTestEnvironment';

export async function deployHub(environment: TestEnvironment, creator: Address, args: HubDeployArguments) {
  const deploy = Hub.deploy(environment, HubBytecode, creator, args);
  return await deploy.send(await deploy.estimate());
}
