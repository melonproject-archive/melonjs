import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../../../Environment';
import { AssetBlacklist } from './AssetBlacklist';

describe('AssetBlacklist', () => {
  let environment: Environment;
  let assetBlacklist: AssetBlacklist;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    assetBlacklist = new AssetBlacklist(environment, '0x9b113694b924108e21ffac925d406d6b496d074a');
  });

  it('should return the members of the blacklist', async () => {
    const result = await assetBlacklist.getMembers();
    result.map(address => {
      expect(address.startsWith('0x')).toBe(true);
    });
  });

  it('should return the correct identifier', async () => {
    const result = await assetBlacklist.getIdentifier();
    expect(result).toBe('Asset blacklist');
  });
});
