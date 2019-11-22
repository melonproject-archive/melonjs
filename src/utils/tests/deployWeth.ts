import { Address } from '../../Address';
import { Weth } from '../../contracts/dependencies/token/Weth';
import { WETHBytecode } from '../../abis/WETH.bin';
import { TestEnvironment } from './createTestEnvironment';

export async function deployWeth(environment: TestEnvironment, creator: Address) {
  const deploy = Weth.deploy(environment, WETHBytecode, creator);
  return await deploy.send(await deploy.prepare());
}
