import BigNumber from 'bignumber.js';
import { Trading } from './Trading';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployHub } from '../../../utils/tests/deployHub';
import { deployTrading } from '../../../utils/tests/deployTrading';
import { deployRegistry } from '../../../utils/tests/deployRegistry';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { Weth } from '../../dependencies/token/Weth';
import { deployWeth } from '../../../utils/tests/deployWeth';
import { Registry } from '../../version/Registry';
import { ExchangeNotRegisteredWithFundError } from './Trading.errors';
import { KyberTradingAdapter } from './exchanges/KyberTradingAdapter';
import { ExchangeAdapterAbi } from '../../../abis/ExchangeAdapter.abi';
import { encodeFunctionSignature } from '../../../utils/encodeFunctionSignature';

describe('Trading', () => {
  const exchangeAddress = randomAddress();
  let environment: TestEnvironment;
  let trading: Trading;
  let weth: Weth;
  let registry: Registry;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const hub = await deployHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'trading-test-fund',
    });

    weth = await deployWeth(environment, environment.accounts[0]);
    const adapterAddress = randomAddress();
    registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);
    {
      const tx = registry.registerExchangeAdapter(environment.accounts[0], {
        exchangeAddress,
        adapterAddress,
        takesCustody: true,
        sigs: [
          encodeFunctionSignature(ExchangeAdapterAbi, 'makeOrder'),
          encodeFunctionSignature(ExchangeAdapterAbi, 'takeOrder'),
        ],
      });

      await tx.send(await tx.prepare());
    }

    {
      const tx = await registry.registerAsset(environment.accounts[0], {
        address: weth.contract.address,
        name: 'Test Asset',
        symbol: 'TAT',
        url: 'https://tat.tat/',
        reserveMin: new BigNumber(100000),
        standards: [1, 2, 3],
        sigs: [
          encodeFunctionSignature(ExchangeAdapterAbi, 'makeOrder'),
          encodeFunctionSignature(ExchangeAdapterAbi, 'takeOrder'),
        ],
      });
      await tx.send(await tx.prepare());
    }

    trading = await deployTrading(environment, environment.accounts[0], {
      hub: hub.contract.address,
      exchanges: [exchangeAddress],
      adapters: [adapterAddress],
      registry: registry.contract.address,
    });
  });

  it('should return the correct exchange info for all exchanges', async () => {
    const result = await trading.getExchangeInfo();

    result.forEach(item => {
      expect(typeof item.takesCustody).toBe('boolean');
      expect(item.exchange.startsWith('0x')).toBe(true);
      expect(item.adapter.startsWith('0x')).toBe(true);
    });
  });

  it('should return the correct exchange for a single exchange', async () => {
    const result = await trading.getExchange(0);

    expect(typeof result.takesCustody).toBe('boolean');
    expect(result.exchange.startsWith('0x')).toBe(true);
    expect(result.adapter.startsWith('0x')).toBe(true);
  });

  it('should return on open make order object', async () => {
    const result = await trading.getOpenMakeOrder(exchangeAddress, weth.contract.address);
    expect(result).toMatchObject({
      id: expect.any(BigNumber),
      expiresAt: expect.any(Date),
      orderIndex: expect.any(BigNumber),
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

  it('should throw when passing a wrong address for Kyber', async () => {
    await expect(KyberTradingAdapter.create(environment, randomAddress(), trading)).rejects.toThrowError(
      ExchangeNotRegisteredWithFundError,
    );
  });
});
