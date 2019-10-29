import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';
import { ManagementFee } from '../../contracts/fund/fees/ManagementFee';
import { ManagementFeeBytecode } from '../../abis/ManagementFee.bin';

export async function deployManagementFee(environment: TestEnvironment, creator: Address) {
  const deploy = ManagementFee.deploy(environment, ManagementFeeBytecode, creator);
  return await deploy.send(await deploy.estimate());
}
