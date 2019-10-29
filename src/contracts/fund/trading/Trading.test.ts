import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../../../Environment';
import { Trading } from './Trading';

describe('Trading', () => {
  let environment: Environment;
  let trading: Trading;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
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

  it('should return on open make order object', async () => {
    const result = await trading.getOpenMakeOrder(
      '0x39755357759ce0d7f32dc8dc45414cca409ae24e',
      '0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf',
    );
    expect(result).toMatchObject({
      id: expect.any(Number),
      expiresAt: expect.any(Date),
      orderIndex: expect.any(Number),
      buyAsset: expect.any(String),
    });
  });

  it('should check if an order is expired', async () => {
    const result = await trading.isOrderExpired(
      '0x39755357759ce0d7f32dc8dc45414cca409ae24e',
      '0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf',
    );
    expect(result === true || result === false).toBe(true);
  });
});
