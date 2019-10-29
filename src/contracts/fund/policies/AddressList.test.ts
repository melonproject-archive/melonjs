import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../../../Environment';
import { AddressList } from './AddressList';

describe('AddressList', () => {
  let environment: Environment;
  let addressList: AddressList;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    addressList = new AddressList(environment, '0x0a0ada038b2d4f29a9790a8c22903a1c654b9f8a');
  });

  it('should check if an address is member of an address list', async () => {
    const result = await addressList.isMember('0xE41d2489571d322189246DaFA5ebDe1F4699F498');
    expect(result === true || result === false).toBe(true);
  });

  it('should return a list of members', async () => {
    const result = await addressList.getMembers();
    result.map(address => {
      expect(address.startsWith('0x')).toBe(true);
    });
  });
});
