import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { Shares } from './Shares';

describe('Shares', () => {
  let environment: Environment;
  let shares: Shares;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    shares = new Shares(environment, '0x70958d69bd1a550b5f49d4d64d1c8bfa358558cd');
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
