import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';
import { FeeManagerDeployArguments, FeeManager } from '../../contracts/fund/fees/FeeManager';
import { FeeManagerBytecode } from '../../abis/FeeManager.bin';

export async function deployFeeManager(
  environment: TestEnvironment,
  creator: Address,
  args: FeeManagerDeployArguments,
) {
  const deploy = FeeManager.deploy(environment, FeeManagerBytecode, creator, {
    hub: args.hub,
    denominationAsset: args.denominationAsset,
    fees: args.fees,
    rates: args.rates,
    periods: args.periods,
    registry: args.registry,
  });

  return await deploy.send(await deploy.estimate());
}
