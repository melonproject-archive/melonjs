import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import { Registry } from './Registry';

describe('Registry', () => {
  let environment: Environment;
  let registry: Registry;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    registry = new Registry(environment, '0x1Bfd21f7db126a5966d2C09492676807a68859Ba');
  });

  it('should return the information of a version', async () => {
    const result = await registry.getVersionInformation('0x01Bde0b02740D6311e4a87CA112DeEEddb057EFB');
    expect(result.exists).toBe(true);
    expect(result.name.startsWith('0x')).toBe(true);
  });

  it('should check if a fee was registered', async () => {
    const result = await registry.isFeeRegistered('0x67d8f29C6956e591Bc43C0DCc82b87D6A6Eb76e7');
    expect(result === true || result === false).toBe(true);
  });
});
