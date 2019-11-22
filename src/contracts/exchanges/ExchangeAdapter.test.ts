import { createTestEnvironment, TestEnvironment } from '../../utils/tests/createTestEnvironment';

import { ExchangeAdapter } from './ExchangeAdapter';
import { ExchangeAdapterBytecode } from '../../abis/ExchangeAdapter.bin';

describe('ExchangeAdapter', () => {
  let environment: TestEnvironment;
  let exchangeAdapter: ExchangeAdapter;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = ExchangeAdapter.deploy(environment, ExchangeAdapterBytecode, environment.accounts[0]);
    exchangeAdapter = await deploy.send(await deploy.prepare());
  });

  it('should check if the exchange adapter has an address', async () => {
    const result = exchangeAdapter.contract.address;
    expect(result.startsWith('0x')).toBe(true);
  });
});
