import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import { Trading } from './Trading';
import deployment from '../deployments/mainnet';

describe('Trading', () => {
  let environment: Environment;
  let trading: Trading;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    trading = new Trading(environment, '0x02ebb9c97d81a622506e358fad9ac1a308c482cd');
  });

  it('should return the right exchange info map', async () => {
    const result = await trading.getExchangeInfo();
    const list = Object.values(result);

    list.forEach(item => {
      expect(typeof item.takesCustody).toBe('boolean');
      expect(item.exchange.startsWith('0x')).toBe(true);
      expect(item.adapter.startsWith('0x')).toBe(true);
    });
  });
});
