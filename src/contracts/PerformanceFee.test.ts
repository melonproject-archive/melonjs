import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { PerformanceFee } from './PerformanceFee';

describe('FeeManager', () => {
  let environment: Environment;
  let performanceFee: PerformanceFee;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    performanceFee = new PerformanceFee(environment, environment.deployment.melonContracts.fees.performanceFee);
  });

  it('should return performance fee rate', async () => {
    const result = await performanceFee.getPerformanceFeeRate('0x67d8f29C6956e591Bc43C0DCc82b87D6A6Eb76e7');
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });
});
