import { createTestEnvironment, TestEnvironment } from '../../utils/tests/createTestEnvironment';

import { randomAddress } from '../../utils/tests/randomAddress';
import { Factory } from './Factory';
import { FactoryBytecode } from '../../abis/Factory.bin';

describe('Factory', () => {
  let environment: TestEnvironment;
  let factory: Factory;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = Factory.deploy(environment, FactoryBytecode, environment.accounts[0]);
    factory = await deploy.send(await deploy.prepare());
  });

  it('should check if a contract is an instance of a factory', async () => {
    const result = await factory.isInstance(randomAddress());
    expect(typeof result).toBe('boolean');
  });
});
