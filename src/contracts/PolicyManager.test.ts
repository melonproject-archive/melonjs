import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { PolicyManager } from './PolicyManager';

describe('PolicyManager', () => {
  let environment: Environment;
  let policyManager: PolicyManager;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    policyManager = new PolicyManager(environment, '0xca10ef90f47bcc3ec90edb8bd5c3443cc63d4024');
  });

  it('should return the policies by signature', async () => {
    const result = await policyManager.getPoliciesBySignature('0x61346679');
    console.log(result);
  });
});
