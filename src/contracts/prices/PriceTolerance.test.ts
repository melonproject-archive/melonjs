import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../../Environment';
import { PriceTolerance } from './PriceTolerance';

describe('AddressList', () => {
  let environment: Environment;
  let priceTolerance: PriceTolerance;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    priceTolerance = new PriceTolerance(environment, '0xde723fcc4a29400bae09ab341c914f4ba9b97e56');
  });

  it('should return the price tolerance', async () => {
    const result = await priceTolerance.getPriceTolerance();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });
});
