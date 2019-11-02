import { TestEnvironment, createTestEnvironment } from '../../utils/tests/createTestEnvironment';
import { StandardToken } from './StandardToken';
import { StandardTokenBytecode } from '../../abis/StandardToken.bin';

describe('StandardToken', () => {
  let environment: TestEnvironment;
  let standardToken: StandardToken;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const deploy = StandardToken.deploy(environment, StandardTokenBytecode, environment.accounts[0]);
    standardToken = await deploy.send(await deploy.estimateGas());
  });

  it('should return balance of the token', async () => {
    const result = await standardToken.getTotalSupply();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });
});
