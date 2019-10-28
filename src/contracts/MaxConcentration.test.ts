import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import { MaxConcentration } from './MaxConcentration';

describe('AddressList', () => {
  let environment: Environment;
  let maxConcentration: MaxConcentration;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    maxConcentration = new MaxConcentration(environment, '0x042fcadfe10396ff5d11791357161af71ca51865');
  });

  it('should return the price tolerance', async () => {
    const result = await maxConcentration.getMaxConcentration();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the correct identifier', async () => {
    const result = await maxConcentration.getIdentifier();
    expect(result).toBe('Max concentration');
  });
});
