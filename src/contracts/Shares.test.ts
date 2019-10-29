import { createTestEnvironment, TestEnvironment } from '../utils/tests/createTestEnvironment';
import { Shares } from './Shares';
import { Hub } from './Hub';
import { createHub } from '../utils/tests/createHub';
import { createShares } from '../utils/tests/createShares';

describe('Shares', () => {
  let environment: TestEnvironment;
  let shares: Shares;
  let hub: Hub;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    hub = await createHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'vault-test-fund',
    });

    shares = await createShares(environment, environment.accounts[0], hub.contract.address);
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
