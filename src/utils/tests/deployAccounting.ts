import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';
import { AccountingDeployArguments, Accounting } from '../../contracts/fund/accounting/Accounting';
import { AccountingBytecode } from '../../abis/Accounting.bin';

export async function deployAccounting(
  environment: TestEnvironment,
  creator: Address,
  args: AccountingDeployArguments,
) {
  const deploy = Accounting.deploy(environment, AccountingBytecode, creator, args);

  const out = await deploy.send(await deploy.prepare());
  return out;
}
