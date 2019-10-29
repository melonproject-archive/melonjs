import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import { ManagementFee } from './ManagementFee';

describe('FeeManager', () => {
  let environment: Environment;
  let managementFee: ManagementFee;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    managementFee = new ManagementFee(environment, '0x67d8f29C6956e591Bc43C0DCc82b87D6A6Eb76e7');
  });

  it('should return management fee rate', async () => {
    const result = await managementFee.getManagementFeeRate('0x0a98adcc2e15ae6b77c1bfa30a1048597142d66c');
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });
});
