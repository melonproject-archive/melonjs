import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';

import { randomAddress } from '../../../utils/tests/randomAddress';
import { deployHub } from '../../../utils/tests/deployHub';
import { SharesFactory } from './SharesFactory';
import { SharesFactoryBytecode } from '../../../abis/SharesFactory.bin';

describe('SharesFactory', () => {
  let environment: TestEnvironment;
  let sharesFactory: SharesFactory;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = SharesFactory.deploy(environment, SharesFactoryBytecode, environment.accounts[0]);
    sharesFactory = await deploy.send(await deploy.estimateGas());
  });

  it('should check if a contract is an instance of the SharesFactory', async () => {
    const result = await sharesFactory.isInstance(randomAddress());
    expect(typeof result).toBe('boolean');
  });

  it('should create an instance of a Shares contract', async () => {
    const hub = await deployHub(environment, environment.accounts[0], {
      name: 'shares-test-fund',
      manager: environment.accounts[0],
    });

    const tx = sharesFactory.createInstance(environment.accounts[0], hub.contract.address);

    const txResult = await tx.send(await tx.estimateGas());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    expect(txResult.status).toBe(true);
  });
});
