import { createTestEnvironment, TestEnvironment } from '../../utils/tests/createTestEnvironment';

import { randomAddress } from '../../utils/tests/randomAddress';
import { FundFactoryBytecode } from '../../abis/FundFactory.bin';
import { FundFactory } from './FundFactory';

describe('FundFactory', () => {
  let environment: TestEnvironment;
  let fundFactory: FundFactory;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = FundFactory.deploy(environment, FundFactoryBytecode, environment.accounts[0], {
      accountingFactory: randomAddress(),
      feeManagerFactory: randomAddress(),
      participationFactory: randomAddress(),
      policyManagerFactory: randomAddress(),
      sharesFactory: randomAddress(),
      tradingFactory: randomAddress(),
      vaultFactory: randomAddress(),
      version: randomAddress(),
    });
    fundFactory = await deploy.send(await deploy.estimate());
  });

  it('should check if a contract is an instance of a factory', async () => {
    const result = fundFactory.contract.address;
    expect(result.startsWith('0x')).toBe(true);
  });
});
