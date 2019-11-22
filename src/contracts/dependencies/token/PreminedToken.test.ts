import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { PreminedToken } from './PreminedToken';
import { PreminedTokenBytecode } from '../../../abis/PreminedToken.bin';

describe('PreminedToken', () => {
  let environment: TestEnvironment;
  let preminedToken: PreminedToken;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const deploy = PreminedToken.deploy(environment, PreminedTokenBytecode, environment.accounts[0], {
      symbol: 'TTT',
      decimals: 12,
      name: 'Turbo Test Token',
    });
    preminedToken = await deploy.send(await deploy.prepare());
  });

  it('should return balance of the token', async () => {
    const result = await preminedToken.getTotalSupply();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the symbol of the token', async () => {
    const result = await preminedToken.getSymbol();
    expect(result).toBe('TTT');
  });
});
