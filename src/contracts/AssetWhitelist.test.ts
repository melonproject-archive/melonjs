import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { AssetWhitelist } from './AssetWhitelist';

describe('AddressList', () => {
  let environment: Environment;
  let assetWhitelist: AssetWhitelist;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    assetWhitelist = new AssetWhitelist(environment, '0x0a0ada038b2d4f29a9790a8c22903a1c654b9f8a');
  });

  it('should return the index of an asset on the whitelist', async () => {
    const result = await assetWhitelist.getAssetIndex('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2');
    expect(result).toBeGreaterThanOrEqual(0);
  });

  it('should return the members of the whitelist', async () => {
    const result = await assetWhitelist.getMembers();
    result.map(address => {
      expect(address.startsWith('0x')).toBe(true);
    });
  });

  it('should return the correct identifier', async () => {
    const result = await assetWhitelist.getIdentifier();
    expect(result).toBe('Asset whitelist');
  });
});
