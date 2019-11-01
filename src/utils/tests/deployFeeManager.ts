import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';
import { FeeManagerDeployArguments, FeeManager } from '../../contracts/fund/fees/FeeManager';
import { FeeManagerBytecode } from '../../abis/FeeManager.bin';

export async function deployFeeManager(
  environment: TestEnvironment,
  creator: Address,
  args: FeeManagerDeployArguments,
) {
  const deploy = FeeManager.deploy(environment, FeeManagerBytecode, creator, args);

  return await deploy.send(await deploy.estimateGas());
}
