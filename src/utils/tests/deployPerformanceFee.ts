import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';
import { PerformanceFee } from '../../contracts/PerformanceFee';
import { PerformanceFeeBytecode } from '../../abis/PerformanceFee.bin';

export async function deployPerformanceFee(environment: TestEnvironment, creator: Address) {
  const deploy = PerformanceFee.deploy(environment, PerformanceFeeBytecode, creator);
  return await deploy.send(await deploy.estimate());
}
