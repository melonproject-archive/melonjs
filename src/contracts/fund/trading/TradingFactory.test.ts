import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';

import { randomAddress } from '../../../utils/tests/randomAddress';
import { deployHub } from '../../../utils/tests/deployHub';
import { TradingFactory } from './TradingFactory';
import { TradingFactoryBytecode } from '../../../abis/TradingFactory.bin';
import { deployRegistry } from '../../../utils/tests/deployRegistry';

describe('TradingFactory', () => {
  let environment: TestEnvironment;
  let tradingFactory: TradingFactory;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = TradingFactory.deploy(environment, TradingFactoryBytecode, environment.accounts[0]);
    tradingFactory = await deploy.send(await deploy.prepare());
  });

  it('should check if a contract is an instance of TradingFactory', async () => {
    const result = await tradingFactory.isInstance(randomAddress());
    expect(typeof result).toBe('boolean');
  });

  it('should create an instance of a trading contract', async () => {
    const hub = await deployHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'trading-test-fund',
    });

    const exchangeAddress = randomAddress();
    const adapterAddress = randomAddress();
    const registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);

    const txExchangeAdapter = registry.registerExchangeAdapter(environment.accounts[0], {
      exchangeAddress,
      adapterAddress,
      takesCustody: true,
      sigs: ['0000'],
    });

    await txExchangeAdapter.send(await txExchangeAdapter.prepare());

    const tx = tradingFactory.createInstance(environment.accounts[0], {
      hub: hub.contract.address,
      exchanges: [exchangeAddress],
      adapters: [adapterAddress],
      registry: registry.contract.address,
    });

    const txResult = await tx.send(await tx.prepare());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    expect(txResult.status).toBe(true);
  });
});
