import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { PreminedToken } from './PreminedToken';
import { MaliciousToken } from './MaliciousToken';
import { MaliciousTokenBytecode } from '../../../abis/MaliciousToken.bin';

describe('MaliciousToken', () => {
  let environment: TestEnvironment;
  let maliciousToken: MaliciousToken;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const deploy = PreminedToken.deploy(environment, MaliciousTokenBytecode, environment.accounts[0], {
      symbol: 'MMM',
      decimals: 15,
      name: 'Malicous Monster Money',
    });
    maliciousToken = await deploy.send(await deploy.prepare());
  });

  it('should return balance of the token', async () => {
    const result = await maliciousToken.getTotalSupply();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the symbol of the token', async () => {
    const result = await maliciousToken.getSymbol();
    expect(result).toBe('MMM');
  });
});
