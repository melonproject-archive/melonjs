import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import { UserWhitelist } from './UserWhitelist';

describe('UserWhitelist', () => {
  let environment: Environment;
  let userWhiteList: UserWhitelist;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    userWhiteList = new UserWhitelist(environment, '0xe69d387c3fe14cdc0bea1b589515cd33837e0705');
  });

  it('should check whether a user is whitelisted', async () => {
    const result = await userWhiteList.isWhitelisted('0x036ca8b5bb89533fd06e0a35b9da10213da98d88');
    expect(result === true || result === false).toBe(true);
  });

  it('should return the correct identifier', async () => {
    const result = await userWhiteList.getIdentifier();
    expect(result).toBe('UserWhitelist');
  });
});
