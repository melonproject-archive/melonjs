import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { BurnableTokenBytecode } from '../../../abis/BurnableToken.bin';
import { BurnableToken } from './BurnableToken';

describe('BurnableToken', () => {
  let environment: TestEnvironment;
  let burnableToken: BurnableToken;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const deploy = BurnableToken.deploy(environment, BurnableTokenBytecode, environment.accounts[0], {
      symbol: 'BBB',
      decimals: 9,
      name: 'Burn baby burn',
    });
    burnableToken = await deploy.send(await deploy.estimateGas());
  });

  it('should return balance of the token', async () => {
    const result = await burnableToken.getTotalSupply();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the symbol of the token', async () => {
    const result = await burnableToken.getSymbol();
    expect(result).toBe('BBB');
  });
});
