import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';
import { EngineDeployArguments, Engine } from '../../contracts/engine/Engine';
import { EngineBytecode } from '../../abis/Engine.bin';

export async function deployEngine(environment: TestEnvironment, creator: Address, args: EngineDeployArguments) {
  const deploy = Engine.deploy(environment, EngineBytecode, creator, args);
  return await deploy.send(await deploy.estimateGas());
}
