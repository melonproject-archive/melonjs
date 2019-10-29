import { Hub, HubDeployArguments } from '../../contracts/fund/hub/Hub';
import { Address } from '../../Address';
import { HubBytecode } from '../../abis/Hub.bin';
import { TestEnvironment } from './createTestEnvironment';

export async function createHub(environment: TestEnvironment, creator: Address, args: HubDeployArguments) {
  const deploy = Hub.deploy(environment, HubBytecode, creator, args);
  return await deploy.send(await deploy.estimate());
}
