import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';
import { TradingDeployArguments, Trading } from '../../contracts/fund/trading/Trading';
import { TradingBytecode } from '../../abis/Trading.bin';

export async function deployTrading(environment: TestEnvironment, creator: Address, args: TradingDeployArguments) {
  const deploy = Trading.deploy(environment, TradingBytecode, creator, args);

  return await deploy.send(await deploy.prepare());
}
