import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { Accounting } from './Accounting';

describe('Accounting', () => {
  let environment: Environment;
  let accounting: Accounting;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    accounting = new Accounting(environment, '0x1b66598123fefb8759340d4ea6e4b070c4fc4315');
  });

  it('should return the calculations', async () => {
    const result = await accounting.performCalculations();
    expect(result).toHaveProperty('sharePrice');
    // expect(result.sharePrice).toBeGreaterThan(1000000);
  });
});
