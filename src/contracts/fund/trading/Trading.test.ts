import { Trading, CallOnExchangeArgs } from './Trading';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployHub } from '../../../utils/tests/deployHub';
import { deployTrading } from '../../../utils/tests/deployTrading';
import { deployRegistry } from '../../../utils/tests/deployRegistry';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { Weth } from '../../dependencies/token/Weth';
import { deployWeth } from '../../../utils/tests/deployWeth';
import BigNumber from 'bignumber.js';
import { Registry } from '../../version/Registry';
import { zeroAddress } from '../../../utils/zeroAddress';
import { ExchangeNotRegisteredWithFundError, InsufficientBalanceError } from './Trading.errors';
import { KyberTradingAdapter } from './exchanges/KyberTradingAdapter';
import { functionSignature } from '../../../utils/functionSignature';
import { ExchangeAdapterAbi } from '../../../abis/ExchangeAdapter.abi';

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
        sigs: ['0x79705be7', '0xe51be6e8'],
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
        sigs: ['0x79705be7', '0xe51be6e8'],
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

  it('should pass the validation tests for callOnExchange', async () => {
    const callArgs = {
      exchangeIndex: 0,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'makeOrder'),
      orderAddresses: [
        zeroAddress,
        zeroAddress,
        weth.contract.address,
        weth.contract.address,
        zeroAddress,
        zeroAddress,
      ],
      orderValues: [
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
      ],
      identifier: 'anything',
      makerAssetData: '0x0',
      takerAssetData: '0x0',
      signature: '0x0',
    };

    const tx = trading.callOnExchange(environment.accounts[0], callArgs as CallOnExchangeArgs);
    await tx.validate();
    expect(tx.validate).not.toThrow();
  });

  it('should throw an insufficient balance error with Kyber', async () => {
    const callArgs = {
      makerAsset: weth.contract.address,
      takerAsset: weth.contract.address,
      makerQuantity: new BigNumber('1e18'),
      takerQuantity: new BigNumber('1e18'),
    };

    const kyber = await KyberTradingAdapter.create(trading, exchangeAddress);

    const tx = await kyber.takeOrder(environment.accounts[0], callArgs);
    await expect(tx.validate()).rejects.toThrowError(InsufficientBalanceError);
  });

  it('should throw when passing a wrong address for Kyber', async () => {
    await expect(KyberTradingAdapter.create(trading, randomAddress())).rejects.toThrowError(
      ExchangeNotRegisteredWithFundError,
    );
  });

  // it('should create an OasisDexTrading object', async () => {
  //   const oasisDexTrading = await OasisDexTrading.create(trading, exchangeAddress);
  // });
});
