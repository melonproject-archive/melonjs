import { Address } from '../../Address';
import { SharesBytecode } from '../../abis/Shares.bin';
import { Shares } from '../../contracts/fund/shares/Shares';
import { TestEnvironment } from './createTestEnvironment';

export async function deployShares(environment: TestEnvironment, creator: Address, hub: Address) {
  const deploy = Shares.deploy(environment, SharesBytecode, creator, hub);
  return await deploy.send(await deploy.prepare());
}
