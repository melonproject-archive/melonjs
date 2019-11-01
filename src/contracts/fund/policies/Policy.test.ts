import { Policy } from './Policy';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { PolicyBytecode } from '../../../abis/Policy.bin';

describe('Policy', () => {
  let environment: TestEnvironment;
  let policy: Policy;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = Policy.deploy(environment, PolicyBytecode, environment.accounts[0]);
    policy = await deploy.send(await deploy.estimateGas());
  });

  it('should return the identifier of a policy', async () => {
    const result = await policy.getIdentifier();
    expect(result.length).toBeGreaterThan(0);
  });
});
