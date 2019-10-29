import { Shares } from './Shares';
import { createTestEnvironment, TestEnvironment } from '../utils/createTestEnvironment';
import { SharesBytecode } from '../abis/Shares.bin';
import { randomAddress } from '../utils/randomAddress';

describe('Shares', () => {
  let environment: TestEnvironment;
  let shares: Shares;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const deploy = Shares.deploy(environment, SharesBytecode, environment.accounts[0], {
      hub: randomAddress(),
    });

    shares = await deploy.send(await deploy.estimate());
  });

  it('should return the name for shares', async () => {
    const result = await shares.getName();
    expect(result.length).toBeGreaterThanOrEqual(0);
  });

  it('should return the symbol for shares', async () => {
    const result = await shares.getSymbol();
    expect(result).toBe('MLNF');
  });

  it('should return the decimals for shares', async () => {
    const result = await shares.getDecimals();
    expect(result).toBeGreaterThanOrEqual(0);
  });
});
