import { Trading } from './Trading';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployHub } from '../../../utils/tests/deployHub';
import { deployTrading } from '../../../utils/tests/deployTrading';
import { deployRegistry } from '../../../utils/tests/deployRegistry';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { Weth } from '../../dependencies/token/Weth';
import { deployWeth } from '../../../utils/tests/deployWeth';
import BigNumber from 'bignumber.js';

describe('Trading', () => {
  const exchangeAddress = randomAddress();
  let environment: TestEnvironment;
  let trading: Trading;
  let weth: Weth;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const hub = await deployHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'trading-test-fund',
    });

    weth = await deployWeth(environment, environment.accounts[0]);
    const adapterAddress = randomAddress();
    const registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);
    const tx = registry.registerExchangeAdapter(environment.accounts[0], {
      exchangeAddress,
      adapterAddress,
      takesCustody: true,
      sigs: ['0000'],
    });

    await tx.send(await tx.prepare());

    trading = await deployTrading(environment, environment.accounts[0], {
      hub: hub.contract.address,
      exchanges: [exchangeAddress],
      adapters: [adapterAddress],
      registry: registry.contract.address,
    });
  });

  it('should return the correct exchange info map', async () => {
    const result = await trading.getExchangeInfo();
    const list = Object.values(result);

    list.forEach(item => {
      expect(typeof item.takesCustody).toBe('boolean');
      expect(item.exchange.startsWith('0x')).toBe(true);
      expect(item.adapter.startsWith('0x')).toBe(true);
    });
  });

  it('should return on open make order object', async () => {
    const result = await trading.getOpenMakeOrder(exchangeAddress, weth.contract.address);
    expect(result).toMatchObject({
      id: expect.any(Number),
      expiresAt: expect.any(Date),
      orderIndex: expect.any(Number),
      buyAsset: expect.any(String),
    });
  });

  it('should check if an order is expired', async () => {
    const result = await trading.isOrderExpired(exchangeAddress, weth.contract.address);
    expect(result === true || result === false).toBe(true);
  });

  it('should get the order lifespan', async () => {
    const result = await trading.getOrderLifespan();
    expect(result.isEqualTo(new BigNumber(86400))).toBe(true);
  });
});
