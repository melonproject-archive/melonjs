import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { Participation } from './Participation';
import BigNumber from 'bignumber.js';

describe('Participation', () => {
  let environment: Environment;
  let participation: Participation;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    participation = new Participation(environment, '0x931a30d1989108b0dbf424b958a87e3ecb695b7d');
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

  it('should return whether an investor has a valid request', async () => {
    const result = await participation.hasValidRequest('0x8a2da4fc8c6854be3f754f8dddd37a2b9d69c8c2');
    expect(result === true || result === false).toBe(true);
  });

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
