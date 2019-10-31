import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';
import { ParticipationDeployArguments, Participation } from '../../contracts/fund/participation/Participation';
import { ParticipationBytecode } from '../../abis/Participation.bin';

export async function deployParticipation(
  environment: TestEnvironment,
  creator: Address,
  args: ParticipationDeployArguments,
) {
  const deploy = Participation.deploy(environment, ParticipationBytecode, creator, args);

  return await deploy.send(await deploy.estimate());
}
