import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';

import { AccountingFactory } from './AccountingFactory';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { AccountingFactoryBytecode } from '../../../abis/AccountingFactory.bin';
import { deployHub } from '../../../utils/tests/deployHub';
import { deployWeth } from '../../../utils/tests/deployWeth';

describe('AccountingFactory', () => {
  let environment: TestEnvironment;
  let accountingFactory: AccountingFactory;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = AccountingFactory.deploy(environment, AccountingFactoryBytecode, environment.accounts[0]);

    accountingFactory = await deploy.send(await deploy.estimateGas());
  });

  it('should check if a contract is an instance of AccountingFactory', async () => {
    const result = await accountingFactory.isInstance(randomAddress());
    expect(typeof result).toBe('boolean');
  });

  it('should create an instance of an accounting contract', async () => {
    const hub = await deployHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'accounting-test-fund',
    });

    const weth = await deployWeth(environment, environment.accounts[0]);
    const tx = accountingFactory.createInstance(environment.accounts[0], {
      hub: hub.contract.address,
      denominationAsset: weth.contract.address,
      nativeAsset: weth.contract.address,
      defaultAssets: [weth.contract.address],
    });

    const txResult = await tx.send(await tx.estimateGas());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    expect(txResult.status).toBe(true);
  });
});
