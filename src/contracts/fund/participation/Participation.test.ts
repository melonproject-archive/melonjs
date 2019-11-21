import { Participation } from './Participation';
import BigNumber from 'bignumber.js';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployHub } from '../../../utils/tests/deployHub';
import { deployWeth } from '../../../utils/tests/deployWeth';
import { deployRegistry } from '../../../utils/tests/deployRegistry';
import { Registry } from '../../version/Registry';
import { deployParticipation } from '../../../utils/tests/deployParticipation';
import { Weth } from '../../dependencies/token/Weth';

describe('Participation', () => {
  let environment: TestEnvironment;
  let participation: Participation;
  let registry: Registry;
  let weth: Weth;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const hub = await deployHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'accounting-test-fund',
    });

    weth = await deployWeth(environment, environment.accounts[0]);

    registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);

    const tx = await registry.registerAsset(environment.accounts[0], {
      address: weth.contract.address,
      name: 'Test Asset',
      symbol: 'TAT',
      url: 'https://tat.tat/',
      reserveMin: new BigNumber(100000),
      standards: [1, 2, 3],
      sigs: ['0000'],
    });
    await tx.send(await tx.estimateGas());

    participation = await deployParticipation(environment, environment.accounts[0], {
      hub: hub.contract.address,
      defaultAssets: [weth.contract.address],
      registry: registry.contract.address,
    });
  });

  it('should return an array of investor addresses', async () => {
    const result = await participation.getHistoricalInvestors();
    expect(result.length).toBeGreaterThanOrEqual(0);
    result.forEach(investor => {
      expect(investor.startsWith('0x')).toBe(true);
    });
  });

  it('should return a request of an investor', async () => {
    const result = await participation.getRequest('0x8a2da4fc8c6854be3f754f8dddd37a2b9d69c8c2');
    expect(result).toMatchObject({
      investmentAsset: expect.any(String),
      investmentAmount: expect.any(BigNumber),
      requestedShares: expect.any(BigNumber),
      timestamp: expect.any(Date),
    });
  });

  it('should return whether an investor has a request', async () => {
    const result = await participation.hasRequest('0x8a2da4fc8c6854be3f754f8dddd37a2b9d69c8c2');
    expect(result === true || result === false).toBe(true);
  });

  // requires price source contract

  // it('should return whether an investor has a valid request', async () => {
  //   const result = await participation.hasValidRequest('0x8a2da4fc8c6854be3f754f8dddd37a2b9d69c8c2');
  //   expect(result === true || result === false).toBe(true);
  // });

  it('should return whether an investor has an expired request', async () => {
    const result = await participation.hasExpiredRequest('0x8a2da4fc8c6854be3f754f8dddd37a2b9d69c8c2');
    expect(result === true || result === false).toBe(true);
  });

  it('should return whether an investor has already invested', async () => {
    const result = await participation.hasInvested('0x8a2da4fc8c6854be3f754f8dddd37a2b9d69c8c2');
    expect(result === true || result === false).toBe(true);
  });

  it('should return whether an investment with a certain asset is allowed', async () => {
    const result = await participation.canInvestWithAsset('0xec67005c4e498ec7f55e092bd1d35cbc47c91892');
    expect(result === true || result === false).toBe(true);
  });
});
